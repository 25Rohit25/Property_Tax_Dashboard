import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import TenantFilter from './TenantFilter';

const Navbar = ({ selectedTenant, onTenantChange }) => {
  return (
    <nav className="bg-[rgba(251,251,253,0.8)] backdrop-blur-2xl border-b border-[#e5e5ea] sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-0 sm:h-[70px] gap-3 sm:gap-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center space-x-2.5">
              <div className="bg-apple-blue p-2 rounded-[10px] shadow-sm">
                <LayoutDashboard size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-apple-text font-semibold text-[17px] tracking-tight leading-none">UPYOG Analytics</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-auto">
            <TenantFilter selectedTenant={selectedTenant} onChange={onTenantChange} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
