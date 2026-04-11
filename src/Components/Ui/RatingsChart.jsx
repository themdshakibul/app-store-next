"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({ ratings, totalRating }) => {
  const data = [...ratings].reverse();

  return (
    <div>
      <h3 className="text-2xl font-bold mb-1">Ratings</h3>
      <p className="text-gray-500 mb-6">
        Total: {new Intl.NumberFormat().format(totalRating)} ratings
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
        >
          <XAxis
            type="number"
            tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`}
          />
          <YAxis type="category" dataKey="name" width={50} />
          <Tooltip
            formatter={(value) => new Intl.NumberFormat().format(value)}
          />
          <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
