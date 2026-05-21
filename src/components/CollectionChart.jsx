import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

const CollectionChart = ({ data }) => {
  const cityData = data.reduce((acc, curr) => {
    const existing = acc.find(item => item.tenant === curr.tenant);
    if (existing) {
      existing.collection += curr.collection_inr;
    } else {
      acc.push({ tenant: curr.tenant, collection: curr.collection_inr });
    }
    return acc;
  }, []);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-[24px] shadow-apple h-[350px] sm:h-[400px] flex flex-col border border-[#f5f5f7]">
      <div className="mb-8">
        <h3 className="text-lg font-semibold tracking-tight text-apple-text">Total Collection by City</h3>
        <p className="text-sm text-apple-textMuted font-medium mt-1">Revenue across all regions</p>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={cityData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f7" vertical={false} />
            <XAxis dataKey="tenant" stroke="#86868b" fontSize={12} tickLine={false} axisLine={false} dy={12} />
            <YAxis stroke="#86868b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val/1000}k`} dx={-10} />
            <Tooltip 
              cursor={{ fill: '#fbfbfd', opacity: 0.6 }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: 'none', borderRadius: '14px', color: '#1d1d1f', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)', padding: '12px 16px' }}
              formatter={(value) => [`₹${value.toLocaleString()}`, 'Collection']}
            />
            <Bar dataKey="collection" radius={[6, 6, 6, 6]} maxBarSize={32}>
              {cityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#0071e3" fillOpacity={0.9} className="hover:fill-opacity-100 transition-all duration-300" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CollectionChart;
