<?php
namespace restapi\controllers;

use Yii;
use \core\models\operation\OperationShopDistrictGoods;
use \core\models\operation\OperationCategory;
use \core\models\operation\OperationShopDistrictCoordinate;
use \core\models\worker\Worker;
use \core\models\customer\CustomerAccessToken;
use \core\models\operation\OperationSelectedService;
use \core\models\customer\CustomerAddress;


class ServiceController extends \restapi\components\Controller
{
    /**
     * @api {GET} v1/service/service-goods 依据城市和服务品类 获取服务类型列表 （赵顺利 80%url不能获取）
     * @apiName actionServiceGoods
     * @apiGroup service
     * @apiDescription 获得某城市下某服务的所有子服务列表，返回子服务数组[服务名,服务描述,服务图标，服务id，url]
     *
     * @apiParam {String} city_name 城市
     * @apiParam {String} category_id 服务品类id
     * @apiParam {String} [app_version] 访问源(android_4.2.2)
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "code": "1",
     *      "msg": "",
     *      "ret":
     *      [
     *          {
     *              "goods_id": "2", 服务类型id
     *              "goods_no": null,  服务类型编号
     *              "goods_name": "空调清洗",  服务类型名
     *              "goods_introduction": "", 服务类型简介
     *              "goods_english_name": "", 服务类型英文名称
     *              "goods_img": "", 服务类型图片
     *              "goods_app_ico": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)
     *              "goods_pc_ico": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)
     *              "goods_price": "0.0000", 价格
     *              "goods_price_unit": "件",  单位
     *              "goods_price_description": "1232131"
     *              "goods_page_url": ""
     *          },
     *       ],
     *  }
     *
     * @apiError CityNotSupportFound 该城市暂未开通.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":"0",
     *       "msg": "该城市暂未开通"
     *     }
     */
    public function actionServiceGoods()
    {
        $param = Yii::$app->request->get();

        if (empty(@$param['city_name'])) {
            return $this->send(null, "未取得城市信息", 0, 403);
        }

        $goodses = OperationShopDistrictGoods::getGoodsByCityCategory($param['city_name'], $param['category_id']);

        if (empty($goodses)) {
            return $this->send(null, "该城市暂未开通该类型的服务", 0, 403);
        }
        $gDate = [];
        foreach ($goodses as $gItem) {
            $gobject = [
                'goods_id' => $gItem['goods_id'],
                'goods_no' => $gItem['operation_goods_no'],
                'goods_name' => $gItem['operation_goods_name'],
                'goods_introduction' => $gItem['operation_goods_introduction'],
                'goods_english_name' => $gItem['operation_goods_english_name'],
                'goods_img' => $gItem['operation_goods_img'],
                'goods_app_ico' => $gItem['operation_goods_app_ico'],
                'goods_pc_ico' => $gItem['operation_goods_pc_ico'],
                'goods_price' => $gItem['operation_goods_price'],
                'goods_price_unit' => $gItem['operation_spec_strategy_unit'],
                'goods_price_description' => $gItem['operation_goods_price_description'],
                'goods_page_url' => '',
            ];
            $gDate[] = $gobject;
        }
        return $this->send($gDate, "数据获取成功");
    }

