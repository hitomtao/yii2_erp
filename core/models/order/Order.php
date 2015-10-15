<?php
/**
 * Created by PhpStorm.
 * User: LinHongYou
 * Date: 2015/9/23
 * Time: 18:30
 */

namespace core\models\order;


use core\models\worker\Worker;
use Yii;
use Redis;
use common\models\Order as OrderModel;
use common\models\OrderStatusDict;
use common\models\OrderSrc;
use common\models\FinanceOrderChannel;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "{{%order}}".
 *
 * @property string $id
 * @property string $created_at
 * @property string $updated_at
 * @property string $order_code
 * @property string $order_parent_id
 * @property integer $order_is_parent
 * @property integer $order_before_status_dict_id
 * @property string $order_before_status_name
 * @property integer $order_status_dict_id
 * @property string $order_status_name
 * @property integer $order_flag_send
 * @property integer $order_flag_urgent
 * @property integer $order_flag_exception
 * @property integer $order_flag_sys_assign
 * @property integer $order_flag_lock
 * @property integer $order_ip
 * @property integer $order_service_type_id
 * @property string $order_service_type_name
 * @property integer $order_src_id
 * @property string $order_src_name
 * @property string $channel_id
 * @property string $order_channel_name
 * @property string $order_unit_money
 * @property string $order_money
 * @property string $order_booked_count
 * @property string $order_booked_begin_time
 * @property string $order_booked_end_time
 * @property string $address_id
 * @property string $order_address
 * @property string $order_booked_worker_id
 * @property string $order_pop_order_code
 * @property string $order_pop_group_buy_code
 * @property string $order_pop_operation_money
 * @property string $order_pop_order_money
 * @property string $order_pop_pay_money
 * @property string $customer_id
 * @property string $order_customer_phone
 * @property string $order_customer_need
 * @property string $order_customer_memo
 * @property string $comment_id
 * @property string $invoice_id
 * @property integer $order_customer_hidden
 * @property integer $order_pay_type
 * @property string $pay_channel_id
 * @property string $order_pay_channel_name
 * @property string $order_pay_flow_num
 * @property string $order_pay_money
 * @property string $order_use_acc_balance
 * @property string $card_id
 * @property string $order_use_card_money
 * @property string $coupon_id
 * @property string $order_use_coupon_money
 * @property string $promotion_id
 * @property string $order_use_promotion_money
 * @property string $worker_id
 * @property string $worker_type_id
 * @property string $order_worker_type_name
 * @property integer $order_worker_assign_type
 * @property string $shop_id
 * @property string $checking_id
 * @property string $order_cs_memo
 * @property string $admin_id
 */
class Order extends OrderModel
{

    /**
     * 创建新订单
     * @param $attributes [
     *  integer $order_ip 下单IP地址 必填
     *  integer $order_service_type_id 服务类型 商品id 必填
     *  string $order_service_type_name 商品名称 必填
     *  integer $order_src_id 订单来源id 必填
     *  string $channel_id 下单渠道 必填
     *  float $order_unit_money 单价 必填
     *  float $order_money 订单价格 必填
     *  int $order_booked_count 商品数量 分钟数 必填
     *  int $order_booked_begin_time 预约开始时间 必填
     *  int $order_booked_end_time 预约结束时间 必填
     *  int $address_id 客户地址id 必填
     *  string $order_address 客户地址 必填
     *  string $order_booked_worker_id 指定阿姨id
     *  string $order_pop_order_code 第三方订单号
     *  string $order_pop_group_buy_code 第三方团购号
     *  int $customer_id 客户id 必填
     *  string $order_customer_phone 客户手机号 必填
     *  string $order_customer_need 客户需求
     *  string $order_customer_memo 客户备注
     *  int $admin_id 操作人id 0客户 1系统
     * ]
     * @return bool
     */
    public function createNew($attributes)
    {
        $attributes['order_parent_id'] = 0;
        $attributes['order_is_parent'] = 0;
        return $this->_create($attributes);
    }

