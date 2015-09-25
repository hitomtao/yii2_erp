<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use boss\components\AreaCascade;
use kartik\widgets\Select2;
use yii\helpers\Url;
use yii\web\JsExpression;

/* @var $this yii\web\View */
/* @var $model boss\models\search\ShopManagerSearch */
/* @var $form yii\widgets\ActiveForm */
?>
<?php $form = ActiveForm::begin([
    'action' => ['index'],
    'method' => 'get',
]); ?>

<?php 
echo AreaCascade::widget([
    'model' => $model,
    'options' => ['class' => 'form-control inline'],
    'label' =>'选择城市',
    'grades' => 'city',
    'is_minui'=>true,
]);
?>
<?php //echo Html::activeTextInput($model, 'is_blacklist')?>
<?php //echo Html::activeTextInput($model, 'audit_status')?>

<?= Html::submitButton(Yii::t('app', 'Search'), ['class' => 'btn btn-primary']) ?>

<?php ActiveForm::end(); ?>
