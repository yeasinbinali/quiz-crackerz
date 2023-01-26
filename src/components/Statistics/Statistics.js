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
    <div>
      <h3>Statistics</h3>
      <BarChart className='barChart' width={500} height={300} data={options}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis className='namePlate' dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default Statistics;
