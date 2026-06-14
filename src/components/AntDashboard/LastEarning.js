'use client';
import React from 'react';
import { Card } from 'antd';
import { Column } from '@ant-design/plots';

const data = [
  { date: '1', value: 16 },
  { date: '2', value: 12 },
  { date: '3', value: 24 },
  { date: '4', value: 19 },
  { date: '5', value: 22 },
  { date: '6', value: 5 },
  { date: '7', value: 1 },
  { date: '8', value: 15 },
  { date: '9', value: 5 },
  { date: '10', value: 9 },
  { date: '11', value: 12 },
  { date: '12', value: 18 },
  { date: '13', value: 6 },
  { date: '14', value: 24 },
  { date: '15', value: 15 },
  { date: '16', value: 12 },
  { date: '17', value: 17 },
  { date: '18', value: 8 },
  { date: '19', value: 14 },
  { date: '20', value: 10 },
  { date: '21', value: 15 },
  { date: '22', value: 20 },
  { date: '23', value: 25 },
  { date: '24', value: 30 },
  { date: '25', value: 17 },
  { date: '26', value: 19 },
  { date: '27', value: 5 },
  { date: '28', value: 12 }
];

const config = {
    data,
    xField: 'date',
    yField: 'value',
    height: 200,
    marginBottom: 0
};

const LastEarning = () => {
  return (
    <div>
      <Card title='Earnings in last 28 days'>
        <Column {...config} />
      </Card>
    </div>
  );
}

export default LastEarning;