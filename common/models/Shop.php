<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%shop}}".
 *
 * @property string $id
 * @property string $name
 * @property integer $shop_menager_id
 * @property string $province_name
 * @property string $city_name
 * @property string $county_name
 * @property string $street
 * @property string $principal
 * @property string $tel
 * @property string $other_contact
 * @property string $bankcard_number
 * @property string $account_person
 * @property string $opening_bank
 * @property string $sub_branch
 * @property string $opening_address
 * @property integer $create_at
 * @property integer $update_at
 * @property integer $is_blacklist
 * @property integer $blacklist_time
 * @property string $blacklist_cause
 * @property integer $audit_status
 * @property integer $worker_count
 * @property integer $complain_coutn
 * @property string $level
 */
class Shop extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%shop}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'shop_menager_id', 'province_name', 'city_name', 'street', 'principal', 'tel'], 'required'],
            [['shop_menager_id', 'create_at', 'update_at', 'is_blacklist', 'blacklist_time', 'audit_status', 'worker_count', 'complain_coutn'], 'integer'],
            [['name', 'account_person'], 'string', 'max' => 100],
            [['province_name', 'city_name', 'county_name', 'principal', 'tel', 'bankcard_number', 'level'], 'string', 'max' => 50],
            [['street', 'opening_address', 'blacklist_cause'], 'string', 'max' => 255],
            [['other_contact', 'opening_bank', 'sub_branch'], 'string', 'max' => 200]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', '店名'),
            'shop_menager_id' => Yii::t('app', '归属家政ID'),
            'province_name' => Yii::t('app', '省份'),
            'city_name' => Yii::t('app', '城市'),
            'county_name' => Yii::t('app', '县'),
            'street' => Yii::t('app', '办公街道'),
            'principal' => Yii::t('app', '负责人'),
            'tel' => Yii::t('app', '电话'),
            'other_contact' => Yii::t('app', '其他联系方式'),
            'bankcard_number' => Yii::t('app', '银行卡号'),
            'account_person' => Yii::t('app', '开户人'),
            'opening_bank' => Yii::t('app', '开户行'),
            'sub_branch' => Yii::t('app', '支行名称'),
            'opening_address' => Yii::t('app', '开户地址'),
            'create_at' => Yii::t('app', 'Create At'),
            'update_at' => Yii::t('app', 'Update At'),
            'is_blacklist' => Yii::t('app', '是否是黑名单：0正常，1黑名单'),
            'blacklist_time' => Yii::t('app', '加入黑名单时间'),
            'blacklist_cause' => Yii::t('app', '黑名单原因'),
            'audit_status' => Yii::t('app', '审核状态：0未审核，1通过，2不通过'),
            'worker_count' => Yii::t('app', '阿姨数量'),
            'complain_coutn' => Yii::t('app', '投诉数量'),
            'level' => Yii::t('app', '评级'),
        ];
    }

    /**
     * @inheritdoc
     * @return ShopQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new ShopQuery(get_called_class());
    }
}