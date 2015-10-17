<?php

namespace core\models\customer;

use Yii;
use core\models\customer\CustomerCode;
use core\models\customer\Customer;
use core\models\customer\CustomerChannal;

/**
 * This is the model class for table "{{%customer_access_token}}".
 *
 * @property integer $id
 * @property string $customer_access_token
 * @property integer $customer_access_token_expiration
 * @property integer $customer_code_id
 * @property string $customer_code
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $is_del
 */
class CustomerAccessToken extends \common\models\CustomerAccessToken
{
    public static function generateAccessToken($phone, $code){
        $check_code = CustomerCode::checkCode($phone, $code);
        // var_dump($check_code);
        // exit();
        if ($check_code == false) {
            return $check_code;
        }

        $transaction = \Yii::$app->db->beginTransaction();
        try{
            //没有客户则创建
            $customer = Customer::find()->where(['customer_phone'=>$phone])->one();
            if ($customer == NULL) {
                $customer = new Customer;
                $customer->customer_phone = $phone;
                $customer->created_at = time();
                $customer->updated_at = 0;
                $customer->is_del = 0;
                $customer->save();
            }

            $customerAccessTokens = self::find()->where(['customer_code'=>$code])->all();
            foreach ($customerAccessTokens as $customerAccessToken) {
                $customerAccessToken->is_del = 1;
                $customerAccessToken->validate();
                $customerAccessToken->save();
            }

            $customerCode = CustomerCode::find()->where(['customer_phone'=>$phone, 'customer_code'=>$code, 'is_del'=>0])->one();
            $customer_code_id = $customerCode == NULL ? 0 : $customerCode->id;
            $customerAccessToken = new CustomerAccessToken;
            $randstr = '';
            for ($i=0; $i < 4; $i++) { 
                $randstr .= rand(0, 9);
            }
            $customerAccessToken->customer_access_token = md5($phone.$code.$randstr);
            $customerAccessToken->customer_access_token_expiration = 2 * 3600;
            $customerAccessToken->customer_code_id = $customer_code_id;
            $customerAccessToken->customer_code = $code;
            $customerAccessToken->customer_phone = $phone;
            $customerAccessToken->created_at = time();
            $customerAccessToken->updated_at = 0;
            $customerAccessToken->is_del = 0;
            $customerAccessToken->validate();
            if ($customerAccessToken->hasErrors()) {
                var_dump($customerAccessToken->getErrors());
            }
            $customerAccessToken->save();
            $transaction->commit();
            return $customerAccessToken->customer_access_token;

        }catch(\Exception $e){
            $transaction->rollback();
            return false;
        }
    }

    /**
     * 检测access_token是否有效
     */
    public static function checkAccessToken($access_token){
        $customerAccessToken = self::find()->where(['customer_access_token'=>$access_token, 'is_del'=>0])->one();
        if ($customerAccessToken == NULL) {
            return false;
        }
        if ($customerAccessToken->created_at < time() && $customerAccessToken->created_at + $customerAccessToken->customer_access_token_expiration > time()) {
            return true;
        }
        return false;
    }

    /**
     * 根据access_token获取客户信息
     */
    public static function getCustomer($access_token){
        $able = self::checkAccessToken($access_token);
        if (!$able) {
            return false;
        }
        $customerAccessToken = self::find()->where(['customer_access_token'=>$access_token, 'is_del'=>0])->one();
        if ($customerAccessToken == NULL) {
            return false;
        }
        $customerCode = CustomerCode::findOne($customerAccessToken->customer_code_id);
        if ($customerCode == NULL) {
            return false;
        }
        // var_dump($customerCode);exit();
        $customer = Customer::find()->where(['customer_phone'=>$customerCode->customer_phone])->one();
        return $customer == NULL ? false : $customer;
    }

    /**
     * 验证POP调用BOSS系统的签名
     */
    public static function checkSign($phone, $sign, $channal_ename){
        $key = 'pop_to_boss';
        $customerChannal = CustomerChannal::find()->where(['channal_ename'=>$channal_ename])->one();
        if ($customerChannal == NULL) {
            return false;
        }
        if (md5($phone.$key) != $sign) {
            return false;
        }
        return true;
    }

    /**
     * 为POP客户下发access_token
     */
    public static function generateAccessTokenForPop($phone, $sign, $channal_ename){
        $check_sign = self::checkSign($phone, $sign, $channal_ename);
        if (!$check_sign) {
            return false;
        }

        $transaction = \Yii::$app->db->beginTransaction();
        try{
            //没有客户则创建
            $customer = Customer::find()->where(['customer_phone'=>$phone])->one();
            if ($customer == NULL) {
                $customer = new Customer;
                $customer->customer_phone = $phone;
                $customer->created_at = time();
                $customer->updated_at = 0;
                $customer->is_del = 0;
                $customer->save();
            }

            $customerAccessTokens = self::find()->where(['customer_phone'=>$phone])->all();
            if (!empty($customerAccessTokens)) {
                foreach ($customerAccessTokens as $customerAccessToken) {
                    $customerAccessToken->is_del = 1;
                    $customerAccessToken->validate();
                    $customerAccessToken->save();
                }
            }
        
            $customerAccessToken = new CustomerAccessToken;
            $randstr = '';
            for ($i=0; $i < 4; $i++) { 
                $randstr .= rand(0, 9);
            }

            $customerAccessToken->customer_access_token = md5($phone.$randstr);
            $customerAccessToken->customer_access_token_expiration = 2 * 3600;
            $customerAccessToken->customer_code_id = 0;
            $customerAccessToken->customer_code = '';
            $customerAccessToken->customer_phone = $phone;
            $customerAccessToken->created_at = time();
            $customerAccessToken->updated_at = 0;
            $customerAccessToken->is_del = 0;
            $customerAccessToken->validate();
            $customerAccessToken->save();
            $transaction->commit();
            return $customerAccessToken->customer_access_token;

        }catch(\Exception $e){
            $transaction->rollback();
            return false;
        }
        
    }
}