    /**
     * @api {GET} v1/service/home-services 依据城市 获取首页服务列表 （赵顺利 20% 假数据，未与boss关联）
     * @apiName actionHomeServices
     * @apiGroup service
     * @apiDescription 获取城市首页服务项目信息简介
     *
     * @apiParam {String} city_name 城市
     * @apiParam {String} [app_version] 访问源(android_4.2.2)
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "code": 1,
     *      "msg": "信息获取成功",
     *      "ret":
     *      [
     *      {
     *          "goods_id": "1",
     *          "goods_no": "",
     *          "goods_name": "管道疏通",
     *          "goods_introduction": "含：专业设备+专业技师+上门服务",
     *          "goods_english_name": "",
     *          "goods_img": "",
     *          "goods_app_ico": "",
     *          "goods_pc_ico": "",
     *          "goods_price": "160.00",
     *          "goods_price_unit": "眼",
     *          "goods_price_description": ""
     *      },
     *      {
     *          "goods_id": "2",
     *          "goods_no": "",
     *          "goods_name": "家电维修",
     *          "goods_introduction": "含：专业设备+专业技师+上门服务",
     *          "goods_english_name": "",
     *          "goods_img": "",
     *          "goods_app_ico": "",
     *          "goods_pc_ico": "",
     *          "goods_price": "160.00",
     *          "goods_price_unit": "次",
     *          "goods_price_description": ""
     *      },
     *      {
     *          "goods_id": "3",
     *          "goods_no": "",
     *          "goods_name": "家具组装",
     *          "goods_introduction": "含：专业设备+专业技师+上门服务",
     *          "goods_english_name": "",
     *          "goods_img": "",
     *          "goods_app_ico": "",
     *          "goods_pc_ico": "",
     *          "goods_price": "160.00",
     *          "goods_price_unit": "次",
     *          "goods_price_description": ""
     *      }
     *      ]
     *  }
     *
     * @apiError CityNotSupportFound 该城市暂未开通.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":0,
     *       "msg": "该城市暂未开通"
     *     }
     */
    public function actionHomeServices()
    {
        $param = Yii::$app->request->get();

        if (empty(@$param['city_name'])) {
            return $this->send(null, "未取得城市信息", 0, 403);
        }

        $ret = [
            [
                'goods_id' => '1',
                'goods_no' => '',
                'goods_name' => '管道疏通',
                'goods_introduction' => '含：专业设备+专业技师+上门服务',
                'goods_english_name' => '',
                'goods_img' => '',
                'goods_app_ico' => '',
                'goods_pc_ico' => '',
                'goods_price' => '160.00',
                'goods_price_unit' => '眼',
                'goods_price_description' => ''
            ],
            [
                'goods_id' => '2',
                'goods_no' => '',
                'goods_name' => '家电维修',
                'goods_introduction' => '含：专业设备+专业技师+上门服务',
                'goods_english_name' => '',
                'goods_img' => '',
                'goods_app_ico' => '',
                'goods_pc_ico' => '',
                'goods_price' => '160.00',
                'goods_price_unit' => '次',
                'goods_price_description' => ''
            ],
            [
                'goods_id' => '3',
                'goods_no' => '',
                'goods_name' => '家具组装',
                'goods_introduction' => '含：专业设备+专业技师+上门服务',
                'goods_english_name' => '',
                'goods_img' => '',
                'goods_app_ico' => '',
                'goods_pc_ico' => '',
                'goods_price' => '160.00',
                'goods_price_unit' => '次',
                'goods_price_description' => ''
            ],

        ];

        return $this->send($ret, "信息获取成功");
    }