    /**
     * 追加新订单
     * @param $attributes
     * @return bool
     * TODO 追加订单默认是否使用主订单阿姨？
     */
    public function addNew($attributes)
    {
        if ($attributes['order_parent_id'] <= 0) {
            $this->addError('order_parent_id', '追加订单必须指定主订单ID！');
        } else {
            $attributes['order_is_parent'] = 1;
            return $this->_create($attributes);
        }
    }


    /**
     * 把订单放入订单池
     * @param $order_id
     */
    public static function addOrderToPool($order_id)
    {
        $order = Order::findById($order_id);
       //放入订单池 zset 根据预约开始时间+订单id排序
//        $redis = new Redis();
//        $redis->zAdd('WaitAssignOrdersPool',$order->order_booked_begin_time.$order_id,$order);

        //TODO 开始系统指派
        $order->admin_id=0;
        if(OrderStatus::sysAssignStart($order,[]))
        {
            //TODO 系统指派失败
            $order = Order::findOne($order_id);
            $order->admin_id=0;
            OrderStatus::sysAssignUndone($order,[]);
        }
    }


    /**
     * 人工指派失败
     * @param $order_id
     * @param $admin_id
     * @param bool $isCS
     * @return array|bool
     */
    public static function manualAssignUndone($order_id,$admin_id,$isCS = false)
    {
        $flag_send = $isCS?1:2;
        $order = Order::findOne($order_id);
        if($order->orderExtFlag->order_flag_send+$flag_send==3) //小家政和客服都无法指派出去
        {
            $order->order_flag_send = $order->orderExtFlag->order_flag_send+$flag_send; //标记是谁指派不了
            $order->order_flag_lock = 0;
            $order->admin_id = $admin_id;
            if(OrderStatus::manualAssignUndone($order,['OrderExtFlag'])){
                return true;
            }
        }else{//客服或小家政还没指派过则进入待人工指派的状态
            $order->order_flag_send = $order->orderExtFlag->order_flag_send+$flag_send;
            $order->order_flag_lock = 0;
            $order->admin_id = $admin_id;
            if(OrderStatus::sysAssignUndone($order,['OrderExtFlag'])){
                return true;
            }
        }
        return false;
    }

    /**
     * 人工指派成功
     * @param $order_id
     * @param $worker_id
     * @param $admin_id
     *  @param bool $isCS
     * @return bool
     * TODO 避免同一时间 给阿姨指派多个订单问题 需要处理
     */
    public static function manualAssignDone($order_id,$worker_id,$admin_id,$isCS = false)
    {
        $order = Order::findOne($order_id);
        $order->order_flag_lock = 0;
        $order->worker_id = $worker_id;
        $worker = Worker::getWorkerInfo($worker_id);
        $order->worker_type_id = $worker['worker_type'];
        $order->order_worker_type_name =  $worker['worker_type_description'];
        $order->shop_id = $worker["shop_id"];
        $order->order_worker_assign_type = $isCS?2:3; //2客服指派 3门店指派
        $order->admin_id = $admin_id;
        return OrderStatus::manualAssignDone($order,['OrderExtFlag','OrderExtWorker']);
    }

