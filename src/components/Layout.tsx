import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import type { UserRole } from '../types';
import { UserCircle, Menu } from 'lucide-react';

interface LayoutProps {
  currentRole: UserRole;
  setRole: (role: UserRole) => void;
}

export default function Layout({ currentRole, setRole }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // Latar belakang cerah (slate-50)
    <div className="flex h-screen w-full bg-slate-50 font-sans overflow-hidden">
      
      {/* Overlay Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-[#011D58]/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        currentRole={currentRole} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden transition-all duration-300 relative z-0">
        
        {/* Aksen Gradasi Lembut di Background Cerah */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FF9F03]/10 via-[#FA4D09]/5 to-transparent blur-[80px] -z-10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#011D58]/5 to-transparent blur-[80px] -z-10 rounded-full pointer-events-none"></div>

        {/* HEADER: Putih bersih dengan sedikit transparansi */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 md:p-5 flex justify-between items-center sticky top-0 z-30 shadow-sm">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-[#011D58] hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            
            <h1 className="text-lg md:text-xl font-bold text-[#011D58] tracking-wide truncate">
              Portal <span className="text-[#FA4D09]">TDMS</span>
            </h1>
          </div>
          
          {/* Simulator Role */}
          <div className="flex items-center space-x-2 md:space-x-3 bg-white border border-slate-200 p-1.5 md:py-2 md:px-4 rounded-full shadow-sm">
            <UserCircle size={22} className="text-[#FA4D09]" />
            <span className="text-sm text-slate-600 font-medium hidden md:block">Login as:</span>
            
            <select 
              value={currentRole} 
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="bg-transparent text-[#011D58] text-xs md:text-sm font-bold cursor-pointer outline-none focus:text-[#FA4D09] transition-colors w-24 md:w-auto"
            >
              <option value="Admin">Admin</option>
              <option value="Kasir">Kasir Loket</option>
              <option value="Pemandu">Pemandu</option>
              <option value="Pengelola">Pengelola</option>
            </select>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar relative z-0">
          <Outlet />
        </main>

      </div>
    </div>
  );
}