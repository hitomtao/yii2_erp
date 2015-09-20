<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%operation_city}}".
 *
 * @property integer $id
 * @property string $city_name
 * @property integer $city_is_online
 * @property integer $created_at
 * @property integer $updated_at
 */
class OperationCity extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%operation_city}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['city_is_online', 'created_at', 'updated_at'], 'integer'],
            [['city_name'], 'string', 'max' => 30]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', '编号'),
            'city_name' => Yii::t('app', '城市名称'),
            'city_is_online' => Yii::t('app', '城市是否上线（1为上线，2为下线）'),
            'created_at' => Yii::t('app', '创建时间'),
            'updated_at' => Yii::t('app', '编辑时间'),
        ];
    }
}