    /**
     * 创建订单
     * @param $attributes
     * @return bool
     */
    private function _create($attributes)
    {
        $this->setAttributes($attributes);
        $status_from = OrderStatusDict::findOne(OrderStatusDict::ORDER_INIT); //创建订单状态
        $status_to = OrderStatusDict::findOne(OrderStatusDict::ORDER_INIT); //初始化订单状态
        $order_count = OrderSearch::getCustomerOrderCount($this->customer_id); //该用户的订单数量
        $order_code = strlen($this->customer_id).$this->customer_id.strlen($order_count).$order_count ; //TODO 订单号待优化
        $this->setAttributes([
            //创建订单时优惠卷和服务卡都是初始状态
            'coupon_id' => 0,
            'order_use_coupon_money' => 0,
            'card_id' => 0,
            'order_use_card_money' => 0,
            //第三方支付
            'channel_id'=>0,
            'order_pop_group_buy_code'=>'',
            'order_pop_order_code'=>'',
            'order_pop_order_money'=>0,
            'order_pop_operation_money'=>0,
            //为以下数据赋初始值
            'order_code' => $order_code,
            'order_before_status_dict_id' => $status_from->id,
            'order_before_status_name' => $status_from->order_status_name,
            'order_status_dict_id' => $status_to->id,
            'order_status_name' => $status_to->order_status_name,
            'order_src_name' => $this->getOrderSrcName($this->order_src_id),
            'order_channel_name' => $this->getOrderChannelList($this->channel_id),
            'order_service_type_name' => $this->getServiceList($this->order_service_type_id),
            'order_flag_send' => 0, //'指派不了 0可指派 1客服指派不了 2小家政指派不了 3都指派不了',
            'order_flag_urgent' => 0,//加急 数字越大约紧急
            'order_flag_exception' => 0,//异常标识
            'order_flag_lock' => 0,
            'worker_id' => 0,
            'worker_type_id' => 0,
            'order_worker_send_type' => 0,
            'comment_id' => 0,
            'order_customer_hidden' => 0,
            'order_pop_pay_money' => 0,
            'shop_id' => 0,
            'order_worker_type_name' => '',
            'pay_channel_id' => 0,//支付渠道id
            'order_pay_channel_name' => '',//支付渠道
            'order_pay_flow_num' => '',//支付流水号
            'order_pay_money' => 0,//支付金额
            'invoice_id' => 0, //发票id 用户需求中有开发票就绑定发票id
            'checking_id' => 0,
            'isdel' => 0,
        ]);

        if ($this->doSave()) {
            //订单创建成功绑定添加到订单池的事件 支付成功后触发
            Yii::$app->on('addOrderToPool', function ($event) {
                Order::addOrderToPool($event->sender->id);
            });
            return true;
        }
        return false;
    }



    /**
     * 获取订单来源名称
     * @param $id
     * @return string
     */
    public function getOrderSrcName($id)
    {
        return OrderSrc::findOne($id)->order_src_name;
    }

    /**
     * 获取订单渠道
     * @param int $channel_id
     * @return array|bool
     */
    public function getOrderChannelList($channel_id = 0)
    {
        $list = FinanceOrderChannel::get_order_channel_list();
        $channel = ArrayHelper::map($list,'id','finance_order_channel_name');
        return $channel_id == 0 ? $channel : (isset($channel[$channel_id]) ? $channel[$channel_id] : false);
    }

    /**
     * 获取服务
     * @param int $service_id
     * @return array|bool
     */
    public function getServiceList($service_id = 0)
    {
        $service = [1 => '家庭保洁', 2 => '新居开荒', 3 => '擦玻璃'];
        return $service_id == 0 ? $service : (isset($service[$service_id]) ? $service[$service_id] : false);
    }

    /**
     * 获取优惠券
     * @param $id
     * @return mixed
     */
    public function getCouponById($id)
    {
        $coupon = [
            1 => [
                "id" => 1,
                "coupon_name" => "优惠券30",
                "coupon_money" => 30
            ],
            2 => [
                "id" => 2,
                "coupon_name" => "优惠券30",
                "coupon_money" => 30
            ],
            3 => [
                "id" => 3,
                "coupon_name" => "优惠券30",
                "coupon_money" => 30
            ]
        ];
        return $coupon[$id];
    }

    /**
     * 获取服务卡
     * @param $id
     * @return mixed
     */
    public function getCardById($id)
    {
        $card = [
            1 => [
                "id" => 1,
                "card_code" => "1234567890",
                "card_money" => 1000
            ],
            2 => [
                "id" => 2,
                "card_code" => "9876543245",
                "card_money" => 3000
            ],
            3 => [
                "id" => 3,
                "card_code" => "3840959205",
                "card_money" => 5000
            ]
        ];
        return $card[$id];
    }
}