<?php
namespace restapi\controllers;

use Yii;
use \core\models\customer\CustomerAccessToken;
use \core\models\worker\Worker;
use \restapi\models\Worker as ApiWorker;
use \core\models\worker\WorkerSkill;
use \core\models\worker\WorkerVacationApplication;
use \core\models\finance\FinanceSettleApplySearch;
use \core\models\order\OrderComplaint;
use \core\models\customer\CustomerComment;
use \core\models\worker\WorkerTaskLog;
use \core\models\order\OrderSearch;

class WorkerController extends \restapi\components\Controller
{
    /**
     * @api {GET} /worker/worker-info 查看阿姨信息 (田玉星 100%)
     *
     * @apiName WorkerInfo
     * @apiGroup Worker
     *
     * @apiParam {String} access_token 用户登录token
     * @apiParam {String} [worker_id]  阿姨id
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/worker-info
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": "ok",
     *      "msg": "阿姨信息查询成功",
     *      "ret": {
     *          "worker_name": "李刘珍",
     *          "worker_phone": "13121999270",
     *          "head_url": "",
     *          "worker_identity": "兼职",
     *          "worker_role": "保姆",
     *          "worker_start": 4.5,
     *          "personal_skill": [
     *              "煮饭",
     *              "开荒",
     *              "护老",
     *              "擦玻璃",
     *              "带孩子"
     *          ]
     *        }
     *     } 
     *
     * @apiError UserNotFound 用户认证已经过期.
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     {
     *       "code": "error",
     *       "msg": "用户认证已经过期,请重新登录，"
     *     }
     */
    public function actionWorkerInfo()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        if (!isset($param['access_token']) || !$param['access_token'] || !isset($param['worker_id']) || !$param['worker_id'] || !CustomerAccessToken::checkAccessToken($param['access_token'])) {
            return $this->send(null, "用户认证已经过期,请重新登录", 0, 403);
        }
        // 按阿姨id获取阿姨信息
        $workerId = intval($param['worker_id']);
        if ($workerId ) {
            $workerInfo = Worker::getWorkerDetailInfo($workerId);
            //数据整理
            if(!empty($workerInfo)){
                $ret = [
                    "worker_name" => $workerInfo['worker_name'],
                    "worker_phone" => $workerInfo['worker_phone'],
                    "head_url" => $workerInfo['worker_photo'],
                    "worker_identity" => $workerInfo['worker_identity_description'],//身份
                    "worker_role" => $workerInfo["worker_type_description"],
                    'worker_start' => $workerInfo["worker_star"],
                    'total_money' => $workerInfo['worker_stat_order_money'],
                    "personal_skill" => WorkerSkill::getWorkerSkill($workerId),
                ];
                return $this->send($ret, "阿姨信息查询成功");
            }
        }
        return $this->send(null, "阿姨不存在.", 0, 403);
    }

    /**
     * @api {POST} /worker/handle-worker-leave  阿姨请假（田玉星 100%）
     *
     * @apiName actionHandleWorkerLeave
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录 token.
     * @apiParam {String} [platform_version] 平台版本号.
     * @apiParam {String} leave_time 请假时间.eg:2015-09-10_2015-09-20
     * @apiParam {String} leave_type 请假类型
     * .
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/handle-worker-leave
     *
     * @apiSuccessExample {json} Success-Response:
     *  HTTP/1.1 200 OK
     * {
     *   "code": 0,
     *   "msg": "请假时间不在请假时间范围内",
     *   "ret": null
     *   }
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"0",
     *      "msg": "阿姨不存在",
     *      "ret": null
     *  }
     */
    public function actionHandleWorkerLeave()
    {
        $param = Yii::$app->request->post() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }
        //判断数据完整
        if(!isset($param['leave_type']) || !$param['leave_type']){
            return $this->send(null, "数据不完整,请选择请假类型", 0, 403);
        }
        if (!in_array($param['leave_type'], array(1, 2))) {
            return $this->send(null, "请假类型不正确", 0, 403);
        }
        $vacationType = intval($param['leave_type']);
        //请假时间
        if (!isset($param['leave_time']) || !$param['leave_time']) {
            return $this->send(null, "数据不完整,请选择请假时间", 0, 403);
        }
        try{
            $workerInfo = Worker::getWorkerListByIds($checkResult['worker_id'],'worker_identity_id');
            if($workerInfo[0]['worker_identity_id']!=1) return $this->send(null, "只有全职阿姨才可以申请请假", 0, 403);
            $vacationTimeLine = WorkerVacationApplication::getApplicationTimeLine($checkResult['worker_id'],$vacationType);
         }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        $vacationTimeArr = explode("_",$param['leave_time']);
        $vacationTime = array_keys($vacationTimeLine);
        //根据请假类型判断请假时间合法性
        $firstDay = $vacationTimeArr[0];
        $secondDay = isset($vacationTimeArr[1])?$vacationTimeArr[1]:"";
        if(!in_array($firstDay, $vacationTime)||!$vacationTimeLine[$firstDay]){
            return $this->send(null, "请假时间不在请假时间范围内", 0, 403);
        }
        if($vacationType==1&&count($vacationTimeArr)>2){
            return $this->send(null, "休假最多只能选择两天", 0, 403);
        }
        if($vacationType==2&&count($vacationTimeArr)>1){
            return $this->send(null, "事假最多只能选择一天", 0, 403);
        }
        //休假或者事假申请（一天）
        if(!WorkerVacationApplication::createVacationApplication($checkResult['worker_id'],$firstDay,$vacationType)){
            return $this->send(null, "请假申请失败", 0, 403);
        }
        //如果选择休假且选择了两天
        if($vacationType==1&&$secondDay){//休假
            if(!in_array($secondDay, $vacationTime)||!$vacationTimeLine[$secondDay]){
                return $this->send(null, "请假时间不在请假时间范围内", 0, 403);
            }
            if(!WorkerVacationApplication::createVacationApplication($checkResult['worker_id'],$secondDay,$vacationType)){
                return $this->send(null, "请假申请失败", 0, 403);
            }
        }
        return $this->send(null, "您的请假已提交，请耐心等待审批");
        
    }

    /**
     * @api {GET} /worker/get-worker-leave-history  查看阿姨请假历史（田玉星 100%）
     *
     * @apiName actionGetWorkerLeaveHistory
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录 token.
     * @apiParam {String} per_page   页码数
     * @apiParam {String} page_num   每页显示数
     * @apiParam {String} [platform_version] 平台版本号.
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-leave-history
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *   "code": 1,
     *   "msg": "操作成功",
     *   "ret": {
     *       "per_page": 1,
     *       "page_num": 1,
     *       "data": [
     *           {
     *               "leave_type": "休假",
     *               "leave_time": "2015-10-30",
     *               "leave_status": "待审核"
     *           }
     *       ]
     *      }
     *   }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "阿姨不存在"
     *  }
     *
     */
    public function actionGetWorkerLeaveHistory()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        //判断页码
        if (!isset($param['per_page']) || !intval($param['per_page'])) {
            $param['per_page'] = 1;
        }
        $per_page = intval($param['per_page']);
        //每页显示数据数
        if (!isset($param['page_num']) || !intval($param['page_num'])) {
            $param['page_num'] = 10;
        }
        $page_num = intval($param['page_num']);

        //调取阿姨请假历史情况
        $data = WorkerVacationApplication::getApplicationList($checkResult['worker_id'],$per_page,$page_num);
        $pageData = array();
        if($data['data']){
            foreach($data['data'] as $key => $val){
                $pageData[$key]['leave_type'] = $val['worker_vacation_application_type']==1?"休假":"事假";
                $pageData[$key]['leave_time'] =  date('Y-m-d',$val['worker_vacation_application_start_time']);
                switch($val['worker_vacation_application_approve_status']){
                    case "0":
                        $pageData[$key]['leave_status'] = "待审核";
                        break;
                    case "1":
                        $pageData[$key]['leave_status'] = "审核通过";
                        break;
                    case "2":
                        $pageData[$key]['leave_status'] = "审核不通过";
                        break;
                    default :
                        $pageData[$key]['leave_status'] = "未知";
                }
            }
        } 
        $ret = [
            'per_page'=> $data['page'],
            'page_num'=> $data['pageNum'],
            'data'    => $pageData
        ];
        return $this->send($ret, "操作成功");
    }

    /**
     * @api {GET} /worker/get-worker-place-by-id  获取阿姨住址(田玉星 100% )
     *
     * @apiName actionGetWorkerPlaceById
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录token.
     * @apiParam {String} [platform_version] 平台版本号.
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-place-by-id
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg":"查询地址成功",
     *      "ret":
     *      {
     *          "live_place": "北京市密云县密云"
     *      }
     * }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "阿姨不存在"
     *  }
     *
     */
    public function actionGetWorkerPlaceById()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }
        $workerInfo = Worker::getWorkerDetailInfo($checkResult['worker_id']);
        $ret = array(
            "live_place" => $workerInfo['worker_live_place']
        );
        return $this->send($ret, "操作成功.");
    }

    /**
     * @api {GET} /worker/get-worker-comment 获取阿姨对应的评论 (田玉星 100%)
     *
     * @apiDescription 【备注：等待model底层支持】
     *
     * @apiName actionGetWorkerComment
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} comment_level   评论类型 【1：满意 2：一般 3：差评】
     * @apiParam {String} per_page   页码数
     * @apiParam {String} page_num   每页显示数
     * @apiParam {String} [platform_version] 平台版本号.
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-comment
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     *   {
     *       "code": 1,
     *       "msg": "操作成功.",
     *       "ret": {
     *           "per_page": 1,
     *           "page_num": 10,
     *           "data": [
     *               {
     *                   "comment_id": "1",
     *                   "comment_content": "这是第一条评论类型为评论",
     *                   "comment_time": "2015-10-27"
     *               }
     *           ]
     *       }
     *   }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function  actionGetWorkerComment()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        //判断评论类型
        if (!isset($param['comment_level']) || !intval($param['comment_level']) || !in_array($param['comment_level'], array(1, 2, 3))) {
            return $this->send(null, "评论类型不正确", 0, 403);
        }
        //判断页码
        if (!isset($param['per_page']) || !intval($param['per_page'])) {
            $param['per_page'] = 1;
        }
        $per_page = intval($param['per_page']);
        //每页显示数
        if (!isset($param['page_num']) || !intval($param['page_num'])) {
            $param['page_num'] = 10;
        }
        $page_num = intval($param['page_num']);
        //获取数据
        $retData = array();
        try{
            $commentList = CustomerComment::getCustomerCommentworkerlist($checkResult['worker_id'],$param['comment_level'],$per_page,$page_num);
            if($commentList){
                foreach($commentList as $key=>$val){
                    $retData[$key]['comment_id'] = $val['id'];
                    $retData[$key]['comment_content'] = $val['customer_comment_content'];
                    $retData[$key]['comment_time'] = date('Y-m-d',$val['created_at']);
                }
            }
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        $ret = [
            'per_page'=>$per_page,
            'page_num'=>$page_num,
            'data'=>$retData
        ];
        return $this->send($ret, "操作成功.");
    }

    /**
     * @api {GET} /worker/get-worker-complain 获取阿姨对应的投诉 (田玉星 100%)
     *
     * @apiName actionGetWorkerComplain
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} per_page    第几页
     * @apiParam {String} page_num   每页显示的数据数量
     * @apiParam {String} [platform_version] 平台版本号.
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-complain
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *   "code": 1,
     *   "msg": "操作成功.",
     *   "ret": {
     *       "per_page": 1,
     *       "page_num": 10,
     *       "worker_is_block":1,
     *       "data": [
     *           {
     *               "complaint_content": "打扫不干净",
     *               "complaint_time": "1970-01-01 08:00:00"
     *           }
     *       ]
     *   }
     *   }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionGetWorkerComplain()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        //判断页码
        if (!isset($param['per_page']) || !intval($param['per_page'])) {
            $param['per_page'] = 1;
        }
        $per_page = intval($param['per_page']);
        //每页显示数据量
        if (!isset($param['page_num']) || !intval($param['page_num'])) {
            $param['page_num'] = 10;
        }
        $page_num = intval($param['page_num']);
        try{
            $workerInfo = Worker::getWorkerListByIds($checkResult['worker_id'],'worker_is_block');
            $worker_is_block = $workerInfo[0]['worker_is_block'];   
            $conplainList = OrderComplaint::getWorkerComplain($checkResult['worker_id']);
            if($conplainList){
                foreach($conplainList as $key=>$val){
                    $conplainList[$key]['complaint_time'] = date('Y-m-d H:i:s',$val['complaint_time']);
                }
            }
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        //数据返回
        $ret = [
            'per_page'=>$per_page,
            'page_num'=>$page_num,
            'worker_is_block'=> $worker_is_block,
            'data'  => $conplainList
        ];
        return $this->send($ret, "操作成功.");
    }

    /**
     * @api {GET} /worker/get-worker-service-info 获取账单阿姨服务信息 (田玉星 100%)
     * 
     * @apiName actionGetWorkerServiceInfo
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} [platform_version] 平台版本号.
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-service-info
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg": "操作成功.",
     *      "ret": [
     *             "worker_name": "张",
     *             "order_count": "60",
     *             "service_family_count": "60",
     *             "worker_income"=>"23888.00"
     *      ]
     * }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionGetWorkerServiceInfo()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
         //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }
        //获取数据
        try{
            $service = FinanceSettleApplySearch::getWorkerIncomeSummaryInfoByWorkerId($checkResult['worker_id']);
            $workerInfo = Worker::getWorkerStatInfo($checkResult['worker_id']);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        //数据整理返回
        $ret = [
            "worker_name" => $service['worker_name'],
            "order_count" => $service['all_order_count'],
            "worker_income" => $service['all_worker_money'],
            "service_family_count" => $workerInfo['worker_stat_server_customer']
        ];
        return $this->send($ret, "操作成功.");

    }

    /**
     * @api {GET} /worker/get-worker-bill-list 获取阿姨对账单列表 (田玉星 100%)
     * 
     * @apiName actionGetWorkerBillList 
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} per_page  每页显示多少条.
     * @apiParam {String} page  第几页.
     * @apiParam {String} [platform_version] 平台版本号.
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-bill-list
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg": "操作成功.",
     *      "ret": [
     *      {
     *         "settle_id"=>"32"
     *         'settle_type' =>"1",
     *         'settle_year' =>"2014"
     *         'settle_time'=>'09年07月-09月13日',
     *         'settle_type' =>1,
     *         'order_count'=>'10',
     *         'worker_income'=>'320.00',
     *         'settle_status'=>"1"
     *       }
     *      ]
     *       
     * }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionGetWorkerBillList()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        //判断页码
        if (!isset($param['per_page']) || !intval($param['per_page'])) {
            $param['per_page'] = 1;
        }
        $per_page = intval($param['per_page']);
        //每页显示数据量
        if (!isset($param['page_num']) || !intval($param['page_num'])) {
            $param['page_num'] = 10;
        }
        $page_num = intval($param['page_num']);
        //调取model层
        try{
            $billList = FinanceSettleApplySearch::getSettledWorkerIncomeListByWorkerId($checkResult['worker_id'],$per_page,$page_num);
         }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        
        $settleArr = array();
        foreach($billList as $key=>$val){
            $settleArr[$key]['settle_id'] = $val['settle_id'];
            $settleArr[$key]['settle_year'] = $val['settle_year'];
            if($val['settle_cycle_type']==1){//周结账单
                $settleArr[$key]['settle_time'] = $val['settle_starttime'].'-'.$val['settle_endtime'];
            }else{
                $settleArr[$key]['settle_time'] = date('m',strtotime($val['settle_starttime']));
            }
            $settleArr[$key]['settle_type'] = $val['settle_cycle'];
            $settleArr[$key]['order_count'] = $val['order_count'];
            $settleArr[$key]['worker_income'] = $val['worker_income'];
            $settleArr[$key]['settle_status'] = $val['settle_status'];
        }
        $ret = [
            'per_page' => $per_page,
            'page_num' => $page_num,
            'data'  => $settleArr
        ];
        return $this->send($ret, "操作成功.");
    }

    /**
     * @api {GET} /worker/get-worker-bill-detail 获取阿姨对账单列表详情 (田玉星 100%)
     * 
     * @apiName actionGetWorkerBillDetail
     * @apiGroup Worker
     * 
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} settle_id  账单唯一标识.
     * @apiParam {String} [platform_version] 平台版本号.
     * 
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-bill-detail
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *   "code": 1,
     *   "msg": "操作成功.",
     *   "ret": {
     *       "worker_income": "150.00",
     *       "worker_income_constitute": "0.00元(底薪)+150.00元(工时服务)+0.00元(奖励)-0.00元(处罚)",
     *       "data": [
     *           {
     *               "service_date": "01-01",
     *               "service_time": "08:01:00-08:01:00",
     *               "order_code": "2123112",
     *               "order_money": "150.00"
     *           }
     *       ]
     *   }
     * }   
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionGetWorkerBillDetail(){
        $param = Yii::$app->request->get() or $param =  json_decode(Yii::$app->request->getRawBody(),true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }  
        //数据整理
        $settle_id = intval($param['settle_id']);//账单ID
        if(!$settle_id){
            return $this->send(null, "账单唯一标识错误", 0, 403);
        }
        $billData = array();
        try{
            $workerIncomeInfoList = FinanceSettleApplySearch::getSettledWorkerIncomeListByWorkerId($checkResult['worker_id'],1,1);
            $workerIncomeInfo = $workerIncomeInfoList[0];
            $billList = FinanceSettleApplySearch::getOrderArrayBySettleId($settle_id);
            if($billList){
                foreach($billList as $key=>$val){
                    $beginTime = strtotime($val['order_begin_time']);
                    $billData[$key]['service_date'] = date('m-d',$beginTime);
                    $billData[$key]['service_time'] = date('H:i:s',$beginTime).'-'.date('H:i:s',strtotime($val['order_end_time']));
                    $billData[$key]['order_code'] =111;
                    $billData[$key]['order_money'] = $val['order_money'];
                }
            }
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        $ret = [
                'worker_income'=>$workerIncomeInfo['worker_income'],
                'worker_income_constitute'=>$workerIncomeInfo['base_salary_subsidy']."元(底薪)+".
                                            $workerIncomeInfo['order_money_except_cash']."元(工时服务)+".
                                            $workerIncomeInfo['settle_task_money']."元(奖励)-".
                                            $workerIncomeInfo['money_deduction']."元(处罚)",
                'data'=>$billData
        ];
        return $this->send($ret, "操作成功.");
    }
    /**
     * @api {GET} /worker/get-worker-tasktime-list 获取阿姨工时列表 (田玉星 100%)
     * 
     * @apiName actionGetWorkerTasktimeList
     * @apiGroup Worker
     * 
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} bill_id  账单唯一标识.
     * @apiParam {String} [platform_version] 平台版本号.
     * 
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-tasktime-list
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *   "code": 1,
     *   "msg": "操作成功",
     *   "ret": [
     *       {
     *           "service_date": "01-01",
     *           "service_time": "08:01:00-08:01:00",
     *           "order_code": "1234354",
     *           "order_money": "150.00"
     *       }
     *   ]
     * }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionGetWorkerTasktimeList(){
         $param = Yii::$app->request->get() or $param =  json_decode(Yii::$app->request->getRawBody(),true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }  
        //数据整理
       $settle_id = intval($param['settle_id']);//账单ID
        if(!$settle_id){
            return $this->send(null, "账单唯一标识错误", 0, 403);
        }
        //调取数据
        $billData = array();
        try{
            $billList = FinanceSettleApplySearch::getOrderArrayBySettleId($settle_id);
            if($billList){
                foreach($billList as $key=>$val){
                    $beginTime = strtotime($val['order_begin_time']);
                    $billData[$key]['service_date'] = date('m-d',$beginTime);
                    $billData[$key]['service_time'] = date('H:i:s',$beginTime).'-'.date('H:i:s',strtotime($val['order_end_time']));
                    $billData[$key]['order_code'] =111;
                    $billData[$key]['order_money'] = $val['order_money'];
                }
            }
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        //获取工时列表
        return $this->send($billData, "操作成功");
    }
    
    /**
     * @api {GET} /worker/get-worker-taskreward-list 获取阿姨奖励列表 (田玉星 100%)
     * 
     * @apiName actionGetWorkerTaskrewardList
     * @apiGroup Worker
     * 
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} settle_id  账单唯一标识.
     * @apiParam {String} [platform_version] 平台版本号.
     * 
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-taskreward-list
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *   "code": 1,
     *   "msg": "操作成功.",
     *   "ret": [
     *       {
     *           "task_money": "50.00",
     *           "task_des": "每个月请假不超过4天"
     *       }
     *   ]
     * }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionGetWorkerTaskrewardList(){
        $param = Yii::$app->request->get() or $param =  json_decode(Yii::$app->request->getRawBody(),true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        //数据整理
        $settle_id = intval($param['settle_id']);//账单ID
        if(!$settle_id){
            return $this->send(null, "账单唯一标识错误", 0, 403);
        }
        try{
            //获取任务奖励列表
            $ret = FinanceSettleApplySearch::getTaskArrayBySettleId($settle_id);
         }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        return $this->send($ret, "操作成功.");
    }
    
    /**
     * @api {GET} /worker/get-worker-punish-list 获取阿姨受处罚列表 (田玉星 100%)
     * 
     * @apiName actionGetWorkerPunishList
     * @apiGroup Worker
     * 
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} settle_id  账单唯一标识.
     * @apiParam {String} [platform_version] 平台版本号.
     * 
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-punish-list
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *    "code": 1,
     *     "msg": "操作成功.",
     *        "ret": [
     *            {
     *                "deduction_money": "12.00",
     *                "deduction_des": "第三大大声点",
     *                "deduction_type": "2",
     *                "deduction_time": "2015.10.26",
     *                "deduction_type_des": "投诉"
     *            }
     *       ]
     * }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionGetWorkerPunishList(){
        $param = Yii::$app->request->get() or $param =  json_decode(Yii::$app->request->getRawBody(),true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }
        //数据整理
        $settle_id = intval($param['settle_id']);//账单ID
        if(!$settle_id){
            return $this->send(null, "账单唯一标识错误", 0, 403);
        }
        try{
            //获取任务奖励列表
            $punishList = FinanceSettleApplySearch::getDeductionArrayBySettleId($settle_id);
            if($punishList){
                foreach($punishList as $key=>$val){
                    switch($val['deduction_type']){
                        case "2":
                            $punishList[$key]['deduction_type_des'] = "投诉";
                            break;
                        case "3":
                            $punishList[$key]['deduction_type_des'] = "赔偿";
                            break;
                        default:
                            $punishList[$key]['deduction_type_des'] = "未知";
                    }
                }
            }
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        //获取受处罚列表
        return $this->send($punishList, "操作成功.");
    }
    
    /**
     * @api {PUT} /worker/worker-bill-confirm 账单确认 (田玉星 100%)
     * 
     * @apiName actionWorkerBillConfirm
     * @apiGroup Worker
     * 
     * @apiParam {String} access_token    阿姨登录token
     * @apiParam {String} settle_id  账单唯一标识.
     * @apiParam {String} [platform_version] 平台版本号.
     * 
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/worker-bill-confirm
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *    "code": 1,
     *    "msg": "账单确定成功",
     *    "ret": null
     * }
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"error",
     *      "msg": "用户认证已经过期,请重新登录"
     *  }
     */
    public function actionWorkerBillConfirm(){
        $param =  json_decode(Yii::$app->request->getRawBody(),true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }
        //数据整理
        $settle_id = intval($param['settle_id']);//账单ID
        try{
            $isSucceed = FinanceSettleApplySearch::workerConfirmSettlement($settle_id);
         }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        if($isSucceed){
            return $this->send(null, "账单确定成功");
        }
        return $this->send(null, "账单确定失败",0,403);
      
    }
    
    /**
     * @api {GET} /worker/get-worker-center 个人中心首页 (田玉星 100%)
     *
     * @apiName getWorkerCenter
     * @apiGroup Worker
     *
     * @apiParam {String} access_token 阿姨登录token
     *
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/worker/get-worker-center
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": "ok",
     *      "msg": "阿姨信息查询成功",
     *      "ret": {
     *          "worker_name": "李刘珍",
     *          "worker_phone": "13121999270",
     *          "head_url": "",
     *          "worker_identity": "全职",
     *          "worker_identity_id":"1",
     *          "worker_role": "保姆",
     *          "worker_start": 4.5,
     *          "personal_skill": [
     *              "煮饭",
     *              "开荒",
     *              "护老",
     *              "擦玻璃",
     *              "带孩子"
     *          ]
     *        }
     *     }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     {
     *       "code": "error",
     *       "msg": "用户认证已经过期,请重新登录，"
     *     }
     */
    public function actionGetWorkerCenter(){
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }  
        //数据整理
        try{
             $workerInfo = Worker::getWorkerDetailInfo($checkResult['worker_id']);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        $ret = [
            "worker_name" => $workerInfo['worker_name'],
            "worker_phone" => $workerInfo['worker_phone'],
            "head_url" => $workerInfo['worker_photo'],
            "worker_identity" => $workerInfo['worker_identity_description'],//身份
            "worker_identity_id" => $workerInfo['worker_identity_id'],//身份类型
            "worker_role" => $workerInfo["worker_type_description"],
            'worker_start' => $workerInfo["worker_star"],
            'total_money' => $workerInfo['worker_stat_order_money'],
            "personal_skill" => WorkerSkill::getWorkerSkill($checkResult['worker_id']),
        ];
        return $this->send($ret, "阿姨信息查询成功");
    }
    
    
    /** 
     * @api {get} /mobileapidriver2/system_news  通知中心(田玉星0%)
     * @apiName actionSystemNews
     * @apiGroup Worker
     *
     * @apiParam {String} session_id    会话id.
     * @apiParam {String} platform_version 平台版本号.
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg":"操作成功",
     *      "ret":
     *      {
     *          "result": "1",
     *          "initInfo": []
     *      }
     * }
     *
     * @apiError SessionIdNotFound 未找到会话ID.
     *
     * @apiErrorExample Error-Response:
     *  HTTP/1.1 404 Not Found
     *  {
     *      "code":"Failed",
     *      "msg": "SessionIdNotFound"
     *  }
     *
     */

    /**
     * @api {get} /worker/worker-leave  查看请假情况 (李勇100%)
     * @apiName actionWorkerLeave
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录 token.
     * @apiParam {String} type 请假类型
     * @apiParam {String} platform_version 平台版本号.
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     *{
     *   "code": 1,
     *   "msg": "操作成功",
     *   "ret": {
     *       "2015-10-28": true,
     *       "2015-10-29": true,
     *       "2015-10-30": false,
     *       "2015-10-31": false,
     *       "2015-11-01": false,
     *       "2015-11-02": true,
     *       "2015-11-03": true,
     *       "2015-11-04": true,
     *       "2015-11-05": true,
     *       "2015-11-06": false,
     *       "2015-11-07": false,
     *       "2015-11-08": false,
     *       "2015-11-09": true,
     *   }
     *}
     *
     * @apiError SessionIdNotFound 未找到会话ID.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     { 
     *       "code":"0",
     *       "msg": "阿姨不存在"
     *     }
     */
    public function actionWorkerLeave()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        if (!isset($param['type']) || !$param['type'] || !in_array($param['type'], array(1, 2))) {
            return $this->send(null, "请选择请假类型", 0, 403);
        }
        $worker_id = $checkResult['worker_id'];
        $type = $param['type'];
        try{
            $ret= WorkerVacationApplication::getApplicationTimeLine($worker_id,$type);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        return $this->send($ret, "操作成功", 1);
    }

    /**
     * 获取该阿姨的消息列表
     */

    /**
     * 删除阿姨消息
     */

    /**
     * 查看该阿姨所有未交罚款记录
     */

    /**
     * 获得该阿姨所有未领取任务奖励记录
     */
    
    
    
     /**
     * @api {get} /worker/task-doing  获得进行中的任务列表 (李勇100%)
     * @apiName actionTaskDoing
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录 token.
     * @apiParam {String} platform_version 平台版本号.
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg":"操作成功",
     *      "ret":
     *      [
     *      {
     *          "id": "任务id",
     *          "worker_task_name": "任务名称",
     *          "worker_task_start": "任务开始时间",
     *          "worker_task_end": "任务结束时间",
     *          "worker_task_reward_value": "任务奖励值",
     *          "worker_task_conditions": "任务需要完成次数",
     *          "worker_task_already": "任务已经完成次数"
     *      },
     *      {
     *          "id": "任务id",
     *          "worker_task_name": "任务名称",
     *          "worker_task_start": "任务开始时间",
     *          "worker_task_end": "任务结束时间",
     *          "worker_task_reward_value": "任务奖励值",
     *          "worker_task_conditions": "任务需要完成次数",
     *          "worker_task_already": "任务已经完成次数"
     *      }
     *      ]
     *      }
     * }
     *
     * @apiError SessionIdNotFound 未找到会话ID.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     { 
     *       "code":"0",
     *       "msg": "您没有任务哦"
     *     }
     */
    public function actionTaskDoing()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        $worker_id = $checkResult['worker_id'];
        try{
            $ret= WorkerTaskLog::getCurListByWorkerId($worker_id);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        if(empty($ret)){
              return $this->send(null, "您没有任务哦", 0);
        }
        return $this->send($ret, "操作成功", 1);
    }
    
    
   
     /**
     * @api {get} /worker/task-done  获得已完成的任务列表 (李勇100%)
     * @apiName actionTaskDone
     * @apiGroup Worker
     * @apiParam {String} per_page  每页显示多少条.
     * @apiParam {String} page  第几页.
     * @apiParam {String} access_token    阿姨登录 token.
     * @apiParam {String} platform_version 平台版本号.
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg":"操作成功",
     *      "ret":
     *      [
     *      {
     *          "id": "任务id",
     *          "worker_task_name": "任务名称",
     *          "worker_task_start": "任务开始时间",
     *          "worker_task_end": "任务结束时间",
     *          "worker_task_reward_value": "任务奖励值",
     *          "worker_task_conditions": "任务需要完成次数",
     *          "worker_task_already": "任务已经完成次数"
     *      },
     *      {
     *          "id": "任务id",
     *          "worker_task_name": "任务名称",
     *          "worker_task_start": "任务开始时间",
     *          "worker_task_end": "任务结束时间",
     *          "worker_task_reward_value": "任务奖励值",
     *          "worker_task_conditions": "任务需要完成次数",
     *          "worker_task_already": "任务已经完成次数"
     *      }
     *      ]
     *      }
     * }
     *
     * @apiError SessionIdNotFound 未找到会话ID.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     { 
     *       "code":"0",
     *       "msg": "您没有已完成任务哦"
     *     }
     */
    public function actionTaskDone()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        }
        if(!isset($param['page']) || !$param['page']||!isset($param['per_page']) || !$param['per_page']){
            return $this->send(null, "数据不完整,请输入每页条数和第几页", 0, 403);
        }
        $worker_id = $checkResult['worker_id'];
        $page = $param['page'];
        $per_page = $param['per_page'];
        try{
            $ret= WorkerTaskLog::getDonedTasks($worker_id,1,$page,$per_page);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        if(empty($ret)){
              return $this->send(null, "您没有已完成任务哦", 0);
        }
        return $this->send($ret, "操作成功", 1);
    }
    
     /**
     * @api {get} /worker/task-fail  获得已失败的任务列表 (李勇100%)
     * @apiName actionTaskFail
     * @apiGroup Worker
     * @apiParam {String} per_page  每页显示多少条.
     * @apiParam {String} page  第几页.
     * @apiParam {String} access_token    阿姨登录 token.
     * @apiParam {String} platform_version 平台版本号.
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg":"操作成功",
     *      "ret":
     *      [
     *      {
     *          "id": "任务id",
     *          "worker_task_name": "任务名称",
     *          "worker_task_start": "任务开始时间",
     *          "worker_task_end": "任务结束时间",
     *          "worker_task_reward_value": "任务奖励值",
     *          "worker_task_conditions": "任务需要完成次数",
     *          "worker_task_already": "任务已经完成次数"
     *      },
     *      {
     *          "id": "任务id",
     *          "worker_task_name": "任务名称",
     *          "worker_task_start": "任务开始时间",
     *          "worker_task_end": "任务结束时间",
     *          "worker_task_reward_value": "任务奖励值",
     *          "worker_task_conditions": "任务需要完成次数",
     *          "worker_task_already": "任务已经完成次数"
     *      }
     *      ]
     *      }
     * }
     *
     * @apiError SessionIdNotFound 未找到会话ID.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     { 
     *       "code":"0",
     *       "msg": "您没有失败的任务哦"
     *     }
     */
    public function actionTaskFail()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        if(!isset($param['page']) || !$param['page']||!isset($param['per_page']) || !$param['per_page']){
            return $this->send(null, "数据不完整,请输入每页条数和第几页", 0, 403);
        }
        $worker_id = $checkResult['worker_id'];
        $page = $param['page'];
        $per_page = $param['per_page'];
        try{
            $ret= WorkerTaskLog::getDonedTasks($worker_id,-1,$page,$per_page);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        if(empty($ret)){
              return $this->send(null, "您没有任务哦", 0);
        }
        return $this->send($ret, "操作成功", 1);
    }

    /**
     * @api {get} /worker/check-task  查看任务的详情 (李勇100%)
     * @apiName actionCheckTask
     * @apiGroup Worker
     *
     * @apiParam {String} access_token    阿姨登录 token.
     * @apiParam {String} id    任务id
     * @apiParam {String} platform_version 平台版本号.
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *      "code": "ok",
     *      "msg":"操作成功",
     *      "ret":
     *      {
     *          "id": "任务id",
     *          "worker_task_name": "任务名称",
     *          "worker_task_description": "任务描述",
     *          "worker_task_start": "任务开始时间",
     *          "worker_task_end": "任务结束时间",
     *          "worker_task_reward_value": "任务奖励值",
     *          "worker_task_conditions": "任务需要完成次数",
     *          "settled":[
     *               {
     *                  "order_id": "订单id",
     *                  "order_time": "订单时间",
     *                  "work_hours": "工时"
     *                },
     *                {
     *                  "order_id": "订单id",
     *                  "order_time": "订单时间",
     *                  "work_hours": "工时"
     *                }  
     *           ]
     *      }
     * }
     *
     * @apiError SessionIdNotFound 未找到会话ID.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found 
     *     { 
     *       "code":"0",
     *       "msg": "查看任务失败"
     *     }
     */
    public function actionCheckTask()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        //检测阿姨是否登录
        $checkResult = ApiWorker::checkWorkerLogin($param);
        if(!$checkResult['code']){
            return $this->send(null, $checkResult['msg'], 0, 403);
        } 
        $worker_id = $checkResult['worker_id'];
        $id = $param['id'];
        //获取任务的详情
        try{
            $task_log=WorkerTaskLog::findOne(['id'=>$id])->getDetail();
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
                echo "ee";die;

        $worker_task_log_start=$task_log['worker_task_log_start'];
        $worker_task_log_end=$task_log['worker_task_log_end'];
        //获取任务的订单列表
        try{
            $order_list=OrderSearch::getWorkerAndOrderAndDoneTime($worker_id ,$worker_task_log_start,$worker_task_log_end);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        $task_log['order_list']=$order_list;
        if(empty($ret)){
              return $this->send(null, "查看任务失败", 0);
        }
        return $this->send($ret, "操作成功", 1);
    }
}


?>
