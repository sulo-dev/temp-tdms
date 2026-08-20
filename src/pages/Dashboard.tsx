import { Users, Wallet, Home, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  // Data rekaan untuk tren kunjungan wisata 12 Bulan
  const dataTrenKunjungan = [
    { bulan: 'Jan', lokal: 2500, mancanegara: 300 },
    { bulan: 'Feb', lokal: 2200, mancanegara: 250 },
    { bulan: 'Mar', lokal: 2800, mancanegara: 400 },
    { bulan: 'Apr', lokal: 3100, mancanegara: 550 },
    { bulan: 'Mei', lokal: 3500, mancanegara: 600 },
    { bulan: 'Jun', lokal: 5800, mancanegara: 1200 },
    { bulan: 'Jul', lokal: 6200, mancanegara: 1500 },
    { bulan: 'Ags', lokal: 4100, mancanegara: 900 },
    { bulan: 'Sep', lokal: 3200, mancanegara: 450 },
    { bulan: 'Okt', lokal: 3400, mancanegara: 500 },
    { bulan: 'Nov', lokal: 3800, mancanegara: 650 },
    { bulan: 'Des', lokal: 7500, mancanegara: 2100 },
  ];

  return (
    // OPTIMASI: p-4 untuk mobile, p-8 untuk desktop, pembulatan lebih kecil di mobile
    <div 
      className="relative animate-fade-in space-y-4 md:space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-0"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#011D58' }}
    >
      {/* EFEK GLASSMORPHISM: Ambient Glowing Orbs */}
      <div className="absolute top-[-15%] left-[-10%] w-[60%] md:w-[50%] h-[50%] bg-[#FA4D09] opacity-30 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[60%] md:w-[50%] h-[50%] bg-[#FF9F03] opacity-20 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative z-10">
        {/* OPTIMASI: Ukuran teks disesuaikan untuk layar kecil */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
          Executive Overview
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-1 font-medium">Ringkasan performa wisata hari ini.</p>
      </div>
      
      {/* 3 Kartu Statistik Utama (Glassmorphism Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
        
        {/* Kunjungan Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03]"></div>
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white/70 font-semibold tracking-wide text-xs md:text-sm uppercase">Total Pengunjung</h3>
            <div className="p-2 bg-gradient-to-br from-[#FA4D09]/20 to-[#FC7A0B]/20 rounded-xl border border-[#FA4D09]/30 shadow-[0_0_15px_rgba(250,77,9,0.3)] group-hover:scale-110 transition-transform">
              <Users size={18} className="text-[#FF9F03] md:w-5 md:h-5" />
            </div>
          </div>
          <p className="text-3xl md:text-4xl font-black text-white drop-shadow-md mt-2">
            1,450 <span className="text-xs md:text-sm font-medium text-white/50">orang</span>
          </p>
          <div className="mt-4 md:mt-5 flex space-x-4 md:space-x-5 text-xs md:text-sm font-semibold">
            <div className="flex items-center text-white/80"><span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FC7A0B] mr-1.5 md:mr-2 shadow-[0_0_8px_#FC7A0B]"></span>Lokal: 1,200</div>
            <div className="flex items-center text-white/80"><span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF9F03] mr-1.5 md:mr-2 shadow-[0_0_8px_#FF9F03]"></span>Manca: 250</div>
          </div>
        </div>

        {/* Pendapatan Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03]"></div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white/70 font-semibold tracking-wide text-xs md:text-sm uppercase">Pendapatan Harian</h3>
            <div className="p-2 bg-gradient-to-br from-[#FA4D09]/20 to-[#FC7A0B]/20 rounded-xl border border-[#FA4D09]/30 shadow-[0_0_15px_rgba(250,77,9,0.3)] group-hover:scale-110 transition-transform">
              <Wallet size={18} className="text-[#FF9F03] md:w-5 md:h-5" />
            </div>
          </div>
          <p className="text-3xl md:text-4xl font-black text-white drop-shadow-md mt-2">Rp 24.5<span className="text-xl md:text-2xl text-[#FC7A0B]">M</span></p>
          <div className="mt-4 md:mt-5 grid grid-cols-2 gap-2 md:gap-3 text-[11px] md:text-xs text-white/70 font-medium">
            <p className="flex items-center"><span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/40 mr-1.5 md:mr-2"></span>Tiket: Rp 12M</p>
            <p className="flex items-center"><span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/40 mr-1.5 md:mr-2"></span>Parkir: Rp 2.5M</p>
            <p className="flex items-center"><span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/40 mr-1.5 md:mr-2"></span>Paket: Rp 8M</p>
            <p className="flex items-center"><span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/40 mr-1.5 md:mr-2"></span>Alat: Rp 2M</p>
          </div>
        </div>

        {/* Okupansi Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03]"></div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white/70 font-semibold tracking-wide text-xs md:text-sm uppercase">Okupansi Homestay</h3>
            <div className="p-2 bg-gradient-to-br from-[#FA4D09]/20 to-[#FC7A0B]/20 rounded-xl border border-[#FA4D09]/30 shadow-[0_0_15px_rgba(250,77,9,0.3)] group-hover:scale-110 transition-transform">
              <Home size={18} className="text-[#FF9F03] md:w-5 md:h-5" />
            </div>
          </div>
          <p className="text-3xl md:text-4xl font-black text-white drop-shadow-md mt-2">85%</p>
          <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2 mt-4 md:mt-5 overflow-hidden backdrop-blur-sm shadow-inner">
            <div className="bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] h-full rounded-full relative" style={{ width: '85%' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-white/30 blur-[1px]"></div>
            </div>
          </div>
          <p className="text-[11px] md:text-xs text-white/60 mt-2.5 md:mt-3 font-medium">17 dari 20 Kamar terisi hari ini</p>
        </div>
      </div>

      {/* Chart Futuristik Area */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative z-10 mt-6">
        
        {/* OPTIMASI: Flex diubah jadi flex-col pada mobile agar elemen tidak saling bertabrakan */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center">
              <Activity className="text-[#FC7A0B] mr-2" size={20} />
              Grafik Tren Kunjungan
            </h3>
            <p className="text-xs md:text-sm text-white/50 mt-1">Statistik interaktif tahun berjalan</p>
          </div>
          <div className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md self-start sm:self-auto">
            <span className="text-[10px] md:text-xs font-bold text-[#FF9F03]">LIVE DATA</span>
          </div>
        </div>
        
        {/* OPTIMASI: Tinggi disesuaikan. Lebih pendek di HP agar pas di layar */}
        <div className="h-[250px] sm:h-[300px] md:h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataTrenKunjungan} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="glowLokal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FC7A0B" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#FC7A0B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="glowManca" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF9F03" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#FF9F03" stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              {/* Ukuran font axis diperkecil di mobile */}
              <XAxis dataKey="bulan" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 10}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 10}} dx={-5} />
              
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(1, 29, 88, 0.85)', 
                  backdropFilter: 'blur(16px)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px', 
                  color: '#fff',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  fontSize: '12px'
                }}
                itemStyle={{ fontWeight: 'bold' }}
              />
              
              <Area 
                type="monotone" 
                name="Wisatawan Lokal" 
                dataKey="lokal" 
                stroke="#FC7A0B" 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#glowLokal)" 
                activeDot={{ r: 5, fill: '#FC7A0B', stroke: '#011D58', strokeWidth: 2, className: "drop-shadow-[0_0_8px_#FC7A0B]" }}
              />
              <Area 
                type="monotone" 
                name="Wisatawan Mancanegara" 
                dataKey="mancanegara" 
                stroke="#FF9F03" 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#glowManca)" 
                activeDot={{ r: 5, fill: '#FF9F03', stroke: '#011D58', strokeWidth: 2, className: "drop-shadow-[0_0_8px_#FF9F03]" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}