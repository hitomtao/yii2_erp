<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%finance_order_channel}}".
 *
 * @property integer $id
 * @property string $finance_order_channel_name
 * @property integer $finance_order_channel_sort
 * @property integer $finance_order_channel_is_lock
 * @property integer $create_time
 * @property integer $is_del
 */
class FinanceOrderChannel extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%finance_order_channel}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['finance_order_channel_sort', 'finance_order_channel_is_lock', 'create_time', 'is_del'], 'integer'],
            [['finance_order_channel_name'], 'string', 'max' => 50]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('boss', '主键id'),
            'finance_order_channel_name' => Yii::t('boss', '渠道名称'),
            'finance_order_channel_sort' => Yii::t('boss', '排序'),
            'finance_order_channel_is_lock' => Yii::t('boss', '1 上架 2 下架'),
            'create_time' => Yii::t('boss', '增加时间'),
            'is_del' => Yii::t('boss', '0 正常 1 删除'),
        ];
    }
    
    /**
    * 获取订单渠道列表
    * @date: 2015-10-9
    * @author: peak pan
    * @return:
    **/
    
    public static function get_order_channel_list()
    {
    	if(\Yii::$app->cache->exists('orderchannellist')){
        $orderchannellist= \Yii::$app->cache->get('orderchannellist');
    	return json_decode($orderchannellist,true);
	    }else{ 
	    	$ordewhere['is_del']=0;
	    	$ordewhere['finance_order_channel_is_lock']=1;
	    	$payatainfo=FinanceOrderChannel::find()->select('id,finance_order_channel_name')->where($ordewhere)->asArray()->all();
	    	\Yii::$app->cache->set('orderchannellist', json_encode($payatainfo));
	    	return $payatainfo;
	  }
    }
    
    
}
