define({ "api": [
  {
    "type": "POST",
    "url": "/auth/login",
    "title": "客户登录（李勇100%）",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "verify_code",
            "description": "<p>短信验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌字符串.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"登录成功\"，\n  \"ret\":{\n     \"user\":{}\n     \"access_token\":\"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"用户名或验证码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/login-from-pop",
    "title": "客户登录(第三方渠道) (已实现)",
    "name": "LoginFromPop",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sign",
            "description": "<p>签名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名称(拼音)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌字符串.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"登录成功\"，\n  \"ret\":{\n     \"user\":{}\n     \"access_token\":\"807b62127fdc2554607a01529d9e4b7e\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"用户名,签名或渠道名称错误\",\n  \"ret\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/worker-login",
    "title": "阿姨登录（李勇100%)",
    "name": "actionWorkerLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>阿姨电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "verify_code",
            "description": "<p>短信验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>阿姨信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌字符串.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"code\": 1,\n      \"msg\": \"登陆成功\",\n      \"ret\": {\n          \"user\": {\n              \"id\": 1,\n              \"shop_id\": 221,\n              \"worker_name\": \"李刘珍\",\n              \"worker_phone\": \"1350122342342\",\n              \"worker_photo\": \"1.png\",\n              \"worker_level\": 1,\n              \"worker_auth_status\": 0,\n              \"worker_ontrial_status\": 0,\n              \"worker_onboard_status\": 0,\n              \"worker_work_city\": 1,\n              \"worker_work_area\": 1,\n              \"worker_work_street\": \"1\",\n              \"worker_work_lng\": null,\n              \"worker_work_lat\": null,\n              \"worker_type\": 1,\n              \"worker_rule_id\": 1,\n              \"worker_identity_id\": 1,\n              \"worker_is_block\": 0,\n              \"worker_is_vacation\": 0,\n              \"worker_is_blacklist\": 0,\n              \"worker_blacklist_reason\": null,\n              \"worker_blacklist_time\": 0,\n              \"worker_is_dimission\": 0,\n              \"worker_dimission_reason\": null,\n              \"worker_dimission_time\": 0,\n              \"created_ad\": 1444360582,\n              \"updated_ad\": null,\n              \"isdel\": 0\n          },\n          \"access_token\": \"eaa872ee3e20880be5e368f289d5aa67\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"用户名或验证码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "v1/order/append-order",
    "title": "追加订单(xieyi 90% 目前产品已删除该需求 )",
    "name": "ActionAppendOrder",
    "group": "Order",
    "description": "<p>追加订单</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_service_type_id",
            "description": "<p>服务类型商品id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_src_id",
            "description": "<p>订单来源id 访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_booked_begin_time",
            "description": "<p>服务开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_booked_end_time",
            "description": "<p>服务结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_customer_phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_parent_id",
            "description": "<p>追加父订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_pay_type",
            "description": "<p>支付方式 1现金 2线上 3第三方 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>订单地址id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "address",
            "description": "<p>订单地址</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "city",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_pop_order_code",
            "description": "<p>第三方订单号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_pop_group_buy_code",
            "description": "<p>第三方团购号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "order_pop_order_money",
            "description": "<p>第三方订单金额,预付金额</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "coupon_id",
            "description": "<p>优惠劵id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channel_id",
            "description": "<p>下单渠道</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_booked_worker_id",
            "description": "<p>指定阿姨id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "order_customer_need",
            "description": "<p>客户需求</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_customer_memo",
            "description": "<p>客户备注</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "order_is_use_balance",
            "description": "<p>是否使用余额 1 使用 0 不适用 默认1</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/order/action-append-order"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "order",
            "description": "<p>成功订单对象.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"以下单成功，正在等待阿姨抢单\",\n  \"ret\":{\n      \"order\": {}\n\n  }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "POST",
    "url": "/order/create-order",
    "title": "创建订单 (90%xieyi  缺少周期订单和精品保洁，缺少后台模块支持)",
    "name": "ActionCreateOrder",
    "group": "Order",
    "description": "<p>创建订单v1</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_service_type_id",
            "description": "<p>服务类型商品id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_src_id",
            "description": "<p>订单来源id 访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_booked_begin_time",
            "description": "<p>服务开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_booked_end_time",
            "description": "<p>服务结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_customer_phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_pay_type",
            "description": "<p>支付方式 1现金 2线上 3第三方 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>订单地址id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channel_id",
            "description": "<p>下单渠道</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "address",
            "description": "<p>订单地址</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "city",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_pop_order_code",
            "description": "<p>第三方订单号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_pop_group_buy_code",
            "description": "<p>第三方团购号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "order_pop_order_money",
            "description": "<p>第三方订单金额,预付金额</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "coupon_id",
            "description": "<p>优惠劵id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_booked_worker_id",
            "description": "<p>指定阿姨id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "order_customer_need",
            "description": "<p>客户需求</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_customer_memo",
            "description": "<p>客户备注</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "order_is_use_balance",
            "description": "<p>是否使用余额 1 使用 0 不适用 默认1</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "order",
            "description": "<p>成功订单对象.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": \"1\",\n \"msg\": \"创建订单成功\",\n \"ret\": {\n         \"order_service_type_id\": \"1\",\n         \"order_src_id\": \"2\",\n         \"order_booked_begin_time\": \"1445251619\",\n         \"order_booked_end_time\": \"1445255219\",\n         \"address_id\": \"1\",\n         \"channel_id\": \"20\",\n         \"order_ip\": \"::1\",\n         \"order_parent_id\": 0,\n         \"order_is_parent\": 0,\n         \"order_unit_money\": \"20.0000\",\n         \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n         \"order_booked_count\": 60,\n         \"order_money\": 20,\n         \"order_address\": \"光华路soho,张三,18622344432\",\n         \"order_code\": \"1110\",\n         \"order_src_name\": \"IOS\",\n         \"order_channel_name\": \"后台下单\",\n         \"checking_id\": 0,\n         \"isdel\": 0,\n         \"created_at\": 1445320069,\n         \"updated_at\": 1445320069,\n         \"id\": 8\n     }\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/order/action-append-order"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/add-comment",
    "title": "评价订单（该功能写在UserController里面 v1/user/user-suggest）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_id",
            "description": "<p>子订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>评价内容</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "is_anonymous",
            "description": "<p>是否匿名评价</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rate",
            "description": "<p>星级</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tag",
            "description": "<p>评价标签</p> "
          }
        ]
      }
    },
    "name": "AddComment",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"订单评价成功成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "PUT",
    "url": "/order/cancel-order",
    "title": "取消订单(haojianse 100% )",
    "name": "CancelOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_cancel_reason",
            "description": "<p>取消原因</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "recursive_order_id",
            "description": "<p>周期订单</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"693345订单取消成功\",\n  \"ret\":{\n    1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "DELETE",
    "url": "/order/hiden-order",
    "title": "删除订单（郝建设 100%）",
    "name": "HidenOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p> "
          }
        ]
      }
    },
    "description": "<p>客户端删除订单，后台软删除 隐藏订单</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"订单删除成功\",\n \"ret\":{\n    1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/order-status-history",
    "title": "查询用户某个订单状态历史状态记录(xieyi 70%缺少周期订单)",
    "name": "OrderStatusHistory",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>认证令牌</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "status_list",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"ok\",\n    \"msg\": \"操作成功\",\n    \"ret\": [\n    {\n    \"id\": 2,\n    \"created_at\": 1445347126,\n    \"updated_at\": 1445347126,\n    \"order_id\": \"2\",\n    \"order_before_status_dict_id\": 1,\n    \"order_before_status_name\": \"已创建\",\n    \"order_status_dict_id\": 1,\n    \"order_status_name\": \"已创建\",\n    \"admin_id\": 1,\n    \"order_flag_lock_time\": null\n    },\n    {\n    \"id\": 3,\n    \"created_at\": 1445347126,\n    \"updated_at\": 1445347126,\n    \"order_id\": \"2\",\n    \"order_before_status_dict_id\": 1,\n    \"order_before_status_name\": \"已创建\",\n    \"order_status_dict_id\": 2,\n    \"order_status_name\": \"已支付\",\n    \"admin_id\": 1,\n    \"order_flag_lock_time\": null\n    },\n    {\n    \"id\": 4,\n    \"created_at\": 1445347126,\n    \"updated_at\": 1445347126,\n    \"order_id\": \"2\",\n    \"order_before_status_dict_id\": 2,\n    \"order_before_status_name\": \"已支付\",\n    \"order_status_dict_id\": 3,\n    \"order_status_name\": \"已开始智能指派\",\n    \"admin_id\": 1,\n    \"order_flag_lock_time\": null\n    }\n    ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/orders",
    "title": "查询用户订单(xieyi 90%已经将后台接口完成,缺少周期订单)",
    "name": "Orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "is_asc",
            "description": "<p>排序方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n\"limit\": \"1\",\n\"page_total\": 4,\n\"offset\": 0,\n\"orders\": [\n{\n\"id\": \"2\",\n\"order_code\": \"339710\",\n\"order_parent_id\": \"0\",\n\"order_is_parent\": \"0\",\n\"created_at\": \"1445347126\",\n\"updated_at\": \"1445347126\",\n\"isdel\": \"0\",\n\"ver\": \"3\",\n\"version\": \"3\",\n\"order_ip\": \"58.135.77.96\",\n\"order_service_type_id\": \"1\",\n\"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n\"order_src_id\": \"1\",\n\"order_src_name\": \"BOSS\",\n\"channel_id\": \"20\",\n\"order_channel_name\": \"后台下单\",\n\"order_unit_money\": \"20.00\",\n\"order_money\": \"40.00\",\n\"order_pay_type\": \"支付方式\",\n\"order_booked_count\": \"120\",\n\"order_booked_begin_time\": \"1446249600\",\n\"order_booked_end_time\": \"1446256800\",\n\"address_id\": \"397\",\n\"district_id\": \"3\",\n\"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n\"order_booked_worker_id\": \"0\",\n\"checking_id\": \"0\",\n\"order_cs_memo\": \"\",\n\"order_id\": \"2\",\n\"order_before_status_dict_id\": \"2\",\n\"order_before_status_name\": \"已支付\",\n\"order_status_dict_id\": \"3\",\n\"order_status_name\": \"已开始智能指派\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-service-orders",
    "title": "查询待服务阿姨订单(xieyi 90%已经将后台接口完成,缺少周期订单)",
    "name": "Orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "is_asc",
            "description": "<p>排序方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "oc.customer_id",
            "description": "<p>客户id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n\"limit\": \"1\",\n\"page_total\": 4,\n\"offset\": 0,\n\"orders\": [\n{\n\"id\": \"2\",\n\"order_code\": \"339710\",\n\"order_parent_id\": \"0\",\n\"order_is_parent\": \"0\",\n\"created_at\": \"1445347126\",\n\"updated_at\": \"1445347126\",\n\"isdel\": \"0\",\n\"ver\": \"3\",\n\"version\": \"3\",\n\"order_ip\": \"58.135.77.96\",\n\"order_service_type_id\": \"1\",\n\"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n\"order_src_id\": \"1\",\n\"order_src_name\": \"BOSS\",\n\"channel_id\": \"20\",\n\"order_channel_name\": \"后台下单\",\n\"order_unit_money\": \"20.00\",\n\"order_money\": \"40.00\",\n\"order_booked_count\": \"120\",\n\"order_booked_begin_time\": \"1446249600\",\n\"order_booked_end_time\": \"1446256800\",\n\"address_id\": \"397\",\n\"district_id\": \"3\",\n\"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n\"order_booked_worker_id\": \"0\",\n\"checking_id\": \"0\",\n\"order_cs_memo\": \"\",\n\"order_id\": \"2\",\n\"order_before_status_dict_id\": \"2\",\n\"order_before_status_name\": \"已支付\",\n\"order_status_dict_id\": \"3\",\n\"order_status_name\": \"已开始智能指派\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-orders-count",
    "title": "查询阿姨订单订单数量(xieyi 90%已经将后台接口完成,缺少周期订单)",
    "name": "Orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "oc.customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n}\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-service-orders-count",
    "title": "查询阿姨待服务订单订单数量(xieyi 90%已经将后台接口完成,缺少周期订单)",
    "name": "Orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n}\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/orders-count",
    "title": "查询用户订单数量(xieyi 70%缺少周期订单)",
    "name": "StatusOrdersCount",
    "group": "Order",
    "description": "<p>获得用户各种状态的订单数量</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间     *</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": \"1\",\n \"msg\": \"操作成功\",\n \"ret\": {\n     \"count\": \"4\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/status-orders-count",
    "title": "查询用户不同状态订单数量(xieyi 70%缺少周期订单)",
    "name": "StatusOrdersCount",
    "group": "Order",
    "description": "<p>获得各种状态的订单数量</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>订单状态</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": \"1\",\n \"msg\": \"操作成功\",\n \"ret\": {\n     \"1\": \"9\",\n     \"2\": \"0\",\n     \"3\": \"4\",\n     \"4\": \"0\",\n     \"5\": \"0\",\n     \"6\": \"1\",\n     \"7\": \"0\",\n     \"8\": \"0\",\n     \"9\": \"0\",\n     \"10\": \"0\",\n     \"11\": \"0\",\n     \"12\": \"0\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "v1/order/worker-cancel-orders-history",
    "title": "查询阿姨三个月的完成历史订单(xieyi 90%已经将后台接口完成,缺少周期订单)",
    "name": "WorkerCancelOrdersHistory",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页 从第一页开始</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n\"limit\": \"1\",\n\"page_total\": 4,\n\"offset\": 0,\n\"orders\": [\n{\n\"id\": \"2\",\n\"order_code\": \"339710\",\n\"order_parent_id\": \"0\",\n\"order_is_parent\": \"0\",\n\"created_at\": \"1445347126\",\n\"updated_at\": \"1445347126\",\n\"isdel\": \"0\",\n\"ver\": \"3\",\n\"version\": \"3\",\n\"order_ip\": \"58.135.77.96\",\n\"order_service_type_id\": \"1\",\n\"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n\"order_src_id\": \"1\",\n\"order_src_name\": \"BOSS\",\n\"channel_id\": \"20\",\n\"order_channel_name\": \"后台下单\",\n\"order_unit_money\": \"20.00\",\n\"order_money\": \"40.00\",\n\"order_booked_count\": \"120\",\n\"order_booked_begin_time\": \"1446249600\",\n\"order_booked_end_time\": \"1446256800\",\n\"address_id\": \"397\",\n\"district_id\": \"3\",\n\"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n\"order_booked_worker_id\": \"0\",\n\"checking_id\": \"0\",\n\"order_cs_memo\": \"\",\n\"order_id\": \"2\",\n\"order_before_status_dict_id\": \"2\",\n\"order_before_status_name\": \"已支付\",\n\"order_status_dict_id\": \"3\",\n\"order_status_name\": \"已开始智能指派\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "v1/order/worker-done-orders-history",
    "title": "查询阿姨三个月的完成历史订单(xieyi 90%已经将后台接口完成,缺少周期订单)",
    "name": "WorkerDoneOrdersHistory",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页 从第一页开始</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n\"limit\": \"1\",\n\"page_total\": 4,\n\"offset\": 0,\n\"orders\": [\n{\n\"id\": \"2\",\n\"order_code\": \"339710\",\n\"order_parent_id\": \"0\",\n\"order_is_parent\": \"0\",\n\"created_at\": \"1445347126\",\n\"updated_at\": \"1445347126\",\n\"isdel\": \"0\",\n\"ver\": \"3\",\n\"version\": \"3\",\n\"order_ip\": \"58.135.77.96\",\n\"order_service_type_id\": \"1\",\n\"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n\"order_src_id\": \"1\",\n\"order_src_name\": \"BOSS\",\n\"channel_id\": \"20\",\n\"order_channel_name\": \"后台下单\",\n\"order_unit_money\": \"20.00\",\n\"order_money\": \"40.00\",\n\"order_booked_count\": \"120\",\n\"order_booked_begin_time\": \"1446249600\",\n\"order_booked_end_time\": \"1446256800\",\n\"address_id\": \"397\",\n\"district_id\": \"3\",\n\"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n\"order_booked_worker_id\": \"0\",\n\"checking_id\": \"0\",\n\"order_cs_memo\": \"\",\n\"order_id\": \"2\",\n\"order_before_status_dict_id\": \"2\",\n\"order_before_status_name\": \"已支付\",\n\"order_status_dict_id\": \"3\",\n\"order_status_name\": \"已开始智能指派\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-orders",
    "title": "查询阿姨订单(xieyi 90%已经将后台接口完成,缺少周期订单)",
    "name": "WorkerOrders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "is_asc",
            "description": "<p>排序方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "oc.customer_id",
            "description": "<p>客户id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n\"limit\": \"1\",\n\"page_total\": 4,\n\"offset\": 0,\n\"orders\": [\n{\n\"id\": \"2\",\n\"order_code\": \"339710\",\n\"order_parent_id\": \"0\",\n\"order_is_parent\": \"0\",\n\"created_at\": \"1445347126\",\n\"updated_at\": \"1445347126\",\n\"isdel\": \"0\",\n\"ver\": \"3\",\n\"version\": \"3\",\n\"order_ip\": \"58.135.77.96\",\n\"order_service_type_id\": \"1\",\n\"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n\"order_src_id\": \"1\",\n\"order_src_name\": \"BOSS\",\n\"channel_id\": \"20\",\n\"order_channel_name\": \"后台下单\",\n\"order_unit_money\": \"20.00\",\n\"order_money\": \"40.00\",\n\"order_booked_count\": \"120\",\n\"order_booked_begin_time\": \"1446249600\",\n\"order_booked_end_time\": \"1446256800\",\n\"address_id\": \"397\",\n\"district_id\": \"3\",\n\"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n\"order_booked_worker_id\": \"0\",\n\"checking_id\": \"0\",\n\"order_cs_memo\": \"\",\n\"order_id\": \"2\",\n\"order_before_status_dict_id\": \"2\",\n\"order_before_status_name\": \"已支付\",\n\"order_status_dict_id\": \"3\",\n\"order_status_name\": \"已开始智能指派\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "v1/order/worker-history-orders.php",
    "title": "阿姨全部订单月份列表(zhaoshunli 0%)",
    "name": "actionAllOrderCommon",
    "group": "Order",
    "description": "<p>对账日常订单查看全部，月份列表</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>会话id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"year\": \"2015\",\n         \"firstYear\": \"2015\",\n         \"lastYear\": \"2015\",\n         \"info\":\n         [\n         {\n             \"month\": \"09\",\n             \"order_num\": \"8\",\n             \"work_hour\": \"23.5\"\n         }\n         ],\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "v1/order/get-worker-orders",
    "title": "指定阿姨订单数/待抢单订单订单数/指定阿姨订单列表/待抢单订单列表 (haojianshe 100%)",
    "name": "actionGetWorkerOrders",
    "group": "Order",
    "description": "<p>阿姨抢单数</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>会话id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page_size",
            "description": "<p>条数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>页面</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "leveltype",
            "description": "<p>判断标示 leveltype=1 指定阿姨订单数，待抢单订单订单数;  leveltype=3 指定阿姨订单列表;  leveltype=4 待抢单订单列表;</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n 指定阿姨订单数/待抢单订单订单数 leveltype=1\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"workerData\": \"指定阿姨订单数\",\n         \"orderData\": \"待抢单订单数\",\n         \"workerServiceCount\": \"待服务订单数\",\n         \"worker_is_block\": \n           {\n           ##暂时还没有统一\n           //\"阿姨状态 0正常1封号\",\n           }\n     }\n}\n\n  * 指定阿姨订单列表/待抢单订单列表 leveltype=3/4\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"workerData\":\n          [\n          {\n           \"order_id\":\"订单号\"\n           \"order_code\":\"订单编号\"\n           \"batch_code\":\"周期订单号\"\n           \"booked_begin_time\":\"服务开始时间\"\n           \"booked_end_time\":\"服务结束时间\"\n           \"channel_name\":\"服务类型名称\"\n           \"booked_count\":\"时常\"\n           \"address\":\"服务地址\"\n           \"need\":\"备注说明\"\n           \"money\":\"订单价格\"\n          } \n        ],\n        \"time\":172800  倒计时秒 #要求2天\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "PUT",
    "url": "v1/order/set-worker-order",
    "title": "阿姨抢单提交 (haojianshe 100%)",
    "name": "actionSetWorkerOrder",
    "group": "Order",
    "description": "<p>阿姨抢单提交</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>会话id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"操作失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "POST",
    "url": "v1/pay/balance-pay",
    "title": "会员余额支付 (赵顺利100%)",
    "name": "actionBalancePay",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"支付成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderIdNotFound",
            "description": "<p>未找到订单ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"error\",\n    \"msg\": \"支付失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/PayController.php",
    "groupTitle": "Pay"
  },
  {
    "type": "get",
    "url": "v2/member_card.json",
    "title": "成为会员接口",
    "name": "actionMemberCard",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "session_id",
            "description": "<p>会话id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"cardList\":\n         [\n         {\n             \"cardName\": \"银　卡:\",\n             \"cardCost\": \"1000\",\n             \"moneyBack\": \"返400券\"\n         },\n         {\n             \"cardName\": \"金　卡:\",\n             \"cardCost\": \"3000\",\n             \"moneyBack\": \"返1400券\"\n         },\n         {\n             \"cardName\": \"铂金卡:\",\n             \"cardCost\": \"5000\",\n             \"moneyBack\": \"返2600券\"\n         }\n         ],\n         \"protocolUrl\": \"http://wap.1jiajie.com/serverinfo/protocol.html\",\n         \"buy_cart_way\": \"0\",\n         \"alipay_alert_msg\": \"您所购买的会员卡金额超过500元手机支付上限，需要先充值到支付宝；或者使用电脑到www.1jiajie.com进行购买\",\n         \"membersCoupon\":\n         {\n             \"title\": \"会员优惠\",\n             \"url\": \"http://wap.1jiajie.com/serverinfo/memberDiscount.html\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/PayController.php",
    "groupTitle": "Pay"
  },
  {
    "type": "POST",
    "url": "v1/pay/online-pay",
    "title": "在线支付接口 (赵顺利100%)",
    "name": "actionOnlinePay",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channel_id",
            "description": "<p>渠道ID 1=APP微信, 2=H5微信, 3=APP百度钱包, 4=APP银联, 5=APP支付宝, 6=WEB支付宝, 7=H5百度直达号, 20=后台支付（未实现）, 21=微博支付（未实现）, 23=微信native,</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_id",
            "description": "<p>订单ID,没有订单号表示充值</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "partner",
            "description": "<p>第三方合作号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "ext_params",
            "description": "<p>扩展参数,用于微信/百度直达号（即channel_id=2或7 必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.openid",
            "description": "<p>微信openid （channel_id=2 必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.return_url",
            "description": "<p>同步回调地址 （channel_id=6必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.show_url",
            "description": "<p>显示商品URL（channel_id=6必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.customer_name",
            "description": "<p>商品名称（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.customer_mobile",
            "description": "<p>用户电话（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.customer_address",
            "description": "<p>用户地址（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.order_source_url",
            "description": "<p>订单详情地址（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.page_url",
            "description": "<p>订单跳转地址（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.goods_name",
            "description": "<p>订单名称（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.detail",
            "description": "<p>订单详情 （channel_id=7必填）</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     \"channel_id\":\"7\",\n     \"partner\":\"1217983401\",\n     \"access_token\":\"00ca52a593ca85ffdb5256372aa642d2\",\n     \"pay_money\":\"0.01\",\n     \"order_id\":\"0\",\n     \"ext_params\":\n     {\n         \"openid\":\"o7Kvajh91Fmh_KYzhwX0LWZtpMPM\",\n         \"goods_name\":\"%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81\",\n         \"customer_name\":\"%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81\",\n         \"customer_mobile\":\"18001305711\",\n         \"goods_name\":\"18001305711\",\n         \"customer_address\":\"%E5%8C%97%E4%BA%AC%E7%9C%81\",\n         \"order_source_url\":\"http://www.baidu.com\",\n         \"page_url\":\"http://www.qq.com\",\n         \"detail\":\n         [\n         {\n             \"item_id\":\"1\",\n             \"cat_id\":\"1\",\n             \"name\":\"寿司\",\n             \"desc\":\"很好吃\",\n             \"price\":\"1\"\n         },\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": 1,\n     \"msg\": \"数据返回成功\",\n     \"ret\": {\n         \"sp_no\": 1049,\n         \"code_url\":\"weixin://wxpay/bizpayurl?pr=kK7sllh\",\n         \"order_no\": \"15102301277257\",\n         \"total_amount\": \"1\",\n         \"goods_name\": \"18001305711\",\n         \"return_url\": \"http://127.0.0.1/pay/zhidahao-h5-notify\",\n         \"page_url\": \"http://www.qq.com\",\n         \"detail\": [\n         {\n             \"item_id\": \"1\",\n             \"cat_id\": \"1\",\n             \"name\": \"寿司\",\n             \"desc\": \"很好吃\",\n             \"price\": \"1\"\n         }\n         ],\n         \"order_source_url\": \"http://www.baidu.com\",\n         \"customer_name\": \"%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81\",\n         \"customer_mobile\": \"18001305711\",\n         \"customer_address\": \"%E5%8C%97%E4%BA%AC%E7%9C%81\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderIdNotFound",
            "description": "<p>未找到订单ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"支付失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/PayController.php",
    "groupTitle": "Pay"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-message-code",
    "title": "短信验证码 (赵顺利100%)",
    "name": "actionSendMessageCode",
    "group": "SendSms",
    "description": "<p>请求向用户手机发送验证码用于登录</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\":\"ok\"\n   \"msg\": \"短信发送成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhoneNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"error\",\n  \"msg\": \"电话号码不符合规则\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-v",
    "title": "发短消息 （赵顺利 0% 不使用）",
    "name": "actionSendV",
    "group": "SendSms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "telephone",
            "description": "<p>电话</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>发送消息</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>返回码 ok.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"1\",\n  \"msg\": \"ok\",\n  \"tel\": \"15011152243\",\n  \"smsTxt\": \"您已成功预约e家洁服务，下载应用（http://t.cn/8schPc6）可随时跟踪订单状态、查看服务人员详情，如有问题可致电唯一客服热线4006767636，祝您生活愉快！\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://test.web.1jiajie.com/mobileapinew8/packageSmsSendSms?platform_version=apitest&tel=15011152243&msg%5BtempId%5D=1"
      }
    ],
    "version": "0.0.0",
    "filename": "../controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-worker-message-code",
    "title": "阿姨登录短信验证码 （李勇100%）",
    "name": "actionSendWorkerMessageCode",
    "group": "SendSms",
    "description": "<p>请求向阿姨手机发送验证码用于登录</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\":1\n   \"msg\": \"短信发送成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhoneNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":0,\n  \"msg\": \"电话号码不符合规则\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "POST",
    "url": "v1/user/add-address",
    "title": "添加常用地址 (已完成100%)",
    "name": "actionAddAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "operation_province_name",
            "description": "<p>省</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "operation_city_name",
            "description": "<p>市名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "operation_area_name",
            "description": "<p>地区名（朝阳区）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_address_detail",
            "description": "<p>详细地址</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_address_nickname",
            "description": "<p>被服务者昵称</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_address_phone",
            "description": "<p>被服务者手机</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>新增地址.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"地址添加成功\"\n  \"ret\":{\n  \"address\":\n     {\n     \"id\": 主键,\n     \"customer_id\":关联客户,\n     \"operation_province_id\": 110000,\n     \"operation_city_id\": 市,\n     \"operation_area_id\": 区,\n     \"operation_province_name\": \"北京\",\n     \"operation_city_name\": \"北京市\",\n     \"operation_area_name\": \"朝阳区\",\n     \"operation_province_short_name\": \"北京\",\n     \"operation_city_short_name\": \"北京\",\n     \"operation_area_short_name\": \"朝阳\",\n     \"customer_address_detail\": \"详细地址\",\n     \"customer_address_status\": 1,客户地址类型,1为默认地址，0为非默认地址\n     \"customer_address_longitude\": 经度,\n     \"customer_address_latitude\": 纬度,\n     \"customer_address_nickname\": \"用户昵称\",\n     \"customer_address_phone\": \"被服务者手机\",\n     \"created_at\": 1445063798,\n     \"updated_at\": 0,\n     \"is_del\": 0\n     }\n   }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>常用地址添加失败.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录。\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"常用地址添加失败\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/black-list-workers",
    "title": "黑名单阿姨列表 （功能已经完成,需要核实传递参数和返回数据格式 已完成100%）",
    "description": "<p>获得该用户添加进黑名单的阿姨</p> ",
    "name": "actionBlackListWorkers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"删除成功\"\n  \"ret\":{\n    \"blockWorkers\": [\n    {\n      \"worker_id\": \"12409\",\n      \"face\": \"http://static.1jiajie.com/worker/face/12409.jpg\",\n      \"name\": \"夏测试\",\n      \"order_num\": \"服务:168次\",\n      \"kilometer\": \"\",\n      \"star_rate\": \"0\",\n      \"last_serve_time\": \"最后服务时间:2015-04-22 16:00:34\",\n      \"shop_id\": \"68\",\n      \"is_fulltime\": \"全职全日\",\n      \"telephone\": \"18610932174\"\n    }\n   ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/default-address",
    "title": "获取默认地址 (赵顺利100%)",
    "name": "actionDefaultAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"修改常用地址成功\"\n  \"ret\":{\n  \"address\":\n     {\n     \"id\": 2,\n     \"customer_id\": 1,\n     \"operation_province_id\": 110000,\n     \"operation_city_id\": 110100,\n     \"operation_area_id\": 110105,\n     \"operation_province_name\": \"北京\",\n     \"operation_city_name\": \"北京市\",\n     \"operation_area_name\": \"朝阳区\",\n     \"operation_province_short_name\": \"北京\",\n     \"operation_city_short_name\": \"北京\",\n     \"operation_area_short_name\": \"朝阳\",\n     \"customer_address_detail\": \"某某小区8栋3单元512\",\n     \"customer_address_status\": 1,客户地址类型,1为默认地址，0为非默认地址\n     \"customer_address_longitude\": 116.48641,\n     \"customer_address_latitude\": 39.92149,\n     \"customer_address_nickname\": \"王小明\",\n     \"customer_address_phone\": \"18210922324\",\n     \"created_at\": 1445063798,\n     \"updated_at\": 0,\n     \"is_del\": 0\n     }\n   }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>地址信息获取失败.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录。\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"地址信息获取失败\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "v1/user/delete-address",
    "title": "删除用户常用地址 (已完成100%)",
    "name": "actionDeleteAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "v1/user/delete-used-worker",
    "title": "删除常用阿姨 （功能已经实现,需再次核实 100%）",
    "name": "actionDeleteUsedWorker",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_id",
            "description": "<p>阿姨id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"删除成功\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WorkerNotFound",
            "description": "<p>该阿姨不存在.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"不存在要删除的阿姨\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-addresses",
    "title": "常用地址列表 (已完成100%)",
    "name": "actionGetAddresses",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "addresses",
            "description": "<p>用户常用地址数组.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"获取地址列表成功\"\n  \"ret\":{\n  \"addresses\": [\n     {\n     \"id\": 2,\n     \"customer_id\": 1,\n     \"operation_province_id\": 110000,\n     \"operation_city_id\": 110100,\n     \"operation_area_id\": 110105,\n     \"operation_province_name\": \"北京\",\n     \"operation_city_name\": \"北京市\",\n     \"operation_area_name\": \"朝阳区\",\n     \"operation_province_short_name\": \"北京\",\n     \"operation_city_short_name\": \"北京\",\n     \"operation_area_short_name\": \"朝阳\",\n     \"customer_address_detail\": \"某某小区8栋3单元512\",\n     \"customer_address_status\": 1,客户地址类型,1为默认地址，0为非默认地址\n     \"customer_address_longitude\": 116.48641,\n     \"customer_address_latitude\": 39.92149,\n     \"customer_address_nickname\": \"王小明\",\n     \"customer_address_phone\": \"18210922324\",\n     \"created_at\": 1445063798,\n     \"updated_at\": 0,\n     \"is_del\": 0\n     },\n    ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-comment-count",
    "title": "获取用户评价数量 （郝建设 100%）",
    "name": "actionGetCommentCount",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"获取用户评论数量成功\",\n  \"ret\": {\n     \"CommentCount\":\"评论数量\"\n\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-comment-level",
    "title": "获取用户评价等级 （郝建设 100%）",
    "name": "actionGetCommentLevel",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"获取评论级别成功\",\n  \"ret\": {\n     \"id\": \"1\",\n     \"customer_comment_level\": \"级别代号\",\n     \"customer_comment_level_name\": \"级别名称\",\n     \"is_del\": \"是否删除\",\n\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-comment-level-tag",
    "title": "获取用户评价等级下面的标签 （郝建设 100%）",
    "name": "actionGetCommentLevelTag",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_level",
            "description": "<p>级别id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"获取评论标签成功\",\n  \"ret\": {\n     \"id\": \"1\",\n     \"customer_tag_name\": \"评价标签名称\",\n     \"customer_comment_level\": \"评价等级\",\n     \"is_online\": \"是否上线\",\n     \"is_del\": \"删除\",\n\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-goods",
    "title": "获取给定经纬度范围内是否有该服务 （郝建设 100%）",
    "name": "actionGetGoods",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_service_type_id",
            "description": "<p>服务id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"有该服务\",\n  \"ret\": {\n     \"1\",\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-level-tag",
    "title": "获取评论的level和tag （郝建设 100%）",
    "name": "actionGetLeveltag",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"获取标签和子标签成功\",\n\"ret\": [\n    {\n        \"id\": \"1\",\n       \"customer_comment_level\": \"0\",\n       \"customer_comment_level_name\": \"满意\",\n       \"is_del\": \"0\",\n       \"tag\": [\n           {\n               \"id\": \"2\",\n               \"customer_tag_name\": \"满意\",\n               \"customer_comment_level\": \"0\",\n               \"is_online\": \"0\",\n               \"is_del\": \"0\"\n           },\n           {\n               \"id\": \"6\",\n               \"customer_tag_name\": \"满意\",\n               \"customer_comment_level\": \"0\",\n               \"is_online\": \"0\",\n               \"is_del\": \"0\"\n           }\n       ]\n   },\n   {\n      \"id\": \"2\",\n      \"customer_comment_level\": \"1\",\n      \"customer_comment_level_name\": \"一般\",\n      \"is_del\": \"0\",\n      \"tag\": [\n          {\n              \"id\": \"1\",\n              \"customer_tag_name\": \"一般\",\n              \"customer_comment_level\": \"1\",\n              \"is_online\": \"1\",\n              \"is_del\": \"0\"\n         },\n         {\n             \"id\": \"5\",\n             \"customer_tag_name\": \"一般\",\n             \"customer_comment_level\": \"1\",\n             \"is_online\": \"0\",\n             \"is_del\": \"0\"\n         },\n         {\n             \"id\": \"7\",\n             \"customer_tag_name\": \"一般\",\n             \"customer_comment_level\": \"1\",\n             \"is_online\": \"0\",\n             \"is_del\": \"0\"\n         }\n     ]\n },\n {\n     \"id\": \"3\",\n    \"customer_comment_level\": \"2\",\n    \"customer_comment_level_name\": \"不满意\",\n    \"is_del\": \"0\",\n    \"tag\": [\n        {\n            \"id\": \"3\",\n            \"customer_tag_name\": \"不满意\",\n            \"customer_comment_level\": \"2\",\n            \"is_online\": \"0\",\n            \"is_del\": \"0\"\n        },\n        {\n            \"id\": \"4\",\n            \"customer_tag_name\": \"不满意\",\n            \"customer_comment_level\": \"2\",\n            \"is_online\": \"0\",\n            \"is_del\": \"0\"\n        }\n    ]\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-user-money",
    "title": "用户余额和消费记录 （郝建设 已完成99% ;）",
    "name": "actionGetUserMoney",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "UserMoney",
            "description": "<p>用户当前余额和消费记录对象</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\": \"1\",\n\"msg\": \"查询成功\",\n\"ret\": {\n\"userBalance\": \"用户余额\",\n\"userRecord\": [\n{\n\"id\": \"1\",\n\"customer_id\": \"用户ID\",\n \"order_id\": \"订单ID\",\n\"order_channel_id\": \"订单渠道\",\n\"customer_trans_record_order_channel\": 订单渠道名称,\n\"pay_channel_id\": \"支付渠道\",\n\"customer_trans_record_pay_channel\": 支付渠道名称,\n \"customer_trans_record_mode\": \"交易方式:1消费,2=充值,3=退款,4=赔偿\",\n\"customer_trans_record_mode_name\": 交易方式名称,\n\"customer_trans_record_coupon_money\": \"优惠券金额\",\n\"customer_trans_record_cash\": \"现金支付\",\n\"customer_trans_record_pre_pay\": \"预付费金额（第三方）\",\n\"customer_trans_record_online_pay\": \"在线支付\",\n\"customer_trans_record_online_balance_pay\": \"在线余额支付\",\n\"customer_trans_record_online_service_card_on\": \"服务卡号\",\n\"customer_trans_record_online_service_card_pay\": \"服务卡支付\",\n\"customer_trans_record_online_service_card_current_balance\": \"服务卡当前余额\",\n\"customer_trans_record_online_service_card_befor_balance\": \"服务卡之前余额\",\n\"customer_trans_record_compensate_money\": \"补偿金额\",\n\"customer_trans_record_refund_money\": \"退款金额\",\n\"customer_trans_record_order_total_money\": \"订单总额\",\n\"customer_trans_record_total_money\":'交易总额',\n\"customer_trans_record_current_balance\":'当前余额',\n\"customer_trans_record_befor_balance\":'之前余额',\n\"customer_trans_record_transaction_id\":'交易流水号',\n\"customer_trans_record_remark\": '备注',\n\"customer_trans_record_verify\": '验证',\n\"created_at\":'创建时间',\n\"updated_at\":'更新时间',\n\"is_del\"：'删除',\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "v1/user/get-user-score",
    "title": "用户积分明细 （功能已实现,不明确需求端所需字段格式 90%）",
    "description": "<p>获取用户当前积分，积分兑换奖品信息，怎样获取积分信息</p> ",
    "name": "actionGetUserScore",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"用户积分明细列表\",\n\"ret\": {\n\"scoreCategory\": [\n     {\n      \"id\": \"1\",\n      \"customer_id\": \"客户\",\n      \"customer_score\": \"客户积分\",\n      \"created_at\": \"创建时间\",\n      \"updated_at\": \"更新时间\",\n      \"is_del\": 是否删除\n      }\n     ]\n    }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "v1/user/remove-worker",
    "title": "移除黑名单中的阿姨 （功能已经实现,需要再次确认传递参数 已完成100%）",
    "name": "actionRemoveWorker",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_id",
            "description": "<p>阿姨id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"移除成功\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "v1/user/set-default-address",
    "title": "设置默认地址 (已完成100%)",
    "description": "<p>用户每次下完单都会将该次地址设置为默认地址，下次下单优先使用默认地址</p> ",
    "name": "actionSetDefaultAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_province_name",
            "description": "<p>省</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_city_name",
            "description": "<p>市名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_area_name",
            "description": "<p>地区名（朝阳区）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_detail",
            "description": "<p>详细地址</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_nickname",
            "description": "<p>被服务者昵称</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_phone",
            "description": "<p>被服务者手机</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"设置成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "v1/user/update-address",
    "title": "修改常用地址 (已完成100%)",
    "name": "actionUpdateAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_area_name",
            "description": "<p>地区名（朝阳区）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "address_detail",
            "description": "<p>详细地址信息</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "address_nickname",
            "description": "<p>联系人</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "address_phone",
            "description": "<p>联系电话</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>新增地址.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"修改常用地址成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>地址信息获取失败.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录。\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"地址信息获取失败\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "v1/user/user-suggest",
    "title": "用户评价 （郝建设 100%）",
    "name": "actionUserSuggest",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>'订单ID'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "worker_id",
            "description": "<p>'阿姨id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_tel",
            "description": "<p>'阿姨电话'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "operation_shop_district_id",
            "description": "<p>'商圈id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "province_id",
            "description": "<p>'省id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>'市id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "county_id",
            "description": "<p>'区id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_phone",
            "description": "<p>'用户电话'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_content",
            "description": "<p>'评论内容'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "customer_comment_level",
            "description": "<p>'评论等级'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_level_name",
            "description": "<p>'评价等级名称'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_tag_ids",
            "description": "<p>'评价标签'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_tag_names",
            "description": "<p>'评价标签名称'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "customer_comment_anonymous",
            "description": "<p>是否匿名评价,0匿名,1非匿名'</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"用户评价提交成功\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/worker/worker-info",
    "title": "查看阿姨信息 (田玉星 100%)",
    "name": "WorkerInfo",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "worker_id",
            "description": "<p>阿姨id</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/worker-info"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n \"msg\": \"阿姨信息查询成功\",\n \"alertMsg\": \"获取阿姨信息成功\"，\n \"ret\": {\n     \"worker_name\": \"阿姨姓名\",\n     \"worker_phone\": \"阿姨手机号\",\n     \"worker_photo\": \"头像地址\",\n     \"worker_identity_description\": \"阿姨身份说明\",\n     \"worker_identity_id\":\"阿姨身份标识【1全职 2兼职 3高峰 4时段】\",\n     \"worker_type_description\": \"角色\",\n     \"worker_star\": \"星级\",\n     \"personal_skill\": [\n         \"阿姨技能1\",\n         \"阿姨技能2\",\n         \"阿姨技能3\"\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\",\n  \"ret\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/worker/check-task",
    "title": "查看任务的详情 (李勇100%)",
    "name": "actionCheckTask",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>任务id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"id\": \"任务id\",\n         \"worker_task_name\": \"任务名称\",\n         \"worker_task_description\": \"任务描述\",\n         \"worker_task_start\": \"任务开始时间\",\n         \"worker_task_end\": \"任务结束时间\",\n         \"worker_task_reward_value\": \"任务奖励值\",\n         \"worker_task_conditions\": \"任务需要完成次数\",\n         \"settled\":[\n              {\n                 \"order_id\": \"订单id\",\n                 \"order_time\": \"订单时间\",\n                 \"work_hours\": \"工时\"\n               },\n               {\n                 \"order_id\": \"订单id\",\n                 \"order_time\": \"订单时间\",\n                 \"work_hours\": \"工时\"\n               }  \n          ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found \n{ \n  \"code\":\"0\",\n  \"msg\": \"查看任务失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-bill-list",
    "title": "获取阿姨对账单列表 (田玉星 100%)",
    "name": "actionGetWorkerBillList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少条.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>第几页.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-bill-list"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\n \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取账单列表成功\",\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 10,\n      \"data\": [\n          {\n              \"settle_id\": \"账单唯一标识\",\n              \"settle_year\": \"账单归属年限\",\n              \"order_count\": \"账单内完成的订单总数\",\n              \"worker_income\": \"该账单阿姨的总收入\",\n              \"settle_cycle\": \"账单类型【1周期账单 2月结账单】\",\n              \"settle_cycle_des\": \"账单文字说明\",\n              \"settle_task_money\": \"任务奖励金额\",\n              \"base_salary_subsidy\": \"底薪补贴\",\n              \"money_deduction\": \"处罚金额\",\n              \"order_money_except_cash\": \"工时服务费\",\n              \"settle_status\":\"账单状态【0未结算 1已结算】\",\n              \"settle_time\": \"账单日期\",\n              \"worker_is_confirmed\": \"阿姨是否确认账单【0未确认 1已确认】\"\n          }\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-comment",
    "title": "获取阿姨对应的评论 (田玉星 100%)",
    "name": "actionGetWorkerComment",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment_level",
            "description": "<p>评论类型 【1：满意 2：一般 3：差评】</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>页码数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-comment"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"alertMsg\": \"获取评论成功\"，\n      \"ret\": {\n          \"per_page\": 1,\n          \"page_num\": 10,\n          \"data\": [\n              {\n                  \"comment_id\": \"评论ID\",\n                  \"comment_content\": \"评论内容\",\n                  \"comment_time\": \"评论日期\"\n              }\n          ]\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-complain",
    "title": "获取阿姨对应的投诉 (田玉星 100%)",
    "name": "actionGetWorkerComplain",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示的数据数量</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-complain"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取投诉成功\"，\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 10,\n      \"worker_is_block\":\"阿姨账号状态【0正常 1封号】\",\n      \"data\": [\n          {\n              \"complaint_content\": \"投诉内容\",\n              \"complaint_time\": \"投诉时间\"\n          }\n      ]\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-leave-history",
    "title": "查看阿姨请假历史（田玉星 100%）",
    "name": "actionGetWorkerLeaveHistory",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>页码数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-leave-history"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取阿姨请假历史记录成功\",\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 1,\n      \"data\": [\n          {\n              \"leave_type\": \"请假类型【1休假 2事假】\",\n              \"leave_time\": \"请假时间\",\n              \"leave_status\": \"请假状态\"\n          }\n      ]\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"error\",\n    \"msg\": \"阿姨不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-place-by-id",
    "title": "获取阿姨住址(田玉星 100% )",
    "name": "actionGetWorkerPlaceById",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-place-by-id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"查询地址成功\",\n     \"alertMsg\": \"获取阿姨住址成功\",\n     \"ret\":\n     {\n         \"live_place\": \"阿姨常住地址\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"阿姨不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-punish-list",
    "title": "获取阿姨受处罚列表 (田玉星 100%)",
    "name": "actionGetWorkerPunishList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-punish-list"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 1,\n    \"msg\": \"操作成功\",\n    \"alertMsg\": \"获取处罚列表成功\",\n       \"ret\": [\n           {\n               \"deduction_money\": \"处罚金额\",\n               \"deduction_des\": \"处罚描述\",\n               \"deduction_type\": \"处罚类型\",\n               \"deduction_time\": \"处罚时间\",\n               \"deduction_type_des\": \"处罚类型描述\"\n           }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-service-info",
    "title": "获取账单阿姨服务信息 (田玉星 100%)",
    "name": "actionGetWorkerServiceInfo",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-service-info"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\": \"操作成功.\",\n      \"alertMsg\": \"获取服务信息成功\",\n     \"ret\": [\n            \"worker_name\": \"阿姨姓名\",\n            \"order_count\": \"服务订单数\",\n            \"service_family_count\": \"服务家庭总数\",\n            \"worker_income\":\"阿姨收入\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-taskreward-list",
    "title": "获取阿姨奖励列表 (田玉星 100%)",
    "name": "actionGetWorkerTaskrewardList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-taskreward-list"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取任务奖励成功\",\n  \"ret\": [\n      {\n          \"task_money\": \"任务奖励\",\n          \"task_des\": \"任务描述\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-tasktime-list",
    "title": "获取阿姨工时列表 (田玉星 100%)",
    "name": "actionGetWorkerTasktimeList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少条.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>第几页.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-tasktime-list"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取工时列表成功\",\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 10,\n      \"data\": [\n          {\n              \"order_id\": \"订单ID\",\n              \"order_money\": \"订单金额\",\n              \"order_code\": \"订单号\",\n              \"service_date\": \"服务日期\",\n              \"service_time\": \"服务时间段\"\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "POST",
    "url": "/worker/handle-worker-leave",
    "title": "阿姨请假（田玉星 100%）",
    "name": "actionHandleWorkerLeave",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "leave_time",
            "description": "<p>请假时间，如果请假时间是两天则格式为:【2015-09-10_2015-09-20】</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "leave_type",
            "description": "<p>请假类型  1.休假 2事假 .</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/handle-worker-leave"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"您的请假已提交，请耐心等待审批\",\n   \"alertMsg\": \"您的请假已提交，请耐心等待审批\"，\n  \"ret\": {}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"阿姨不存在\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/system-news",
    "title": "消息通知中心(田玉星0%)",
    "description": "<p>未定</p> ",
    "name": "actionSystemNews",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"result\": \"1\",\n         \"initInfo\": []\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/worker/task-doing",
    "title": "获得进行中的任务列表 (李勇100%)",
    "name": "actionTaskDoing",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"ret\": [\n          {\n              \"id\": 2,\n              \"worker_id\": 1,\n              \"worker_task_id\": 2,\n              \"worker_task_cycle_number\": \"1\",\n              \"worker_task_name\": \"任务名称2\",\n              \"worker_task_log_start\": 1446096240,\n              \"worker_task_log_end\": 1446297240,\n              \"worker_task_is_done\": 0,\n              \"worker_task_done_time\": 0,\n              \"worker_task_reward_type\": 0,\n              \"worker_task_reward_value\": 0,\n              \"created_at\": 1446097240,\n              \"updated_at\": 0,\n              \"is_del\": 0\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"您没有任务哦\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/worker/task-done",
    "title": "获得已完成的任务列表 (李勇100%)",
    "name": "actionTaskDone",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少条.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>第几页.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"ret\": [\n          {\n              \"id\": 2,\n              \"worker_id\": 1,\n              \"worker_task_id\": 2,\n              \"worker_task_cycle_number\": \"1\",\n              \"worker_task_name\": \"任务名称2\",\n              \"worker_task_log_start\": 1446096240,\n              \"worker_task_log_end\": 1446297240,\n              \"worker_task_is_done\": 0,\n              \"worker_task_done_time\": 0,\n              \"worker_task_reward_type\": 0,\n              \"worker_task_reward_value\": 0,\n              \"created_at\": 1446097240,\n              \"updated_at\": 0,\n              \"is_del\": 0\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"您没有已完成任务哦\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/worker/task-fail",
    "title": "获得已失败的任务列表 (李勇100%)",
    "name": "actionTaskFail",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少条.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>第几页.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"ret\": [\n          {\n              \"id\": 3,\n              \"worker_id\": 1,\n              \"worker_task_id\": 1,\n              \"worker_task_cycle_number\": \"0\",\n              \"worker_task_name\": \"任务名称3\",\n              \"worker_task_log_start\": 1446096240,\n              \"worker_task_log_end\": 1446097240,\n              \"worker_task_is_done\": -1,\n              \"worker_task_done_time\": 0,\n              \"worker_task_reward_type\": 0,\n              \"worker_task_reward_value\": 0,\n              \"created_at\": 1446097240,\n              \"updated_at\": 0,\n              \"is_del\": 0,\n              \"values\": [],\n              \"worker_task_description\": \"\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"您没有失败的任务哦\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "PUT",
    "url": "/worker/worker-bill-confirm",
    "title": "账单确认 (田玉星 100%)",
    "name": "actionWorkerBillConfirm",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/worker-bill-confirm"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 1,\n   \"msg\": \"账单确定成功\",\n   \"alertMsg\": \"账单确认成功\",\n   \"ret\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/worker/worker-leave",
    "title": "查看请假情况 (李勇100%)",
    "name": "actionWorkerLeave",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>请假类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"ret\": {\n      \"2015-10-28\": true,\n      \"2015-10-29\": true,\n      \"2015-10-30\": false,\n      \"2015-10-31\": false,\n      \"2015-11-01\": false,\n      \"2015-11-02\": true,\n      \"2015-11-03\": true,\n      \"2015-11-04\": true,\n      \"2015-11-05\": true,\n      \"2015-11-06\": false,\n      \"2015-11-07\": false,\n      \"2015-11-08\": false,\n      \"2015-11-09\": true,\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"阿姨不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-center",
    "title": "个人中心首页 (田玉星 100%)",
    "name": "getWorkerCenter",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/worker/get-worker-center"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n \"msg\": \"阿姨信息查询成功\",\n \"alertMsg\": \"获取阿姨数据成功\",\n \"ret\": {\n     \"worker_name\": \"阿姨姓名\",\n     \"worker_phone\": \"阿姨手机号\",\n     \"worker_photo\": \"头像地址\",\n     \"worker_identity_description\": \"阿姨身份说明\",\n     \"worker_identity_id\":\"阿姨身份标识【1全职 2兼职 3高峰 4时段】\",\n     \"worker_type_description\": \"角色\",\n     \"worker_star\": \"星级\",\n     \"personal_skill\": [\n         \"阿姨技能1\",\n         \"阿姨技能2\",\n         \"阿姨技能3\"\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/configure/all-services",
    "title": "获取城市全部上线服务 （赵顺利100%）",
    "name": "actionAllServices",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n    {\n        \"category_id\":\"\", 服务品类id\n        \"category_name\":\"专业保洁\",  服务品类名\n        \"goodses\":\n        [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n        },\n        ]\n     }\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>获取城市服务配置项价格介绍页面以及分类的全部服务项目</p> ",
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "v1/configure/start-page",
    "title": "阿姨端启动页 （赵顺利 0%）",
    "name": "actionStartPage",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n         \"code\": \"1\",\n         \"msg\": \"操作成功\",\n         \"ret\": {\n             \"pages\": [\n             {\n                 \"id\": \"1\", 编号\n                 \"img\": \"\", 图片地址\n                 \"title\": \"\", 文字\n                 \"remark\": \"\",  备注\n                 \"sort\": \"1\" 排序\n                 \"time\": \"5\"  停留时间，默认5秒\n                 \"next_url\": \"\" 下一页url\n             },\n             {\n                 \"id\": \"2\", 编号\n                 \"img\": \"\", 图片地址\n                 \"title\": \"\", 文字\n                 \"remark\": \"\",  备注\n                 \"sort\": \"2\" 排序\n                 \"time\": \"5\"  停留时间，默认5秒\n                 \"next_url\": \"\" 下一页url\n             },\n             ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExceptionService",
            "description": "<p>服务异常.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"服务异常\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "v1/configure/user-init",
    "title": "用户端首页初始化 （赵顺利20% 假数据）",
    "name": "actionUserInit",
    "group": "configure",
    "description": "<p>获得开通城市列表，广告轮播图 等初始化数据</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n         \"code\": \"1\",\n         \"msg\": \"操作成功\",\n         \"ret\": {\n             \"city_list\": [\n             {\n                 \"id\": 1,\n                 \"province_id\": 120000,\n                 \"province_name\": \"天津\",\n                 \"city_id\": 120100,\n                 \"city_name\": \"天津市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444283773,\n                 \"updated_at\": 1444283773\n             },\n             {\n                 \"id\": 2,\n                 \"province_id\": 110000,\n                 \"province_name\": \"北京\",\n                 \"city_id\": 110100,\n                 \"city_name\": \"北京市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444368462,\n                 \"updated_at\": 1444368462\n             },\n             {\n                 \"id\": 3,\n                 \"province_id\": 140000,\n                 \"province_name\": \"山西省\",\n                 \"city_id\": 140300,\n                 \"city_name\": \"阳泉市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444413962,\n                 \"updated_at\": 1444413962\n             },\n             {\n                 \"id\": 4,\n                 \"province_id\": 140000,\n                 \"province_name\": \"山西省\",\n                 \"city_id\": 140100,\n                 \"city_name\": \"太原市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444635891,\n                 \"updated_at\": 1444635891\n             }\n             ],\n             \"pic_list\": [\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/ios_banner_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/trainAuntie1.html\",\n                 \"url_title\": \"标准服务\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150603ad_top_v4_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/pledge.html\",\n                 \"url_title\": \"服务承诺\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150311ad_top_v4_3.png\",\n                 \"link\": \"\",\n                 \"url_title\": \"\"\n             }\n             ],\n             \"home_order_server\": [\n             {\n                 \"title\"=>\"单次保洁\",\n                 \"introduction\"=>\"新用户第1小时免费\",\n                 \"icon\"=>\"\",\n                 \"url\"=>\"\",\n                 \"sort\"=>\"1\",  排序\n                 \"bg_colour\"=>\"\",  背景颜色\n                 \"font_colour\"=>\"\",  字体颜色\n                 \"category_id\" => \"1\",\n                 \"category_name\" => \"专业保洁\",\n                 \"category_icon\" => \"\",\n                 \"category_introduction\" => \"44项定制清洁服务\",\n                 \"category_price\" => \"25.00\",\n                 \"category_price_unit\" => \"小时\",\n                 \"category_price_description\" => \"￥25/小时\",\n             },\n             ],\n             \"server_list\": [\n             {\n                 \"category_id\": \"6\",   服务品类id\n                 \"category_name\": \"精品保洁\",  服务品类名\n                 \"category_icon\": \"\",   小图片\n                 \"category_url\": \"\",    调转地址url\n                 \"category_introduction\": \"\",  简介\n                 \"category_price\": \"\",  价格\n                 \"category_price_unit\": \"\",  价格单位\n                 \"category_price_description\": \"\",  价格备注\n                 \"colour\"=>\"\",\n                 \"sort\": \"1\"   排序\n             },\n             {\n                 \"category_id\": \"1\",\n                 \"category_name\": \"专业保洁\",\n                 \"category_icon\": \"\",\n                 \"category_url\": \"\",\n                 \"category_introduction\": \"44项定制清洁服务\",\n                 \"category_price\": \"25.00\",\n                 \"category_price_unit\": \"小时\",\n                 \"category_price_description\": \"￥25/小时\",\n                 \"colour\"=>\"\",\n                 \"sort\": \"2\"\n             },\n             ],\n             \"footer_link\":[\n             {\n                 \"link_id\"=>\"1\",\n                 \"title\"=>\"首页\",\n                 \"url\"=>\"\",   跳转链接\n                 \"link_icon_check\" => \"http://dev.m2.1jiajie.com/statics/images/nav_01.png\", 选中图片\n                 \"link_icon_uncheck\" => \"http://dev.m2.1jiajie.com/statics/images/nav_d_01.png\", 未选中图片\n                 \"colour_check\" => \"#f7b136\", 选中颜色\n                 \"colour_uncheck\" => \"#555\",  未选中颜色\n                 \"sort\"=>\"1\"  排序\n             },\n             {\n                 \"link_id\"=>\"2\",\n                 \"title\"=>\"订单\",\n                 \"url\"=>\"\",\n                 \"link_icon\"=>\"\",\n                 \"colour\"=>\"\",\n                 \"sort\"=>\"2\"\n             },\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotFound",
            "description": "<p>城市尚未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"城市尚未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "POST",
    "url": "/configure/worker-check-update",
    "title": "检查阿姨端版本更新 （赵顺利0%）",
    "name": "actionWorkerCheckUpdate",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"curAndroidVersion\": 23,\n         \"androidVersionUrl\": \"http://webapi2.1jiajie.com/app/aunt_2.5.apk\",\n         \"androidVersionAlertMsg\": \"1、兼职阿姨也可登录阿姨端。2、兼职阿姨可修改自己的工作时间。3、新增待接活订单推送通知。\",\n         \"isAndroidUpdateForce\": false,\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "v1/configure/worker-init",
    "title": "阿姨app初始化 （赵顺利 100%）",
    "name": "actionWorkerInit",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n         \"code\": \"1\",\n         \"msg\": \"操作成功\",\n         \"ret\": {\n             \"pic_list\": [\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/ios_banner_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/trainAuntie1.html\",\n                 \"url_title\": \"标准服务\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150603ad_top_v4_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/pledge.html\",\n                 \"url_title\": \"服务承诺\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150311ad_top_v4_3.png\",\n                 \"link\": \"\",\n                 \"url_title\": \"\"\n             }\n             ],\n             \"order_num\":\n             {\n                 \"server_count\"=>\"\", 待服务订单\n                 \"worker_count\"=>\"\", 指定阿姨订单\n                 \"order_count\"=>\"\",  待抢单订单\n\n             },\n             \"footer_link\":[\n             {\n                 \"link_id\"=>\"1\",\n                 \"title\"=>\"首页\",\n                 \"url\"=>\"\",   跳转链接\n                 \"link_icon\"=>\"\",\n                 \"colour\"=>\"\",\n                 \"sort\"=>\"1\"  排序\n             },\n             {\n                 \"link_id\"=>\"2\",\n                 \"title\"=>\"任务\",\n                 \"url\"=>\"\",\n                 \"link_icon\"=>\"\",\n                 \"colour\"=>\"\",\n                 \"sort\"=>\"2\"\n             },\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "Get",
    "url": "/coupon/all-coupons",
    "title": "获取用户全部优惠券列表（包括可用的、不可用的、所有城市的、通用的） （李勇 100%）",
    "name": "AllCoupons",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\":\n  \"ret\": {\n      \"coupon\":[\n        {\n          \"id\": \"1\",\n          \"coupon_name\": \"优惠码名称\",\n           \"coupon_price\": \"优惠码价格\",\n           \"coupon_type_name\": \"优惠券类型名称\",\n           \"coupon_service_type_id\": \"服务类别id\",\n           \"coupon_service_type_name\": \"服务类别名称\",\n          }\n       ]\n      }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 403 Not Found\n   {\n     \"code\": \"0\",\n     \"msg\": \"用户认证已经过期,请重新登录，\"\n\n   }\n*     {\n     \"code\": \"0\",\n     \"msg\": \"优惠券列表为空\"\n\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "Get",
    "url": "/coupon/coupons",
    "title": "获取用户优惠券列表（包括该用户该城市下的优惠券和通用的优惠券） （李勇 100%）",
    "name": "Coupons",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\":\n  \"ret\": {\n      \"coupon\":[\n        {\n          \"id\": \"1\",\n          \"coupon_name\": \"优惠券名称\",\n           \"coupon_price\": \"优惠券价格\",\n           \"coupon_type_name\": \"优惠券类型名称\",\n           \"coupon_service_type_id\": \"服务类别id\",\n           \"coupon_service_type_name\": \"服务类别名称\",\n          }\n       ]\n      }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 403 Not Found\n   {\n     \"code\": \"0\",\n     \"msg\": \"用户认证已经过期,请重新登录，\"\n\n   }\n*     {\n     \"code\": \"0\",\n     \"msg\": \"优惠券列表为空\"\n\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "POST",
    "url": "/coupon/exchange-coupon",
    "title": "兑换优惠劵 （李勇 100%）",
    "name": "ExchangeCoupon",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "coupon_code",
            "description": "<p>优惠码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"兑换成功\",\n  \"ret\":{\n      \"id\":1,\n      \"coupon_id\":1,\n      \"coupon_name\":\"优惠券名称\",\n      \"coupon_price\":123\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouponNotFound",
            "description": "<p>优惠码不存在.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"优惠券不存在，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "GET",
    "url": "v1/coupon/get-coupon-count",
    "title": "获取用户优惠券数量 （功能已经实现 100%）",
    "name": "GetCouponCount",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"获取成功\"\n  \"ret\":{\n       \"couponCount\":{\n       \"count\":'10'\n        }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "get",
    "url": "v1/service/single-service-time",
    "title": "单次服务排班表(李勇100%)",
    "name": "SingleServiceTime",
    "group": "service",
    "description": "<p>单次服务获取服务时间</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "service_type",
            "description": "<p>服务类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "plan_time",
            "description": "<p>计划服务时长</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"获取单次服务排班表成功\",\n\"ret\": [\n      {\n          \"date\": \"2015-10-29\",\n          \"timeline\": [\n              {\n                  \"time\": \"8:00-10:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"8:30-10:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:00-11:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:30-11:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:00-12:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:30-12:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:00-13:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:30-13:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:00-14:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:30-14:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:00-15:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:30-16:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:00-17:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:30-17:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"15:00-18:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"16:30-18:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:00-19:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:30-19:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:00-20:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:30-20:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:00-21:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:30-21:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"20:00-22:00\",\n                  \"enable\": false\n              }\n          ]\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "v1/service/all-services",
    "title": "依据城市 获取所有服务列表 (赵顺利100%)",
    "name": "actionAllServices",
    "group": "service",
    "description": "<p>获取城市所以服务类型列表</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n    {\n        \"category_id\":\"\", 服务品类id\n        \"category_name\":\"专业保洁\",  服务品类名\n        \"goodses\":\n        [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n        },\n        ]\n     }\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "v1/service/baidu-map",
    "title": "根据地址获取百度地图数据（赵顺利 100%）",
    "group": "service",
    "name": "actionBaiduMap",
    "description": "<p>根据地址获取百度地图数据</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "query",
            "description": "<p>查询关键字</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>经纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "radius",
            "description": "<p>半径</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "output",
            "description": "<p>输出方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ak",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/service/baidu-map"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "queryNotSupportFound",
            "description": "<p>关键字不能为空.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"关键字不能为空\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "v1/service/cleaning-task",
    "title": "获得所有保洁任务项目（赵顺利 100%）",
    "group": "service",
    "name": "actionCleaningTask",
    "description": "<p>获取城市所有保洁任务</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "build_area",
            "description": "<p>建筑面积 传面积类型 1\\2; 1是小于100平米的，2是大于100平米的</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":[\n        {\n            \"id\": \"1\",\n            \"selected_service_scene\": \"\",\n            \"selected_service_area\": \"1\",\n            \"selected_service_sub_area\": \"1\",\n            \"selected_service_standard\": \"\",\n            \"selected_service_area_standard\": \"1\",\n            \"selected_service_unit\": \"1\",\n            \"selected_service_photo\": \"1\",\n            \"created_at\": \"1\"\n        },\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "POST",
    "url": "v1/service/first-service-time",
    "title": "选择周期服务的第一次服务日期列表（李勇 80%缺少model支持）",
    "group": "service",
    "name": "actionFirstServiceTime",
    "description": "<p>选择周期服务的第一次服务日期列表</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "plan_time",
            "description": "<p>服务时长.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_id",
            "description": "<p>阿姨id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "service_times",
            "description": "<p>用于存储预约时间段数组(必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "service_times.times",
            "description": "<p>预约时间段</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     \"service_times\":\n     {\n         \"times\":\n         [\n         {\n             \"date\":\"2015-10-02\",\n             \"time_slot\":\"8:00-10:00\"\n         },\n         {\n             \"date\":\"2015-10-03\",\n             \"time_slot\":\"10:00-12:00\"\n         }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": 1,\n     \"msg\": \"获取周期服务的第一次服务日期列表成功\",\n     \"ret\": {\n          [\n             {\n                     \"service_time\":\"2015-10-02(周五)\"\n             }，\n             {\n                     \"service_time\":\"2015-10-03(周六)\"\n             }\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "queryNotSupportFound",
            "description": "<p>没有可用阿姨</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"查询第一次服务日期列表失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "v1/service/goods-price",
    "title": "获取某城市某商品的价格及备注信息（赵顺利 100%）",
    "name": "actionGoodsPrice",
    "group": "service",
    "description": "<p>获取某城市某商品的价格及备注信息</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "goods_id",
            "description": "<p>服务品类id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 1,\n    \"msg\": \"\",\n    \"ret\":\n    [\n        \"goods_price\": \"0.0000\", 价格\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>错误的城市信息.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":0,\n  \"msg\": \"错误的城市信息\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "v1/service/home-services",
    "title": "依据城市 获取首页服务列表 （赵顺利 20% 假数据，未与boss关联）",
    "name": "actionHomeServices",
    "group": "service",
    "description": "<p>获取城市首页服务项目信息简介</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 1,\n    \"msg\": \"信息获取成功\",\n    \"ret\":\n    [\n    {\n        \"goods_id\": \"1\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"管道疏通\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"眼\",\n        \"goods_price_description\": \"\"\n    },\n    {\n        \"goods_id\": \"2\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"家电维修\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"次\",\n        \"goods_price_description\": \"\"\n    },\n    {\n        \"goods_id\": \"3\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"家具组装\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"次\",\n        \"goods_price_description\": \"\"\n    }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":0,\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "get",
    "url": "/service/recursive-service-time",
    "title": "周期服务时间表(李勇100%)",
    "name": "actionRecursiveServiceTime",
    "group": "service",
    "description": "<p>周期服务时间表</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "service_type",
            "description": "<p>服务类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_id",
            "description": "<p>阿姨id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "plan_time",
            "description": "<p>计划服务时长.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"获取周期服务时间表成功\",\n  \"ret\": [\n      {\n          \"date\": \"2015-10-29\",\n          \"timeline\": [\n              {\n                  \"time\": \"8:00-10:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"8:30-10:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:00-11:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:30-11:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:00-12:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:30-12:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:00-13:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:30-13:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:00-14:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:30-14:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:00-15:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:30-16:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:00-17:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:30-17:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"15:00-18:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"16:30-18:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:00-19:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:30-19:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:00-20:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:30-20:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:00-21:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:30-21:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"20:00-22:00\",\n                  \"enable\": false\n              }\n          ]\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"0\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "v1/service/server-worker-list",
    "title": "周期服务可用阿姨列表（李勇 80%缺少model支持）",
    "group": "service",
    "name": "actionServerWorkerList",
    "description": "<p>获取周期服务可用阿姨列表</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少条.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>第几页.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": 1,\n     \"msg\": \"获取周期服务可用阿姨列表成功\",\n     \"ret\": {\n         \"worker_id\": 1,\n         \"worker_name\": \"阿姨姓名\",\n         \"worker_phote\": \"阿姨头像\",\n         \"service_times\": \"服务次数\",\n         \"service_star\": \"服务星级\",\n         \"last_time\": \"最后服务时间\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "queryNotSupportFound",
            "description": "<p>没有可用阿姨</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"没有可用阿姨\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "v1/service/service-goods",
    "title": "依据城市和服务品类 获取服务类型列表 （赵顺利 80%url不能获取）",
    "name": "actionServiceGoods",
    "group": "service",
    "description": "<p>获得某城市下某服务的所有子服务列表，返回子服务数组[服务名,服务描述,服务图标，服务id，url]</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category_id",
            "description": "<p>服务品类id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n            \"goods_page_url\": \"\"\n        },\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  }
] });