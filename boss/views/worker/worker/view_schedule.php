<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use core\models\worker\Worker;
use core\models\worker\WorkerSchedule;
use kartik\daterange\DateRangePicker;
/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var boss\models\WorkerSearch $searchModel
 */
?>
<style>
    td{cursor:pointer}
    tr{margin-bottom: 4px}
    .form-control{line-height:2.0}
    .schedule-date{margin-left: 20px;font-size:14px;width:280px}
    .close{color:red;font-size:14px;margin-top:4px;margin-left: 3px}
    .close:hover{color:red}
</style>
<div class="panel panel-info">

<div class="panel-body">
    <div style="width: 300px;float: left">

    <?php
        echo DateRangePicker::widget([
            'name'=>'date_range',
            'useWithAddon'=>true,
            'language'=>'zh-CN',
            'hideInput'=>true,
            'presetDropdown'=>false,
            'pluginOptions'=>[
                'locale'=>['format'=>'date'],
                'separator'=>' 至 ',
                'opens'=>'right'
            ]
        ]);
    ?>
    </div>
    <button type="button" id='btn-add' class="btn btn-success" style="margin-left: 20px">添加日期</button>
    <button type="button" id='btn-submit' class="btn btn-success" style="margin-left: 20px;">保存排班表</button>
    <form id='form' method="post" action="./opeation-schedule?id=<?php echo $worker_id?>">
        <input type="hidden" name="schedule_data">
    </form>

</div>
<div id="schedule-list">
    <?php
    foreach ($schedule as $val) {
    ?>
    <div class="schedule_content">
        <div date="<?=date('Y-m-d',$val['worker_schedule_start_date'])?> 至 <?=date('Y-m-d',$val['worker_schedule_end_date'])?>" class="schedule-date">工作日期：<?=date('Y-m-d',$val['worker_schedule_start_date'])?> 至 <?=date('Y-m-d',$val['worker_schedule_end_date'])?><button type="button" class="close" >删除</button></div>

        <div class="schedule-info panel-body">

            <table class="table table-bordered " style="width: 80%;" "="">
            <tbody>
            <?php $weekday = json_decode($val['worker_schedule_timeline'],1)?>
            <?php foreach ($weekday as $w_key=>$w_val) {
            ?>
                <tr>
                    <th scope="row" weekday="<?= $w_key?>"><?= WorkerSchedule::getWeekdayShow($w_key)?></th>
                    <td class="<?php if(in_array('8:00',$w_val)){echo 'success';}?>">8:00</td>
                    <td class="<?php if(in_array('9:00',$w_val)){echo 'success';}?>">9:00</td>
                    <td class="<?php if(in_array('10:00',$w_val)){echo 'success';}?>">10:00</td>
                    <td class="<?php if(in_array('11:00',$w_val)){echo 'success';}?>">11:00</td>
                    <td class="<?php if(in_array('12:00',$w_val)){echo 'success';}?>">12:00</td>
                    <td class="<?php if(in_array('13:00',$w_val)){echo 'success';}?>">13:00</td>
                    <td class="<?php if(in_array('14:00',$w_val)){echo 'success';}?>">14:00</td>
                    <td class="<?php if(in_array('15:00',$w_val)){echo 'success';}?>">15:00</td>
                    <td class="<?php if(in_array('16:00',$w_val)){echo 'success';}?>">16:00</td>
                    <td class="<?php if(in_array('17:00',$w_val)){echo 'success';}?>">17:00</td>
                    <td class="<?php if(in_array('18:00',$w_val)){echo 'success';}?>">18:00</td>
                    <td class="<?php if(in_array('19:00',$w_val)){echo 'success';}?>">19:00</td>
                    <td class="<?php if(in_array('20:00',$w_val)){echo 'success';}?>">20:00</td>
                    <td class="<?php if(in_array('21:00',$w_val)){echo 'success';}?>">21:00</td>
                    <td class="<?php if(in_array('22:00',$w_val)){echo 'success';}?>">22:00</td>
                    <th>
                        <input id="blankCheckbox" value="option1" <?php if(count($w_val)==15){echo 'checked';}?> aria-label="..." type="checkbox">
                    </th>
                </tr>
            <?php
            }
            ?>
            </tbody>
            </table>
        </div>
    </div>
    <?php
    }
    ?>
</div>
</div>
<?php $this->registerJsFile('/js/schedule.js',['depends'=>[ 'yii\web\YiiAsset','yii\bootstrap\BootstrapAsset']]); ?>

<!------排班表模板------>
<div id="schedule-template" style="display: none">

