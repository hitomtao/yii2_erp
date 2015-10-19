<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%worker_task_logmeta}}".
 *
 * @property integer $id
 * @property integer $worker_tasklog_id
 * @property integer $worker_tasklog_condition
 * @property integer $worker_tasklog_value
 * @property integer $created_at
 * @property integer $updated_at
 */
class WorkerTaskLogmeta extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%worker_task_logmeta}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['worker_tasklog_id', 'worker_tasklog_condition', 'worker_tasklog_value', 'created_at', 'updated_at'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', '编号'),
            'worker_tasklog_id' => Yii::t('app', '任务ID'),
            'worker_tasklog_condition' => Yii::t('app', '条件索引'),
            'worker_tasklog_value' => Yii::t('app', '条件值'),
            'created_at' => Yii::t('app', '创建时间'),
            'updated_at' => Yii::t('app', '更新时间'),
        ];
    }

    /**
     * @inheritdoc
     * @return WorkerTaskLogmetaQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new WorkerTaskLogmetaQuery(get_called_class());
    }
}
