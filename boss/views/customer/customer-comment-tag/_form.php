<?php

use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\builder\Form;
use kartik\datecontrol\DateControl;
use core\models\order\OrderComplaint;
$rty=OrderComplaint::ComplaintTypes();

/**
 * @var yii\web\View $this
 * @var common\models\CustomerCommentTag $model
 * @var yii\widgets\ActiveForm $form
 */
?>
<style>
    label{margin: 0 5px;}
</style>
<div class="customer-comment-tag-form">

    <?php $form = ActiveForm::begin(['type'=>ActiveForm::TYPE_HORIZONTAL]);
     echo Form::widget([
    'model' => $model,
    'form' => $form,
    'columns' => 1,
    'attributes' => [
    	'customer_tag_type'=>['type'=> Form::INPUT_RADIO_LIST, 'items'=>['1' => '评价', '2' => '退款','3' => '其他'],'options'=>[
    		]],
    		'customer_comment_level'=>['type'=> Form::INPUT_RADIO_LIST, 'items'=>['1' => '满意', '2' => '一般','3' => '不满意'],'options'=>[
    		]],
    	
    		'customer_comment_level_es'=>[
    		'type'=> Form::INPUT_CHECKBOX_LIST,
    		'options'=>['placeholder'=>'Enter 阿姨身份...','class'=>'test'],
    		'items'=>$rty['1'],
    		],		
'customer_tag_name'=>['type'=> Form::INPUT_TEXT, 'options'=>['placeholder'=>'评价标签名称...批量用tag1|tag2|tag3|tag4', 'maxlength'=>255]], 
    		
    		'is_online'=>['type'=> Form::INPUT_RADIO_LIST, 'items'=>['1' => '开启', '2' => '关闭'],
    		'options'=>[
    		]],
    ]


    ]);
    echo Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']);
    ActiveForm::end(); ?>

</div>
