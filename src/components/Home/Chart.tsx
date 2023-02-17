import React from "react";
import
  {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const data = [
  {
    name: "Apr",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "May",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "June",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "July",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Aug",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Sept",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Chart()
{
  return (
    <LineChart
      width={ 1000 }
      height={ 500 }
      data={ data }
      margin={ {
        top: 5,
        right: 150,
        left: 10,
        bottom: 25
      } }
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8553fb"
        activeDot={ { r: 8 } }
      />
      <Line type="monotone" dataKey="uv" stroke="gray" />
    </LineChart>
  );
}
