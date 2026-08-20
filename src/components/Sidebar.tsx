import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Ticket, Map, Home, 
  Tent, Store, CalendarHeart, Wallet, FileText, X 
} from 'lucide-react';
import type { UserRole, MenuItem } from '../types';
import Logosulo from '../assets/SuloDev.png';

interface SidebarProps {
  currentRole: UserRole;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function Sidebar({ currentRole, isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();

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
    // DIKEMBALIKAN KE WARNA #011D58 (Biru Gelap Sulo)
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-[#011D58] text-white min-h-screen p-4 flex flex-col z-50 shadow-2xl lg:shadow-[4px_0_24px_rgba(0,0,0,0.1)]`}>
      
      {/* Tombol Silang untuk Mobile disesuaikan ke warna terang */}
      <button 
        onClick={() => setIsOpen(false)}
        className="lg:hidden absolute top-4 right-4 text-white/50 hover:text-white p-1 rounded-md hover:bg-white/10"
      >
        <X size={24} />
      </button>

      <div className="mb-8 mt-4 text-center">
        {/* Logo TDMS dengan full gradasi Sulo */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] tracking-wider">
          TDMS
        </h2>
        <p className="text-[10px] text-white/50 mt-1 uppercase tracking-widest font-semibold">Smart Tourism</p>
      </div>

      <nav className="flex flex-col space-y-1.5 flex-1 overflow-y-auto pb-4 pr-2 custom-scrollbar">
        {filteredMenu.map((menu) => {
          const Icon = menu.icon;
          const isActive = location.pathname === menu.path;
          return (
            <Link
              key={menu.title}
              to={menu.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-[#FA4D09] to-[#FC7A0B] text-white shadow-lg shadow-[#FA4D09]/30 font-bold' 
                  : 'hover:bg-white/10 text-white/70 hover:text-white font-medium text-sm'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-white/50'} />
              <span>{menu.title}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-col items-center">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-[#FA4D09]/30 shadow-sm">
          {/* Logo SuloDev */}
          <img src={Logosulo} alt="Sulo Logo" className="w-full h-full object-contain p-1.5" />
        </div>
        <div className="text-center">
          <p className="text-[8px] text-white/40 font-bold tracking-[0.2em]">CRAFTED BY</p>
          <p className="text-lg font-black tracking-widest text-[#FF9F03] leading-tight">SULO</p>
        </div>
      </div>
    </div>
  );
}