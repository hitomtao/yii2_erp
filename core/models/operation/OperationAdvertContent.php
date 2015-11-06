<?php

namespace core\models\operation;

use Yii;
use dbbase\models\operation\OperationAdvertContent as CommonOperationAdvertContent;

/**
 * This is the model class for table "{{%operation_advert_content}}".
 *
 * @property integer $id
 * @property string $operation_advert_position_name
 * @property integer $operation_city_id
 * @property string $operation_city_name
 * @property integer $operation_advert_start_time
 * @property integer $operation_advert_end_time
 * @property integer $operation_advert_online_time
 * @property integer $operation_advert_offline_time
 * @property string $operation_advert_picture
 * @property string $operation_advert_url
 * @property integer $created_at
 * @property integer $updated_at
 */
class OperationAdvertContent extends CommonOperationAdvertContent
{
    
    /** 
     * 获取广告图列表 TODO:未开发完成
     * @param type $generalWhere 普通查询条件
     * @param type $sectionWhere 区间查询条件
     */
    public static function getAdvertList($generalWhere = array(),$sectionWhere=array()){
        $query = new \yii\db\Query();
        
        $list = $query->from('{{%operation_advert_content}}')
            ->select('*')
            ->where($generalWhere);
        //广告上线时间
        if(isset($sectionWhere['operation_advert_online_time'])){
            $query->andWhere(['>','operation_advert_online_time',$sectionWhere['operation_advert_online_time']]);
        }
        //广告下线时间
        if(isset($sectionWhere['operation_advert_offline_time'])){
            $query->andWhere(['<','operation_advert_offline_time',$sectionWhere['operation_advert_offline_time']]);
        }
        //活动开始时间
        if(isset($sectionWhere['operation_advert_start_time'])){
            $query->andWhere(['>','operation_advert_start_time',$sectionWhere['operation_advert_start_time']]);
        }
        //活动结束时间
        if(isset($sectionWhere['operation_advert_end_time'])){
            $query->andWhere(['<','operation_advert_end_time',$sectionWhere['operation_advert_end_time']]);
        }
        $query->orderBy(['operation_advert_content_orders' =>'ASC']);
        echo  $query->createCommand()->getRawSql();
   



                
        
    }
}
