<?php
/*
 * BOSS 自动派单运行服务实例
 * @author 张航 <zhanghang@1jiajie.com>
 * @author 张旭刚<zhangxugang@corp.1jiajie.com>
 * @link http://boss.1jiajie.com/auto-assign/
 * @copyright Copyright (c) 2015 E家洁 LLC
*/
define('DEBUG', 'on');
define("WEBPATH", str_replace("\\","/", __DIR__));
 
class server
{
    private $serv;
    private $tasks;
    private $data;
    private $ws;
    private $redis;
    private $ip = '0.0.0.0';
    private $port = 9501;
    private $isRun = true;
    //private $server;
 
    /**
     * [__construct description]
     * 构造方法中,初始化 $serv 服务
     */
    public function __construct() {
        $this->connectRedis();
        $this->saveStatus();
        $this->serv = new swoole_websocket_server($this->ip, $this->port);
        //初始化swoole服务
        $this->serv->set(array(
            'worker_num'  => 8,
            'daemonize'   => false,
            'max_request' => 1000,
            'log_file'    => './swoole.log',
            'task_worker_num' => 8
        ));

        //设置监听
        $this->serv->on('Start', array($this, 'onStart'));
        $this->serv->on('Connect', array($this, 'onConnect'));
        $this->serv->on("Close", array($this, 'onClose'));
        $this->serv->on("Task", array($this, 'onTask'));
        $this->serv->on("Finish", array($this, 'onFinish'));
        $this->serv->on("Message", array($this, 'onMessage'));

        //开启 
        $this->serv->start();
    }

    public function serverIP(){   
        $ss = exec('/sbin/ifconfig eth0 | sed -n \'s/^ *.*addr:\\([0-9.]\\{7,\\}\\) .*$/\\1/p\'',$arr);
        $ret = $arr[0];
        return $ret;
    }
    
    public function connectRedis(){
        $this->redis = new Redis();
        $this->redis->connect('101.200.179.70', '6379');
    }
    
    public function onOpen($server, $req) {
        echo "connection open: ".$req->fd;
        return true;
    }
    
    public function onStart($serv) {
        echo SWOOLE_VERSION . " onStart\n";
        return true;
    }
    
    public function getParams($ws){
        $data = explode(',', $ws->data);
        $d = array(
            'interval' => (int)$data[0],
            'taskName' => $data[1],
            'theadnum' => $data[2],
            'qstart' => $data[3],
            'qend' => $data[4],
            'jstart' => $data[5],
            'jend' => $data[6],
            'isRun' => $data[7],
        );
        $this->isRun = $d['isRun'];
        return $d;
    }
    
    function onMessage($server, $ws)
    {
        $data = $this->getParams($ws);
        $this->startTimer($server, $data, $ws);
        return;
    }
    
    public function startTimer($server,$data, $ws)
    {   
        $this->serv = $server;
        $this->data = $data;
        $this->ws = $ws;
        swoole_timer_add($data['interval']*1000, function ($interval) {
            if($this->isRun){
                $this->saveStatus();
                $this->processOrders($this->serv, $this->data, $this->ws);
            }
        });
    }
    
    public function saveStatus(){
        $key = '_SWOOLE_SOCKET_RUN_STATUS_';
        $d = array('ip' => $this->serverIP(), 'port' => $this->port, 'time' => time());
//        var_dump($d);
        $data = json_encode($d);
        $this->redis->set($key, $data);
    }
    
    public function processOrders($server, $data, $ws) {
//        echo 'Process Orders.\n';
        //取得订单启动任务foreach orders
        $orders = $this->getOrders();
        $count = count($orders);
        $n = 0;
        foreach($orders as $key => $order){
//            var_dump($order);
            $order = $this->getOrderStatus($order, $data);
//            echo "\n";
//            var_dump($order);
            
            $d = $order;
            $d['created_at'] = date('Y-m-d H:i:s', $d['created_at']);
            $d['updated_at'] = isset($d['updated_at']) ? date('Y-m-d H:i:s', $d['updated_at']) : '';
            $d = json_encode($d);
            echo 'start:'. $order['order_id']."\n";
            
            if(empty($server)){$server->push($ws->fd, $d);}
            $this->serv->task($order);
            $n++;
            if($n > $count){break;}
        }
    }
    
    public function getOrderStatus($order, $data){
        if(isset($order['updated_at'])){
            $qstart = $data['qstart'] * 60;
            $qend = $data['qend'] * 60;
            $time = time() - $order['created_at'];
            if($time > $qstart && $time <= 300){
                $order['status'] = '1';
            }
            if($time > $jstart && $time <= $jend){
                $order['status'] = '2';
            }else{
                $order['status'] = '1001';
            }
        }else{
            $jstart = $data['jstart'] * 60;
            $jend = $data['jend'] * 60;
            $time = time() - $order['created_at'];
            if($time > $jstart && $time <= $jend){
                $order['status'] = '2';
            }else{
                $order['status'] = '1001';
            }
        }
        return $order;
    }
    
    public function getOrders(){
        $orders = $this->redis->zrange('WaitAssignOrdersPool',0,-1);
        foreach($orders as $key => $value){
            $orders[$key] = (array)json_decode($value);
        }
        return (array)$orders;
    }
 
    public function onConnect($server, $fd) {
        echo $fd."Client Connect.\n";
        return true;
    }
    public function onClose($server, $fd) {
        echo "Client Close.\n";
    }
 
    public function onTask($server, $task_id, $from_id, $data) {
        return $this->taskOrder($data, $server);
    }
    
    public function taskOrder($data){
        $url = 'http://api.1jiajie.com/order/push/'.$data['order_id'];
        $d = file_get_contents($url);
        $data = (array)json_decode($d);
        return $data;
    }
 
    public function onFinish($server,$task_id, $data) {
        $data['created_at'] = date('Y-m-d H:i:s', $data['created_at']);
        $data['updated_at'] = isset($data['updated_at']) ? date('Y-m-d H:i:s', $data['updated_at']) : '';
        $d = json_encode($data);
        echo 'end'. $data['order_id']."\n";
        if(empty($server)){$server->push($this->ws->fd, $d);}
//        $this->broadcast($d);
    }
    
    public function broadcast($msg, $server)
    {
        $msg = json_encode($msg);
        foreach ($this->serv->connections as $clid => $info)
        {
//            if ($client_id != $clid)
//            {
                $this->serv->send($clid, $msg);
//            }
        }
    }
}
 
$server = new server();