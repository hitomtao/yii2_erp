<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 */

$this->title = Yii::t('app', '用户交易记录');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="customer-trans-record-index">

    <?php echo $this->render('_search', ['model' => $searchModel]); ?>

    <?php Pjax::begin();
    echo GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'customer_id',
            'order_id',
            //'order_channel_id',
            'customer_trans_record_order_channel',
            //'pay_channel_id',
            'customer_trans_record_pay_channel',
            //'customer_trans_record_mode',
            'customer_trans_record_mode_name',
            'customer_trans_record_coupon_money',
            'customer_trans_record_cash',
            'customer_trans_record_pre_pay',
            'customer_trans_record_online_pay',
            'customer_trans_record_online_balance_pay',
            'customer_trans_record_online_service_card_on',
            'customer_trans_record_online_service_card_pay',
            'customer_trans_record_online_service_card_current_balance',
            'customer_trans_record_online_service_card_befor_balance',
            'customer_trans_record_compensate_money',
            'customer_trans_record_refund_money',
            'customer_trans_record_order_total_money',
            'customer_trans_record_total_money',
            'customer_trans_record_current_balance',
            'customer_trans_record_befor_balance',
            'customer_trans_record_transaction_id',
            //'customer_trans_record_remark',
            //'customer_trans_record_verify',
            //'created_at',
            //'updated_at',
            //'is_del',

            [
                'class' => 'yii\grid\ActionColumn',
                'template' => '{view}',
                'buttons' => [
                    'update' => function ($url, $model) {
                        return Html::a('<span class="glyphicon glyphicon-pencil"></span>', Yii::$app->urlManager->createUrl(['customer-trans-record/view', 'id' => $model->id, 'edit' => 't']), [
                            'title' => Yii::t('yii', 'Edit'),
                        ]);
                    }

                ],
            ],
        ],
        'responsive' => true,
        'hover' => true,
        'condensed' => true,
        'floatHeader' => true,
        'toolbar' => '',
        'rowOptions' =>function ($model, $key, $index, $grid){
            if($model->customer_trans_record_verify != $model->makeSign())
            {
                return ['class'=>'text-red','t1'=>$model->customer_trans_record_verify,'t2'=>$model->makeSign()];
            }

        },
        'panel' => [
            'heading' => '<h3 class="panel-title"><i class="glyphicon glyphicon-th-list"></i> ' . Html::encode($this->title) . ' </h3>',
            'type' => 'info',
            'showFooter' => false
        ],
    ]);
    Pjax::end(); ?>

</div>
