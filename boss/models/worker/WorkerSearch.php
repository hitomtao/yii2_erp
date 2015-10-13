<?php

namespace boss\models\worker;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use core\models\worker\Worker;

/**
 * WorkerSearch represents the model behind the search form about `common\models\Worker`.
 */
class WorkerSearch extends Worker
{
    public function rules()
    {
        return [
            [['id', 'shop_id', 'worker_level', 'worker_auth_status', 'worker_ontrial_status', 'worker_onboard_status', 'worker_work_city', 'worker_work_area', 'worker_type', 'worker_rule_id', 'worker_is_block', 'worker_is_blacklist', 'worker_is_vacation','created_ad', 'updated_ad', 'isdel'], 'integer'],
            [['worker_name', 'worker_phone', 'worker_idcard', 'worker_password', 'worker_photo', 'worker_work_street'], 'safe'],
            [['worker_work_lng', 'worker_work_lat'], 'number'],
        ];
    }

    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = Worker::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'shop_id' => $this->shop_id,
            'worker_level' => $this->worker_level,
            'worker_auth_status' => $this->worker_auth_status,
            'worker_ontrial_status' => $this->worker_ontrial_status,
            'worker_onboard_status' => $this->worker_onboard_status,
            'worker_work_city' => $this->worker_work_city,
            'worker_work_area' => $this->worker_work_area,
            'worker_work_lng' => $this->worker_work_lng,
            'worker_work_lat' => $this->worker_work_lat,
            'worker_type' => $this->worker_type,
            'worker_rule_id' => $this->worker_rule_id,
            'worker_is_block' => $this->worker_is_block,
            'worker_is_blacklist' => $this->worker_is_blacklist,
            'worker_is_vacation' => $this->worker_is_vacation,
            'created_ad' => $this->created_ad,
            'updated_ad' => $this->updated_ad,
            'isdel' => $this->isdel,
        ]);

        $query->andFilterWhere(['like', 'worker_name', $this->worker_name])
            ->andFilterWhere(['like', 'worker_phone', $this->worker_phone])
            ->andFilterWhere(['like', 'worker_idcard', $this->worker_idcard])
            ->andFilterWhere(['like', 'worker_password', $this->worker_password])
            ->andFilterWhere(['like', 'worker_photo', $this->worker_photo])
            ->andFilterWhere(['like', 'worker_work_street', $this->worker_work_street]);
        return $dataProvider;
    }
}