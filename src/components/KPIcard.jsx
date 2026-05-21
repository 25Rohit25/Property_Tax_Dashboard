import React from 'react';

const KPICard = ({ title, value, icon: Icon, colorClass }) => {
  return (
    <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between group h-full border border-[#f5f5f7]">
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-[14px] ${colorClass} transition-transform duration-300 group-hover:scale-110`}>
          {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />}
        </div>
      </div>
      <div>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-apple-text mb-1">{value}</p>
        <h3 className="text-apple-textMuted text-sm font-medium tracking-tight">{title}</h3>
      </div>
    </div>
  );
};

export default KPICard;
