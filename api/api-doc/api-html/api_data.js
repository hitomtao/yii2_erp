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
            "optional": false,
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"登录成功\"，\n  \"ret\":{\n     \"user\":{}\n     \"access_token\":\"\"\n  }\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"error\",\n  \"msg\": \"用户名或验证码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/loginfrompop",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"登录成功\"，\n  \"ret\":{\n     \"user\":{}\n     \"access_token\":\"\"\n  }\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"error\",\n  \"msg\": \"用户名,签名或渠道名称错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/AuthController.php",
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
            "optional": true,
            "field": "phone",
            "description": "<p>阿姨电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "verify_code",
            "description": "<p>短信验证码</p> "
          },
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"worker_name\": \"陈测试1\",\n         \"worker_rule_id\": 0,\n         \"worker_rule_description\": \"兼职\",\n         \"worker_photo\": \"http://static.1jiajie.com/worker/face/1111116.jpg\",\n         \"access_token\": \"hXjooooooooAPXzo5jjbMnz80dccYgwoooooooowoooooooo-1111116\",\n         \"worker_id\": \"1111116\",\n         \"shop_id\": \"68\"",
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
          "content": "HTTP/1.1 403 Not Found\n{ \n  \"code\":\"error\",\n  \"msg\": \"用户名或验证码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "v1/order/append-order",
    "title": "追加订单(xieyi 90%和创建订单一样)",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"以下单成功，正在等待阿姨抢单\",\n  \"ret\":{\n      \"order\": {}\n\n  }\n\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "POST",
    "url": "/order/create-order",
    "title": "创建订单 (90%xieyi  创建已完成 渠道号更改 依赖林洪优)",
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
          "content": "HTTP/1.1 200 OK\n{\n \"code\": \"ok\",\n \"msg\": \"创建订单成功\",\n \"ret\": {\n         \"order_service_type_id\": \"1\",\n         \"order_src_id\": \"2\",\n         \"order_booked_begin_time\": \"1445251619\",\n         \"order_booked_end_time\": \"1445255219\",\n         \"address_id\": \"1\",\n         \"channel_id\": \"20\",\n         \"order_ip\": \"::1\",\n         \"order_parent_id\": 0,\n         \"order_is_parent\": 0,\n         \"order_unit_money\": \"20.0000\",\n         \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n         \"order_booked_count\": 60,\n         \"order_money\": 20,\n         \"order_address\": \"光华路soho,张三,18622344432\",\n         \"order_code\": \"1110\",\n         \"order_src_name\": \"IOS\",\n         \"order_channel_name\": \"后台下单\",\n         \"checking_id\": 0,\n         \"isdel\": 0,\n         \"created_at\": 1445320069,\n         \"updated_at\": 1445320069,\n         \"id\": 8\n     }\n }",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/addcomment",
    "title": "评价订单（xieyi %0）",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/cancelorder",
    "title": "取消订单(郝建设 100%  )",
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
            "field": "order_cancel_reason",
            "description": "<p>取消原因</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "recursive_order_id",
            "description": "<p>周期订单</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p> "
          }
        ]
      }
    },
    "name": "CancelOrder",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"693345订单取消成功\",\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "POST",
    "url": "/order/choose-service-time",
    "title": "可服务时间表 (20%赵顺利 block linhongyou provide the feature)",
    "description": "<p>选择服务时间接口服务器依据用户的当前位置提供时间表</p> ",
    "name": "ChooseServiceTime",
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
            "field": "lng",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "show_common",
            "description": "<p>是否使用常用阿姨</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "plan_time",
            "description": "<p>计划服务时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "service_item",
            "description": "<p>服务种类</p> "
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
            "field": "appointment",
            "description": "<p>可选时间表.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"获取可服务时间表成功\"\n  \"ret\":{\n     \"appointment\": [\n         {\n             \"date_format\": \"10月10日\",\n             \"date_stamp\": 1444406400,\n             \"week\": \"明天\",\n             \"have_worker\": 1,\n             \"hour\": [\n                 {\n                     \"time\": \"08:00-10:00\",\n                     \"status\": \"0\"\n                 },\n                 {\n                     \"time\": \"18:00-20:00\",\n                     \"status\": \"1\"\n                 }\n             ]\n         }\n     ]\n  }\n}\n\n\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/hiddenorder",
    "title": "删除订单（郝建设 100% ）",
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
    "name": "HiddenOrder",
    "group": "Order",
    "description": "<p>客户端删除订单，后台软删除 隐藏订单</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"订单删除成功\",\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/query-orders",
    "title": "查询订单(xieyi 70%已经将后台接口完成，创建也完成缺少测试)",
    "name": "QueryOrders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态</p> "
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
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"以下单成功，正在等待阿姨抢单\",\n  \"ret\":{\n      \"orderList\": [\n         {\n             \"extend_info\": \"没有特殊需求\",\n             \"id\": \"6925042\",\n             \"service_type\": \"9\",\n             \"place_detail\": \"北京市滚滚滚哈哈哈回家\",\n             \"reserve_time\": \"2015-09-17 09:00\",\n             \"status\": \"0\",\n             \"worker_list\": \"\",\n             \"create_time\": \"2015-09-15 19:26:27\",\n             \"user_id\": \"48080\",\n             \"is_paid\": \"0\",\n             \"active_code_id\": \"0\",\n             \"charge_reward_id\": \"0\",\n             \"reserve_type_id\": \"0\",\n             \"pop_channel\": \"App下单\",\n             \"order_id\": \"6925042\",\n             \"show_cancel\": \"0\",\n             \"service_main\": \"家电清洗\",\n             \"service_second\": \"油烟机清洗\",\n             \"create_way\": \"\",\n             \"sub_order\": [],\n             \"order_status\": [\n                 \"2015-09-15 19:26 下单成功\"\n             ],\n             \"complain_status\": [],\n             \"active_code\": \"\",\n             \"active_code_value\": \"0\",\n             \"suggest_worked_time\": \"\",\n             \"show_appointment\": \"0\"\n         }\n     ],\n\n     \"pageNum\": \"1\",\n     \"totalPage\": \"2\",\n     \"totalNum\": \"29\"\n }\n\n\n\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "v2/worker/account_checking.php",
    "title": "日常订单列表(zhaoshunli %0)",
    "name": "actionAccountChecking",
    "group": "Order",
    "description": "<p>对账首页，日常订单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>默认传3.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\",\n         \"total_price\": 88,\n         \"common_order_info\":\n         [\n         {\n             \"order_id\": \"673\",\n             \"finish_time\": \"2015年09月15日 12:00结束\",\n             \"order_price\": \"100\",\n             \"palce\": \"北京 朝阳区大悦城 测试测试\",\n             \"cash\": \"0\",\n             \"status\": \"未结算\"\n         }\n         ]\n     }\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "v2/worker/all_order_common.php",
    "title": "全部订单月份列表(zhaoshunli 0%)",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "v2/worker/all_order_common_list.php",
    "title": "日常订单列表(zhaoshunli 0%)",
    "name": "actionAllOrderCommonList",
    "group": "Order",
    "description": "<p>对账日常订单，全部订单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示多少条数据.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cur_page",
            "description": "<p>当前页.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "time",
            "description": "<p>那个月份.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"title\": \"2015年09月 单数：8单 工时：23.5小时\",\n         \"info\":\n         [\n         {\n             \"order_id\": \"1115\",\n             \"finish_time\": \"第39周 09月27日 12:00结束\",\n             \"order_price\": 50,\n             \"palce\": \"北京密云县密云1\",\n             \"cash\": \"50\",\n             \"status\": \"现金¥50\"\n         }\n         ],\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\"\n     }\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/mobileapidriver2/driver_get_now_order_list",
    "title": "待接活订单(zhaoshunli 0%)",
    "name": "actionDriverGetNowOrderList",
    "group": "Order",
    "description": "<p>阿姨查看带接活订单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "push",
            "description": "<p>默认传0.</p> "
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\":\"OK\",\n    \"msg\":\"待接单信息获取成功\",\n    \"ret\":\n     {\n         \"locationType\": 1,\n         \"result\": 1,\n         \"orderListTitleStr\": \"\",\n         \"allOrderList\":\n         [\n         {\n             \"orderId\": \"374\",\n             \"reserveTime\": \"2015-09-12 10:00:00\",\n             \"start_place\": \"北京 光华路soho 301\",\n             \"distance\": \"0.0\",\n             \"cityName\": \"北京\",\n             \"user_type\": \"0\",\n             \"longitude\": \"116.459003\",\n             \"latitude\": \"39.918741\",\n             \"extendInfo\": \"测试测试\",\n             \"orderAllTime\": \"2.0小时\",\n             \"orderInfoStr\": \"有顾客预约叫保洁。工作时间：2015-09-12 10:00:00，工作地点：301。备注：测试测试。距离你0.0公里\",\n             \"isVoiceOrder\": \"false\",\n             \"orderReserveTime\": \"10:00\",\n             \"orderReserveDate\": \"2015-09-12\",\n             \"serviceTypeName\": \"家庭保洁\",\n             \"timestamp\": 1442023200,\n             \"showDate\": \"明天\",\n             \"receiveOrderMsg\": \"您确认要接此订单吗？如果找不到客户家的路，请拨打客服电话，尽量不要骚扰客户。\",\n             \"distanceStr\": \"距我当天第1个订单0.0</font>km\"\n         }\n         ]\n     }\n}",
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
            "field": "PositionNotFound",
            "description": "<p>未找到坐标位置.</p> "
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/mobileapidriver2/worker_request_order",
    "title": "抢单（xieyi %0）",
    "name": "actionDriverRequestOrder",
    "group": "Order",
    "description": "<p>阿姨抢单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "list_type",
            "description": "<p>订单类型.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "allow_worker_num",
            "description": "<p>1  处理阿姨同时接单.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"result\": \"0\",\n         \"msg\": \"抢单失败，当天该时间段已有其他订单\",\n         \"goPage\": 1,\n         \"isSuc\": false,\n         \"telephone\": \"4006767636\"\n     }\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/v2/FixedUserOrder.php",
    "title": "固定客户以及订单列表(zhaoshunli 0%)",
    "name": "actionFixedUserOrder",
    "group": "Order",
    "description": "<p>对账固定客户首页，全部固定客户订单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "period_id",
            "description": "<p>周期id，首页传0.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_is_nearby",
            "description": "<p>是否首页，首页传1.</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"alertMsg\": \"\",\n         \"fixedUserPeriod\":\n         [\n         {\n             \"telephone\": \"13636363636\",\n             \"street\": \"海淀区定慧北里\",\n             \"place_detail\": \"6换10\",\n             \"order_num\": \"2\",\n             \"order_time\": \"5.5小时\"\n         }\n         ],\n         \"fixedUserOrder\":\n         [\n         {\n             \"wage_record_id\": \"0\",\n             \"finish_time\": \"2015-09-11 18:37:04\",\n             \"order_id\": \"174\",\n             \"pay_worker_money\": \"87.5\",\n             \"cash\": \"87.5\",\n             \"is_fulltime\": 0\n         }\n         ]\n     }\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "v1/order/no_settlement_order_list.php",
    "title": "未结算订单(0%zhaoshunli)",
    "name": "actionNoSettlementOrderList",
    "group": "Order",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示都少条数据.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cur_page",
            "description": "<p>当前页.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"order_info\":\n         [\n         {\n             \"order_id\": \"673\",\n             \"finish_time\": \"2015年09月15日 12:00结束\",\n             \"order_price\": \"100\",\n             \"palce\": \"北京 朝阳区大悦城 测试测试\",\n             \"cash\": \"0\",\n             \"status\": \"未结算\"\n         }\n         ],\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\"\n     }\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order/search_push_order.php",
    "title": "获得推送订单信息 (xieyi 0%)",
    "name": "actionSearchPushOrder",
    "group": "Order",
    "description": "<p>推送过来的订单，通过id获取订单信息</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "service_type",
            "description": "<ol> <li></li> </ol> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"orderInfo\":\n         [\n         {\n             \"orderId\": \"1340\",\n             \"reserveTime\": \"2015-10-14 16:00:52\",\n             \"start_place\": \"密云县密云\",\n             \"cityName\": \"北京\",\n             \"user_type\": \"1\",\n             \"longitude\": \"116.849716\",\n             \"latitude\": \"40.382129\",\n             \"extendInfo\": \"\",\n             \"orderAllTime\": \"2.0\",\n             \"orderInfoStr\": \"有顾客预约叫保洁。工作时间：2015-10-14 16:00:52，工作地点：密云县密云。备注：。距离你 0 公里\",\n             \"serviceTypeName\": \"家庭保洁\",\n             \"receiveOrderMsg\": \"您确认要接此订单吗？如果找不到客户家的路，请拨打客服电话，尽量不要骚扰客户\",\n             \"distanceStr\": \"距我家 0 </font>km\",\n             \"assign_status\": 0,\n             \"small_maintail\": []\n         }\n         ],\n         \"alertMsg\": \"请求成功\"\n     }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/mobileapidriver2/worker_history_order",
    "title": "阿姨历史订单(zhaoshunli 100%)",
    "name": "actionWorkerHistoryOrder",
    "group": "Order",
    "description": "<p>阿姨查看历史订单</p> ",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"\",\n     \"ret\":\n     {\n         \"result\": 1,\n         \"msg\": \"\",\n         \"cannelOrderList\":\n         [\n         {\n             \"orderId\": \"244\",\n             \"orderType\": \"家庭保洁\",\n             \"orderPlace\": \"北京 海淀区 1334\",\n             \"longitude\": \"116.353337\",\n             \"latitude\": \"40.036104\",\n             \"orderDate\": \"2015-09-21\",\n             \"orderStartTime\": \"08:00\",\n             \"orderEndTime\": \"10:00\",\n             \"orderAllTime\": \"2.0小时\",\n             \"userPhone\": \"13772427406\",\n             \"userName\": \"\",\n             \"cityName\": \"北京\",\n             \"extendInfo\": \"无\",\n             \"timestamp\": 1442793600,\n             \"userType\": \"0\"\n         }\n         ],\n         \"finishOrderList\":\n         [\n         {\n             \"orderId\": \"174\",\n             \"orderType\": \"家庭保洁\",\n             \"orderPlace\": \"北京 海淀区定慧北里 6换10\",\n             \"longitude\": \"0\",\n             \"latitude\": \"0\",\n             \"orderDate\": \"2015-09-17\",\n             \"orderStartTime\": \"11:30\",\n             \"orderEndTime\": \"13:30\",\n             \"orderAllTime\": \"2.0小时\",\n             \"userPhone\": \"13636363636\",\n             \"userName\": \"\",\n             \"cityName\": \"北京\",\n             \"extendInfo\": \"无\",\n             \"timestamp\": 1442460600,\n             \"userType\": \"0\"\n         }\n         ]\n     }\n}",
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
    "filename": "controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "POST",
    "url": "v1/pay/balance-pay",
    "title": "会员余额支付 (赵顺利0%)",
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
            "optional": false,
            "field": "integer",
            "description": "<p>pay_money 支付金额</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "money",
            "description": "<p>支付金额.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "telephone",
            "description": "<p>用户电话.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"msgStyle\":\"toast\",\n         \"alertMsg\":\"\\u8ba2\\u5355\\u5df2\\u7ecf\\u652f\\u4ed8\\u8fc7,\\u8bf7\\u52ff\\u91cd\\u590d\\u63d0\\u4ea4\"\n     }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/PayController.php",
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
    "filename": "controllers/PayController.php",
    "groupTitle": "Pay"
  },
  {
    "type": "post",
    "url": "v1/pay/online-pay",
    "title": "在线支付接口 （已完成）",
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
            "description": "<p>渠道ID 1=APP微信, 2=H5微信, 3=APP百度钱包, 4=APP银联, 5=APP支付宝, 6=WEB支付宝, 7=H5百度直达号, 20=后台支付（未实现）, 21=微博支付（未实现）,</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": 0,\n     \"msg\": \"数据返回成功\",\n     \"ret\": {\n         \"sp_no\": 1049,\n         \"order_no\": \"15102301277257\",\n         \"total_amount\": \"1\",\n         \"goods_name\": \"18001305711\",\n         \"return_url\": \"http://127.0.0.1/pay/zhidahao-h5-notify\",\n         \"page_url\": \"http://www.qq.com\",\n         \"detail\": [\n         {\n             \"item_id\": \"1\",\n             \"cat_id\": \"1\",\n             \"name\": \"寿司\",\n             \"desc\": \"很好吃\",\n             \"price\": \"1\"\n         }\n         ],\n         \"order_source_url\": \"http://www.baidu.com\",\n         \"customer_name\": \"%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81\",\n         \"customer_mobile\": \"18001305711\",\n         \"customer_address\": \"%E5%8C%97%E4%BA%AC%E7%9C%81\"\n     }\n }",
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
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/PayController.php",
    "groupTitle": "Pay"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-message-code",
    "title": "短信验证码 （已完成）",
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
    "filename": "controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-v",
    "title": "发短消息 （赵顺利0%）",
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
    "filename": "controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "POST",
    "url": "/user/add-address",
    "title": "添加常用地址 (已完成100%)",
    "name": "AddAddress",
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
            "field": "operation_area_name",
            "description": "<p>地区名（朝阳区）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_detail",
            "description": "<p>详细地址信息</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_nickname",
            "description": "<p>联系人</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"地址添加成功\"\n  \"ret\":{\n  \"address\":\n     {\n     \"id\": 2,\n     \"customer_id\": 1,\n     \"operation_province_id\": 110000,\n     \"operation_city_id\": 110100,\n     \"operation_area_id\": 110105,\n     \"operation_province_name\": \"北京\",\n     \"operation_city_name\": \"北京市\",\n     \"operation_area_name\": \"朝阳区\",\n     \"operation_province_short_name\": \"北京\",\n     \"operation_city_short_name\": \"北京\",\n     \"operation_area_short_name\": \"朝阳\",\n     \"customer_address_detail\": \"某某小区8栋3单元512\",\n     \"customer_address_status\": 1,客户地址类型,1为默认地址，0为非默认地址\n     \"customer_address_longitude\": 116.48641,\n     \"customer_address_latitude\": 39.92149,\n     \"customer_address_nickname\": \"王小明\",\n     \"customer_address_phone\": \"18210922324\",\n     \"created_at\": 1445063798,\n     \"updated_at\": 0,\n     \"is_del\": 0\n     }\n   }\n\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录。\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"常用地址添加失败\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/addresses",
    "title": "常用地址列表 (已完成100%)",
    "name": "Addresses",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"获取地址列表成功\"\n  \"ret\":{\n  \"addresses\": [\n     {\n     \"id\": 2,\n     \"customer_id\": 1,\n     \"operation_province_id\": 110000,\n     \"operation_city_id\": 110100,\n     \"operation_area_id\": 110105,\n     \"operation_province_name\": \"北京\",\n     \"operation_city_name\": \"北京市\",\n     \"operation_area_name\": \"朝阳区\",\n     \"operation_province_short_name\": \"北京\",\n     \"operation_city_short_name\": \"北京\",\n     \"operation_area_short_name\": \"朝阳\",\n     \"customer_address_detail\": \"某某小区8栋3单元512\",\n     \"customer_address_status\": 1,客户地址类型,1为默认地址，0为非默认地址\n     \"customer_address_longitude\": 116.48641,\n     \"customer_address_latitude\": 39.92149,\n     \"customer_address_nickname\": \"王小明\",\n     \"customer_address_phone\": \"18210922324\",\n     \"created_at\": 1445063798,\n     \"updated_at\": 0,\n     \"is_del\": 0\n     },\n    ]\n   }\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/delete-address",
    "title": "删除用户常用地址 (已完成100%)",
    "name": "DeleteAddress",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"删除成功\"\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/exchangecoupon",
    "title": "兑换优惠劵",
    "name": "ExchangeCoupon",
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
            "field": "city",
            "description": "<p>城市</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"兑换成功\"\n\n\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"优惠码不存在，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/CouponController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/exchange-coupon",
    "title": "兑换优惠劵 （没有此需求）",
    "name": "ExchangeCoupon",
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
            "field": "city",
            "description": "<p>城市</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"兑换成功\"\n\n\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"优惠码不存在，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/get-comment-level",
    "title": "获取用户评价等级 （郝建设 100%）",
    "name": "GetCommentLevel",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"获取评论级别成功\",\n  \"ret\": {\n     \"id\": \"1\",\n     \"customer_comment_level\": \"级别代号\",\n     \"customer_comment_level_name\": \"级别名称\",\n     \"is_del\": \"是否删除\",\n\n      }",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/get-comment-level-tag",
    "title": "获取用户评价等级下面的标签 （郝建设 100%）",
    "name": "GetCommentLevelTag",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"获取评论标签成功\",\n  \"ret\": {\n     \"id\": \"1\",\n     \"customer_tag_name\": \"评价标签名称\",\n     \"customer_comment_level\": \"评价等级\",\n     \"is_online\": \"是否上线\",\n     \"is_del\": \"删除\",\n\n      }",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-share-text",
    "title": "获取分享优惠文本 （待确定；郝建设0%）",
    "name": "GetShareText",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": {\n          \"wxCnt\": \"送你e家洁的10元免费体验邀请码：1011685，关注下e家洁的微信账号：\nejiajie，十几分钟保洁阿姨就到了，关键是还便宜！只需50元就可以将家里彻底打扫一遍，快告诉你好友吧！\",\n          \"wbCnt\": \"最近用了【e家洁】App找保洁小时工，阿姨准时登门，干活麻利，门后墙角都干干净净的，2小时才50元，必须推荐给你们！http://t.cn/8siFiZZ\n下载后输入体验邀请码：1011685，你们还可以获得10元优惠券哦！\",\n           \"wxGroupCnt\": \"最近用了【e家洁】App找保洁小时工，阿姨准时登门，干活麻利，门后墙角都干干净净的，2小时才50元，必须推荐给你们！http://t.cn/8siFiZZ\n下载后输入体验邀请码：1011685，你们还可以获得10元优惠券哦！\",\n           \"wxFriendGroupShare\": \"品质生活  从e家洁开始\",\n           \"wbShare\": \"最近使用的保洁打扫利器，新居开荒家电清洗洗衣洗护样样齐全，优质服务省事贴心！快来体验更多~ http://t.cn/8siFiZZ\",\n           \"sms\": \"最近用了【e家洁】App找保洁小时工，阿姨准时登门，干活麻利，门后墙角都干干净净的，2小时才50元，必须推荐给你们！http://t.cn/8siFiZZ\n下载后输入体验邀请码：1011685，你们还可以获得10元优惠券哦！\"\n          }\n\n\n}",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/remove-worker",
    "title": "移除黑名单中的阿姨 （功能已经实现,需要再次确认传递参数 已完成100%）",
    "name": "RemoveWorker",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"移除成功\"\n\n}",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/set-default-address",
    "title": "设置默认地址 (已完成100%)",
    "description": "<p>用户每次下完单都会将该次地址设置为默认地址，下次下单优先使用默认地址</p> ",
    "name": "SetDefaultAddress",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"设置成功\"\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/set-default-city",
    "title": "设置默认城市 （需求不明确；0%）",
    "name": "SetDefaultCity",
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
            "field": "city_name",
            "description": "<p>城市名称</p> "
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
            "field": "services",
            "description": "<p>该城市提供的服务.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "appInfoWithCity",
            "description": "<p>该城市相关初始化配置.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"设置成功\"\n  \"ret\":{\n     \"services\":{}\n     \"appInfoWithCity\":{}\n   }\n\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/update-address",
    "title": "修改常用地址 (已完成100%)",
    "name": "UpdateAddress",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"修改常用地址成功\"\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录。\"\n\n}",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/update-city",
    "title": "修改载入城市",
    "name": "UpdateCity",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "services",
            "description": "<p>该城市提供的服务.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "appInfoWithCity",
            "description": "<p>该城市相关初始化配置.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"设置成功\"\n  \"ret\":{\n     \"services\":{}\n     \"appInfoWithCity\":{}\n   }\n\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/user-money 用户余额和消费记录 （已完成99% 数据已经全部取出,需要给出所需字段,然后给予返回;）",
    "title": "user-money",
    "name": "UserMoney",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"查询成功\"\n  \"ret\": {\n     \"msgStyle\": \"toast\",\n     \"alertMsg\": \"\",\n     \"totalMoney\": \"9863.00元\",\n     \"cardName\": \"您好！铂金卡会员\",\n     \"isMember\": \"1\",\n     \"payRecord\": [\n         {\n             \"desc\": \"家庭保洁\",\n             \"balanceMoney\": \"余额支付:¥0\",\n             \"time\": \"2015-09-14\",\n             \"payDetails\": \"总额:¥25\"\n         }\n     ]\n   }\n}",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/user-suggest",
    "title": "用户提交意见反馈 （需要再次核实需求;郝建设 100%）",
    "name": "UserSuggest",
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
            "field": "customer_comment_phone",
            "description": "<p>用户电话</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_level",
            "description": "<p>评价级别</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_comment_tag_ids",
            "description": "<p>评价标签</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_comment_content",
            "description": "<p>评价内容</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"提交成功\"\n\n}",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/user-score",
    "title": "用户积分明细 （功能已实现,不明确需求端所需字段格式 90%）",
    "description": "<p>获取用户当前积分，积分兑换奖品信息，怎样获取积分信息</p> ",
    "name": "Userscore",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"提交成功\"\n  \"ret\":{\n     \"scoreCategory\": [\n         {\n             \"desc\": \"在线支付后评价订单\",\n             \"score\": \"¥*5\"\n         },\n         {\n             \"desc\": \"在线支付\",\n             \"score\": \"¥*5\"\n         },\n         {\n             \"desc\": \"分享给朋友\",\n             \"score\": \"10\"\n         }\n     ],\n     \"scoreDetail\": [],\n     \"score\": \"0分\",\n     \"userPrize\": [\n         {\n             \"prizeId\": \"3\",\n             \"prizeName\": \"e家洁厨房高温保养\",\n             \"prizeCost\": \"1500\",\n             \"prizeRule\": [\n                 \"如需咨询请拨打客服电话：400-6767-636\"\n             ],\n             \"prizeThumb\": \"http://webapi2.1jiajie.com/app/images/gaowenbaojie_small3.png\",\n             \"prizePic\": \"http://static.1jiajie.com/prizePhoto/gaowenbaojie_big.png\"\n         }\n     ],\n   }\n\n}",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/black-list-workers",
    "title": "黑名单阿姨列表 （功能已经完成,需要核实传递参数和返回数据格式 已完成100%）",
    "description": "<p>获得该用户添加进黑名单的阿姨</p> ",
    "name": "blacklistworkers",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"删除成功\"\n  \"ret\":{\n    \"blockWorkers\": [\n    {\n      \"worker_id\": \"12409\",\n      \"face\": \"http://static.1jiajie.com/worker/face/12409.jpg\",\n      \"name\": \"夏测试\",\n      \"order_num\": \"服务:168次\",\n      \"kilometer\": \"\",\n      \"star_rate\": \"0\",\n      \"last_serve_time\": \"最后服务时间:2015-04-22 16:00:34\",\n      \"shop_id\": \"68\",\n      \"is_fulltime\": \"全职全日\",\n      \"telephone\": \"18610932174\"\n    }\n   ]\n  }\n}",
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
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/delete-used-worker",
    "title": "删除常用阿姨 （功能已经实现,需再次核实 100%）",
    "name": "deleteUsedWorker",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n  \"msg\": \"删除成功\"\n\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"不存在要删除的阿姨\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/worker/single-worker-time.php",
    "title": "单次服务排班表(李勇80%缺少core/model支持)",
    "name": "SingleWorkerTime",
    "group": "Worker",
    "description": "<p>帮客户下单，单次服务获取服务时间</p> ",
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
            "optional": true,
            "field": "district_id",
            "description": "<p>商圈id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
          "content": "HTTP/1.1 200 OK\n {\n      \"code\": \"ok\",\n      \"msg\": \"获取单次服务排班表成功\"\n      \"ret\":{\n         \"appointment\": [\n             {\n                 \"date_format\": \"10月10日\",\n                 \"date_stamp\": 1444406400,\n                 \"week\": \"明天\",\n                 \"have_worker\": 1,\n                 \"hour\": [\n                     {\n                         \"time\": \"08:00-10:00\",\n                         \"status\": \"0\"\n                     },\n                     {\n                         \"time\": \"18:00-20:00\",\n                         \"status\": \"1\"\n                     }\n                 ]\n             }\n         ]\n      }\n    }",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/worker-info",
    "title": "查看阿姨信息 (田玉星 80%)",
    "description": "<p>【备注：阿姨身份、星级、个人技能等待model底层】</p> ",
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
            "description": "<p>阿姨登录token</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n \"msg\": \"阿姨信息查询成功\",\n \"ret\": {\n     \"worker_name\": \"李刘珍\",\n     \"worker_phone\": \"13121999270\",\n     \"head_url\": \"\",\n     \"worker_identity\": \"兼职\",\n     \"worker_role\": \"保姆\",\n     \"worker_start\": 4.5,\n     \"personal_skill\": [\n         \"煮饭\",\n         \"开荒\",\n         \"护老\",\n         \"擦玻璃\",\n         \"带孩子\"\n     ]\n   }\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/mobileapidriver2/driver_get_now_order_list_hide",
    "title": "阿姨去不了",
    "name": "actionDriverGetNowOrderListHide",
    "group": "Worker",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "list_type",
            "description": "<p>订单类型.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n     }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/v2/FixedUserPeriod.php",
    "title": "固定客户列表",
    "name": "actionFixedUserPeriod",
    "group": "Worker",
    "description": "<p>对账固定客户（点击查看全部）</p> ",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"alertMsg\": \"\",\n         \"fixedUserPeriod\":\n         [\n         {\n             \"period_id\": \"15\",\n             \"place_detail\": \"6换10\",\n             \"street\": \"海淀区定慧北里\",\n             \"telephone\": \"136****3636\",\n             \"order_num\": 2,\n             \"order_time\": \"5.5小时\"\n         }\n         ]\n     }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/mobileapidriver2/get_driver_info",
    "title": "个人中心首页",
    "name": "actionGetDriverInfo",
    "group": "Worker",
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
            "description": "<p>平台版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Sign",
            "description": "<p>传了123.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"\",\n     \"ret\":\n     {\n         \"orderCount\": 0,\n         \"cancelCount\": \"\",\n         \"driverTotalScore\": \"\",\n         \"myRewards\": [],\n         \"userPhone\": \"13401096964\",\n         \"driverName\": \"陈琴昭测试\",\n         \"driverAge\": \"32\",\n         \"qualityScoreClauseUrl\": \"http://wap.1jiajie.com/serverinfo/complainManage.html\",\n         \"livePlace\": \"北京市房山区长阳\",\n         \"homeTown\": \"河北省\",\n         \"identityCard\": \"********\",\n         \"goodRate\": [],\n         \"badRate\": [],\n         \"totalRate\": [],\n         \"myMoney\": \"0.0元\",\n         \"rankList\": [],\n         \"myRank\":\n         [\n         {\n             \"driver_name\": \"\",\n             \"rank\": \"100+\",\n             \"money\": \"0\"\n         }\n         ],\n         \"starCountList\": [],\n         \"meStarList\":\n         [\n         {\n             \"driver_name\": \"冷桂艳\",\n             \"rank\": \"100+\",\n             \"money\": \"0\"\n         }\n         ],\n         \"personal_skill\":\n         [\n         {\n             \"title\": \"洗衣\",\n             \"type\": 1,\n             \"value\": null\n         }\n         ],\n         \"druingTime\": \"2015.9.1  一  2015.9.13\",\n         \"restScore\": \"分\",\n         \"complainNum\": \"1个\",\n         \"unPayMoney\": \"0.0元\",\n         \"isPayMoney\": \"0.0元\",\n         \"unPayList\": [],\n         \"isPayList\": [],\n         \"myMoneyList\": [],\n         \"restDay\": \"剩余周期135天\",\n         \"scoreList\": [],\n         \"fineMoney\": \"0.00\",\n         \"unComplainList\": [],\n         \"restDayStr\": \"您本次的积分周期自2014-01-02至2014-05-06止\",\n         \"complainStr\": \"\",\n         \"complainClauseUrl\": \"http://wap.1jiajie.com/serverinfo/punishManage.html\",\n         \"todayFinishOrder\": 0,\n         \"todayFinishMoney\": 0,\n         \"monthFinishOrder\": 0,\n         \"monthFinishMoney\": 0,\n         \"succRate\": 100,\n         \"driverLevel\": \"\",\n         \"alertType\": 0,\n         \"accountRestMoney\": 0,\n         \"payMoney\": 0,\n         \"chargeMoney\": 0,\n         \"driverCompany\": \"家政公司\",\n         \"curCarId\": null,\n         \"curCarBrand\": null,\n         \"curCarNumber\": null,\n         \"curCarColor\": null,\n         \"curColor\": null,\n         \"curCarType\": 1,\n         \"isOpenStart\": true,\n         \"result\": \"1\",\n         \"headUrl\": \"http://static.1jiajie.com/picture_default.jpg\",\n         \"driverDegree\": \"高中\",\n         \"driverWorkAge\": \"2年\",\n         \"driverLanguage\": \"普通话\",\n         \"healthCard\": \"无\",\n         \"department\": \"北京大悦城店\",\n         \"serverRange\": \"5公里\",\n         \"tranSportation\": \"无\",\n         \"activity_url\": \"http://wap.1jiajie.com/wap_theme_activity/ayiduan/index.html\"\n     }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-comment",
    "title": "获取阿姨对应的评论 (田玉星 80%)",
    "description": "<p>【备注：等待model底层支持】</p> ",
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
            "field": "comment_type",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\": \"操作成功.\",\n     \"ret\": [\n        {\n            \"comment_id\": \"1\",\n            \"comment\": \"这是第一条评论类型为2评论\",\n            \"comment_date\": \"2015-10-22\"\n        },\n        {\n            \"comment_id\": \"1\",\n            \"comment\": \"这是第二条评论类型为2评论\",\n           \"comment_date\": \"2015-10-22\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"error\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-complain",
    "title": "获取阿姨对应的投诉 (田玉星 80%)",
    "description": "<p>【备注：等待model底层支持】</p> ",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\": \"操作成功.\",\n     \"ret\": [\n        {\n            \"complain_id\": \"1\",\n            \"complain\": \"这是第一条投诉\",\n            \"complain_date\": \"2015-10-22\"\n        },\n        {\n            \"complain_id\": \"1\",\n            \"complain\": \"这是第二条投诉\",\n            \"complain_date\": \"2015-10-22\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"error\",\n    \"msg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/WorkerController.php",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"查询地址成功\",\n     \"ret\":\n     {\n         \"result\": 1,\n         \"live_place\": \"北京市密云县密云\"\n     }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "POST",
    "url": "/worker/handle-worker-leave",
    "title": "阿姨请假（田玉星 80%）",
    "description": "<p>【备注：等待model底层支持】</p> ",
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
            "field": "date",
            "description": "<p>请假时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>请假类型 .</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"ok\",\n    \"msg\":\"操作成功\",\n    \"ret\":\n    {\n        \"result\": \"1\",\n        \"msg\": \"您的请假已提交，请耐心等待审批。\"\n    }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/handle-worker-leave-history",
    "title": "查看阿姨请假历史（田玉星 80%）",
    "description": "<p>【备注：等待model底层支持】</p> ",
    "name": "actionHandleWorkerLeaveHistory",
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
        "url": "http://dev.api.1jiajie.com/v1/worker/handle-worker-leave-history"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"code\": \"ok\",\n       \"msg\": \"操作成功\",\n      \"ret\": [\n         {\n             \"leave_type\": \"休假\",\n             \"leave_date\": \"2015-10-01\",\n             \"leave_status\": \"待审批\"\n         }\n    ]\n  }",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/worker/help_user_create_one_order.php",
    "title": "",
    "name": "actionHelpUserCreateOneOrder",
    "group": "Worker",
    "description": "<p>帮客户下单，单次服务确认下单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_type",
            "description": "<p>订单类型，非家庭保洁传空.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "work_time",
            "description": "<p>服务时长.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reserve_time",
            "description": "<p>服务时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "no_auto_assign",
            "description": "<ol> <li></li> </ol> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"code\": \"-1\",\n         \"msg\":\n         {\n             \"msgStyle\": \"toast\",\n             \"alertMsg\": \"下单失败，下单时段您有其他服务。\"\n         }\n     }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/mobileapidriver2/helpUserCreateOrder",
    "title": "查询帮用户下的订单",
    "name": "actionHelpUserCreateOrder",
    "group": "Worker",
    "description": "<p>查询帮助用户创建的订单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tel",
            "description": "<p>查询的电话号码.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"result\": 1,\n         \"msg\": \"\",\n         \"orderList\":\n         [\n         {\n             \"orderId\": \"6924842\",\n             \"orderType\": \"家庭保洁\",\n             \"orderPlace\": \"北京 定慧福里(北门) 25号楼\",\n             \"longitude\": \"0\",\n             \"latitude\": \"0\",\n             \"orderDate\": \"2015-08-31\",\n             \"orderStartTime\": \"08:00\",\n             \"orderEndTime\": \"10:00\",\n             \"orderAllTime\": \"2.0\",\n             \"userPhone\": \"13521516291\",\n             \"userName\": \"\",\n             \"cityName\": \"北京\",\n             \"extendInfo\": \"重点打扫厨房,重点打扫卫生间##重点打扫厨房,重点打扫卫生间,\",\n             \"timestamp\": 1440979200,\n             \"userType\": \"1\"\n         }\n         ]\n     }\n}",
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
            "field": "PhoneNotFound",
            "description": "<p>未找到电话信息.</p> "
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/v2/worker/help_user_create_period_order.php",
    "title": "提交周期订单",
    "name": "actionHelpUserCreatePeriodOrder",
    "group": "Worker",
    "description": "<p>帮客户下单，周期服务提交订单</p> ",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "begin_time",
            "description": "<p>开始时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "place_detail",
            "description": "<p>详细地址.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reserve_time",
            "description": "<p>周期服务时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "no_auto_assign",
            "description": "<ol> <li></li> </ol> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"code\": \"-1\",\n         \"msg\":\n         {\n             \"orderId\": 0,\n             \"popMsg\": \"\",\n             \"pageMsg\": \"\",\n             \"dupOrderInfo\": [],\n             \"total_score\": 0,\n             \"PeriodOrderId\": 0,\n             \"alertMsg\": \"已选择过此阿姨进行周期服务，不可重复提交\",\n             \"msgStyle\": \"\"\n         }\n     }\n}",
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
            "field": "StartTimeNotFound",
            "description": "<p>未找到开始时间.</p> "
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/worker/recursive-worker-time.php",
    "title": "周期服务时间表(李勇80%缺少model)",
    "name": "actionRecursiveWorkerTime",
    "group": "Worker",
    "description": "<p>帮客户下单，周期服务</p> ",
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
            "optional": true,
            "field": "district_id",
            "description": "<p>商圈id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "worker_id",
            "description": "<p>阿姨id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"selectTimeArea\": \"6\",\n         \"maxPlanTime\": \"6\",\n         \"minPlanTime\": \"2\",\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\",\n         \"workerTime\":\n         [\n         {\n             \"date_name\": \"09月13日\",\n             \"date_week\": \"周日\",\n             \"date_week_every\": \"每周日\",\n             \"date_time\":\n    [\"14:00-16:00\",\"14:30-16:30\",\"15:00-17:00\",\"15:30-17:30\",\"16:00-18:00\",\"16:30-18:30\",\"17:00-19:00\",\"17:30-19:30\",\"18:00-20:00\"],\n             \"date_name_tag\": \"09月13日(今天)\"\n         }\n         ]\n     }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/mobileapidriver2/system_news",
    "title": "通知中心",
    "name": "actionSystemNews",
    "group": "Worker",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/v2/worker_busy.php",
    "title": "提交工作时间",
    "name": "actionWorkerBusy",
    "group": "Worker",
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
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "busy_time",
            "description": "<p>忙碌的时间段.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "report_type",
            "description": "<ol> <li></li> </ol> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "busy_type",
            "description": "<p>1，忙碌类型.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "admin_id",
            "description": "<ol start=\"702\"> <li></li> </ol> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_code",
            "description": "<p>城市code.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"\",\n     \"ret\":\n     {\n         \"workerId\": 12507,\n         \"alertMsg\": \"更新成功\"\n     }\n}",
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
            "field": "CityCodeNotFound",
            "description": "<p>未找到城市编码.</p> "
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/v2/worker_busy_list.php",
    "title": "工作时间",
    "name": "actionWorkerBusyList",
    "group": "Worker",
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
            "field": "is_assign_info",
            "description": "<ol> <li></li> </ol> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "start_time",
            "description": "<p>查询那一天的.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "select_day",
            "description": "<p>查询几天 1.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"orderCount\": 0,\n         \"cancelCount\": null,\n         \"driverTotalScore\": null,\n         \"myRewards\": [],\n         \"userPhone\": \"13401096964\",\n         \"driverName\": \"陈测试1\",\n         \"driverAge\": \"32\",\n         \"qualityScoreClauseUrl\": \"http://wap.1jiajie.com/serverinfo/complainManage.html\",\n         \"livePlace\": \"北京市密云县密云\",\n         \"homeTown\": \"河北省\",\n         \"identityCard\": \"********\",\n         \"goodRate\": [],\n         \"badRate\": [],\n         \"totalRate\": [],\n         \"myMoney\": \"0.0元\",\n         \"rankList\": [],\n         \"myRank\":\n         [\n         {\n             \"driver_name\": \"\",\n             \"rank\": \"100+\",\n             \"money\": \"0\"\n         }\n         ],\n         \"starCountList\": [],\n         \"meStarList\":\n         [\n         {\n             \"driver_name\": \"\",\n             \"rank\": \"100+\",\n             \"money\": \"0\"\n         }\n         ],\n         \"personal_skill\":\n         [\n         {\n             \"title\": \"洗衣\",\n             \"type\": 1,\n             \"value\": null\n         }\n         ],\n         \"druingTime\": \"2015.9.1  一  2015.9.13\",\n         \"restScore\": \"分\",\n         \"complainNum\": \"0个\",\n         \"unPayMoney\": \"0.0元\",\n         \"isPayMoney\": \"0.0元\",\n         \"unPayList\": [],\n         \"isPayList\": [],\n         \"myMoneyList\": [],\n         \"restDay\": \"剩余周期135天\",\n         \"scoreList\": [],\n         \"fineMoney\": \"0.00\",\n         \"unComplainList\": [],\n         \"restDayStr\": \"您本次的积分周期自2014-01-02至2014-05-06止\",\n         \"complainStr\": \"\",\n         \"complainClauseUrl\": \"http://wap.1jiajie.com/serverinfo/punishManage.html\",\n         \"todayFinishOrder\": 0,\n         \"todayFinishMoney\": 0,\n         \"monthFinishOrder\": 0,\n         \"monthFinishMoney\": 0,\n         \"succRate\": 100,\n         \"driverLevel\": \"\",\n         \"alertType\": 0,\n         \"accountRestMoney\": 0,\n         \"payMoney\": 0,\n         \"chargeMoney\": 0,\n         \"driverCompany\": \"家政公司\",\n         \"curCarId\": null,\n         \"curCarBrand\": null,\n         \"curCarNumber\": null,\n         \"curCarColor\": null,\n         \"curColor\": null,\n         \"curCarType\": 1,\n         \"isOpenStart\": true,\n         \"result\": \"1\",\n         \"headUrl\": \"http://static.1jiajie.com/picture_default.jpg\",\n         \"driverDegree\": \"大学\",\n         \"driverWorkAge\": \"1年\",\n         \"driverLanguage\": \"普通话\",\n         \"healthCard\": \"无\",\n         \"department\": \"测试用门店\",\n         \"serverRange\": \"5公里\",\n         \"tranSportation\": \"无\",\n         \"activity_url\": \"http://wap.1jiajie.com/wap_theme_activity/ayiduan/index.html\"\n     }\n}",
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
            "field": "WorkerIdNotFound",
            "description": "<p>未找到阿姨ID.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StartTimeNotFound",
            "description": "<p>未找到开始时间.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TimesNotFound",
            "description": "<p>未找到时间段信息.</p> "
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "get",
    "url": "/mobileapidriver2/workerLeave",
    "title": "查看请假情况",
    "name": "actionWorkerLeave",
    "group": "Worker",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"result\": \"1\",\n         \"msg\": \"ok\",\n         \"titleMsg\": \"您本月已请假0天，本月剩余请假2天\",\n         \"orderTimeList\": [\"2015-09-14\",\"2015-09-15\",],\n         \"workerLeaveList\": []\n     }\n}",
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
    "filename": "controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "POST",
    "url": "/configure/all-services",
    "title": "城市服务初始化 （已完成）",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"ok\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n    {\n        \"category_id\":\"\", 服务品类id\n        \"category_name\":\"专业保洁\",  服务品类名\n        \"goodses\":\n        [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n        },\n        ]\n     }\n     ],\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"error\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>获取城市服务配置项价格介绍页面以及分类的全部服务项目</p> ",
    "version": "0.0.0",
    "filename": "controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "POST",
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
          "content": "    HTTP/1.1 200 OK\n    {\n         \"code\": \"ok\",\n         \"msg\": \"操作成功\",\n         \"ret\": {\n             \"city_list\": [\n             {\n                 \"id\": 1,\n                 \"province_id\": 120000,\n                 \"province_name\": \"天津\",\n                 \"city_id\": 120100,\n                 \"city_name\": \"天津市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444283773,\n                 \"updated_at\": 1444283773\n             },\n             {\n                 \"id\": 2,\n                 \"province_id\": 110000,\n                 \"province_name\": \"北京\",\n                 \"city_id\": 110100,\n                 \"city_name\": \"北京市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444368462,\n                 \"updated_at\": 1444368462\n             },\n             {\n                 \"id\": 3,\n                 \"province_id\": 140000,\n                 \"province_name\": \"山西省\",\n                 \"city_id\": 140300,\n                 \"city_name\": \"阳泉市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444413962,\n                 \"updated_at\": 1444413962\n             },\n             {\n                 \"id\": 4,\n                 \"province_id\": 140000,\n                 \"province_name\": \"山西省\",\n                 \"city_id\": 140100,\n                 \"city_name\": \"太原市\",\n                 \"operation_city_is_online\": 1,\n                 \"created_at\": 1444635891,\n                 \"updated_at\": 1444635891\n             }\n             ],\n             \"pic_list\": [\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/ios_banner_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/trainAuntie1.html\",\n                 \"url_title\": \"标准服务\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150603ad_top_v4_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/pledge.html\",\n                 \"url_title\": \"服务承诺\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150311ad_top_v4_3.png\",\n                 \"link\": \"\",\n                 \"url_title\": \"\"\n             }\n             ],\n             \"server_list\": [\n             {\n                 \"goods_id\": \"1\",\n                 \"goods_no\": \"\",\n                 \"goods_name\": \"管道疏通\",\n                 \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n                 \"goods_english_name\": \"\",\n                 \"goods_img\": \"\",\n                 \"goods_app_ico\": \"\",\n                 \"goods_pc_ico\": \"\",\n                 \"goods_price\": \"160.00\",\n                 \"goods_price_unit\": \"眼\",\n                 \"goods_price_description\": \"\"\n             },\n             {\n                 \"goods_id\": \"2\",\n                 \"goods_no\": \"\",\n                 \"goods_name\": \"家电维修\",\n                 \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n                 \"goods_english_name\": \"\",\n                 \"goods_img\": \"\",\n                 \"goods_app_ico\": \"\",\n                 \"goods_pc_ico\": \"\",\n                 \"goods_price\": \"160.00\",\n                 \"goods_price_unit\": \"次\",\n                 \"goods_price_description\": \"\"\n             },\n             {\n                 \"goods_id\": \"3\",\n                 \"goods_no\": \"\",\n                 \"goods_name\": \"家具组装\",\n                 \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n                 \"goods_english_name\": \"\",\n                 \"goods_img\": \"\",\n                 \"goods_app_ico\": \"\",\n                 \"goods_pc_ico\": \"\",\n                 \"goods_price\": \"160.00\",\n                 \"goods_price_unit\": \"次\",\n                 \"goods_price_description\": \"\"\n             }\n         ]\n     }\n}",
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
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\":\"error\",\n  \"msg\": \"城市尚未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/ConfigureController.php",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"curAndroidVersion\": 23,\n         \"androidVersionUrl\": \"http://webapi2.1jiajie.com/app/aunt_2.5.apk\",\n         \"androidVersionAlertMsg\": \"1、兼职阿姨也可登录阿姨端。2、兼职阿姨可修改自己的工作时间。3、新增待接活订单推送通知。\",\n         \"isAndroidUpdateForce\": false,\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\"\n     }\n}",
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
    "filename": "controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "POST",
    "url": "/configure/worker-init",
    "title": "阿姨app初始化 （赵顺利0%）",
    "name": "actionWorkerInit",
    "group": "configure",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"OK\",\n    \"msg\": \"首页信息获取成功\",\n    \"ret\":\n    {\n        \"msgStyle\": \"\",\n        \"alertMsg\": \"\",\n        \"worker\":\n        {\n            \"id\": \"1111116\",\n            \"name\": \"陈测试1\",\n            \"head\": \"http://static.1jiajie.com/worker/face/1111116.jpg\",\n            \"notify\": \"傍晚好，祝您晚餐愉快！\"\n        },\n        \"forEntry\":\n        {\n            \"title\": \"\",\n            \"num\": 0,\n            \"info\": []\n         },\n        \"forService\":\n        {\n            \"title\": \"您的下一个订单\",\n            \"num\": 7,\n            \"info\":\n            [\n            {\n                \"auot_pay_status\": 0,\n                \"order_id\": \"188\",\n                \"is_member\": 1,\n                \"member_value\": \"4600.00\",\n                \"reserve_time\": \"2015-09-10 12:00\",\n                \"date_name_tag\": \"09月10日\",\n                \"lat\": \"39.929669\",\n                \"lng\": \"116.523996\",\n                \"city_name\": \"北京\",\n                \"place\": \"朝阳区大悦城 测试测试\",\n                \"telephone\": \"15652146926\",\n                \"list\": [],\n                \"order_status\": \"2\",\n                \"server_type_name\": \"家庭保洁\",\n                \"suggest_worked_time\": 2,\n                \"worker_time\": \"2015-09-10 12:00-14:00\",\n                \"extend_info\": \"\",\n                \"pay_amount\": \"0\",\n                \"coupon\": \"\",\n                \"coupon_money\": 0,\n                \"is_cancel\": \"0\",\n                \"order_price\": 25\n            }\n            ]\n        },\n        \"sysMsg\":\n        {\n            \"num\": 0,\n            \"info\": \"\"\n        },\n        \"picVersion\": 1,\n        \"bigPic\": \"http://webapi2.1jiajie.com/ayiduan/images/aunt_ad_big.png\",\n        \"smallPic\": \"http://webapi2.1jiajie.com/ayiduan/images/aunt_ad_small.png\",\n        \"isShow\": 1\n    }\n}",
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
    "filename": "controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "POST",
    "url": "v1/service/all-services",
    "title": "依据城市 获取所有服务列表 （已完成）",
    "name": "actionAllServices",
    "group": "service",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"ok\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n    {\n        \"category_id\":\"\", 服务品类id\n        \"category_name\":\"专业保洁\",  服务品类名\n        \"goodses\":\n        [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n        },\n        ]\n     }\n     ],\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"error\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>获取城市服务配置项价格介绍页面以及分类的全部服务项目</p> ",
    "version": "0.0.0",
    "filename": "controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "POST",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"ok\",\n    \"msg\": \"信息获取成功\",\n    \"ret\":\n    [\n    {\n        \"goods_id\": \"1\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"管道疏通\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"眼\",\n        \"goods_price_description\": \"\"\n    },\n    {\n        \"goods_id\": \"2\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"家电维修\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"次\",\n        \"goods_price_description\": \"\"\n    },\n    {\n        \"goods_id\": \"3\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"家具组装\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"次\",\n        \"goods_price_description\": \"\"\n    }\n    ]\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"error\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/ServiceController.php",
    "groupTitle": "service"
  }
] });