import { MapPin, Calendar, UserCheck, Plus } from 'lucide-react';

export default function PaketWisata() {
  const paketList = [
    { nama: "Susur Sungai Rammang-Rammang", harga: "250.000", kuota: "12/20", status: "Tersedia" },
    { nama: "Tracking Cultural Toraja", harga: "450.000", kuota: "15/15", status: "Penuh" },
    { nama: "Live-in Desa Wisata", harga: "850.000", kuota: "4/10", status: "Tersedia" },
  ];

  return (
    // Membungkus halaman persis seperti Dashboard dan Ticketing
    <div 
      className="relative animate-fade-in space-y-4 md:space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-0"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#011D58' }}
    >
      {/* EFEK GLASSMORPHISM: Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[50%] bg-[#FA4D09] opacity-20 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[50%] bg-[#FF9F03] opacity-20 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>

      {/* Header Halaman (Responsif flex-col di mobile) */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Local Experience & Paket
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Manajemen katalog wisata, kuota, dan pemandu.</p>
        </div>
        
        {/* Tombol Buat Paket (Full width di Mobile) */}
        <button className="bg-gradient-to-r from-[#FA4D09] to-[#FC7A0B] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-bold flex items-center space-x-2 shadow-[0_4px_20px_rgba(250,77,9,0.3)] hover:shadow-[0_4px_25px_rgba(250,77,9,0.5)] transition-all w-full sm:w-auto justify-center text-sm md:text-base mt-2 sm:mt-0 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          <span>Buat Paket Baru</span>
        </button>
      </div>

      {/* Area Konten Utama Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10">
        
        {/* KOLOM KIRI: Katalog Paket Wisata (Glass Cards) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 md:gap-6">
          {paketList.map((paket, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Garis Gradasi atas kartu */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-3 md:mb-4">
                {/* Ikon MapPin */}
                <div className="p-1.5 md:p-2 bg-gradient-to-br from-[#FA4D09]/10 to-[#FC7A0B]/10 rounded-lg border border-white/5 group-hover:border-[#FA4D09]/30 transition-colors shadow-inner">
                  <MapPin className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/40 group-hover:text-[#FF9F03] transition-colors" />
                </div>
                
                {/* Badge Status (Merah Glowing jika Penuh, Hijau Glowing jika Tersedia) */}
                <span className={`px-2.5 py-1 md:py-1.5 rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-widest border shadow-inner ${
                  paket.status === 'Penuh' 
                    ? 'bg-red-500/10 text-red-400 border-red-500/20 shadow-red-500/10' 
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-emerald-500/10'
                }`}>
                  {paket.status}
                </span>
              </div>
              
              <h3 className="font-bold text-lg md:text-xl text-white mb-2 group-hover:text-[#FF9F03] transition-colors leading-tight flex-1">
                {paket.nama}
              </h3>
              
              <p className="font-black text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FC7A0B] to-[#FF9F03] mb-4 md:mb-6">
                Rp {paket.harga}
              </p>
              
              <div className="flex justify-between items-center text-xs md:text-sm border-t border-white/10 pt-3 md:pt-4 text-white/50 mt-auto">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1.5"/> Kuota Hari Ini:
                </span>
                <span className="font-bold text-white/80">{paket.kuota} org</span>
              </div>
            </div>
          ))}
        </div>

        {/* KOLOM KANAN: Panel Penugasan Pemandu */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] h-fit relative overflow-hidden flex flex-col mt-2 lg:mt-0">
          
          {/* Header Panel */}
          <div className="flex items-center space-x-3 border-b border-white/10 pb-4 md:pb-5 mb-4 md:mb-5 relative z-10">
            <div className="p-2 md:p-2.5 bg-gradient-to-br from-[#FA4D09]/20 to-[#FC7A0B]/20 rounded-xl border border-[#FA4D09]/30 shadow-[0_0_15px_rgba(250,77,9,0.3)]">
              <UserCheck size={18} className="text-[#FF9F03] md:w-5 md:h-5" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-white">Penugasan Pemandu</h3>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            
            {/* Mockup Item Penugasan 1 */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-[10px] md:text-xs text-[#FF9F03] font-bold mb-1 tracking-wider uppercase">Pukul 10:00 WITA</p>
              <p className="font-semibold text-sm md:text-base text-white mb-3">Grup Turis Belanda (8 org)</p>
              
              {/* Form Input Responsif: Kiri-Kanan di Tablet/PC, Atas-Bawah di HP */}
              <div className="flex flex-col sm:flex-row gap-2">
                <select className="bg-[#011D58] border border-white/20 text-white/90 text-xs p-2.5 rounded-lg w-full outline-none focus:border-[#FA4D09] transition-colors [&>option]:bg-[#011D58]">
                  <option>Pilih Pemandu...</option>
                  <option>Budi (Tersedia)</option>
                  <option>Siti (Tersedia)</option>
                </select>
                <button className="bg-gradient-to-r from-[#FA4D09] to-[#FC7A0B] text-white px-4 py-2.5 rounded-lg font-bold text-xs sm:w-auto w-full hover:shadow-[0_0_15px_rgba(250,77,9,0.4)] transition-all">
                  Tugaskan
                </button>
              </div>
            </div>

            {/* Mockup Item Penugasan 2 */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors opacity-80">
              <p className="text-[10px] md:text-xs text-white/50 font-bold mb-1 tracking-wider uppercase">Pukul 13:00 WITA</p>
              <p className="font-semibold text-sm md:text-base text-white/80 mb-3">Kunjungan Sekolah (20 org)</p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <select className="bg-[#011D58] border border-white/20 text-white/90 text-xs p-2.5 rounded-lg w-full outline-none focus:border-[#FA4D09] transition-colors [&>option]:bg-[#011D58]">
                  <option>Pilih Pemandu...</option>
                  <option>Ahmad (Tersedia)</option>
                  <option>Jono (Sibuk)</option>
                </select>
                <button className="bg-gradient-to-r from-[#FA4D09] to-[#FC7A0B] text-white px-4 py-2.5 rounded-lg font-bold text-xs sm:w-auto w-full hover:shadow-[0_0_15px_rgba(250,77,9,0.4)] transition-all">
                  Tugaskan
                </button>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}