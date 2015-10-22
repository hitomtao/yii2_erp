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
            'task_worker_num' => 8,
            
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
    
//    public function onOpen($server, $req) {
//        echo "connection open: ".$req->fd;
//        return true;
//    }
    
    public function onStart($server) {
        echo SWOOLE_VERSION . " onStart\n";
//        $data = array(
//            'interval' => 1000,
//            'taskName' => 'orders',
//            'theadnum' => 100,
//            'qstart' => 0,
//            'qend' => 5,
//            'jstart' => 5,
//            'jend' => 10,
//            'isRun' => true,
//        );
//        $this->startTimer($server, $data, '');
        //swoole_timer_add(1000, function($interval){echo 'timer_add';});
//        $this->serv->task('start_timer');
//        $this->onMessage($server,$ws);
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
//        $server->push($ws->fd, 'dfdfsdfs');
        $data = $this->getParams($ws);
        $this->startTimer($server, $data, $ws);
        return;
    }
    public function startTimer($server,$data, $ws)
    {   
        echo 'startTimer'."\n";
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
        echo 'saveStatus'."\n";
        $key = '_SWOOLE_SOCKET_RUN_STATUS_';
        $d = array('ip' => $this->serverIP(), 'port' => $this->port, 'time' => time());
//        var_dump($d);
        $data = json_encode($d);
        $this->redis->set($key, $data);
    }
    private $workerTaskIsRunning;
    public function processOrders($server, $data, $ws) {
//        echo 'Process Orders.\n';
        echo 'processOrders'."\n";
        if ($timerIsRunning)
        {
            return;
        }else{
            $workerTaskIsRunning = true;
        }
       
        //取得订单启动任务foreach orders
        $orders = $this->getOrders();
//        var_dump($orders);
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
            
            /*
             * TODO:
             * 需要判断订单的时间频率，而不是每次都去调API    -- by zhanghang
             * 
             * if 0-5分钟  call 推送全职
             * if 5-15分钟 call 推送兼职
             * if >15 分钟 call 人工指派
             */
//            var_dump($order);
//            if(!in_array($order['status'],array('1', '2'))){echo var_dump($order);;break;}
            
            echo 'start:'. $order['order_id']."\n";
            //进行推送
            if(!empty($ws)){$server->push($ws->fd, $d);}
            $this->serv->task($order);
            $n++;
            if($n > $count){break;}
        }
        $workerTaskIsRunning = false;
    }
    
    public function getOrderStatus($order, $data){
        echo 'getOrderStatus'."\n";
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
        echo 'start:'. $order['order_id']."\n";
        $orders = $this->redis->zrange('WaitAssignOrdersPool',0,-1);
        foreach($orders as $key => $value){
            if(isset($value['lock']) && $value['lock']){
                unset($orders[$key]);
                break;
            }
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
        echo 'onTask';
//        if($data == 'start_timer'){
//            swoole_timer_add(1000, function($interval){echo 'timer_add';});
//        }else{
            $this->lockOrder($data);//加入状态锁
            return $this->taskOrder($data, $server);
//        }
    }
    
    
    public function lockOrder($order){
        echo 'lockOrder';
        $order['lock'] = true;
        $this->redis->zadd($order);
    }
    
    public function taskOrder($data){
        echo 'taskOrder';
        $url = 'http://dev.api.1jiajie.com/order/push/'.$data['order_id'];
//        $url = 'http://api.me/order/push/'.$data['order_id'];
        $d = @file_get_contents($url);
        $data = (array)json_decode($d);
        var_dump($d);
        return $data;
    }
 
    public function onFinish($server,$task_id, $data) {
        $data['ivr'] = true;
        $data['sms'] = true;
        $data['jpush'] = true;
        
        $data['created_at'] = date('Y-m-d H:i:s', $data['created_at']);
        $data['updated_at'] = isset($data['updated_at']) ? date('Y-m-d H:i:s', $data['updated_at']) : '';
        $d = json_encode($data);
        var_dump($d);
        echo 'end:'. $data['order_id']."\n";
        if(empty($this->ws)){$server->push($this->ws->fd, $d);}
//        $this->broadcast($d);
    }
    
    public function broadcast($server, $msg)
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
