<?php
namespace core\models\worker;

use yii\base\InvalidParamException;
use core\models\Operation\CoreOperationCity;
use yii\helpers\ArrayHelper;
use yii\behaviors\TimestampBehavior;
class WorkerTask extends \common\models\WorkerTask
{
    /**
     * 条件名
     */
    const CONDITION_NAME = [
        1=>'无取消订单 ',
        2=>'无拒绝订单',
        3=>'服务老用户',
        4=>'主动接单',
        5=>'完成工时',
        6=>'完成小保养 ',
    ];
    /**
     * 条件判断符
     */
    const CONDITION_JUDGE = [
        '<'=>'小于',
        '<='=>'小于等于',
        '='=>'等于',
        '>='=>'大于等于',
        '>'=>'大于',
        '<>'=>'不等于'
    ];

    /**
     * 任务奖励类型
     */
    const REWARD_TYPES = [
        1=>'金额',
        2=>'当月流量',
        3=>'次月流量',
    ];
    
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
    public function rules()
    {
        return array_merge(parent::rules(),[
            [['worker_task_name', 'worker_task_start', 'worker_task_end', 'worker_task_reward_type'], 'required'],
            [['worker_types', 'worker_rules', 'worker_cites'], 'safe'],
            [['conditions'], 'validateConditions'],
        ]);
    }
    
    public function validateConditions($attribute, $params)
    {
//         if (!$this->hasErrors()) {
//             $this->addError($attribute, \Yii::t('app', '条件错误.'));
//         }
    }
    
    public function getConditions()
    {
        $names = self::CONDITION_NAME;
        $data = (array)json_decode($this->worker_task_conditions, true);
        foreach ($data as $item){
            if(isset($names[$item['id']]) && isset($item['value']) && $item['value']!=''){
                $data[$item['id']]['name'] = $names[$item['id']];
            }else{
                unset($data[$item['id']]);
            }
        }
        return $data;
    }
    public function setConditions($data)
    {
        $this->worker_task_conditions = json_encode($data);
    }
    /**
     * 阿姨类型字段
     */
    public function getWorker_types()
    {
        return explode(',', $this->worker_type);
    }
    public function setWorker_types($value)
    {
        $this->worker_type = implode(',', $value);
    }
    /**
     * 阿姨角色字段
     */
    public function getWorker_rules()
    {
        return explode(',', $this->worker_rule_id);
    }
    public function setWorker_rules($value)
    {
        $this->worker_rule_id = implode(',', $value);
    }
    /**
     * 城市字段
     */
    public function getWorker_cites()
    {
        return explode(',', $this->worker_task_city_id);
    }
    public function setWorker_cites($value)
    {
        $this->worker_task_city_id = implode(',', $value);
    }
    /**
     * 完整条件，包含所有已设置和未设置的
     */
    public function getFullConditions()
    {
        $res = [];
        $cons = $this->getConditions();
        $names = self::CONDITION_NAME;
        foreach ($names as $id=>$name){
            $res[$id] = [
                'id'=>$id,
                'name'=>$name,
                'judge'=>'',
                'value'=>'',
            ];
            if(isset($cons[$id])){
                $res[$id] = array_merge($res[$id],[
                    'judge'=>$cons[$id]['judge'],
                    'value'=>$cons[$id]['value'],
                ]);
            }
        }
        return $res;
    }
    /**
     * 计算符合阿姨条件的任务列表
     */
    public static function getTaskListByWorkerId($worker_id)
    {
        $cur_time = time();
        $worker = Worker::findOne(['id'=>$worker_id]);
        if(empty($worker)){
            throw new InvalidParamException('阿姨不存在');
        }
        $tasks = self::find()
        ->where("FIND_IN_SET({$worker->worker_type}, worker_type) AND FIND_IN_SET({$worker->worker_rule_id}, worker_rule_id)")
        ->andFilterWhere(['<','worker_task_start', $cur_time])
        ->andFilterWhere(['>','worker_task_end', $cur_time])
        ->all();
        return $tasks;
    }
    /**
     * 给定数据判断是否完成
     * @param array $tasklogmetas 数值记录
     */
    public function calculateValuesIsDone($tasklogmetas)
    {
        $isfalse = 0;
        $cons = $this->getConditions();
        foreach($cons as $con){
            foreach ($tasklogmetas as $meta){
                if($con['id']==$meta['worker_tasklog_condition']){
                    $is_done = eval($meta['worker_tasklog_value'].$con['judge'].$con['value']);
                    if($is_done==false){
                        $isfalse++;
                    }
                }
            }
        }
        return $isfalse<=0;
    }
    public static function getOnlineCites()
    {
        $cites = CoreOperationCity::getCityOnlineInfoList();
        return ArrayHelper::map($cites, 'city_id', 'city_name');
    }
}