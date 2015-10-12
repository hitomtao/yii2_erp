<?php

namespace boss\controllers;

use Yii;
use common\models\GeneralPay;
use common\models\GeneralPayLog;
use yii\data\ActiveDataProvider;
use yii\rest\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
/*
//支付宝
include_once '../../ejiajie/pay/alipay_app/alipay_class.php';
//微信
include_once '../../ejiajie/pay/wx_app/wxpay_class.php';
//百付宝
include_once '../../ejiajie/pay/bfb_app/bfbpay_class.php';
//银联
include_once '../../ejiajie/pay/upacp_app/uppay_class.php';
*/
/**
 * GeneralPayController implements the CRUD actions for GeneralPay model.
 */
class GeneralPayController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }

    /**
     * 发送给支付接口的数据
     * @param integer $pay_money 支付金额
     * @param integer $customer_id 消费者ID
     * @param integer $channel_id 渠道ID
     * @param integer $order_id 订单ID
     * @param integer $partner 第三方合作号
     */
    public function actionGetPay()
    {
        //接收数据
        $request = yii::$app->request;
        $data = $request->get();

        //实例化模型
        $model = new GeneralPay();

        //查询订单是否已经支付过
        if( !empty($data['order_id']) ){
            $order = GeneralPay::find()->where(['order_id'=>$data['order_id'],'general_pay_status'=>1])->one();
            if(!empty($order)){
                exit("订单已经支付过");
            }
        }

        //在线支付（online_pay），在线充值（pay）
        if(empty($data['order_id'])){
            $scenario = 'pay';
            //交易方式
            $data['general_pay_mode'] = 1;//充值
        }else{
            $scenario = 'online_pay';
            //交易方式
            $data['general_pay_mode'] = 3;//在线支付
        }

        //支付来源
        $data['general_pay_source_name'] = $model->source($data['general_pay_source']);

        //使用场景
        $model->scenario = $scenario;
        $model->attributes = $data;

        //验证数据
        if( $model->validate() && $model->save() ){

            //返回组装数据
            $model->call_pay();

        }else{
            echo json_encode(['code'=>'-1' , 'msg'=>['alertMsg'=>$model->errors]]);
        }

    }

    /**
     * 接收第三方支付数据
     * @return mixed
     */
    public function actionReceive()
    {

    }

    /**
     * 查询支付第三方第三方支付数据
     * @return mixed
     */
    public function actionSearch()
    {

    }


    /**
     * 退款
     * @return mixed
     */
    public function actionRefund()
    {

    }

    /**
     * 支付宝APP回调
     */
    public function actionAlipayAppNotify()
    {
        $request = yii::$app->request;

        //POST数据
        if(!empty($_GET['debug'])){
            $_POST = array (
                "discount"=> "0.00",
                "payment_type"=> "1",
                "subject"=> "e家洁会员充值",
                "trade_no"=> "2015092510165",
                "buyer_email"=> "lsqpy@163.com",
                "gmt_create"=> "2015-09-25 21:13:20",
                "notify_type"=> "trade_status_sync",
                "quantity"=> "1",
                "out_trade_no"=> "150925846765",
                "seller_id"=> "2088801136967007",
                "notify_time"=> "2015-09-25 21:13:21",
                "body"=> "e家洁会员充值0.01元",
                "trade_status"=> "TRADE_FINISHED",
                "is_total_fee_adjust"=> "N",
                "total_fee"=> "0.01",
                "gmt_payment"=> "2015-09-25 21:13:21",
                "seller_email"=> "47632990@qq.com",
                "gmt_close"=> "2015-09-25 21:13:21",
                "price"=> "0.01",
                "buyer_id"=> "2088002074138164",
                "notify_id"=> "6260ae5cc41e6aa3a42824ec032071df2w",
                "use_coupon"=> "N",
                "sign_type"=> "RSA",
                "sign"=> "T4Bkh9KljoFOTIossu5QtYPRUwj/7by/YLXNQ7efaxe0AwYDjFDFWTFts4h8yq2ceCH8weqYVBklj2btkF2/hKPuUifuJNB6lk8EtHckmJg0MzhGIBAvpteUAo+5Gs+wlI5eS5zmryBskuHOXSM7svb9wNCcL9pHAv8CM06Au+A="
            );
            $post = $_POST;
        }else{
            $post = $request->post();
        }

        //实例化模型
        $GeneralPayLogModel = new GeneralPayLog();

        //记录日志
        $dataLog = array(
            'general_pay_log_price' => $post['total_fee'],   //支付金额
            'general_pay_log_shop_name' => $post['subject'],   //商品名称
            'general_pay_log_eo_order_id' => $post['out_trade_no'],   //订单ID
            'general_pay_log_transaction_id' => $post['buyer_id'],   //交易流水号
            'general_pay_log_status_bool' => $GeneralPayLogModel->statusBool($post['trade_status']),   //支付状态
            'general_pay_log_status' => $post['trade_status'],   //支付状态
            'pay_channel_id' => 6,  //支付渠道ID
            'general_pay_log_json_aggregation' => json_encode($post),
            'data' => $post //文件数据
        );
        $this->on('insertLog',[$GeneralPayLogModel,'insertLog'],$dataLog);
        $this->trigger('insertLog');

        //实例化模型
        $model = new GeneralPay();

        //获取交易ID
        $GeneralPayId = $model->getGeneralPayId($post['out_trade_no']);

        //查询支付记录
        $model = GeneralPay::find()->where(['id'=>$GeneralPayId,'general_pay_status'=>0])->one();

        //验证支付结果
        if(!empty($model))
        {
            //验证签名
            $alipay = new \alipay_class;
            $verify_result = $alipay->callback();

            if(!empty($_GET['debug'])){
                $verify_result = true;
            }

            //签名验证成功
            if($verify_result) {
                $model->id = $GeneralPayId; //ID
                $model->general_pay_status = 1; //支付状态
                $model->general_pay_actual_money = $post['total_fee'];
                $model->general_pay_transaction_id = $post['trade_no'];
                $model->general_pay_is_coupon = 1;
                $model->general_pay_eo_order_id = $post['out_trade_no'];
                $model->general_pay_verify = $model->makeSign();

                //commit
                $connection  = \Yii::$app->db;
                $transaction = $connection->beginTransaction();
                try {
                    $model->save(false);
                    //修改用户余额
                    $customer = new \common\models\Customer;
                    if(!empty($model->order_id)){
                        $customer::decBalance($model->customer_id,$model->general_pay_actual_money);
                    }else{
                        $customer::incBalance($model->customer_id,$model->general_pay_actual_money);
                    }

                    $transaction->commit();
                    $status = true;
                } catch(Exception $e) {
                    $status = false;
                    $transaction->rollBack();
                }

            }
        }
        echo !empty($status) ? 'success' : 'fail';
    }

    /**
     * 微信APP回调
     * 金额单位为【分】
     */
    public function actionWxAppNotify(){

        $notify = new \wxpay_class();
        //调用微信验证
        $notify->callback();
        //获取微信数据
        $post = $notify->getNotifyData();
        //获取验证状态
        $status = $notify->notify();
        //实例化模型
        $GeneralPayLogModel = new GeneralPayLog();


        //记录日志
        $dataLog = array(
            'general_pay_log_price' => $model->toMoney($post['total_fee'],100,'/'),   //支付金额
            'general_pay_log_shop_name' => $post['attach'],   //商品名称
            'general_pay_log_eo_order_id' => $post['out_trade_no'],   //订单ID
            'general_pay_log_transaction_id' => $post['transaction_id'],   //交易流水号
            'general_pay_log_status_bool' => $GeneralPayLogModel->statusBool($post['result_code']),   //支付状态
            'general_pay_log_status' => $post['result_code'],   //支付状态
            'pay_channel_id' => 11,  //支付渠道ID
            'general_pay_log_json_aggregation' => json_encode($post),
            'data' => $post //文件数据
        );
        $this->on('insertLog',[$GeneralPayLogModel,'insertLog'],$dataLog);
        $this->trigger('insertLog');

        //实例化模型
        $model = new GeneralPay();

        //获取交易ID
        $GeneralPayId = $model->getGeneralPayId($post['out_trade_no']);

        //查询支付记录
        $model = GeneralPay::find()->where(['id'=>$GeneralPayId,'general_pay_status'=>0])->one();

        //验证支付结果
        if(!empty($model) && $status == 'SUCCESS'){
            $model->id = $GeneralPayId; //ID
            $model->general_pay_status = 1; //支付状态
            $model->general_pay_actual_money = $model->toMoney($post['total_fee'],100,'/');
            $model->general_pay_transaction_id = $post['transaction_id'];
            $model->general_pay_is_coupon = 1;
            $model->general_pay_eo_order_id = $post['out_trade_no'];
            $model->general_pay_verify = $model->makeSign();

            //commit
            $connection  = \Yii::$app->db;
            $transaction = $connection->beginTransaction();
            try {
                $model->save(false);
                //change customer balance
                $customer = new \common\models\Customer;
                if(!empty($model->order_id)){
                    $customer::incBalance($model->customer_id,$model->general_pay_actual_money);
                }else{
                    $customer::decBalance($model->customer_id,$model->general_pay_actual_money);
                }
                $status = true;
                $transaction->commit();

            } catch(Exception $e) {
                $status = false;
                $transaction->rollBack();
            }
        }
        echo $status;
    }

    /**
     *  百付宝APP回调
     *  金额单位为【分】
     */
    public function actionBfbAppNotify()
    {
        $request = yii::$app->request;

        //实例化模型
        $GeneralPayLogModel = new GeneralPayLog();
        $model = new GeneralPay();

        //POST数据
        if(!empty($_GET['debug'])){
            $_GET = array (
                'bank_no' => '',
                'bfb_order_create_time' => '20150714115504',
                'bfb_order_no' => '2015071415006100041110555687771',
                'buyer_sp_username' => '',
                'currency' => '1',
                'extra' => '',
                'fee_amount' => '0',
                'input_charset' => '1',
                'order_no' => '150927830311',
                'pay_result' => '1',
                'pay_time' => '20150714115503',
                'pay_type' => '2',
                'sign_method' => '1',
                'sp_no' => '1500610004',
                'total_amount' => '1',
                'transport_amount' => '0',
                'unit_amount' => '1',
                'unit_count' => '1',
                'version' => '2',
                'sign' => 'eef8e524ef6b6dde1699b04421fc9bc5',
            ) ;
            $post = $_GET;
        }else{
            $post = $request->get();
        }

        //记录日志
        $dataLog = array(
            'general_pay_log_price' => $model->toMoney($post['total_amount'],100,'/'),   //支付金额
            'general_pay_log_shop_name' => '百付宝',   //商品名称
            'general_pay_log_eo_order_id' => $post['order_no'],   //订单ID
            'general_pay_log_transaction_id' => $post['bfb_order_no'],   //交易流水号
            'general_pay_log_status_bool' => $GeneralPayLogModel->statusBool($post['pay_result']),   //支付状态
            'general_pay_log_status' => $post['pay_result'],   //支付状态
            'pay_channel_id' => 8,  //支付渠道ID
            'general_pay_log_json_aggregation' => json_encode($post),
            'data' => $post //文件数据
        );
        $this->on('insertLog',[$GeneralPayLogModel,'insertLog'],$dataLog);
        $this->trigger('insertLog');

        //获取交易ID
        $GeneralPayId = $model->getGeneralPayId($post['order_no']);

        //查询支付记录
        $model = GeneralPay::find()->where(['id'=>$GeneralPayId,'general_pay_status'=>0])->one();

        //验证签名
        $bfb = new \bfbpay_class();
        if(!empty($_GET['debug'])){
            $sign = $bfb->callback();
        }else{
            $sign = true;
        }

        //验证支付结果
        if( !empty($model) && !empty($sign) ){
            $model->id = $GeneralPayId; //ID
            $model->general_pay_status = 1; //支付状态
            $model->general_pay_actual_money = $model->toMoney($post['total_amount'],100,'/');
            $model->general_pay_transaction_id = $post['bfb_order_no'];
            $model->general_pay_is_coupon = 1;
            $model->general_pay_eo_order_id = $post['order_no'];
            $model->general_pay_verify = $model->makeSign();

            //commit
            $connection  = \Yii::$app->db;
            $transaction = $connection->beginTransaction();
            try {
                $model->save(false);
                //change customer balance
                $customer = new \common\models\Customer;
                if(!empty($model->order_id)){
                    $customer::incBalance($model->customer_id,$model->general_pay_actual_money);
                }else{
                    $customer::decBalance($model->customer_id,$model->general_pay_actual_money);
                }
                $transaction->commit();
                $bfb->notify();
            } catch(Exception $e) {
                $transaction->rollBack();
            }

        }
    }

    /**
     * 银联APP回调
     */
    public function actionUpAppNotify()
    {
        $request = yii::$app->request;

        //实例化模型
        $model = new GeneralPay();

        //POST数据
        if(!empty($_GET['debug'])){
            $_POST = array (
                "accessType" => "0",
                "bizType" => "000201",
                "certId" => "21267647932558653966460913033289351200",
                "currencyCode" => "156",
                "encoding" => "utf-8",
                "merId" => "898111448161364",
                "orderId" => "151010743932",
                "queryId" => "201510101112461438298",
                "reqReserved" => "透传信息",
                "respCode" => "00",
                "respMsg" => "Success!",
                "settleAmt" => "1",
                "settleCurrencyCode" => "156",
                "settleDate" => "1010",
                "signMethod" => "01",
                "traceNo" => "143829",
                "traceTime" => "1010111246",
                "txnAmt" => "1",
                "txnSubType" => "01",
                "txnTime" => "20151010111246",
                "txnType" => "01",
                "version" => "5.0.0",
                "signature" => "GnmVKKUPgdLc11K8zrwL5w5cTx1bieDdTniC2Psh7WEuk4y+53l8OzvE41KsJNyxBuBWAPBgypK+8jNJmGUU2x+tMU5Z0liIKVD5HWhboHxlwZvh0vMGfB8vlmIcbYipxUuWz3Jin11I6O8W6mvTAb76wJXrcbqZD1PKtVP7/5ldxpYsRh/MmEfeDFCcxqMk0uS/ON7XagGKkYSOxCcDMmQ4xRhNzLOthO8vkK6vPDWuowNjFdQXV8A2K9MxVqJNrR5QgR52Hm0dy9z5o09YhjDhMgwlyqRAgaBRbVDNt7qJXFyp3lcxwU9sJBkpOCYV6Cwi/03sWJA+W87U6+gN9Q=="
            ) ;
            $post = $_POST;
        }else{
            $post = $request->post();
        }

        //实例化模型
        $GeneralPayLogModel = new GeneralPayLog();

        //记录日志
        $dataLog = array(
            'general_pay_log_price' => $model->toMoney($post['settleAmt'],100,'/'),   //支付金额
            'general_pay_log_shop_name' => $post['reqReserved'],   //商品名称
            'general_pay_log_eo_order_id' => $post['orderId'],   //订单ID
            'general_pay_log_transaction_id' => $post['queryId'],   //交易流水号
            'general_pay_log_status_bool' => $GeneralPayLogModel->statusBool($post['respMsg']),   //支付状态
            'general_pay_log_status' => $post['respMsg'],   //支付状态
            'pay_channel_id' => 12,  //支付渠道ID
            'general_pay_log_json_aggregation' => json_encode($post),
            'data' => $post //文件数据
        );

        $this->on('insertLog',[$GeneralPayLogModel,'insertLog'],$dataLog);
        $this->trigger('insertLog');

        //获取交易ID
        $GeneralPayId = $model->getGeneralPayId($post['orderId']);

        //查询支付记录
        $model = GeneralPay::find()->where(['id'=>$GeneralPayId,'general_pay_status'=>0])->one();

        //验证签名
        $class = new \uppay_class();
        $sign = $class->callback();

        //验证支付结果
        if( !empty($model) && !empty($sign) ){

            $model->id = $GeneralPayId; //ID
            $model->general_pay_status = 1; //支付状态
            $model->general_pay_actual_money = $model->toMoney($post['settleAmt'],100,'/');
            $model->general_pay_transaction_id = $post['queryId'];
            $model->general_pay_is_coupon = 1;
            $model->general_pay_eo_order_id = $post['orderId'];
            $model->general_pay_verify = $model->makeSign();

            //commit
            $connection  = \Yii::$app->db;
            $transaction = $connection->beginTransaction();
            try {
                $model->save(false);
                //change customer balance
                $customer = new \common\models\Customer;
                $customerTransRecord = new \core\models\CustomerTransRecord\CustomerTransRecord();
                $attribute = $model->getAttributes();
                //支付订单
                if(!empty($model->order_id)){

                    $customer::incBalance($model->customer_id,$model->general_pay_actual_money);
                    //服务卡支付

                    /**
                    'customer_id',  //用户ID
                    'order_id', //订单ID
                    'order_channel_id', //订单渠道
                    'customer_trans_record_order_channel',  //订单渠道名称
                    'pay_channel_id',   //支付渠道
                    'customer_trans_record_pay_channel',    //支付渠道名称
                    'customer_trans_record_mode',   //交易方式:1消费,2=充值,3=退款,4=补偿
                    'customer_trans_record_mode_name',  //交易方式:1消费,2=充值,3=退款,4=补偿
                    'customer_trans_record_promo_code_money',   //优惠码金额
                    'customer_trans_record_coupon_money',   //优惠券金额
                    'customer_trans_record_online_pay', //在线支付
                    'customer_trans_record_online_balance_pay', //在线余额支付
                    'customer_trans_record_online_service_card_on', //服务卡号
                    'customer_trans_record_online_service_card_pay',    //服务卡支付
                    'customer_trans_record_order_total_money',  //订单总额
                    'customer_trans_record_transaction_id', //交易流水号
                     */
                    //支付订单交易记录
                    $customerTransRecord::analysisRecord($attribute);
                }else{

                    //支付充值
                    $customer::decBalance($model->customer_id,$model->general_pay_actual_money);

                    /**
                    'customer_id',  //用户ID
                    'order_id', //订单ID
                    'order_channel_id', //订单渠道
                    'customer_trans_record_order_channel',  //订单渠道名称
                    'pay_channel_id',   //支付渠道
                    'customer_trans_record_pay_channel',    //支付渠道名称
                    'customer_trans_record_mode',   //交易方式:1消费,2=充值,3=退款,4=补偿
                    'customer_trans_record_mode_name',  //交易方式:1消费,2=充值,3=退款,4=补偿
                    'customer_trans_record_order_total_money',  //订单总额
                    'customer_trans_record_online_service_card_on', //服务卡号
                    'customer_trans_record_online_service_card_pay',    //服务卡支付金额
                    */

                    //充值交易记录
                    $customerTransRecord::analysisRecord($attribute);
                }

                $transaction->commit();
                $class->notify();
            } catch(Exception $e) {
                $class->notify();
                $transaction->rollBack();
            }
        }
    }

    /**
     * Lists all GeneralPay models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => GeneralPay::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single GeneralPay model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
        return $this->redirect(['view', 'id' => $model->id]);
        } else {
        return $this->render('view', ['model' => $model]);
}
    }

    /**
     * Creates a new GeneralPay model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new GeneralPay;

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing GeneralPay model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing GeneralPay model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the GeneralPay model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return GeneralPay the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = GeneralPay::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    /**
     * 财务是否对账
     * @param $id   对账ID
     * @param $status   对账状态
     * @return bool
     * @throws NotFoundHttpException
     */
    public function modifyRecontiliation($id , $status)
    {
        $model = $this->findModel($id);
        $model->id = $id;
        $model->is_reconciliation = intval($status);
        return $model->save(false);
    }

    public function actionTest()
    {
        var_dump($this->modifyRecontiliation(1,2));
    }

}
