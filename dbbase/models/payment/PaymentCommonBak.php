<?php

namespace dbbase\models\payment;

use dbbase\models\finance\FinanceOrderChannel;
use dbbase\models\finance\FinancePayChannel;
use core\models\customer\Customer;
use core\models\payment\PaymentCustomerTransRecord;
use core\models\order\Order;
use core\models\order\OrderSearch;
use Yii;
use yii\base\ErrorException;
use yii\base\Exception;
use yii\behaviors\TimestampBehavior;
/**
 * This is the model class for table "{{%payment}}".
 *
 * @property integer $id
 * @property string $customer_id
 * @property string $order_id
 * @property string $payment_money
 * @property string $payment_actual_money
 * @property integer $payment_source
 * @property string $payment_source_name
 * @property integer $payment_mode
 * @property integer $payment_status
 * @property string $payment_transaction_id
 * @property string $payment_eo_order_id
 * @property string $payment_memo
 * @property integer $payment_type
 * @property string $admin_id
 * @property string $payment_admin_name
 * @property string $worker_id
 * @property string $handle_admin_id
 * @property string $payment_handle_admin_name
 * @property string $payment_verify
 * @property string $created_at
 * @property string $updated_at
 * @property integer $is_reconciliation
 */
class PaymentCommon extends \yii\db\ActiveRecord
{
    public $pay_type;

