$(document).ready(function(){
    $('#stop').attr('disabled', true);
    $('#reload').attr('disabled', true);
    $('#update').attr('disabled', true);
    $('#runService').hide();
    
    $('#qend').blur(function(){ $('#jstart').val( $('#qend').val());});
    $('#start').click(function(){execCommand(1);});
    $('#connect').click(function(){websocketConnect();});
    $('#connectStatus').html('正在连接派单服务器...');
    $('#connect').click();
});

function websocketConnect() {
    var ip = $('#serverip').val();
    var port = $('#serverport').val();
    if (ip != '' && port != '') {
        wsServer = 'ws://' + ip + ':' + port;
        websocket = new WebSocket(wsServer);
        websocket.onopen = function (evt) {
            console.log("Connected to WebSocket server." + evt.data);
            $('#connectStatus').html('<font color="#41A317">连接成功！</font>');
            if ($('#srvIsSuspend').val()==true)
            {
                $('#start').html('开始自动派单');
                $('#start').attr('disabled', true);
            }else{
                $('#start').attr('disabled', false);
                $('#start').html('停止自动派单');
            }
        };
        websocket.onclose = function (evt) {
            console.log("Disconnected");
            $('#connectStatus').html('<font color="#FF0000">链接断开！请检查服务器地址是否正确，或被网络防火墙禁止访问</font>');
            $('#start').html('开始自动派单');
            $('#start').attr('disabled', true);
        };

        websocket.onmessage = function (evt) {
            console.log('Retrieved data from server: ' + evt.data);
            var msg = $.parseJSON(evt.data);
            var srv_continue = 1;
            var srv_suspend = 2;
            var srv_reload = 3;
            var srv_update = 4;
            //alert(msg=="Server-Continue");
            if( msg == srv_continue){
                $('#connectStatus').html('服务已继续...');
                $('#start').attr('disabled', true);
                $('#stop').attr('disabled', false);
            }else if(msg == srv_suspend)
            {
                $('#connectStatus').html('服务已暂停...');
                $('#start').attr('disabled', false);
                $('#stop').attr('disabled', true);
            }else if(msg == srv_reload){
                $('#connectStatus').html('服务重启中...');
            }else if(msg == srv_update){
                $('#connectStatus').html('配置已完成更新...');
            }else if(msg == "Assign Server is OK"){

            }else{
                showOrders(evt.data);
            }
        };

        websocket.onerror = function (evt, e) {
            console.log('Error occured: ' + evt.data);
            $('#connectStatus').html('<font color="#FF0000">连接错误，请检查网络环境是否正常！</font>');
            $('#start').html('开始自动派单');
            $('#start').attr('disabled', true);
        };
    }
}

function showOrders(data){
    var order = $.parseJSON(data);
    order = eval('(' + order + ')');
    if (order.order_code==null || order.order_code=='')
    {
        return;
    }
    var id = 'order_'+order.order_code;
    var obj = $('#'+id);
    order.status = getStatus(order.status);
    if(order.ivr > 0){
        order.ivr = '已发送';
    }else{
        order.ivr = '未发送';
    }
    
    if(order.jpush > 0 ){
        order.jpush = '已发送';
    }else{
        order.jpush = '未发送';
    }
    
    if(order.updated_at == null){
        order.updated_at = '';
    }
    if(obj[0] == null){
        var str = '<tr id="'+id+'"><td>'+order.order_code+'</td><td>'+order.status+'</td><td>'+order.ivr+'</td><td>'+order.jpush+'</td><td>'+order.created_at+'</td><td>'+order.updated_at+'</td></tr>';
        $('#tbody').append(str);
    }else{
        $($('#'+id).children('td')[1]).html(order.status);
        $($('#'+id).children('td')[2]).html(order.ivr);
        $($('#'+id).children('td')[3]).html(order.jpush);
        $($('#'+id).children('td')[4]).html(order.created_at);
        $($('#'+id).children('td')[5]).html(order.updated_at);
    }
}

function getStatus(status){
    if(status == null){
        return '正在指派给全职阿姨';
    }else{
        //: （0-5分）: 1，(5-10)：2，已失败转到人工处理：1001
        switch(status){
            case '1': return '正在指派给全职阿姨';break;
            case '2': return '正在指派给兼职阿姨';break;
            case '1001' : return '系统派单失败转人工处理'; break;
        }
    }
}

function execCommand(cmd){
    var data = cmd +','+$('#qstart').val()+','+$('#qend').val()+','+$('#jstart').val()+','+$('#jend').val()+','+status;
    websocket.send(data);
}