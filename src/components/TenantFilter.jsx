import React from 'react';
import { ChevronDown } from 'lucide-react';

const CITIES = [
  'All Cities', 'Delhi', 'Mumbai', 'Pune', 'Bengaluru', 'Chennai', 
  'Hyderabad', 'Ahmedabad', 'Kolkata', 'Jaipur', 'Lucknow'
];

const TenantFilter = ({ selectedTenant, onChange }) => {
  return (
    <div className="relative group w-full sm:w-auto">
      <select
        id="tenant-filter"
        value={selectedTenant}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-[#e8e8ed] hover:bg-[#e1e1e6] text-apple-text text-sm font-medium py-2 pl-4 pr-10 rounded-full cursor-pointer outline-none transition-colors w-full sm:w-40"
      >
        {CITIES.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-apple-textMuted group-hover:text-apple-text transition-colors">
        <ChevronDown size={16} strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default TenantFilter;
