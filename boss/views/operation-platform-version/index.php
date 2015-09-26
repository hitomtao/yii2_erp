<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app' ,'Platform').Yii::t('app' ,'Version');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Platform'), 'url' => ['operation-platform/index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="operation-platform-version-index">

    <!--<h1><?php //= Html::encode($this->title) ?></h1>-->

    <p>
        <?= Html::a(Yii::t('app' ,'Create').Yii::t('app' ,'Version'), ['create', 'platform_id' =>$platform_id ], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            [
                'header' => Yii::t('app', 'Order Number'),
                'class' => 'yii\grid\SerialColumn'
            ],

//            'id',
//            'operation_platform_id',
            'operation_platform_name',
            'operation_platform_version_name',
            [
               'attribute'=> 'created_at',
               'format'=>'html',
               'value' => function ($model){
                    if(empty($model->created_at)){
                        return '';
                    }else{
                        return date('Y-m-d H:i:s', $model->created_at);
                    }
               }
            ],
            [
               'attribute'=> 'updated_at',
               'format'=>'html',
               'value' => function ($model){
                    if(empty($model->updated_at)){
                        return '';
                    }else{
                        return date('Y-m-d H:i:s', $model->updated_at);
                    }
               }
            ],

            [
                'header' => Yii::t('app', 'Operation'),
                'class' => 'yii\grid\ActionColumn',
                'buttons' => [
                    'view' => function ($url, $model) {
                        return Html::a(
                            '<span class="glyphicon glyphicon-eye-open"></span>', 
                            Yii::$app->urlManager->createUrl(['operation-platform-version/view','id' => $model->id, 'platform_id' => $model->operation_platform_id]),
                            ['title' => Yii::t('yii', 'View'), 'class' => 'btn btn-success btn-sm']
                        );
                    },
                    'update' => function ($url, $model) {
                        return Html::a(
                            '<span class="glyphicon glyphicon-pencil"></span>', 
                            Yii::$app->urlManager->createUrl(['operation-platform-version/update','id' => $model->id, 'platform_id' => $model->operation_platform_id]),
                            ['title' => Yii::t('yii', 'Update'), 'class' => 'btn btn-info btn-sm']
                        );
                    },
                    'delete' => function ($url, $model) {
                        return Html::a(
                            '<span class="glyphicon glyphicon-trash"></span>', 
                            Yii::$app->urlManager->createUrl(['operation-platform-version/delete','id' => $model->id, 'platform_id' => $model->operation_platform_id]),
                            ['title' => Yii::t('yii', 'Delete'), 'class' => 'btn btn-danger btn-sm', 'data-pjax'=>"0", 'data-method'=>"post", 'data-confirm'=>"您确定要删除此项吗？", 'aria-label'=>Yii::t('yii', 'Delete')]
                        );
                    },
                ],
            ],
        ],
    ]); ?>

</div>
