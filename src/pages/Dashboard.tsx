import { Users, Wallet, Home, PieChart } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#072050]">Executive Overview</h2>
        <p className="text-slate-500 mt-1">Ringkasan performa wisata hari ini.</p>
      </div>
      
      {/* 3 Kartu Statistik Utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kunjungan */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#FD9502]"></div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-slate-500 font-bold">Total Pengunjung</h3>
            <Users size={20} className="text-[#FD9502]" />
          </div>
          <p className="text-3xl font-black text-[#072050]">1,450 <span className="text-sm font-normal text-slate-400">orang</span></p>
          <div className="mt-4 flex space-x-4 text-sm">
            <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>Lokal: 1,200</div>
            <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FD9502] mr-2"></span>Manca: 250</div>
          </div>
        </div>

        {/* Pendapatan */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#FD9502]"></div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-slate-500 font-bold">Pendapatan Harian</h3>
            <Wallet size={20} className="text-[#FD9502]" />
          </div>
          <p className="text-3xl font-black text-[#072050]">Rp 24.5M</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
            <p>Tiket: Rp 12M</p>
            <p>Parkir: Rp 2.5M</p>
            <p>Paket: Rp 8M</p>
            <p>Alat: Rp 2M</p>
          </div>
        </div>

        {/* Okupansi */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#FD9502]"></div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-slate-500 font-bold">Okupansi Homestay</h3>
            <Home size={20} className="text-[#FD9502]" />
          </div>
          <p className="text-3xl font-black text-[#072050]">85%</p>
          <div className="w-full bg-slate-100 rounded-full h-2.5 mt-4">
            <div className="bg-[#FD9502] h-2.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">17 dari 20 Kamar terisi hari ini</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[300px] flex flex-col items-center justify-center">
        <PieChart size={48} className="text-slate-200 mb-4" />
        <h3 className="text-lg font-bold text-[#072050]">Grafik Tren Kunjungan & Peak Season</h3>
        <p className="text-slate-400 text-sm mt-2">Mockup Area Grafik (Recharts/Chart.js)</p>
      </div>
    </div>
  );
}