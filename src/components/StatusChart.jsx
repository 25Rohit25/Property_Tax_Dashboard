import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const StatusChart = ({ data }) => {
  // Process data to group statuses by city
  const cityData = data.reduce((acc, curr) => {
    let existing = acc.find(item => item.tenant === curr.tenant);
    if (!existing) {
      existing = { tenant: curr.tenant, Approved: 0, Pending: 0, Rejected: 0 };
      acc.push(existing);
    }
    existing[curr.status] = (existing[curr.status] || 0) + 1;
    return acc;
  }, []);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-[24px] shadow-apple h-[350px] sm:h-[406px] flex flex-col border border-[#f5f5f7]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold tracking-tight text-apple-text">Status Breakdown by City</h3>
        <p className="text-sm text-apple-textMuted font-medium mt-1">Approved vs Pending vs Rejected</p>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={cityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f7" vertical={false} />
            <XAxis dataKey="tenant" stroke="#86868b" fontSize={12} tickLine={false} axisLine={false} dy={12} />
            <YAxis stroke="#86868b" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
            <Tooltip 
              cursor={{ fill: '#fbfbfd', opacity: 0.6 }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: 'none', borderRadius: '14px', color: '#1d1d1f', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)', padding: '12px 16px' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '13px', color: '#86868b', fontWeight: '500' }} />
            <Bar dataKey="Approved" fill="#34c759" radius={[4, 4, 0, 0]} maxBarSize={16} />
            <Bar dataKey="Pending" fill="#ffcc00" radius={[4, 4, 0, 0]} maxBarSize={16} />
            <Bar dataKey="Rejected" fill="#ff3b30" radius={[4, 4, 0, 0]} maxBarSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusChart;
