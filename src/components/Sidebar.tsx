import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Ticket, Map, Home, 
  Tent, Store, CalendarHeart, Wallet, FileText 
} from 'lucide-react';
import type {UserRole, MenuItem } from '../types';
import Logosulo from '../assets/SuloDev.png';

interface SidebarProps {
  currentRole: UserRole;
}

export default function Sidebar({ currentRole }: SidebarProps) {
  const location = useLocation();

  // Mapping 10 Fitur ke dalam Menu
  const menuList: MenuItem[] = [
    { title: 'Dashboard', path: '/', icon: LayoutDashboard, allowedRoles: ['Admin', 'Kasir', 'Pemandu', 'Pengelola'] },
    { title: 'Loket & Gate', path: '/loket', icon: Ticket, allowedRoles: ['Admin', 'Kasir'] },
    { title: 'Paket Wisata', path: '/paket', icon: Map, allowedRoles: ['Admin', 'Pemandu'] },
    { title: 'Homestay', path: '/homestay', icon: Home, allowedRoles: ['Admin', 'Pengelola'] },
    { title: 'Sewa Alat', path: '/alat', icon: Tent, allowedRoles: ['Admin', 'Kasir'] },
    { title: 'Merchant UMKM', path: '/umkm', icon: Store, allowedRoles: ['Admin', 'Pengelola'] },
    { title: 'Event & Seni', path: '/event', icon: CalendarHeart, allowedRoles: ['Admin'] },
    { title: 'Keuangan', path: '/keuangan', icon: Wallet, allowedRoles: ['Admin'] },
    { title: 'Pusat Laporan', path: '/laporan', icon: FileText, allowedRoles: ['Admin'] },
  ];

  const filteredMenu = menuList.filter(menu => menu.allowedRoles.includes(currentRole));

  return (
    <div className="w-64 bg-[#072050] text-white min-h-screen p-4 flex flex-col shadow-xl z-20 relative">
      <div className="mb-8 mt-6 text-center">
        <h2 className="text-3xl font-extrabold text-[#FD9502] tracking-wider">TDMS</h2>
        <p className="text-[10px] text-slate-300 mt-2 uppercase tracking-widest opacity-80">Destination Management</p>
      </div>

      <nav className="flex flex-col space-y-1.5 flex-1 overflow-y-auto pb-4 pr-2 custom-scrollbar">
        {filteredMenu.map((menu) => {
          const Icon = menu.icon;
          const isActive = location.pathname === menu.path;
          return (
            <Link
              key={menu.title}
              to={menu.path}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-[#FD9502] text-white shadow-lg shadow-[#FD9502]/30 font-bold' 
                  : 'hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-[#FD9502]/70'} />
              <span>{menu.title}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-col items-center">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-[#FD9502]/30">
          <img src={Logosulo} alt="Sulo Logo" className="w-full h-full object-contain p-1" />
        </div>
        <div className="text-center">
          <p className="text-[8px] text-slate-400 font-light tracking-[0.2em]">CRAFTED BY</p>
          <p className="text-lg font-black tracking-widest text-[#FD9502] leading-tight">SULO</p>
        </div>
      </div>
    </div>
  );
}