    public $openid;
    //直达号
    public $customer_name; //商品名称
    public $customer_mobile; //用户电话
    public $customer_address; //用户地址
    public $order_source_url; //订单详情地址
    public $page_url; //订单跳转地址
    public $detail; //订单详情
    //支付宝WEB
    public $show_url; //订单显示地址
    public $return_url; //订单同步回调地址

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%payment}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['order_id','customer_name','customer_mobile','customer_address','order_source_url','page_url','detail','openid','customer_id', 'payment_source_name','payment_money','payment_source_name'], 'required'],
            [['customer_id', 'payment_source', 'payment_mode', 'payment_status', 'payment_type', 'admin_id', 'worker_id', 'handle_admin_id', 'created_at', 'updated_at', 'is_reconciliation'], 'integer'],
            [['payment_money', 'payment_actual_money'], 'number'],
            [['payment_source_name'], 'string', 'max' => 20],
            [['payment_transaction_id'], 'string', 'max' => 40],
            [['payment_admin_name', 'payment_handle_admin_name'], 'string', 'max' => 30],
            [['customer_id'],'match','pattern'=>'%^[1-9]\d*$%'],   //必须为数字，不能是0
            [['payment_memo','show_url','return_url'], 'string', 'max' => 255],
            [['payment_verify'], 'string', 'max' => 32],
            [['payment_type'],'in','range'=>[1,2,3]],   //支付类型:1普通订单支付,2周期订单支付,3充值
        ];
    }

    /**
     * 场景验证
     * @param integer $pay_money 支付金额
     * @param integer $customer_id 消费者ID
     * @param integer $pay_source 来源ID
     * @param integer $pay_source_name 来源名称
     * @param char $order_id 订单ID
     * @param char $partner 第三方合作号
     */
    public function scenarios()
    {
        return[
            //支付宝WEB
            'alipay_web_online_pay'    =>['payment_type','payment_money','customer_id','partner','payment_source','payment_source_name','payment_mode','order_id','return_url','show_url'],
            //在线支付
            'online_pay'=>['payment_type','payment_money','customer_id','partner','payment_source','payment_source_name','payment_mode','order_id'],
            //微信在线支付
            'wx_h5_online_pay'=>['payment_type','payment_money','customer_id','partner','payment_source','payment_source_name','payment_mode','order_id','openid'],
            //微信在线支付
            'zhidahao_h5_online_pay'=>['payment_type','payment_money','customer_id','partner','payment_source','payment_source_name','payment_mode','order_id','customer_name','customer_mobile','customer_address','order_source_url','page_url','detail'],
            //在线退款
            'refund'       =>['payment_type','customer_id','order_id','payment_money','payment_source','payment_source_name','payment_mode','payment_status','payment_eo_order_id','payment_type','admin_id','payment_admin_name','payment_verify'],
        ];
    }

    /**
     * 自动处理创建时间和修改时间
     * @see \yii\base\Component::behaviors()
     */
    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'createdAtAttribute' => 'created_at',
                'updatedAtAttribute' => 'updated_at',
            ],
        ];
    }

    /**
     * 回调地址
     * @param $type_name 类型
     */
    public function notify_url($type_name)
    {
        $http = "http://".$_SERVER['HTTP_HOST']."/".yii::$app->controller->id."/".$type_name."-notify";
        return $http;
    }

    /**
     * 判断在线充值还是支付
     * @return string
     */
    public function subject()
    {
        return $subject = empty($this->order_id) ? 'e家洁会员充值' : 'e家洁在线支付';
    }

    /**
     * 判断在线充值还是支付
     * @return string
     */
    public function body()
    {
        return $body = empty($this->order_id) ? 'e家洁会员充值'.$this->payment_money.'元' : 'e家洁在线支付'.$this->payment_money.'元';
    }

    /**
     * 生成第三方订单号
     * 年月日+交易类型+随机数+自增ID
     * 01 正常订单 02 退款 03 赔付
     * @return bool|string 订单号
     */
    public function create_out_trade_no($type=1,$order_id=0)
    {
        $id = empty($this->id) ?  $order_id : $this->id;
        if( empty($id) ) return false;
        switch($type)
        {
            case 1 :
                $transType = '01';
                break;
            case 2 :
                $transType = '02';
                break;
            case 3 :
                $transType = '03';
                break;
        }
        //组装支付订单号
        $rand = mt_rand(1000,9999);
        $date = date("ymd",time());
        return $date.$transType.$rand.$id;
    }

    /**
     * 转换金额
     * @param $money1   实际金额
     * @param $money2   基数
     * @param $method   +,-,*,%
     * @param $num 保留几位小树
     * @return float    实际金额
     */
    public function toMoney($money1, $money2, $method = '*',$num=2)
    {
        $toMoney = '';
        bcscale($num); //保留两位小数
        switch($method)
        {
            case '+' :
                $toMoney = bcadd($money1,$money2);
                break;
            case '-' :
                $toMoney = bcsub($money1,$money2);
                break;
            case '*' :
                $toMoney = bcmul($money1,$money2);
                break;
            case '/' :
                $toMoney = bcdiv($money1,$money2);
                break;
        }
        return $toMoney;
    }

    /**
     * 获取订单信息
     * @param $order_id
     */
    public static function orderInfo($order_id){
        $orderSearch = new OrderSearch();
        $orderInfo = $orderSearch->getOne($order_id);
        return $orderInfo;
    }



    /**
     * 订单支付退款
     * @param $data
     */
    public static function orderRefund($data)
    {
        $orderInfo = self::orderInfo($data['order_id']);
        //获取余额支付
        $balancePay = $orderInfo->orderExtPay->order_use_acc_balance;  //余额支付

        //获取服务卡支付
        $service_card_on = $orderInfo->orderExtPay->card_id;    //服务卡ID
        $service_card_pay = $orderInfo->orderExtPay->order_use_card_money;   //服务卡内容

        //执行自有退款
        if( !empty($balancePay) ){
            //余额支付退款
            Customer::incBalance($data['customer_id'],$balancePay);
        }elseif( !empty($service_card_on) && !empty($service_card_pay) ){
            //服务卡支付退款
        }
    }

    /**
     * 获取记录ID
     * @param $out_trade_no 交易ID
     */
    public function getPaymentId($out_trade_no)
    {
        return substr($out_trade_no,12);
    }

    /**
     * 签名
     */
    public function makeSign()
    {
        $data = $this->getAttributes();
        ksort($data);
        //加密字符串
        $str='1jiajie.com';
        //排除的字段
        $notArray = ['id','payment_verify','created_at','updated_at'];
        //加密签名
        foreach( $data as $name=>$val )
        {
            $value = is_numeric($val) ? (int)$val : $val;
            if( !empty($value) && !in_array($name,$notArray))
            {
                if(is_numeric($value) && $value < 1) continue;
                $str .= $value;
            }
        }
        //return $str;
        return md5(md5($str).'1jiajie.com');
    }

    /**
     * 返回支付数据
     * @param $order_id 订单ID
     * @param $payment_status 支付状态
     * @return array|null|\yii\db\ActiveRecord
     */
    public function getPayStatus($order_id,$payment_status){
        $where = ['order_id'=>$order_id,'payment_status'=>$payment_status];
        return Payment::find()->where($where)->one();
    }

    /**
     * 支付成功发送短信
     * @param $customer_id 用户ID
     */
    public function smsSend($data)
    {
        $phone = Customer::getCustomerPhone($data->data['customer_id']);
        $msg = !empty($data->data['msg']) ? $data->data['msg'] : '支付成功!!!';
        Yii::$app->sms->send($phone,$msg);
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'customer_id' => Yii::t('app', '用户ID'),
            'order_id' => Yii::t('app', '订单ID'),
            'payment_money' => Yii::t('app', '发起充值/交易金额'),
            'payment_actual_money' => Yii::t('app', '实际充值/交易金额'),
            'payment_source' => Yii::t('app', '数据来源:1=APP微信,2=H5微信,3=APP百度钱包,4=APP银联,5=APP支付宝,6=WEB支付宝,7=HT淘宝,8=H5百度直达号,9=HT刷卡,10=HT现金,11=HT刷卡'),
            'payment_source_name' => Yii::t('app', '数据来源名称'),
            'payment_mode' => Yii::t('app', '交易方式:1=消费,2=充值,3=退款,4=补偿'),
            'payment_status' => Yii::t('app', '状态：0=失败,1=成功'),
            'payment_transaction_id' => Yii::t('app', '第三方交易流水号'),
            'payment_eo_order_id' => Yii::t('app', '商户ID(第三方交易)'),
            'payment_memo' => Yii::t('app', '备注'),
            'payment_type' => Yii::t('app', '支付类型'),
            'admin_id' => Yii::t('app', '管理员ID'),
            'payment_admin_name' => Yii::t('app', '管理员名称'),
            'worker_id' => Yii::t('app', '销售卡阿姨ID'),
            'handle_admin_id' => Yii::t('app', '办卡人ID'),
            'payment_handle_admin_name' => Yii::t('app', '办卡人名称'),
            'payment_verify' => Yii::t('app', '支付验证'),
            'created_at' => Yii::t('app', '创建时间'),
            'updated_at' => Yii::t('app', '更新时间'),
            'is_reconciliation' => Yii::t('app', '是否对账'),
        ];
    }

}
