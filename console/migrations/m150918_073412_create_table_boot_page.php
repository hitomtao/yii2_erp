<?php

use yii\db\Schema;
use yii\db\Migration;

class m150918_073412_create_table_boot_page extends Migration
{
    public function up(){
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB COMMENT=\'启动页表\'';
        }
        $this->createTable('{{%boot_page}}', [
            'id' => Schema::TYPE_PK . ' AUTO_INCREMENT  COMMENT \'编号\'' ,
            'boot_page_name' => Schema::TYPE_STRING . '(60) DEFAULT NULL COMMENT \'启动页名称\'',
            'boot_page_ios_img' => Schema::TYPE_STRING . '(255) DEFAULT NULL COMMENT \'ios图片（640*300）\'',
            'boot_page_url' => Schema::TYPE_STRING. '(255) DEFAULT NULL COMMENT \'启动页URL\'',
            'boot_page_residence_time' => Schema::TYPE_INTEGER . '(11) DEFAULT 5 COMMENT \'停留时间 单位为：秒 (默认5秒)\'',
            'boot_page_online_time' => Schema::TYPE_INTEGER. '(11) COMMENT \'上线时间 （时间戳）\'',
            'boot_page_offline_time' => Schema::TYPE_INTEGER. '(11) COMMENT \'下线时间 （时间戳）\'',
            'create_time' => Schema::TYPE_INTEGER. '(11) DEFAULT NULL COMMENT \'创建时间\'',
            'updatetime' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL COMMENT \'编辑时间\'',
        ], $tableOptions);
    }

    public function down(){
        $this->dropTable('{{%boot_page}}');
    }

    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
