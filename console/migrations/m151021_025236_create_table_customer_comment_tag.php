<?php

use yii\db\Schema;
use jamband\schemadump\Migration;

class m151021_025236_create_table_customer_comment_tag extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB COMMENT=\'评价标签表\'';
        }
        $this->createTable('{{%customer_comment_tag}}', [
            'id' => Schema::TYPE_PK .'  AUTO_INCREMENT ',
	    'customer_tag_name' => Schema::TYPE_STRING .'(255) NOT NULL COMMENT \'评价标签名称\'',
	
            'customer_comment_level' => Schema::TYPE_SMALLINT .'(4)  DEFAULT 0 COMMENT \'评价等级\'',

		'is_online'  => Schema::TYPE_BOOLEAN . '(1) DEFAULT 0 COMMENT \'是否上线\'',
            'created_at'  => Schema::TYPE_INTEGER . '(10) DEFAULT 0 COMMENT \'创建时间\'',
            'updated_at'  => Schema::TYPE_INTEGER . '(10) DEFAULT 0 COMMENT \'更新时间\'',
            'is_del'  => Schema::TYPE_BOOLEAN . '(1) DEFAULT 0 COMMENT \'删除\'',

        ], $tableOptions);

        //$this->createIndex('customer_id','{{%customer_comment}}','customer_id');
        //$this->createIndex('order_id','{{%customer_comment}}','order_id');

    }


    public function down()
    {
        $this->dropTable("{{%customer_comment_tag}}");
        return true;
    }

}