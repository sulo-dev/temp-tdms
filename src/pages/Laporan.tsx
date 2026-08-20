import { FileText, Download, FileSpreadsheet, RefreshCcw } from 'lucide-react';

export default function Laporan() {
  const laporanList = [
    { nama: "Statistik Pengunjung Bulanan", deskripsi: "Data demografi turis lokal & mancanegara, serta tren kunjungan." },
    { nama: "Laporan Keuangan Tahunan", deskripsi: "Neraca rugi laba operasional dan pembagian bagi hasil desa." },
    { nama: "Data Okupansi Akomodasi", deskripsi: "Tingkat keterisian seluruh homestay lokal dan rata-rata menginap." },
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
            Pusat Laporan & Export
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Generate laporan otomatis untuk Dinas Pariwisata dan arsip BUMDes.</p>
        </div>
        
        {/* Tombol Sinkronisasi Data */}
        <button className="bg-white/5 border border-white/10 text-white/80 px-4 md:px-5 py-2 md:py-2.5 rounded-xl flex items-center space-x-2 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all font-bold backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full sm:w-auto justify-center group text-sm md:text-base mt-2 sm:mt-0">
          <RefreshCcw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
          <span>Sinkronisasi Data Terkini</span>
        </button>
      </div>

      {/* List Laporan */}
      <div className="grid grid-cols-1 gap-4 md:gap-5 relative z-10">
        {laporanList.map((lap, i) => (
          <div 
            key={i} 
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col md:flex-row md:justify-between md:items-center relative overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Garis Gradasi atas kartu */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Info Laporan (Kiri) */}
            <div className="flex items-start md:items-center space-x-4 mb-5 md:mb-0">
              <div className="p-3 bg-gradient-to-br from-[#FA4D09]/10 to-[#FC7A0B]/10 rounded-xl border border-white/5 group-hover:border-[#FA4D09]/30 transition-colors shadow-inner flex-shrink-0">
                <FileText size={24} className="text-[#FF9F03]" />
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-[#FF9F03] transition-colors leading-tight mb-1">
                  {lap.nama}
                </h3>
                <p className="text-xs md:text-sm text-white/50 max-w-lg">
                  {lap.deskripsi}
                </p>
              </div>
            </div>
            
            {/* Tombol Download (Kanan) - Responsif di HP (Sejajar Kiri-Kanan 50:50) */}
            <div className="flex flex-row space-x-3 w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
              {/* Tombol PDF (Red Glowing) */}
              <button className="flex-1 md:flex-none flex justify-center items-center px-4 py-2.5 md:py-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 hover:text-red-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all font-bold text-xs md:text-sm group/btn">
                <Download size={16} className="mr-2 group-hover/btn:-translate-y-0.5 transition-transform" /> PDF
              </button>
              
              {/* Tombol Excel (Green Glowing) */}
              <button className="flex-1 md:flex-none flex justify-center items-center px-4 py-2.5 md:py-2.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all font-bold text-xs md:text-sm group/btn">
                <FileSpreadsheet size={16} className="mr-2 group-hover/btn:-translate-y-0.5 transition-transform" /> Excel
              </button>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}