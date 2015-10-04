<?php
use common\widgets\Menu;

$ctrl = Yii::$app->controller;

echo Menu::widget(
    [
        'options' => [
            'class' => 'sidebar-menu'
        ],
        'items' => [
            [
                'label' => '家政公司管理',
                'url' => ['#'],
                'icon' => 'fa fa-slideshare',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '查看所有家政公司',
                        'url' => ['shop-manager/index'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '新合作公司',
                        'url' => ['shop-manager/create'],
                        'icon' => 'fa fa-angle-right',
                    ],
                ],
            ],
            [
                'label' => '门店管理',
                'url' => ['#'],
                'icon' => 'fa fa-flag',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '查看所有合作门店',
                        'url' => ['shop/index'],
                        'icon' => 'fa fa-angle-right',
                        //'visible' => (Yii::$app->user->identity->username == 'admin'),
                    ],
                    [
                        'label' => '查看所有自营门店',
                        'url' => ['shop/index', 'ShopSearch'=>['shop_manager_id'=>1]],
                        'icon' => 'fa fa-angle-right',
                        //'visible' => (Yii::$app->user->identity->username == 'admin'),
                    ],
                    [
                        'label' => '添加新门店',
                        'url' => ['shop/create'],
                        'icon' => 'fa fa-angle-right',
                    ],
                ],
            ],
            [
                'label' => '阿姨管理',
                'url' => ['#'],
                'icon' => 'fa fa-female',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '查看所有阿姨',
                        'url' => ['/worker'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '录入新阿姨',
                        'url' => ['/worker/create'],
                        'icon' => 'fa fa-angle-right',
                    ],
//                     [
//                         'label' => '阿姨黑名单(待定)',
//                         'url' => ['/worker/index?WorkerSearch[worker_is_blacklist]=1'],
//                         'icon' => 'fa fa-angle-right',
//                     ],
                ],
            ],
            [
                'label' => '客户管理',
                'url' => ['#'],
                'icon' => 'fa fa-user',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '查看所有顾客',
                        'url' => ['/customer/index?CustomerSearch[is_del]=0'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '管理顾客黑名单',
                        'url' => ['/customer/block?CustomerSearch[is_del]=1'],
                        'icon' => 'fa fa-angle-right',
                    ],
                ],
            ],
            [
                'label' => '订单管理',
                'url' => ['#'],
                'icon' => 'fa fa-tag',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '查看所有订单',
                        'url' => ['/order'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '创建新订单',
                        'url' => ['/order/create'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '操作订单',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                ],
            ],
            [
                'label' => '运营管理',
                'url' => ['#'],
                'icon' => 'fa fa-recycle',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '用户运营',
                        'url' => ['/operation-category'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '阿姨运营',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '企业运营',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => 'CMS管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                        'options' => [
                            'class' => 'treeview ',
                        ],
                        'items' => [
                            [
                                'label' => '平台管理',
                                'url' => ['/operation-platform'],
                                'icon' => 'fa fa-angle-right',
                            ],
                            //                            [
                                //                                'label' => '系统版本管理',
                                //                                'url' => ['/operation-platform-version'],
                                //                                'icon' => 'fa fa-angle-right',
                                //                            ],
                            [
                                'label' => '广告位置管理',
                                'url' => ['/operation-advert-position'],
                                'icon' => 'fa fa-angle-right',
                            ],
                            [
                                'label' => '活动内容管理',
                                'url' => ['/operation-advert-content'],
                                'icon' => 'fa fa-angle-right',
                            ],
                            [
                                'label' => '广告发布',
                                'url' => ['/operation-advert-release'],
                                'icon' => 'fa fa-angle-right',
                            ],
                        ]
                    ],
                    [
                        'label' => '通知管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '促销管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                    'label' => '城市管理',
                    'url' => ['/operation-city'],
                    'icon' => 'fa fa-angle-right',
                    ],
//                     [

//                        'label' => '商圈管理(40%)',
//                        'url' => ['/operation-shop-district'],
//                        'icon' => 'fa fa-angle-right',
//                    ],
                    [
                        'label' => '服务管理',
                        'url' => ['/operation-category'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '启动页管理',
                        'url' => ['/operation-boot-page'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    /**[
                     'label' => '引导页管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '话术管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],*/
                ],
            ],
            [
                'label' => '财务管理',
                'url' => ['#'],
                'icon' => 'fa fa-credit-card',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '对账管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
						'options' => [
							'class' => 'treeview ',
						],
						'items' => [
							[
    							'label' => '渠道管理',
    							'url' => ['/finance-order-channel/'],
    							'icon' => 'fa fa-angle-right',
							],[
    							'label' => '配置对账表头',
    							'url' => ['/finance-header/index'],
    							'icon' => 'fa fa-angle-right',
							],[
							'label' => '开始对账',
    							'url' => ['/finance-pop-order/'],
    							'icon' => 'fa fa-angle-right',
							],[
    							'label' => '查看历史对账记录',
    							'url' => ['/finance-record-log/'],
    							'icon' => 'fa fa-angle-right',
							],[
    							'label' => '对账记录详情',
    							'url' => ['/finance-pop-order/billinfo'],
    							'icon' => 'fa fa-angle-right',
							],[
    							'label' => '坏账管理',
    							'url' => ['/finance-pop-order/bad'],
    							'icon' => 'fa fa-angle-right',
							]
		
					   ]
                    ],
                    [
                        'label' => '结算管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                        'options' => [
                            'class' => 'treeview ',
                        ],
                        'items'=>[
                            [
                                'label' => '结算详情',
                                'url' => ['#'],
                                'icon' => 'fa fa-angle-right',
                            ],[
                                'label' => '阿姨结算',
                                'url' => ['/finance-settle-apply/worker-manual-settlement-index'],
                                'icon' => 'fa fa-angle-right',
                            ],[
                                'label' => '结算审核',
                                'url' => ['/finance-settle-apply/index?FinanceSettleApplySearch[finance_settle_apply_status]=0&FinanceSettleApplySearch[ids]=&FinanceSettleApplySearch[nodeId]=1'],
                                'icon' => 'fa fa-angle-right',
                            ]
                        ],
                    ],
                    [
                        'label' => '退款管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
							'options' => [
							'class' => 'treeview',
							],
							'items' => [
							[
							'label' => '确认退款审核',
							'url' => ['/finance-refund/'],
							'icon' => 'fa fa-angle-right',
							],
							[
							'label' => '退款确认退款审批',
							'url' => ['/finance-refund/'],
							'icon' => 'fa fa-angle-right',
							],[
							'label' => '会计执行银行退款',
							'url' => ['/finance-refund/'],
							'icon' => 'fa fa-angle-right',
							],[
							'label' => '确认银行退款',
							'url' => ['/finance-refund/'],
							'icon' => 'fa fa-angle-right',
							],[
							'label' => '退款详情',
							'url' => ['/finance-refund/'],
							'icon' => 'fa fa-angle-right',
							],[
							'label' => '退款统计',
							'url' => ['/finance-refund/'],
							'icon' => 'fa fa-angle-right',
							]
							]
							
                    ],
                    [
                        'label' => '赔偿管理',
                        'url' => ['/finance-compensate/'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '报表管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '发票管理',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
//                     [
//                         'label' => '线下运营（80%）',
//                         'url' => ['#'],
//                         'icon' => 'fa fa-angle-right',
// 							'options' => [
// 							'class' => 'treeview',
// 							],
// 							'items' => [
							
// 							]
							
//                     ]
                ],
            ],

            [
                'label' => '供应商管理',
                'url' => ['#'],
                'icon' => 'fa fa-ambulance',
                'options' => [
                    'class' => 'treeview rootTree',
                ],
                'items' => [
                    [
                        'label' => '查看所有供应商',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '添加新供应商',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '商品供应商',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    [
                        'label' => '服务供应商',
                        'url' => ['#'],
                        'icon' => 'fa fa-angle-right',
                    ],
                    
                ],
            ],
//             [
//                 'label' => 'POP管理',
//                 'url' => ['#'],
//                 'icon' => 'fa fa-random',
//                 'options' => [
//                     'class' => 'treeview rootTree',
//                 ],
//                 'items' => [
//                     [
//                         'label' => '查看所有渠道',
//                         'url' => ['#'],
//                         'icon' => 'fa fa-angle-right',
//                     ],
//                     [
//                         'label' => '添加新渠道',
//                         'url' => ['#'],
//                         'icon' => 'fa fa-angle-right',
//                     ],
//                 ],
//             ],

        ]
    ]
);