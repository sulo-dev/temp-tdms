import { Tent, Plus, Wrench } from 'lucide-react';

export default function SewaAlat() {
  const alatList = [
    { nama: "Pelampung (Life Jacket)", total: 50, disewa: 15, rusak: 2 },
    { nama: "Perahu Katinting", total: 10, disewa: 8, rusak: 0 },
    { nama: "Tenda Dome (Kapasitas 4)", total: 15, disewa: 5, rusak: 1 },
    { nama: "Alat Snorkeling", total: 30, disewa: 20, rusak: 5 },
  ];

  return (
    <div 
      className="relative animate-fade-in space-y-4 md:space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-0"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#011D58' }}
    >
      {/* EFEK GLASSMORPHISM: Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[50%] bg-[#FA4D09] opacity-20 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[50%] bg-[#FF9F03] opacity-20 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>

      {/* Header Halaman */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Inventory Sewa Alat
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Manajemen stok perlengkapan wisata dan perawatan.</p>
        </div>
        
        {/* Tombol Tambah Alat */}
        <button className="bg-gradient-to-r from-[#FA4D09] to-[#FC7A0B] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-bold flex items-center space-x-2 shadow-[0_4px_20px_rgba(250,77,9,0.3)] hover:shadow-[0_4px_25px_rgba(250,77,9,0.5)] transition-all w-full sm:w-auto justify-center text-sm md:text-base mt-2 sm:mt-0 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          <span>Tambah Alat</span>
        </button>
      </div>

      {/* Kontainer Data (Glassmorphism List) */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col">
        
        {/* Header List (Hanya Tampil di Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-5 border-b border-white/10 bg-white/5">
          <div className="col-span-4 text-xs font-bold text-white/50 uppercase tracking-widest">Nama Perlengkapan</div>
          <div className="col-span-1 text-xs font-bold text-white/50 uppercase tracking-widest text-center">Total</div>
          <div className="col-span-2 text-xs font-bold text-white/50 uppercase tracking-widest text-center">Tersedia</div>
          <div className="col-span-2 text-xs font-bold text-white/50 uppercase tracking-widest text-center">Disewa</div>
          <div className="col-span-1 text-xs font-bold text-white/50 uppercase tracking-widest text-center">Rusak</div>
          <div className="col-span-2 text-xs font-bold text-white/50 uppercase tracking-widest text-right">Aksi</div>
        </div>

        {/* Data List */}
        <div className="flex flex-col divide-y divide-white/10">
          {alatList.map((alat, i) => {
            const tersedia = alat.total - alat.disewa - alat.rusak;
            
            return (
              <div 
                key={i} 
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 md:p-5 items-start md:items-center hover:bg-white/5 transition-colors group"
              >
                {/* Kolom 1: Nama Alat (Selalu tampil di atas pada mobile) */}
                <div className="md:col-span-4 flex items-center space-x-3 mb-2 md:mb-0">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#FA4D09]/30 transition-colors">
                    <Tent size={18} className="text-white/60 group-hover:text-[#FF9F03]" />
                  </div>
                  <p className="font-bold text-white text-sm md:text-base leading-tight group-hover:text-[#FF9F03] transition-colors">
                    {alat.nama}
                  </p>
                </div>

                {/* --- STATISTIK MOBILE (Grid 2x2, hanya tampil di HP) --- */}
                <div className="grid grid-cols-4 gap-2 md:hidden w-full mb-3">
                  <div className="bg-white/5 p-2 rounded-lg text-center border border-white/5">
                    <p className="text-[9px] text-white/50 uppercase tracking-wider mb-1">Total</p>
                    <p className="font-bold text-white">{alat.total}</p>
                  </div>
                  <div className="bg-emerald-500/10 p-2 rounded-lg text-center border border-emerald-500/20">
                    <p className="text-[9px] text-emerald-400/70 uppercase tracking-wider mb-1">Sedia</p>
                    <p className="font-bold text-emerald-400">{tersedia}</p>
                  </div>
                  <div className="bg-[#FC7A0B]/10 p-2 rounded-lg text-center border border-[#FC7A0B]/20">
                    <p className="text-[9px] text-[#FC7A0B]/70 uppercase tracking-wider mb-1">Sewa</p>
                    <p className="font-bold text-[#FC7A0B]">{alat.disewa}</p>
                  </div>
                  <div className="bg-red-500/10 p-2 rounded-lg text-center border border-red-500/20">
                    <p className="text-[9px] text-red-400/70 uppercase tracking-wider mb-1">Rusak</p>
                    <p className="font-bold text-red-400">{alat.rusak}</p>
                  </div>
                </div>

                {/* --- STATISTIK DESKTOP (Hanya tampil di PC/Tablet) --- */}
                <div className="hidden md:block md:col-span-1 text-center font-bold text-white">
                  {alat.total}
                </div>
                <div className="hidden md:flex md:col-span-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md text-sm font-bold shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                    {tersedia}
                  </span>
                </div>
                <div className="hidden md:flex md:col-span-2 justify-center">
                  <span className="px-3 py-1 bg-[#FC7A0B]/10 text-[#FF9F03] border border-[#FC7A0B]/20 rounded-md text-sm font-bold shadow-[0_0_10px_rgba(252,122,11,0.1)]">
                    {alat.disewa}
                  </span>
                </div>
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <span className={`px-3 py-1 rounded-md text-sm font-bold ${alat.rusak > 0 ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'text-white/30'}`}>
                    {alat.rusak}
                  </span>
                </div>

                {/* Kolom Aksi (Tombol Responsif) */}
                <div className="md:col-span-2 flex justify-end w-full md:w-auto">
                  <button className="w-full md:w-auto flex justify-center items-center text-xs md:text-sm bg-white/5 text-white/80 border border-white/20 px-3 py-2 md:py-2 rounded-lg font-bold hover:bg-white/10 hover:text-white transition-all group/btn">
                    <Wrench size={14} className="mr-1.5 text-white/50 group-hover/btn:text-[#FF9F03] transition-colors" /> 
                    Update
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}