import React from 'react';
import './Comp.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function AnotherComponent({ wordData }) {
  console.log(wordData);

  return (
    <div>
      <BarChart width={1000} height={500} data={wordData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={'word'} margin={{ bottom: 10 }} />
        <YAxis dataKey={'frequency'} margin={{ left: 10 }} />
        <Tooltip />
        <Legend wrapperStyle={{ paddingTop: 20 }} />
        <Bar dataKey={'frequency'} fill='orange' />
      </BarChart>
    </div>
  );
}

export default AnotherComponent;