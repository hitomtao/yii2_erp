<?php

namespace boss\models\Operation;

use Yii;
use core\models\Operation\CoreOperationGoods;
/**
 * This is the model class for table "{{%operation_goods}}".
 *
 * @property integer $id
 * @property string $operation_goods_name
 * @property integer $operation_category_id
 * @property string $operation_category_ids
 * @property string $operation_category_name
 * @property string $operation_goods_introduction
 * @property string $operation_goods_english_name
 * @property string $operation_goods_start_time
 * @property string $operation_goods_end_time
 * @property string $operation_goods_service_time_slot
 * @property integer $operation_goods_service_interval_time
 * @property integer $operation_price_strategy_id
 * @property string $operation_price_strategy_name
 * @property string $operation_goods_price
 * @property string $operation_goods_balance_price
 * @property string $operation_goods_additional_cost
 * @property string $operation_goods_lowest_consume
 * @property string $operation_goods_price_description
 * @property string $operation_goods_market_price
 * @property string $operation_tags
 * @property string $operation_goods_app_ico
 * @property string $operation_goods_type_pc_ico
 * @property integer $created_at
 * @property integer $updated_at
 */
class OperationGoods extends CoreOperationGoods
{

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['operation_category_id', 'operation_goods_service_interval_time', 'operation_price_strategy_id', 'created_at', 'updated_at'], 'integer'],
            [['operation_goods_introduction', 'operation_goods_service_time_slot', 'operation_goods_price_description', 'operation_tags', 'operation_goods_app_ico', 'operation_goods_type_pc_ico'], 'string'],
            [['operation_goods_price', 'operation_goods_balance_price', 'operation_goods_additional_cost', 'operation_goods_lowest_consume', 'operation_goods_market_price'], 'number'],
            [['operation_goods_name', 'operation_category_name', 'operation_goods_english_name', 'operation_price_strategy_name'], 'string', 'max' => 60],
            [['operation_category_ids'], 'string', 'max' => 100],
            [['operation_goods_start_time', 'operation_goods_end_time'], 'string', 'max' => 20],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', '编号'),
            'operation_goods_name' => Yii::t('app', '商品名称'),

            'operation_category_id' => Yii::t('app', '对应服务品类编号（所属分类编号冗余）'),
            'operation_category_ids' => Yii::t('app', '服务品类'),
            'operation_category_name' => Yii::t('app', '对应服务品类名称（所属分类名称冗余）'),
            'operation_goods_introduction' => Yii::t('app', '服务类型简介'),
            'operation_goods_english_name' => Yii::t('app', '服务类型英文名称'),
            'operation_goods_start_time' => Yii::t('app', '开始服务时间即开始时间'),
            'operation_goods_end_time' => Yii::t('app', '结束服务时间即结束时间'),
            'operation_goods_service_time_slot' => Yii::t('app', '可服务时间段（序列化方式存储）'),
            'operation_goods_service_interval_time' => Yii::t('app', '服务间隔时间(单位：秒）'),
            'operation_price_strategy_id' => Yii::t('app', '价格策略编号'),
            'operation_price_strategy_name' => Yii::t('app', '价格策略名称'),
            'operation_goods_price' => Yii::t('app', '售价'),
            'operation_goods_balance_price' => Yii::t('app', '阿姨结算价格'),
            'operation_goods_additional_cost' => Yii::t('app', '附加费用'),
            'operation_goods_lowest_consume' => Yii::t('app', '最低消费'),
            'operation_goods_price_description' => Yii::t('app', '价格备注'),
            'operation_goods_market_price' => Yii::t('app', '市场价格'),
            'operation_tags' => Yii::t('app', '服务类型标签编号(序列化方式存储)'),
            'operation_goods_app_ico' => Yii::t('app', 'APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)'),
            'operation_goods_type_pc_ico' => Yii::t('app', 'PC端图标(序列化方式存储|首页推荐大图，更多推荐大图，下单页小图)'),
            'created_at' => Yii::t('app', '创建时间'),
            'updated_at' => Yii::t('app', '编辑时间'),
        ];
    }
}