    /**
     * @api {GET} v1/service/all-services 依据城市 获取所有服务列表 (赵顺利100%)
     * @apiName actionAllServices
     * @apiGroup service
     * @apiDescription 获取城市所以服务类型列表
     *
     * @apiParam {String} city_name 城市
     * @apiParam {String} [app_version] 访问源(android_4.2.2)
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "code": "1",
     *      "msg": "",
     *      "ret":
     *      [
     *      {
     *          "category_id":"", 服务品类id
     *          "category_name":"专业保洁",  服务品类名
     *          "goodses":
     *          [
     *          {
     *              "goods_id": "2", 服务类型id
     *              "goods_no": null,  服务类型编号
     *              "goods_name": "空调清洗",  服务类型名
     *              "goods_introduction": "", 服务类型简介
     *              "goods_english_name": "", 服务类型英文名称
     *              "goods_img": "", 服务类型图片
     *              "goods_app_ico": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)
     *              "goods_pc_ico": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)
     *              "goods_price": "0.0000", 价格
     *              "goods_price_unit": "件",  单位
     *              "goods_price_description": "1232131"
     *          },
     *          ]
     *       }
     *       ],
     *  }
     *
     * @apiError CityNotSupportFound 该城市暂未开通.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":"0",
     *       "msg": "该城市暂未开通"
     *     }
     */
    public function actionAllServices()
    {
        $param = Yii::$app->request->get();

        if (empty(@$param['city_name'])) {
            return $this->send(null, "未取得城市信息", 0, 403);
        }

        $categoryes = OperationCategory::getAllCategory();
        $goodses = OperationShopDistrictGoods::getGoodsByCity($param['city_name']);

        if (empty($categoryes) || empty($goodses)) {
            return $this->send(null, "该城市暂未开通", 0, 403);
        }
        $cDate = [];
        foreach ($categoryes as $cItem) {
            $gDate = [];
            foreach ($goodses as $gItem) {
                if ($cItem['id'] == $gItem['operation_category_id']) {
                    $gobject = [
                        'goods_id' => $gItem['goods_id'],
                        'goods_no' => $gItem['operation_goods_no'],
                        'goods_name' => $gItem['operation_goods_name'],
                        'goods_introduction' => $gItem['operation_goods_introduction'],
                        'goods_english_name' => $gItem['operation_goods_english_name'],
                        'goods_img' => $gItem['operation_goods_img'],
                        'goods_app_ico' => $gItem['operation_goods_app_ico'],
                        'goods_pc_ico' => $gItem['operation_goods_pc_ico'],
                        'goods_price' => $gItem['operation_goods_price'],
                        'goods_price_unit' => $gItem['operation_spec_strategy_unit'],
                        'goods_price_description' => $gItem['operation_goods_price_description'],
                    ];
                    $gDate[] = $gobject;
                }

            }
            $cObject = [
                'category_id' => $cItem['id'],
                'category_name' => $cItem['operation_category_name'],
                'goodses' => $gDate
            ];
            $cDate[] = $cObject;
        }

        return $this->send($cDate, "数据获取成功");
    }

    /**
     * @api {GET} v1/service/goods-price 获取某城市某商品的价格及备注信息（赵顺利 100%）
     * @apiName actionGoodsPrice
     * @apiGroup service
     * @apiDescription 获取某城市某商品的价格及备注信息
     *
     * @apiParam {String} city_id 城市id
     * @apiParam {String} longitude 经度
     * @apiParam {String} latitude 纬度
     * @apiParam {String} goods_id 服务品类id
     * @apiParam {String} [app_version] 访问源(android_4.2.2)
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "code": 1,
     *      "msg": "",
     *      "ret":
     *      [
     *          "goods_price": "0.0000", 价格
     *      ],
     *  }
     *
     * @apiError CityNotSupportFound 错误的城市信息.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":0,
     *       "msg": "错误的城市信息"
     *     }
     */
    public function actionGoodsPrice()
    {
        $params = Yii::$app->request->get();

        if (empty($params['longitude']) || empty($params['latitude'])) {
            return $this->send(null, "经纬度信息不存在", 0, 403);
        }
        $shopDistrict = OperationShopDistrictCoordinate::getCoordinateShopDistrictInfo($params['longitude'], $params['latitude']);
        if (empty($shopDistrict)) {
            return $this->send(null, "没有上线商圈", 0, 403);
        }
        $goods = OperationShopDistrictGoods::getShopDistrictGoodsInfo($params['city_id'], $shopDistrict['operation_shop_district_id'], $params['goods_id']);

        if (empty($goods)) {
            return $this->send(null, "该商圈没有上线当前服务品类", 0, 403);
        }

        $ret = [
            'goods_price' => $goods['operation_shop_district_goods_price'],
        ];

        return $this->send($ret, "数据获取成功");
    }

