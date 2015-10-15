<?php

namespace core\models\customer;

use Yii;

/**
 * This is the model class for table "{{%customer_ext_balance}}".
 *
 * @property integer $id
 * @property integer $customer_id
 * @property string $customer_balance
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $is_del
 */
class CustomerExtBalance extends \common\models\CustomerExtBalance
{
    
    /**
     * 获取客户余额
     */
    public static function getCustomerBalance($customer_id){
        $customer = Customer::findOne($customer_id);
        if ($customer == NULL) {
            return false;
        }
        $CustomerExtBalance = self::find()->where(['customer_id'=>$customer_id])->one();
        if ($CustomerExtBalance == NULL) {
            return 0;
        }
        return $CustomerExtBalance->customer_balance;
    }
}