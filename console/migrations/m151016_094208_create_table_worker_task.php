<?php

use yii\db\Schema;
use jamband\schemadump\Migration;

class m151016_094208_create_table_worker_task extends Migration
{
public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB COMMENT=\'阿姨任务表\'';
        }
        $this->createTable('{{%worker_task}}', [
            'id' => Schema::TYPE_PK . ' AUTO_INCREMENT  COMMENT \'编号\'' ,
            'worker_task_name' => Schema::TYPE_STRING . '(255) DEFAULT NULL COMMENT \'任务名称\'',
            'worker_task_start' => Schema::TYPE_INTEGER . '(11) DEFAULT 0 COMMENT \'任务开始时间\'',
            'worker_task_end' => Schema::TYPE_INTEGER . '(11) DEFAULT 0 COMMENT \'任务结束时间\'',
            'worker_type' => Schema::TYPE_INTEGER . '(3) DEFAULT 0 COMMENT \'阿姨角色\'',
            'worker_rule_id' => Schema::TYPE_INTEGER . '(3) DEFAULT 0 COMMENT \'阿姨身份\'',
            'worker_task_city_id' => Schema::TYPE_INTEGER . '(11) DEFAULT 0 COMMENT \'适用城市\'',
            'worker_task_description' => Schema::TYPE_STRING . '(255) DEFAULT NULL COMMENT \'任务描述\'',
            'worker_task_description_url'=>Schema::TYPE_STRING . '(255) DEFAULT NULL COMMENT \'任务描述URL\'',
            'conditions'=>Schema::TYPE_TEXT . ' DEFAULT NULL COMMENT \'任务条件(JSON)\'',
            'created_at'=>  Schema::TYPE_INTEGER.'(11) DEFAULT 0 COMMENT \'创建时间\'' ,
            'updated_at'=>  Schema::TYPE_INTEGER.'(11) DEFAULT 0 COMMENT \'更新时间\'' ,
            'is_del'=>  Schema::TYPE_BOOLEAN.' DEFAULT 0 COMMENT \'是否逻辑删除\'' ,
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('{{%worker_task}}');
    }
}