    /**
     * @api {GET} v1/service/cleaning-task 获得所有保洁任务项目（赵顺利 100%）
     * @apiGroup service
     * @apiName actionCleaningTask
     * @apiDescription 获取城市所有保洁任务
     *
     * @apiParam {String} city_id 城市
     * @apiParam {String} address_id 地址id
     * @apiParam {String} build_area 建筑面积 传面积类型 1\2; 1是小于100平米的，2是大于100平米的
     * @apiParam {String} [app_version] 访问源(android_4.2.2)
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "code": "1",
     *      "msg": "",
     *      "ret":[
     *          {
     *              "id": "1",
     *              "selected_service_scene": "",
     *              "selected_service_area": "1",
     *              "selected_service_sub_area": "1",
     *              "selected_service_standard": "",
     *              "selected_service_area_standard": "1",
     *              "selected_service_unit": "1",
     *              "selected_service_photo": "1",
     *              "created_at": "1"
     *          },
     *          ]
     *  }
     *
     * @apiError CityNotSupportFound 该城市暂未开通.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":"0",
     *       "msg": "该城市暂未开通"
     *     }
     */
    public function actionCleaningTask()
    {
        $params = Yii::$app->request->get();
        if (empty($params) || empty($params['city_id']) || empty($params['build_area']))
            return $this->send(null, "参数信息不完整", '0', 403);

        //获取地址信息
        $address = CustomerAddress::getAddress($params['city_id']);
        if (empty($address)) return $this->send(null, "获取地址信息失败", '0', 403);

        //获取商圈
        $shopDistrict = OperationShopDistrictCoordinate::getCoordinateShopDistrictInfo($address['customer_address_longitude'], $address['customer_address_latitude']);
        if (empty($shopDistrict)) return $this->send(null, "未找到相应商圈", '0', 403);

        //获取商圈品类上线
        $goodses = OperationShopDistrictGoods::getGoodsCategoryInfo($params['city_id'], $shopDistrict['id'], '精品保洁');
        if (empty($goodses)) return $this->send(null, "该商圈未上线精品保洁", '0', 403);

        $date = OperationSelectedService::getSelectedServiceList($params['build_area']);

        if (empty($date)) return $this->send(null, "获取精品保洁商品信息失败", "0", "403");

        return $this->send($date, "获取精品保洁商品信息成功");

    }

    
    /**
     * @api {get} v1/service/single-service-time  单次服务排班表(李勇100%)
     * @apiName SingleServiceTime
     * @apiGroup service
     * @apiDescription 单次服务获取服务时间
     * @apiParam {String} access_token    用户认证.
     * @apiParam {String} service_type  服务类型
     * @apiParam {String} longitude     当前经度.
     * @apiParam {String} latitude      当前纬度.
     * @apiParam {String} plan_time 计划服务时长
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     *{
     *"code": 1,
     *"msg": "获取单次服务排班表成功",
     *"ret": [
     *       {
     *           "date": "2015-10-29",
     *           "timeline": [
     *               {
     *                   "time": "8:00-10:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "8:30-10:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "9:00-11:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "9:30-11:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "10:00-12:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "10:30-12:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "11:00-13:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "11:30-13:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "12:00-14:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "12:30-14:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "13:00-15:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "13:30-16:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "14:00-17:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "14:30-17:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "15:00-18:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "16:30-18:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "17:00-19:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "17:30-19:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "18:00-20:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "18:30-20:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "19:00-21:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "19:30-21:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "20:00-22:00",
     *                   "enable": false
     *               }
     *           ]
     *       }
     *    ]
     * }
     * 
     * @apiError UserNotFound 用户认证已经过期.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     {
     *       "code": "0",
     *       "msg": "用户认证已经过期,请重新登录，"
     *
     *     }
     *
     */
    function actionSingleServiceTime()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        if (!isset($param['access_token']) || !$param['access_token'] || !CustomerAccessToken::checkAccessToken($param['access_token'])) {
            return $this->send(null, "用户认证已经过期,请重新登录", 0, 403);
        }
        if (!isset($param['longitude']) || !$param['longitude'] || !isset($param['latitude']) || !$param['latitude'] || !isset($param['plan_time']) || !$param['plan_time']) {
            return $this->send(null, "请填写服务地址或服务时长", 0, 403);
        }
        $longitude = $param['longitude'];
        $latitude = $param['latitude'];
        $plan_time = $param['plan_time'];
        //根据经纬度获取商圈id
        try{
             $ShopDistrictInfo = OperationShopDistrictCoordinate::getCoordinateShopDistrictInfo($longitude, $latitude);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        if (empty($ShopDistrictInfo)) {
            return $this->send(null, "商圈不存在", 0, 403);
        } else {
            $district_id = $ShopDistrictInfo['id'];
        }
        //获取单次服务排班表
        try{
            $single_worker_time=Worker::getWorkerTimeLine($district_id,$plan_time,time(),7);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        return $this->send($single_worker_time, "获取单次服务排班表成功");
    }

    /**
     * @api {get} /worker/recursive-service-time  周期服务时间表(李勇100%)
     * @apiName actionRecursiveServiceTime
     * @apiGroup service
     * @apiDescription 周期服务时间表
     * @apiParam {String} access_token    用户认证.
     * @apiParam {String} service_type  服务类型
     * @apiParam {String} longitude     当前经度.
     * @apiParam {String} latitude      当前纬度.
     * @apiParam {String} worker_id   阿姨id.
     * @apiParam {String} plan_time 计划服务时长.
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *   "code": 1,
     *   "msg": "获取周期服务时间表成功",
     *   "ret": [
     *       {
     *           "date": "2015-10-29",
     *           "timeline": [
     *               {
     *                   "time": "8:00-10:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "8:30-10:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "9:00-11:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "9:30-11:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "10:00-12:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "10:30-12:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "11:00-13:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "11:30-13:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "12:00-14:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "12:30-14:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "13:00-15:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "13:30-16:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "14:00-17:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "14:30-17:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "15:00-18:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "16:30-18:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "17:00-19:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "17:30-19:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "18:00-20:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "18:30-20:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "19:00-21:00",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "19:30-21:30",
     *                   "enable": false
     *               },
     *               {
     *                   "time": "20:00-22:00",
     *                   "enable": false
     *               }
     *           ]
     *       }
     *    ]
     * }
     * 
     * @apiError UserNotFound 用户认证已经过期.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Not Found
     *     {
     *       "code": "0",
     *       "msg": "用户认证已经过期,请重新登录，"
     *
     *     }
     *
     */
    function actionRecursiveServiceTime()
    {
        $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        if (!isset($param['access_token']) || !$param['access_token'] || !CustomerAccessToken::checkAccessToken($param['access_token'])) {
            return $this->send(null, "用户认证已经过期,请重新登录", 0, 403);
        }
        if (!isset($param['longitude']) || !$param['longitude'] || !isset($param['latitude']) || !$param['latitude'] || !isset($param['plan_time']) || !$param['plan_time']|| !isset($param['worker_id']) || !$param['worker_id']) {
            return $this->send(null, "请填写服务地址或服务时长或选择阿姨", 0, 403);
        }
        $longitude = $param['longitude'];
        $latitude = $param['latitude'];
        $worker_id = $param['worker_id'];
        $plan_time = $param['plan_time'];
        //根据经纬度获取商圈id
        try{
            $ShopDistrictInfo = OperationShopDistrictCoordinate::getCoordinateShopDistrictInfo($longitude, $latitude);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        if (empty($ShopDistrictInfo)) {
            return $this->send(null, "商圈不存在", 0, 403);
        } else {
            $district_id = $ShopDistrictInfo['id'];
        }
        //获取周期服务时间表
        try{
            $recursive_worker_time=Worker::getWorkerTimeLine($district_id,$plan_time,strtotime('+7days'),30,$worker_id);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
        return $this->send($recursive_worker_time, "获取周期服务时间表成功");
    }
    
     /**
     * @api {GET} v1/service/server-worker-list 周期服务可用阿姨列表（李勇 80%缺少model支持）
     * @apiGroup service
     * @apiName actionServerWorkerList
     * @apiDescription 获取周期服务可用阿姨列表
     *
     * @apiParam {String} access_token    用户认证.
     * @apiParam {String} longitude     当前经度.
     * @apiParam {String} latitude      当前纬度.
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *   {
     *       "code": 1,
     *       "msg": "获取周期服务可用阿姨列表成功",
     *       "ret": {
     *           "worker_id": 1,
     *           "worker_name": "阿姨姓名",
     *           "worker_phote": "阿姨头像",
     *           "server_times": "服务次数",
     *           "server_star": "服务星级",
     *           "last_time": "最后服务时间"
     *       }
     *   }
     *
     * @apiError queryNotSupportFound 没有可用阿姨
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":"0",
     *       "msg": "没有可用阿姨"
     *     }
     */
    public function actionServerWorkerList()
    {
       $param = Yii::$app->request->get() or $param = json_decode(Yii::$app->request->getRawBody(), true);
        if (!isset($param['access_token']) || !$param['access_token'] || !CustomerAccessToken::checkAccessToken($param['access_token'])) {
            return $this->send(null, "用户认证已经过期,请重新登录", 0, 403);
        }
        if (!isset($param['longitude']) || !$param['longitude'] || !isset($param['latitude']) || !$param['latitude']){
            return $this->send(null, "请填写服务地址", 0, 403);
        }
        $longitude = $param['longitude'];
        $latitude = $param['latitude'];
        //根据经纬度获取商圈id
        try{
            $ShopDistrictInfo = OperationShopDistrictCoordinate::getCoordinateShopDistrictInfo($longitude, $latitude);
        }catch (\Exception $e) {
            return $this->send(null, "boss系统错误", 1024, 403);
        }
         $district_id = $ShopDistrictInfo['id'];
         //获取周期订单可用阿姨的列表
//        try{
//            $worker_list=Worker::getWorkerList($district_id);
//        }catch (\Exception $e) {
//            return $this->send(null, "boss系统错误", 1024, 403);
//        }
         $ret = [
                'worker_id' => 1,
                'worker_name' => "阿姨姓名",
                'worker_phote' =>"阿姨头像",
                'server_times' => '服务次数',
                'server_star' => '服务星级',
                'last_time' =>'最后服务时间'
            ];
        if(empty($ret)){
            return $this->send(null, "没有可用阿姨",0);
        }else{
            return $this->send($ret, "获取周期服务可用阿姨列表成功",1);
        }
    }
    
    /**
     * @api {GET} v1/service/baidu-map 根据地址获取百度地图数据（赵顺利 100%）
     * @apiGroup service
     * @apiName actionBaiduMap
     * @apiDescription 根据地址获取百度地图数据
     *
     * @apiParam {String} query 查询关键字
     * @apiParam {String} location 经纬度
     * @apiParam {String} radius 半径
     * @apiParam {String} output 输出方式
     * @apiParam {String} ak
     * @apiSampleRequest http://dev.api.1jiajie.com/v1/service/baidu-map
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "code": "1",
     *      "msg": "",
     *      "ret":
     *  }
     *
     * @apiError queryNotSupportFound 关键字不能为空.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":"0",
     *       "msg": "关键字不能为空"
     *     }
     */
    public function actionBaiduMap()
    {
        $params = Yii::$app->request->get();

        $path = "http://api.map.baidu.com/place/v2/search";
        if (empty($params) || empty($params['query']) || empty($params['location']) || empty($params['radius']) || empty($params['output']) || empty($params['ak'])) {
            return $this->send(null, '参数不完成', '0', '403');
        }
        $url = "http://api.map.baidu.com/place/v2/search?query=" . $params['query'] . '&location=' . $params['location'] .
            '&radius=' . $params['radius'] . '&output=' . $params['output'] . '&ak=' . $params['ak'];

        $date = file_get_contents($url);

        return $this->send(json_decode($date), '操作成功');

    }
}

?>