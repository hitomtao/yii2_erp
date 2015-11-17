<?php

namespace boss\controllers\order;

use boss\components\BaseAuthController;
use boss\models\order\OrderOtherDict;
use boss\models\order\OrderSearch;
use boss\models\order\Order;
use boss\models\order\OrderManualAssign;
use boss\models\order\OrderSearchIndex;

use core\models\customer\CustomerAddress;
use core\models\operation\coupon\CouponRule;
use core\models\order\OrderDispatcherKpi;
use core\models\order\OrderWorkerRelation;
use core\models\order\OrderStatusDict;
use core\models\customer\Customer;
use core\models\order\OrderStatusHistory;
use core\models\shop\Shop;
use core\models\system\SystemUser;


use yii\web\NotFoundHttpException;
use yii\web\Response;
use Yii;

/**
 * OrderController implements the CRUD actions for Order model.
 */
class OrderController extends BaseAuthController
{
//    public function actionTest()
//    {
//        Yii::$app->response->format = Response::FORMAT_JSON;
//        return Order::cancelByOrderCode('101511045457209', 1, OrderOtherDict::NAME_CANCEL_ORDER_CUSTOMER_OTHER_CAUSE, '测试');
////        return Order::serviceStart(2);
//    }
//
//    public function actionServiceDone($id)
//    {
//        return Order::serviceDone($id);
//    }
//
//    public function actionServiceStart($id)
//    {
//        return Order::serviceStart($id);
//    }
//
//    public function actionAcceptDone($id)
//    {
//        return Order::customerAcceptDone($id,2,1);
//    }
//
//    public function actionChecked($id) //code
//    {
//        return Order::checked($id,$id,1);
//    }
//
//    public function actionPayoff($id) //code
//    {
//        return Order::payoffDone($id, $id, 1);
//    }


    /**
     * 取消订单
     * @return bool
     */
    public function actionCancelOrder()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $admin_id = Yii::$app->user->id;
        $params = yii::$app->request->post();
        $order_id = $params['order_id'];
        $cancel_type = $params['cancel_type'];
        $cancel_note = $params['cancel_note'];
        $result = Order::cancelByOrderId($order_id, $admin_id, $cancel_type, $cancel_note);

