import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#34c759', '#ffcc00', '#ff3b30']; // Apple Green, Yellow, Red

const StatusChart = ({ data }) => {
  const statusCounts = data.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: 'Approved', value: statusCounts['Approved'] || 0 },
    { name: 'Pending', value: statusCounts['Pending'] || 0 },
    { name: 'Rejected', value: statusCounts['Rejected'] || 0 },
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-[24px] shadow-apple h-[350px] sm:h-[406px] flex flex-col border border-[#f5f5f7]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold tracking-tight text-apple-text">Property Status</h3>
        <p className="text-sm text-apple-textMuted font-medium mt-1">Approval distribution</p>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: 'none', borderRadius: '14px', color: '#1d1d1f', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)', padding: '12px 16px' }}
              itemStyle={{ color: '#1d1d1f', fontWeight: '500' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '13px', color: '#86868b', fontWeight: '500' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusChart;
