<?php

/*
*  绝对绝对绝对不要修改这个文件！！！！！！（郭红波）
*  绝对绝对绝对不要修改这个文件！！！！！！（郭红波）
*  绝对绝对绝对不要修改这个文件！！！！！！（郭红波）
*/
error_reporting(E_ALL);
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=local-boss-db',
            'username' => 'root',
            'password' => '',
            'tablePrefix' => 'ejj_',
            'charset' => 'utf8',
            ],
        'redis' => [
            'class' => 'yii\redis\Connection',
            'hostname' => '101.200.179.70', // 配置为 dev环境 redis 服务器地址 test环境 101.200.200.74 ，prod环境 待定
//            'hostname' => '127.0.0.1', // 配置为 dev环境 redis 服务器地址 test环境 101.200.200.74 ，prod环境 待定
            'port' => 6379,
            'database' => 0,
        ],
        /**
         * 极光推送,默认为开发环境配置
         * //正式
         $app_key='507d4a12d19ebbab7205f6bb';
         $master_secret = '30d1653625e797b7f80b56bb';
         // 测试
         $app_key='6b79c45db3ed3aa1706778f9';
         $master_secret = '7bcba44668a3ff6469fb57a5';
         //dev
         $app_key='3037ca7c859cca4c996f7144';
         $master_secret = 'a064811d7e4596c32d0e6884';
         */
        'jpush'=>[
            'class'=>'dbbase\components\JPush',
            'app_key'=>'3037ca7c859cca4c996f7144',
            'master_secret'=>'a064811d7e4596c32d0e6884'
        ],
        /**
         * 发短信配置
         */
        'sms'=>[
            'class'=>'dbbase\components\Sms',
            'userId'=>'J02356',
            'password'=>'556201',
        ],
        /**
         * IVR
         */
        'ivr'=>[
            'class'=>'dbbase\components\Ivr',
            'app_id'=>'5000058',
            'token'=>'57b62a3462b52a1413a4e1934a60d983',
            'redirect_uri'=>'system/ivr/callback'
        ],
   ],
];