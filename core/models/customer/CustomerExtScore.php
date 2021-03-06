<?php

namespace core\models\customer;

use Yii;

/**
 * This is the model class for table "{{%customer_ext_score}}".
 *
 * @property integer $id
 * @property integer $customer_id
 * @property integer $customer_score
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $is_del
 */
class CustomerExtScore extends \dbbase\models\customer\CustomerExtScore
{

    /**
     * 获取客户积分
     */
    public static function getCustomerScore($customer_id)
    {
        $customer = Customer::findOne($customer_id);
        if ($customer == NULL) {
            return false;
        }
        $customerExtScore = self::find()->where(['customer_id' => $customer_id])->one();
        if ($customerExtScore == NULL) {
            return 0;
        }
        return $customerExtScore->customer_score;
    }

    /**
     *  获取客户积分列表
     *  @param int $customer_id 用户id
     *  @author 郝建设
     *  @return array 积分列表数据
     */
    public static function getCustomerScoreList($customer_id)
    {

        return CustomerExtScore::find()->where(['customer_id' => $customer_id])->asArray()->all();
    }

}