<div  class="schedule-info panel-body" >

    <table class="table table-bordered " style="width: 80%;" ">
    <tbody>
    <tr>
        <th scope="row" weekday="1">周一</th>
        <td class="success">8:00</td>
        <td class="success">9:00</td>
        <td class="success">10:00</td>
        <td class="success">11:00</td>
        <td class="success">12:00</td>
        <td class="success">13:00</td>
        <td class="success">14:00</td>
        <td class="success">15:00</td>
        <td class="success">16:00</td>
        <td class="success">17:00</td>
        <td class="success">18:00</td>
        <td class="success">19:00</td>
        <td class="success">20:00</td>
        <td class="success">21:00</td>
        <td class="success">22:00</td>
        <th>
            <input type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
        </th>
    </tr>
    <tr>
        <th scope="row" weekday="2">周二</th>
        <td class="success">8:00</td>
        <td class="success">9:00</td>
        <td class="success">10:00</td>
        <td class="success">11:00</td>
        <td class="success">12:00</td>
        <td class="success">13:00</td>
        <td class="success">14:00</td>
        <td class="success">15:00</td>
        <td class="success">16:00</td>
        <td class="success">17:00</td>
        <td class="success">18:00</td>
        <td class="success">19:00</td>
        <td class="success">20:00</td>
        <td class="success">21:00</td>
        <td class="success">22:00</td>
        <th><input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></th>
    </tr>
    <tr>
        <th scope="row" weekday="3">周三</th>
        <td class="success">8:00</td>
        <td class="success">9:00</td>
        <td class="success">10:00</td>
        <td class="success">11:00</td>
        <td class="success">12:00</td>
        <td class="success">13:00</td>
        <td class="success">14:00</td>
        <td class="success">15:00</td>
        <td class="success">16:00</td>
        <td class="success">17:00</td>
        <td class="success">18:00</td>
        <td class="success">19:00</td>
        <td class="success">20:00</td>
        <td class="success">21:00</td>
        <td class="success">22:00</td>
        <th><input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></th>
    </tr>
    <tr>
        <th scope="row" weekday="4">周四</th>
        <td class="success">8:00</td>
        <td class="success">9:00</td>
        <td class="success">10:00</td>
        <td class="success">11:00</td>
        <td class="success">12:00</td>
        <td class="success">13:00</td>
        <td class="success">14:00</td>
        <td class="success">15:00</td>
        <td class="success">16:00</td>
        <td class="success">17:00</td>
        <td class="success">18:00</td>
        <td class="success">19:00</td>
        <td class="success">20:00</td>
        <td class="success">21:00</td>
        <td class="success">22:00</td>
        <th><input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></th>
    </tr>
    <tr>
        <th scope="row" weekday="5">周五</th>
        <td  class="success">8:00</td>
        <td  class="success">9:00</td>
        <td  class="success">10:00</td>
        <td  class="success">11:00</td>
        <td  class="success">12:00</td>
        <td  class="success">13:00</td>
        <td  class="success">14:00</td>
        <td  class="success">15:00</td>
        <td  class="success">16:00</td>
        <td  class="success">17:00</td>
        <td  class="success">18:00</td>
        <td  class="success">19:00</td>
        <td  class="success">20:00</td>
        <td  class="success">21:00</td>
        <td  class="success">22:00</td>
        <th><input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></th>
    </tr>
    <tr>
        <th scope="row" weekday="6">周六</th>
        <td  class="success">8:00</td>
        <td  class="success">9:00</td>
        <td  class="success">10:00</td>
        <td  class="success">11:00</td>
        <td  class="success">12:00</td>
        <td  class="success">13:00</td>
        <td  class="success">14:00</td>
        <td  class="success">15:00</td>
        <td  class="success">16:00</td>
        <td  class="success">17:00</td>
        <td  class="success">18:00</td>
        <td  class="success">19:00</td>
        <td  class="success">20:00</td>
        <td  class="success">21:00</td>
        <td  class="success">22:00</td>
        <th><input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></th>
    </tr>
    <tr>
        <th scope="row" weekday="7">周日</th>
        <td  class="success">8:00</td>
        <td  class="success">9:00</td>
        <td  class="success">10:00</td>
        <td  class="success">11:00</td>
        <td  class="success">12:00</td>
        <td  class="success">13:00</td>
        <td  class="success">14:00</td>
        <td  class="success">15:00</td>
        <td  class="success">16:00</td>
        <td  class="success">17:00</td>
        <td  class="success">18:00</td>
        <td  class="success">19:00</td>
        <td  class="success">20:00</td>
        <td  class="success">21:00</td>
        <td  class="success">22:00</td>
        <th><input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></th>
    </tr>
    </tbody>
    </table>
</div>
</div>