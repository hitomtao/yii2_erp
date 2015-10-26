<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var boss\models\Operation\OperationGoods $model
 */

$this->title = Yii::t('app', 'Update').Yii::t('app', 'Goods') . ' ';
//$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Operation Goods'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Operation Goods'), 'url' => ['/operation-category']];
//$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="operation-goods-update">
    <?= $this->render('_form', [
        'model' => $model,
        'status' => 'update',
        'OperationCategory' => $OperationCategory,
//        'priceStrategies' => $priceStrategies,
        'OperationSpec' => $OperationSpec,
    ]) ?>

</div>