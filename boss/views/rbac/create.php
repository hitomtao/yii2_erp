<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\Area */

$this->title = '创建授权项';
$this->params['breadcrumbs'][] =['label' => '管理授权项', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="auth-item-create">
<?=$this->render('_form', [
        'model' => $model,
    ]) ?>
</div>
