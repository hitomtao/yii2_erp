<?php

namespace boss\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use common\models\FinanceRecordLog;

/**
 * FinanceRecordLogSearch represents the model behind the search form about `common\models\FinanceRecordLog`.
 */
class FinanceRecordLogSearch extends FinanceRecordLog
{
    public function rules()
    {
        return [
            [['id', 'finance_order_channel_id', 'finance_pay_channel_id', 'finance_record_log_succeed_count', 'finance_record_log_manual_count', 'finance_record_log_failure_count'], 'integer'],
            [['finance_order_channel_name', 'finance_pay_channel_name', 'finance_record_log_confirm_name'], 'safe'],
            [['finance_record_log_succeed_sum_money', 'finance_record_log_manual_sum_money', 'finance_record_log_failure_money', 'finance_record_log_fee'], 'number'],
        ];
    }

    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = FinanceRecordLog::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'finance_order_channel_id' => $this->finance_order_channel_id,
            'finance_pay_channel_id' => $this->finance_pay_channel_id,
            'finance_record_log_succeed_count' => $this->finance_record_log_succeed_count,
            'finance_record_log_succeed_sum_money' => $this->finance_record_log_succeed_sum_money,
            'finance_record_log_manual_count' => $this->finance_record_log_manual_count,
            'finance_record_log_manual_sum_money' => $this->finance_record_log_manual_sum_money,
            'finance_record_log_failure_count' => $this->finance_record_log_failure_count,
            'finance_record_log_failure_money' => $this->finance_record_log_failure_money,
            'finance_record_log_fee' => $this->finance_record_log_fee,
            'create_time' => $this->create_time,
            'is_del' => $this->is_del,
        ]);

        $query->andFilterWhere(['like', 'finance_order_channel_name', $this->finance_order_channel_name])
            ->andFilterWhere(['like', 'finance_pay_channel_name', $this->finance_pay_channel_name])
            ->andFilterWhere(['like', 'finance_record_log_confirm_name', $this->finance_record_log_confirm_name]);

        return $dataProvider;
    }
}