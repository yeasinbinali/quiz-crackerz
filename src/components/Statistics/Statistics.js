import React from "react";
import './Statistics.css';
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLoaderData } from "react-router";

const Statistics = () => {
  const options = useLoaderData().data;
  return (
    <div className='container'>
      <h3 style={{color: 'slateblue', margin: '20px 0'}}>Statistics</h3>
      <BarChart className='barChart' width={300} height={150} data={options}>
        <Bar dataKey="total" fill="#82ca9d" />
        <XAxis className='namePlate' dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default Statistics;
