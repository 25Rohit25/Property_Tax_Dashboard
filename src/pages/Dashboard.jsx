import React, { useState, useMemo } from 'react';
import { Building2, CheckCircle2, XCircle, IndianRupee } from 'lucide-react';
import Navbar from '../components/Navbar';
import KPICard from '../components/KPIcard';
import CollectionChart from '../components/CollectionChart';
import StatusChart from '../components/StatusChart';
import ChatAssistant from '../components/ChatAssistant';
import propertiesData from '../data/properties.json';

const Dashboard = () => {
  const [selectedTenant, setSelectedTenant] = useState('All Cities');

  const filteredData = useMemo(() => {
    if (selectedTenant === 'All Cities') return propertiesData;
    return propertiesData.filter(p => p.tenant === selectedTenant);
  }, [selectedTenant]);

  const kpis = useMemo(() => {
    return {
      total: filteredData.length,
      approved: filteredData.filter(p => p.status === 'Approved').length,
      rejected: filteredData.filter(p => p.status === 'Rejected').length,
      collection: filteredData.reduce((sum, p) => sum + p.collection_inr, 0)
    };
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-apple-bg text-apple-text font-sans">
      <Navbar selectedTenant={selectedTenant} onTenantChange={setSelectedTenant} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-1000 ease-out">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard 
            title="Total Properties" 
            value={kpis.total.toLocaleString()} 
            icon={Building2} 
            colorClass="text-apple-blue bg-[#f0f4f9]" 
          />
          <KPICard 
            title="Approved" 
            value={kpis.approved.toLocaleString()} 
            icon={CheckCircle2} 
            colorClass="text-[#34c759] bg-[#eefaf1]" 
          />
          <KPICard 
            title="Rejected" 
            value={kpis.rejected.toLocaleString()} 
            icon={XCircle} 
            colorClass="text-[#ff3b30] bg-[#fff0f0]" 
          />
          <KPICard 
            title="Total Collection" 
            value={`₹${(kpis.collection/100000).toFixed(2)}L`} 
            icon={IndianRupee} 
            colorClass="text-[#ff9500] bg-[#fff8eb]" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CollectionChart data={filteredData} />
            <StatusChart data={filteredData} />
          </div>
          <div className="lg:col-span-1">
            <ChatAssistant data={filteredData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
