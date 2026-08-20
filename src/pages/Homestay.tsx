import { LogIn, LogOut, CalendarDays, Bed } from 'lucide-react';

export default function Homestay() {
  const kamarList = [
    { nama: "Kamar Mawar (Milik P. Budi)", status: "Terisi", tamu: "Keluarga Bapak Andi" },
    { nama: "Kamar Melati (Milik B. Siti)", status: "Tersedia", tamu: "-" },
    { nama: "Rumah Panggung (Milik P. Jono)", status: "Tersedia", tamu: "-" },
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
            Manajemen Homestay
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Daftar kamar warga, kalender, dan check-in/out.</p>
        </div>
        
        {/* Tombol Lihat Kalender */}
        <button className="bg-white/5 border border-white/10 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl flex items-center space-x-2 hover:bg-white/10 hover:border-white/30 transition-all font-bold backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full sm:w-auto justify-center group text-sm md:text-base mt-2 sm:mt-0">
          <CalendarDays size={18} className="text-[#FF9F03] group-hover:scale-110 transition-transform" />
          <span>Kalender Penuh</span>
        </button>
      </div>

      {/* Kontainer Data (Glassmorphism List) */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col">
        
        {/* Header List (Hanya Tampil di Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-5 border-b border-white/10 bg-white/5">
          <div className="col-span-4 text-xs font-bold text-white/50 uppercase tracking-widest">Nama Homestay / Kamar</div>
          <div className="col-span-3 text-xs font-bold text-white/50 uppercase tracking-widest">Status Real-time</div>
          <div className="col-span-3 text-xs font-bold text-white/50 uppercase tracking-widest">Tamu Saat Ini</div>
          <div className="col-span-2 text-xs font-bold text-white/50 uppercase tracking-widest text-right">Aksi</div>
        </div>

        {/* Data List */}
        <div className="flex flex-col divide-y divide-white/10">
          {kamarList.map((kamar, i) => {
            const isTerisi = kamar.status === 'Terisi';
            
            return (
              <div 
                key={i} 
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-4 md:p-5 items-start md:items-center hover:bg-white/5 transition-colors group"
              >
                {/* Kolom 1: Nama Kamar */}
                <div className="md:col-span-4 flex items-center space-x-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#FA4D09]/30 transition-colors">
                    <Bed size={18} className="text-white/60 group-hover:text-[#FF9F03]" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm md:text-base leading-tight group-hover:text-[#FF9F03] transition-colors">{kamar.nama}</p>
                    <p className="text-[10px] text-white/40 md:hidden mt-0.5">Tamu: {kamar.tamu}</p>
                  </div>
                </div>

                {/* Kolom 2: Status */}
                <div className="md:col-span-3 flex items-center mt-2 md:mt-0">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-widest border shadow-inner ${
                    isTerisi 
                      ? 'bg-red-500/10 text-red-400 border-red-500/20 shadow-red-500/10' 
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-emerald-500/10'
                  }`}>
                    {kamar.status}
                  </span>
                </div>

                {/* Kolom 3: Tamu Saat Ini (Hidden di mobile karena sudah digabung di kolom 1) */}
                <div className="hidden md:block md:col-span-3 text-sm text-white/70 font-medium">
                  {kamar.tamu}
                </div>

                {/* Kolom 4: Aksi (Responsive Button) */}
                <div className="md:col-span-2 flex md:justify-end mt-3 md:mt-0 w-full md:w-auto">
                  {kamar.status === 'Tersedia' ? (
                    <button className="w-full md:w-auto flex justify-center items-center text-xs md:text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 md:py-2.5 rounded-lg font-bold hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all">
                      <LogIn size={16} className="mr-1.5" /> Check-in
                    </button>
                  ) : (
                    <button className="w-full md:w-auto flex justify-center items-center text-xs md:text-sm bg-white/5 text-red-400 border border-red-500/30 px-4 py-2 md:py-2.5 rounded-lg font-bold hover:bg-red-500/20 transition-all">
                      <LogOut size={16} className="mr-1.5" /> Check-out
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}