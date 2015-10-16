<?php

namespace boss\controllers;
use Yii;
//use common\models\Customer;
use boss\models\CustomerSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

// use common\models\CustomerAddress;
// use common\models\CustomerPlatform;
// use common\models\CustomerChannal;
// use common\models\OperationCity;
// use common\models\GeneralRegion;
// use common\models\CustomerExtBalance;
// use common\models\CustomerExtScore;
// use common\models\OrderExtCustomer;
// use common\models\CustomerComment;

use core\models\customer\Customer;
use core\models\customer\CustomerBlockLog;
use core\models\customer\CustomerAddress;
use core\models\customer\CustomerExtSrc;
use core\models\customer\CustomerExtBalance;
use core\models\customer\CustomerExtScore;
use core\models\customer\CustomerComment;
/**
 * CustomerController implements the CRUD actions for Customer model.
 */
class CustomerController extends Controller
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
     * Lists all Customer models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new CustomerSearch;

        $params = Yii::$app->request->getQueryParams();
        $dataProvider = $searchModel->search($params);
        $dataProvider->query->orderBy(['created_at' => SORT_DESC ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }

    /**
     * Lists all Customer models.
     * @return mixed
     */
    public function actionBlock()
    {
        $searchModel = new CustomerSearch;
        $params = Yii::$app->request->getQueryParams();
        $dataProvider = $searchModel->search($params);
        return $this->render('block', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }

    public function actionSwitchBlock(){
        $id = Yii::$app->request->get('id');

        $customer = Customer::find()->where(['id'=>$id])->one();
        $is_del = $customer->is_del;
        $is_del = $is_del ? 0 : 1;
        $customer->is_del = $is_del;
        $customer->validate();
        if ($customer->hasErrors()) {
            var_dump($customer->getErrors());
            exit();
        }
        $customer->save();
        if ($customer->is_del == 1) {
            return $this->redirect(['/customer/block', 
                'CustomerSearch'=>['is_del'=>1]]);
        }
        if ($customer->is_del == 0){
            return $this->redirect(['/customer/index', 
                'CustomerSearch'=>['is_del'=>0]]);
        }
    }

    

    /**
     * Displays a single Customer model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        $searchModel = new CustomerSearch;
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('view', [
                'model' => $model, 
                'searchModel'=>$searchModel,
                ]);
        }
    }

    /**
     * Creates a new Customer model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Customer;
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Customer model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $customerBalance = CustomerExtBalance::find()->where([
            'customer_id'=>$id,
            ])->one();
        if ($customerBalance == NULL) {
            $customerBalance = new CustomerExtBalance;
        }

        $customerScore = CustomerExtScore::find()->where([
            'customer_id'=>$id,
            ])->one();
        if ($customerScore == NULL) {
            $customerScore = new CustomerExtScore;
        }

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
                'customerBalance'=>$customerBalance,
                'customerScore'=>$customerScore,
            ]);
        }
    }

    /**
     * Deletes an existing Customer model.
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
     * Finds the Customer model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Customer the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Customer::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    /*
     * 创建客户封号信息
     * @param customerId 客户Id
     * @return empty
     */
    public function actionAddToBlock($id){

        $model = $this->findModel($id);
        if(\Yii::$app->request->post()){
            $block_reason =\Yii::$app->request->post('customer_del_reason','');
            $is_added = CustomerBlockLog::addToBlock($id, $block_reason);
            if ($is_added) {
                return $this->redirect(['index']);
            }else{
                return $this->renderAjax('add-to-block',['model'=>$model]);
            }
        }
        return $this->renderAjax('add-to-block',['model'=>$model]);
    }

    /*
     * 客户从黑名单中删除
     * @param customer_id 客户Id
     * @return empty
     */
    public function actionRemoveFromBlock($id){
        $is_removed = CustomerBlockLog::removeFromBlock($id);
        return $this->redirect(['index']);
    }

    /**
     * 批量加入黑名单
     */
    public function actionMultiAddToBlock(){
        // $ids_str = \Yii::$app->request->get('ids_str', '');
        // $ids_arr = explode(',', trim($ids_str, ','));
        $ids_arr = \Yii::$app->request->post('ids', '');
        // var_dump($ids);
        // exit();
        if(\Yii::$app->request->post()){
            $block_reason =\Yii::$app->request->post('customer_del_reason','');
            if (!empty($ids_arr)) {
                foreach ($ids_arr as $id) {
                    $is_added = CustomerBlockLog::addToBlock($id, $block_reason);
                }
            }
            return $this->redirect(['index']);
        }
        return $this->renderAjax('multi-add-to-block',['ids_str'=>$ids_str]);
    }

    /**
     * 批量从黑名单中删除
     */
    public function actionMultiRemoveFromBlock(){
        $ids_str = \Yii::$app->request->get('ids_str', '');
        $ids_arr = explode(',', trim($ids_str, ','));
        if (!empty($ids_arr)) {
            foreach ($ids_arr as $id) {
                $is_removed = CustomerBlockLog::RemoveFromBlock($id, $block_reason);
            }
        }
        return $this->redirect(['index']);
    }

    /**
     * 修改客户订单服务地址
     */
    public function actionUpdateCustomerAddresses($customer_id){
        $customerAddressModel = CustomerAddress::findAll(['customer_id'=>$customer_id]);
        // var_dump($customer_id);
        // var_dump($customerAddressModel);
        // exit();
        if(\Yii::$app->request->post()){
            // $customerModel->is_del = 0;
            // $customerModel->customer_del_reason = '';
            // $customerModel->updated_at = time();
            // $customerModel->validate();
            // if ($customerModel->hasErrors()) {
            //     return $this->renderAjax('remove_from_block',['customerModel'=>$customerModel,]);
            // }
            // $customerModel->save();

            foreach ($customerAddressModel as $customerAddress) {
                // $customerAddress->customer_id 
                // $customerAddress->general_region_id
                // $customerAddress->customer_address_detail
                // $customerAddress->customer_address_status
                // $customerAddress->customer_address_longitude
                // $customerAddress->customer_address_latitude
                // $customerAddress->customer_address_phone
                // $customerAddress->customer_address_nickname
                // $customerAddress->is_del
                // $customerAddress->created_at
                // $customerAddress->updated_at
            }
            return $this->redirect(['index', 'CustomerSearch'=>['is_del'=>0]]);
        }else{
            return $this->render('update-customer-addresses',['customerAddressModel'=>$customerAddressModel]);
        }
    }

    public $global_cur_page_no = 1;
    public function actionData(){
        // set_time_limit(30 * 1000); 
        ini_set("max_execution_time", 30000);
        $connectionNew =  \Yii::$app->db;
        $connection = new \yii\db\Connection([
            'dsn' => 'mysql:host=rdsh52vh252q033a4ci5.mysql.rds.aliyuncs.com;dbname=sq_ejiajie_v2',
            'username' => 'sq_ejiajie',
            'password' => 'test_sq_ejiajie',
        ]);
        $connection->open();
        $command = $connection->createCommand("SELECT count(*) FROM user_info");
        $count = $command->queryScalar();
        echo "<br/>顾客总记录数为" . $count;
        $numPerPage = 20;
        $totalPage = $count <= 0 ? 0 : floor($count / $numPerPage) + 1;
        $curPageNo = $this->global_cur_page_no;
        $start_page_no = $this->global_cur_page_no;
        $end_page_no = $this->global_cur_page_no + 50;
        $success_count = 0;
        while ($curPageNo <= $totalPage && $curPageNo < $end_page_no) {
            $start = $numPerPage * ($curPageNo - 1);
            $command = $connection->createCommand("SELECT * FROM user_info order by id asc limit ".$start.", ".$numPerPage);
            $userInfo = $command->queryAll();

            foreach($userInfo as $val){
                $customer = new Customer;
                // $customer->id = $val['id'];
                $customer->customer_name = $val['name'];
                $customer->customer_sex = $val['gender'];
                $customer->customer_birth = intval(strtotime($val['birthday']));
                $customer->customer_photo = '';
                $customer->customer_phone = $val['telphone'];
                $customer->customer_email = $val['email'];

                $customer->operation_area_id = 0;
                $customer->operation_city_id = 0;
                $customer->general_region_id = 1;
                $customer->customer_live_address_detail = $val['street'];
                
                // $customer->customer_balance = $val['charge_money'];
                // $customer->customer_score = 0;
                $customer->customer_level = $val['level'];
                $customer->customer_complaint_times = 0;
                
                $customer->customer_src = intval($val['user_src']);
                $customer->channal_id = 0;
                $customer->platform_id = 0;
                $customer->customer_login_ip = '';
                $customer->customer_login_time = 0;
                $customer->customer_is_vip = $val['user_type'];
                $customer->created_at = intval(strtotime($val['create_time']));
                $customer->updated_at = intval(strtotime($val['update_time']));
                $customer->is_del = $val['is_block'];
                $customer->customer_del_reason = '辱骂阿姨';
                $customer->validate();
                if ($customer->hasErrors()) {
                    // var_dump($customer->getErrors());
                    // die();
                    echo "<br/>数据有误略过";
                    continue;
                }
                $customer->save();

                $customerBalance = new CustomerExtBalance;
                $customerBalance->customer_id = $customer->id;
                $customerBalance->customer_balance = $val['charge_money'];
                $customerBalance->created_at = time();
                $customerBalance->updated_at = 0;
                $customerBalance->is_del = 0;
                $customerBalance->validate();
                if ($customerBalance->hasErrors()) {
                    // var_dump($customerBalance->getErrors());
                    // die();
                    echo "<br/>数据有误略过";
                    continue;
                }
                $customerBalance->save();

                $customerScore = new CustomerExtScore;
                $customerScore->customer_id = $customer->id;
                $customerScore->customer_score = 0;
                $customerBalance->created_at = time();
                $customerBalance->updated_at = 0;
                $customerBalance->is_del = 0;
                $customerScore->validate();
                if ($customerScore->hasErrors()) {
                    // var_dump($customerScore->getErrors());
                    // die();
                    echo "<br/>数据有误略过";
                    continue;
                }
                $customerScore->save();

                $command = $connection->createCommand("SELECT * FROM user_comment where id=".$val['id']);
                $userComment = $command->queryAll();
                if ($userComment) {
                    // print_r($userComment);
                    // exit();
                    $customerComment = new CustomerComment;
                    $customerComment->customer_id = $customer->id;
                    $customerComment->order_id = $userComment[0]['order_id'];
                    $customerComment->customer_comment_phone = $userComment[0]['user_telephone'];
                    $customerComment->customer_comment_content = $userComment[0]['comment'];
                    $customerComment->customer_comment_star_rate = $userComment[0]['star_rate'];
                    
                    switch ($userComment[0]['is_anonymous']) {
                        case 1:
                            $customer_comment_anonymous = 0;
                            break;
                        case 0:
                            $customer_comment_anonymous = 1;
                            break;
                        
                        default:
                            # code...
                            break;
                    }
                    $customerComment->customer_comment_anonymous = $customer_comment_anonymous;
                    $customerComment->customer_comment_anonymous = $userComment[0]['is_anonymous'];
                    $customerComment->created_at = strtotime($userComment[0]['create_time']);
                    $customerComment->is_del = $userComment[0]['is_hide'];
                    $customerComment->validate();
                    if ($customerComment->hasErrors()) {
                        // var_dump($customerComment->getErrors());
                        // die();
                        echo "<br/>数据有误略过";
                        continue;
                    }
                    $customerComment->save();
                }
                
                $customerAddress = new CustomerAddress;
                $customerAddress->customer_id = $customer->id;
                $customerAddress->general_region_id = 191;
                $customerAddress->customer_address_detail = 'SOHO一期2单元908';
                $customerAddress->customer_address_status = 1;
                $customerAddress->customer_address_longitude = '';
                $customerAddress->customer_address_latitude = '';
                $customerAddress->customer_address_nickname = '测试昵称';
                $customerAddress->customer_address_phone = '18519651111';
                $customerAddress->created_at = time();
                $customerAddress->updated_at = 0;
                $customerAddress->is_del = 0;
                if ($customerAddress->hasErrors()) {
                    var_dump($customer->getErrors());
                    die();
                }
                $customerAddress->save();

                // $customer_id = $customer->id;
                // $command = $connection->createCommand("SELECT * FROM user_address where user_id=".$val['id']." order by id asc");
                // $userAddress = $command->queryAll();

                // foreach ($userAddress as $value) {
                //     $customerAddress = new CustomerAddress;
                //     $customerAddress->customer_id = $customer_id;
                //     $customerAddress->general_region_id = $customer->general_region_id;
                //     $customerAddress->customer_address_detail = $value['place_detail'];
                //     $customerAddress->customer_address_status = $value['is_hidden'];
                //     $customerAddress->customer_address_longitude = $value['lng'];
                //     $customerAddress->customer_address_latitude = $value['lat'];
                //     $customerAddress->customer_address_nickname = $customer->customer_name;
                //     $customerAddress->customer_address_phone = $customer->customer_phone;
                //     $customerAddress->created_at = intval(strtotime($value['create_time']));
                //     $customerAddress->updated_at = 0;
                //     $customerAddress->is_del = 0;
                //     if ($customerAddress->hasErrors()) {
                //         var_dump($customer->getErrors());
                //         die();
                //     }
                //     $customerAddress->save();
                // }
                // unset($customerComment);
                // unset($customerScore);
                // unset($customerBalance);
                // unset($customer);
                $success_count ++;
                echo "<br/>成功导入".$success_count."条数据，原id=".$val['id']."现在id=".$customer->id;
            }
            echo "<br/>成功导入" . $numPerPage * $curPageNo;
            $curPageNo ++;
            $this->global_cur_page_no = $curPageNo;
        }
        
        // $connectionNew->createCommand()->batchInsert('ejj_customer_channal', ['channal_name', 'pid', 'created_at', 'updated_at', 'is_del'], [
        //     ['美团', 0, time(), 0, 0],
        //     ['大众', 0, time(), 0, 0],
        //     ['支付宝', 0, time(), 0, 0],
        // ])->execute();
        // echo "customer_channal数据导入成功";

        // $connectionNew->createCommand()->batchInsert('ejj_customer_platform', ['platform_name', 'pid', 'created_at', 'updated_at', 'is_del'], [
        //     ['Android', 0, time(), 0, 0],
        //     ['IOS', 0, time(), 0, 0],
        // ])->execute();
        // echo "customer_platform数据导入成功";
        echo "<br/>customer数据导入成功";
    }

    public function actionData2(){
        // set_time_limit(30 * 1000); 
        ini_set("max_execution_time", 30000);
        $connectionNew =  \Yii::$app->db;
        $connection = new \yii\db\Connection([
            'dsn' => 'mysql:host=rdsh52vh252q033a4ci5.mysql.rds.aliyuncs.com;dbname=sq_ejiajie_v2',
            'username' => 'sq_ejiajie',
            'password' => 'test_sq_ejiajie',
        ]);
        $connection->open();
        $command = $connection->createCommand("SELECT count(*) FROM user_info");
        $count = $command->queryScalar();
        echo "<br/>顾客总记录数为" . $count;
        
        $command = $connection->createCommand("SELECT * FROM user_info order by id asc");
        $userInfo = $command->queryAll();

        $customerArr = array();
        $customerBalanceArr = array();
        $customerScoreArr = array();
        $customerCommentArr = array();
        foreach($userInfo as $val){
            $customerArr[]['id'] = intval($val['id']);
            $customerArr[]['customer_name'] = $val['name'];
            $customerArr[]['customer_sex'] = $val['gender'];
            $customerArr[]['customer_birth'] = intval(strtotime($val['birthday']));
            $customerArr[]['customer_photo'] = '';
            $customerArr[]['customer_phone'] = $val['telphone'];
            $customerArr[]['customer_email'] = $val['email'];
            $customerArr[]['operation_area_id'] = 0;
            $customerArr[]['operation_city_id'] = 0;
            $customerArr[]['general_region_id'] = 1;
            $customerArr[]['customer_live_address_detail'] = $val['street'];
            $customerArr[]['customer_level'] = $val['level'];
            $customerArr[]['customer_complaint_times'] = 0;
            $customerArr[]['customer_src'] = intval($val['user_src']);
            $customerArr[]['channal_id'] = 0;
            $customerArr[]['platform_id'] = 0;
            $customerArr[]['customer_login_ip'] = '';
            $customerArr[]['customer_login_time'] = 0;
            $customerArr[]['customer_is_vip'] = $val['user_type'];
            $customerArr[]['created_at'] = intval(strtotime($val['create_time']));
            $customerArr[]['updated_at'] = intval(strtotime($val['update_time']));
            $customerArr[]['is_del'] = $val['is_block'];
            $customerArr[]['customer_del_reason'] = '辱骂阿姨';

            // $customerBalanceArr[]['id'] = intval($val['id']);
            $customerBalanceArr[]['customer_id'] = $val['id'];
            $customerBalanceArr[]['customer_balance'] = $val['charge_money'];
            $customerBalanceArr[]['created_at'] = time();
            $customerBalanceArr[]['updated_at'] = 0;
            $customerBalanceArr[]['is_del'] = 0;
           
            // $customerScoreArr[]['id'] = intval($val['id']);
            $customerScoreArr[]['customer_id'] = $val['id'];
            $customerScoreArr[]['customer_score'] = 0;
            $customerScoreArr[]['created_at'] = time();
            $customerScoreArr[]['updated_at'] = 0;
            $customerScoreArr[]['is_del'] = 0;

            $command = $connection->createCommand("SELECT * FROM user_comment where id=".$val['id']);
            $userComment = $command->queryAll();
            if ($userComment) {
                // $customerCommentArr[]['id'] = intval($val['id']);
                $customerCommentArr[]['customer_id'] = intval($val['id']);;
                $customerCommentArr[]['order_id'] = $userComment[0]['order_id'];
                $customerCommentArr[]['customer_comment_phone'] = $userComment[0]['user_telephone'];
                $customerCommentArr[]['customer_comment_content'] = $userComment[0]['comment'];
                $customerCommentArr[]['customer_comment_star_rate'] = $userComment[0]['star_rate'];
                switch ($userComment[0]['is_anonymous']) {
                    case 1:
                        $customer_comment_anonymous = 0;
                        break;
                    case 0:
                        $customer_comment_anonymous = 1;
                        break;
                    
                    default:
                        # code...
                        break;
                }
                $customerCommentArr[]['customer_comment_anonymous'] = $customer_comment_anonymous;
                $customerCommentArr[]['created_at'] = strtotime($userComment[0]['create_time']);
                $customerCommentArr[]['updated_at'] = 0;
                $customerCommentArr[]['is_del'] = 0;
            }
        }
        $connectionNew->createCommand()->batchInsert('{{%customer}}',$customerArr[0], $customerArr)->execute();
        $connectionNew->createCommand()->batchInsert('{{%customer_ext_balance}}',$customerBalanceArr[0], $customerBalanceArr)->execute();
        $connectionNew->createCommand()->batchInsert('{{%customer_ext_score}}',$customerScoreArr[0], $customerScoreArr)->execute();
        $connectionNew->createCommand()->batchInsert('{{%customer_comment}}',$customeCommentArr[0], $customerCommentArr)->execute();
        echo "<br/>customer数据导入成功";
    }

    public function actionData3(){
        $customer = Customer::find()->orderBy('id asc')->one();
        $customer_id = $customer->id;
        $res = CustomerAddress::addAddress($customer_id, 191, 'SOHO一期2单元908', '测试昵称', '18519999999');
        $res = CustomerAddress::addAddress($customer_id, 191, 'SOHO一期2单元719', '测试昵称', '18519999999');
        
    }

    public function actionTest(){
        // $customer = new Customer;
        // $res = $customer->decBalance(1, 0.01);
        // var_dump($res);

        // $test = new Customer;
        // $info = $test->incBalance(202, 10);
        // var_dump($info);

        // $res = \common\models\CustomerBlockLog::addToBlock(17782, '测试');
        // var_dump($res);
        $res = \core\models\customer\CustomerCode::generateAndSend('18519654001');
        var_dump($res);

        // $res = \core\models\customer\CustomerCode::checkCode('18519654001', '9906');
        // var_dump($res);

        // $res = \core\models\customer\CustomerAccessToken::generateAccessToken('18519654001', '9906');
        // var_dump($res);

        // $res = \core\models\customer\CustomerAccessToken::getCustomer('19647829599d11c786cd95ea93896b1f');
        // var_dump($res);
    }
}
