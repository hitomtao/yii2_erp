<?php

use yii\db\Schema;
use jamband\schemadump\Migration;

class m151007_142219_create_table_order_flag extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions ='CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB COMMENT=\'订单标记表\'';
        }


        $this->createTable('{{%order_flag}}', [
            'order_id'=> Schema::TYPE_BIGPK .' NOT NULL COMMENT \'订单id\'',

            'order_flag_send' => Schema::TYPE_BOOLEAN . '(1) unsigned  DEFAULT 0 COMMENT \'指派不了 0可指派 1客服指派不了 2小家政指派不了 3都指派不了\'',
            'order_flag_urgent' => Schema::TYPE_BOOLEAN . '(1) unsigned  DEFAULT 0 COMMENT \'加急\'',
            'order_flag_exception' => Schema::TYPE_BOOLEAN . '(1) unsigned  DEFAULT 0 COMMENT \'异常 1无经纬度\'',
            'order_flag_sys_assign' => Schema::TYPE_BOOLEAN . '(1) unsigned  DEFAULT 0 COMMENT \'是否需要系统指派 1是 0否\'', //新加
            'order_flag_lock' => Schema::TYPE_BOOLEAN.'(1) unsigned  DEFAULT 0 COMMENT \'是否锁定 1锁定 0未锁定\'',

            'created_at' => Schema::TYPE_INTEGER.'(11) unsigned NOT NULL DEFAULT 0 COMMENT \'创建时间\'',
            'updated_at' => Schema::TYPE_INTEGER.'(11) unsigned NOT NULL DEFAULT 0 COMMENT \'修改时间\'',

        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('{{%order_flag}}');

        return true;
    }
}