        return $result;
    }

    /**
     * 根据手机号获取客户信息
     * @return array|bool
     */
    public function actionCustomer()
    {
        $phone = Yii::$app->request->get('phone');
        Yii::$app->response->format = Response::FORMAT_JSON;
        $customer = Customer::getCustomerInfo($phone);
        if (empty($customer)) {
            if (Customer::addCustomer($phone, 20)) {
                $customer = Customer::getCustomerInfo($phone);
            }
        }
        return $customer;

    }

    /**
     * 获取客户地址
     * @param $id
     * @return array
     */
    public function actionCustomerAddress($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $address_list = CustomerAddress::listAddress($id);
        $address = [];
        if (is_array($address_list)) {
            foreach ($address_list as $v) {
                $address[$v['id']] = $v;
            }
        }
        return $address;
    }

    public function actionGetAddress($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return CustomerAddress::getAddress($id);
    }

    /**
     * 获取常用阿姨
     * @param $id
     * @return array
     */
    public function actionCustomerUsedWorkers($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return Customer::getCustomerUsedWorkers($id);
    }

    /**
     * 根据手机号查询阿姨
     * @return array
     */
    public function actionWorker()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $phone = Yii::$app->request->get('phone');
        return Order::getWorkerInfoByPhone($phone);
    }

    /**
     * 获取服务项目
     * @return array
     */
    public function actionGetGoods()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $longitude = Yii::$app->request->get('lng');
        $latitude = Yii::$app->request->get('lat');
        return Order::getGoods($longitude, $latitude);
    }

    /**
     * 根据省份获取城市
     * @return array
     */
    public function actionGetCity()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $province_id = Yii::$app->request->get('province_id');
        return Order::getOnlineCityList($province_id);
    }

    /**
     * 根据城市获取区县
     * @return array
     */
    public function actionGetCounty()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $city_id = Yii::$app->request->get('city_id');
        return Order::getCountyList($city_id);
    }

    /**
     * 获取可下单时间
     * @return array
     */
    public function actionGetTimeRangeList()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_booked_count = Yii::$app->request->get('order_booked_count');
        $district_id = Yii::$app->request->get('district_id');
        $date = Yii::$app->request->get('date');
        $worker_id = Yii::$app->request->get('worker_id','');
        return Order::getOrderBookedTimeRangeList($district_id, $order_booked_count, $date,1,$worker_id);
    }

    /**
     * 根据服务品类获取优惠券
     * @return array
     */
    public function actionCheckCouponCode()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $coupon_code = Yii::$app->request->get('coupon_code');
        $customer_tel = Yii::$app->request->get('customer_phone');
        $service_type_id = Yii::$app->request->get('service_type_id');
        $service_item_id = Yii::$app->request->get('service_item_id');
        $city_id = Yii::$app->request->get('city_id');
        return CouponRule::get_is_coupon_status($coupon_code,$customer_tel,$service_type_id,$service_item_id,$city_id);
    }

    /**
     * 获取服务卡信息
     * @param $id
     * @return string
     */
    public function actionCards($id)
    {
        return '[
                {
                    "id": 1,
                    "card_code": "1234567890",
                    "card_money": 1000
                },
                {
                    "id": 2,
                    "card_code": "9876543245",
                    "card_money": 3000
                },
                {
                    "id": 3,
                    "card_code": "3840959205",
                    "card_money": 5000
                }
            ]';
    }


    /**
     * 获取待手工指派的订单
     * @return $this|static
     */
    public function actionGetWaitManualAssignOrder()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $is_mini_boss = Yii::$app->user->identity->isMiNiBoss();
        if($is_mini_boss) {
            return OrderManualAssign::getMiniBossWaitAssignOrder(Yii::$app->user->id,Yii::$app->user->identity->shopDistrictIds);
        }else {
            return OrderManualAssign::getWaitAssignOrder(Yii::$app->user->id);
        }
    }

    /**
     * 获取可指派阿姨的列表
     * @return array
     */
    public function actionGetCanAssignWorkerList()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id = Yii::$app->request->get('order_id');
        $is_mini_boss = Yii::$app->user->identity->isMiNiBoss();
        if($is_mini_boss) {
            return OrderManualAssign::getMinibossCanAssignWorkerList($order_id,Yii::$app->user->identity->shopIds);
        }else{
            return OrderManualAssign::getCanAssignWorkerList($order_id);
        }

    }

    /**
     * 根据名称和手机号搜索阿姨列表
     * @return array
     */
    public function actionSearchAssignWorker()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id = Yii::$app->request->get('order_id');
        $phone = Yii::$app->request->get('phone');
        $worker_name = Yii::$app->request->get('worker_name');
        $is_mini_boss = Yii::$app->user->identity->isMiNiBoss();
        if($is_mini_boss) {
            return OrderManualAssign::searchMiniBossAssignWorker($order_id,$worker_name,$phone,Yii::$app->user->identity->shopIds);
        }else{
            return OrderManualAssign::searchAssignWorker($order_id,$worker_name,$phone);
        }
    }

    /**
     * 获取待人工指派订单数量
     * @return int|string
     */
    public function actionGetWaitManualAssignCount()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return OrderManualAssign::getWaitAssignOrdersCount(Yii::$app->user->identity->shopDistrictIds);
    }

    /**
     * Lists all Order models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchParas = Yii::$app->request->getQueryParams();
        $searchModel = new OrderSearchIndex();
        $is_mini_boss = Yii::$app->user->identity->isMiNiBoss();
        if($is_mini_boss){
            $dataProvider = $searchModel->search($searchParas);
            return $this->render('index-mini-boss', ['dataProvider' => $dataProvider, 'searchModel' => $searchModel, 'searchParas' => $searchParas,]);
        }else{
            $dataProvider = $searchModel->search($searchParas);
            return $this->render('index', [
                'dataProvider' => $dataProvider,
                'searchModel' => $searchModel,
                'searchParas' => $searchParas,
                'cancelCause' => OrderOtherDict::getCancelOrderCauseType(),
                'cancelCustomerCause' => OrderOtherDict::getCancelOrderCustomerCause(),
                'cancelCompanyCause' => OrderOtherDict::getCancelOrderCompanyCause(),
            ]);
        }
    }

    /**
     * 通过搜索关键字获取门店信息
     * 联想搜索通过ajax返回
     * @param q string 关键字
     * @return result array 门店信息
     */
    public function actionShowShop($q = null)
    {
        Yii::$app->response->format = Yii\web\Response::FORMAT_JSON;
        
        $out = ['results' => ['id' => '', 'text' => '']];
        $condition = '';
        if ($q != null) {
            $condition = ['like','name',$q];
        }
        $is_mini_boss = Yii::$app->user->identity->isMiNiBoss();
        if($is_mini_boss){
            $shopResult = Shop::find()
                ->where($condition)
                ->andWhere(['id'=>Yii::$app->user->identity->shopIds])
                ->select('id, name AS text')->asArray()->all();
        }else{
            $shopResult = Shop::find()->where($condition)->select('id, name AS text')->asArray()->all();
        }
        $out['results'] = array_values($shopResult);
        //$out['results'] = [['id' => '1', 'text' => '门店'], ['id' => '2', 'text' => '门店2'], ['id' => '2', 'text' => '门店3']];
        return $out;
    }

    /**
     * Displays a single Order model.
     * @param string $id
     * @return mixed
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);
        $post = Yii::$app->request->post();
        if ($model->load($post)) {
            $post['Order']['admin_id'] = Yii::$app->user->id;
            $post['Order']['order_ip'] = ip2long(Yii::$app->request->userIP);

            if ($model->update($post)) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        }
        return $this->render('view', ['model' => $model]);

    }


    /**
     * Creates a new Order model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Order();
        $post = Yii::$app->request->post();
        if ($model->load($post)) {
            if ($model->createNew($post)) {
                return $this->redirect(['view', 'id' => $model->order_code]);
            }
        } else {//init
            $model->order_booked_count = '2.0'; //服务时长初始值2小时
            $model->order_booked_worker_id = 0; //不指定阿姨
            $model->order_flag_sys_assign = 1;//是否系统指派
            $model->order_channel_name = '后台下单';//订单渠道
            $model->pay_channel_id = 2;//支付渠道
        }
        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionCreateTest(){
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order = new \core\models\order\Order();
        $order->createNew([]);
        return $order->errors;
    }
//    public function actionCreateBatch()
//    {
//        Yii::$app->response->format = Response::FORMAT_JSON;
//        $attributes = [
//            'order_ip' => Yii::$app->request->userIP,
//            'order_service_item_id' => 1,
//            'order_src_id' => 1,
//            'order_channel_name' => '后台下单',
////            'pay_channel_key' => 'PAY_CHANNEL_EJJ_CASH_PAY',
//            'address_id' => 1,
//            'customer_id' => 1,
//            'order_customer_phone' => '18001305711',
//            'admin_id' => Yii::$app->user->id,
//            'order_is_use_balance' => 1,
////            'order_booked_worker_id' => 3,
//            'order_customer_need' => 'xxxxx',
//            'order_customer_memo' => 'fffff',
//            'order_flag_sys_assign' => 0,
//        ];
//        $booked_list = [
//            [
//                'order_booked_begin_time' => strtotime(date('Y-m-d 08:00:00')) + 86400,
//                'order_booked_end_time' => strtotime(date('Y-m-d 10:00:00')) + 86400,
//                'order_booked_count' => 2,
//            ],
//            [
//                'order_booked_begin_time' => strtotime(date('Y-m-d 08:00:00')) + 86400 + 86400,
//                'order_booked_end_time' => strtotime(date('Y-m-d 10:00:00')) + 86400 + 86400,
//                'order_booked_count' => 2,
//            ],
//            [
//                'order_booked_begin_time' => strtotime(date('Y-m-d 08:00:00')) + 86400 + 86400 + 86400,
//                'order_booked_end_time' => strtotime(date('Y-m-d 10:00:00')) + 86400 + 86400 + 86400,
//                'order_booked_count' => 2,
//            ],
//        ];
//        return Order::createNewBatch($attributes, $booked_list);
//    }

    /**
     * 查看并编辑订单
     * @param string $id
     * @return mixed
     */
    public function actionEdit($id)
    {
        $model = OrderSearch::getOneByCode($id);
        $history = [];
        $createRecord = OrderStatusHistory::find()->where([
            'order_id' => $model->id,
            'order_status_dict_id' => OrderStatusDict::ORDER_INIT,
        ])->one();
        $history['creator_name'] = SystemUser::findOne(['id' => $createRecord['admin_id']])['username'];
        $payRecord = OrderStatusHistory::find()->where([
            'order_id' => $model->id,
            'order_status_dict_id' => OrderStatusDict::ORDER_WAIT_ASSIGN,
        ])->one();
        $history['pay_time'] = $payRecord ? date('Y-m-d H:i:s', $payRecord['created_at']) : null;
        return $this->render('edit', ['model' => $model, 'history' => $history]);
    }

    /**
     * ajax修改预约时间
     * @return array
     */
    public function actionUpdateBookedTime($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        $admin_id = Yii::$app->user->id;
        $order_code = $id;
        if(isset($post['order_booked_time_range']) && isset($post['order_booked_date'])) {
            $time = explode('-', $post['order_booked_time_range']);
            $begin_time = strtotime($post['order_booked_date'] . ' ' . $time[0] . ':00');
            $end_time = strtotime(($time[1] == '24:00') ? date('Y-m-d H:i:s', strtotime($post['order_booked_date'] . '00:00:00 +1 days')) : $post['order_booked_date'] . ' ' . $time[1] . ':00');
            if (Order::updateBookedTime($order_code, $post['worker_id'], $begin_time, $end_time, $admin_id)) {
                return ['status' => 1, 'info' => '修改成功'];
            } else {
                return ['status' => 0, 'info' => '修改失败'];
            }
        }else{
            return ['status' => 0, 'info' => '修改失败'];
        }

    }

    public function actionUpdateOrderAddress($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        $admin_id = Yii::$app->user->id;
        $order_code = $id;
        if(isset($post['address_id'])) {
            $order = Order::updateAddress($order_code, $post['address_id'], $post['address_detail'],$admin_id);
            if(isset($order->errors['order_address'])) {
                return ['status' => 2, 'info' => '修改失败','address_error'=>$order->errors['order_address']];
            }else if ($order->hasErrors()) {
                return ['status' => 0, 'info' => '修改失败','errors'=>$order->errors];
            } else {
                return ['status' => 1, 'info' => '修改成功','address'=>$order->order_address];
            }
        }else{
            return ['status' => 3, 'info' => '修改失败'];
        }
    }

    public function actionUpdateCustomerNeed($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $post = Yii::$app->request->post();
        $admin_id = Yii::$app->user->id;
        $order_code = $id;
        if(isset($post['order_customer_memo'])&&isset($post['order_cs_memo'])&&isset($post['order_customer_need'])) {
            if(Order::updateCustomerNeed($order_code, $post['order_customer_memo'], $post['order_cs_memo'],$post['order_customer_need'],$admin_id)){
                return ['status' => 1, 'info' => '修改成功'];
            }else{
                return ['status' => 0, 'info' => '修改失败'];
            }
        }else{
            return ['status' => 3, 'info' => '修改失败'];
        }
    }


    /**
     * 订单指派页面
     * @return string
     */
    public function actionAssign()
    {
        $kpiModel = new OrderDispatcherKpi();
        $model = $kpiModel->queryHistoricalKpi(yii::$app->user->id,strtotime(date('y-m-d')));
        $is_mini_boss = Yii::$app->user->identity->isMiNiBoss();
        if(!$is_mini_boss) {
            $model->non_assign_order_count = OrderManualAssign::getWaitAssignOrdersCount(Yii::$app->user->identity->shopDistrictIds);
        }
        return $this->render('assign', [
            'model' => $model,
            'is_mini_boss' => $is_mini_boss
        ]);
    }

    /**
     * 不能指派
     * @return array|bool
     */
    public function actionCanNotAssign()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id = Yii::$app->request->get('order_id');
        return Order::manualAssignUndone($order_id, Yii::$app->user->id, true);
    }

    /**
     * 指派
     * @return array|bool
     */
    public function actionDoAssign()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id = Yii::$app->request->post('order_id');
        $worker_id = Yii::$app->request->post('worker_id');
        $is_mini_boss = Yii::$app->user->identity->isMiNiBoss();
        return Order::manualAssignDone($order_id, $worker_id, Yii::$app->user->id, !$is_mini_boss);
    }

    /**
     * 阿姨拒单
     * @return bool
     */
    public function actionWorkerRefuse()
    {
        $order_id = Yii::$app->request->post('order_id');
        $worker_id = Yii::$app->request->post('worker_id');
        $memo = Yii::$app->request->post('memo');
        return OrderWorkerRelation::workerRefuse($order_id, $worker_id, Yii::$app->user->id, $memo);
    }

    /**
     * 联系阿姨未响应
     * @return bool
     */
    public function actionWorkerContactFailure()
    {
        $order_id = Yii::$app->request->post('order_id');
        $worker_id = Yii::$app->request->post('worker_id');
        return OrderWorkerRelation::workerContactFailure($order_id, $worker_id, Yii::$app->user->id);
    }


    /**
     * 添加修改客户地址
     * @param $address_id
     * @return array
     */
    public function actionSaveAddress($address_id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $province_id = Yii::$app->request->post('province_id');
        $city_id = Yii::$app->request->post('city_id');
        $county_id = Yii::$app->request->post('county_id');
        $province_name = Yii::$app->request->post('province_name');
        $city_name = Yii::$app->request->post('city_name');
        $county_name = Yii::$app->request->post('county_name');
        $detail = Yii::$app->request->post('detail');
        $nickname = Yii::$app->request->post('nickname');
        $phone = Yii::$app->request->post('phone');
        $customer_id = Yii::$app->request->post('customer_id');
        if(!empty($province_name) && !empty($city_name) && !empty($county_name) && !empty($detail)) {
            if ($address_id > 0) {
                //修改
                $address = CustomerAddress::updateAddress($address_id, $province_name, $city_name, $county_name, $detail, $nickname, $phone);
            } else {
                //添加
                $address = CustomerAddress::addAddress($customer_id, $province_name, $city_name, $county_name, $detail, $nickname, $phone);
            }
            if ($address) {
                return ['code' => 200, 'data' => $address];
            }
        }
        return ['code' => 500, 'error' => '保存失败'];
    }


    /**
     * Deletes an existing Order model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Order model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $code
     * @return Order the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($code)
    {
        if (($model = OrderSearch::getOneByCode($code)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

}