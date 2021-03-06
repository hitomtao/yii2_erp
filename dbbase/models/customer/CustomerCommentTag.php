<?php

namespace dbbase\models\customer;

use Yii;

/**
 * This is the model class for table "{{%customer_comment_tag}}".
 *
 * @property integer $id
 * @property string $customer_comment_tag_name
 * @property integer $customer_comment_level
 * @property integer $is_online
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $is_del
 */
class CustomerCommentTag extends \yii\db\ActiveRecord
{
	
	public $customer_comment_level_es;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%customer_comment_tag}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['customer_comment_level','customer_tag_type','is_online', 'created_at', 'updated_at', 'is_del'], 'integer'],
            [['customer_tag_name'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    
   
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('common', 'ID'),
            'customer_comment_level_es' => Yii::t('common', '不满意标签'),
            'customer_tag_name' => Yii::t('common', '评价标签名称'),
            'customer_tag_type' => Yii::t('common', '分类'),
            'customer_comment_level' => Yii::t('common', '评价等级'),
            'customer_tag_count' => Yii::t('common', '使用次数'),
            'is_online' => Yii::t('common', '是否上线'),
            'created_at' => Yii::t('common', '创建时间'),
            'updated_at' => Yii::t('common', '更新时间'),
            'is_del' => Yii::t('common', '删除'),
        ];
    }
}
