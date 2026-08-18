import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import type { UserRole } from '../types';
import { UserCircle } from 'lucide-react';

interface LayoutProps {
  currentRole: UserRole;
  setRole: (role: UserRole) => void;
}

export default function Layout({ currentRole, setRole }: LayoutProps) {
  return (
    <div className="flex bg-slate-50 min-h-screen font-sans">
      <Sidebar currentRole={currentRole} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header / Topbar */}
        <header className="bg-white border-b border-slate-200 p-5 flex justify-between items-center sticky top-0 z-10 shadow-sm">
          <h1 className="text-xl font-bold text-[#072050]">
            Portal Manajemen Destinasi
          </h1>
          
          {/* Simulator Role (Khusus Portofolio) */}
          <div className="flex items-center space-x-3 bg-slate-50 py-2 px-4 rounded-full border border-slate-200 shadow-sm">
            <UserCircle size={22} className="text-[#FD9502]" />
            <span className="text-sm text-slate-600 font-medium hidden md:block">Login as:</span>
            
            <select 
              value={currentRole} 
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="bg-transparent text-[#072050] text-sm font-bold cursor-pointer outline-none focus:text-[#FD9502] transition-colors"
            >
              <option value="Admin">Admin BUMDes</option>
              <option value="Kasir">Petugas Loket</option>
              <option value="Pemandu">Pemandu Wisata</option>
              <option value= "Pengelola">Pengelola</option>
            </select>
          </div>
        </header>

        {/* Konten Halaman Dinamis (Scrollable) */}
        <main className="p-8 overflow-y-auto h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}