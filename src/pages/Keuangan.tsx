import { Wallet, ArrowDownRight, ArrowUpRight, CalendarDays, Receipt } from 'lucide-react';

export default function Keuangan() {
  const transaksi = [
    { tanggal: "20 Aug 2026", deskripsi: "Bagi Hasil Retribusi UMKM", tipe: "masuk", nominal: "Rp 850.000" },
    { tanggal: "18 Aug 2026", deskripsi: "Gaji Pemandu Wisata (Mingguan)", tipe: "keluar", nominal: "Rp 1.200.000" },
    { tanggal: "17 Aug 2026", deskripsi: "Penjualan Tiket Loket (Setoran)", tipe: "masuk", nominal: "Rp 4.500.000" },
    { tanggal: "15 Aug 2026", deskripsi: "Perawatan Fasilitas Homestay", tipe: "keluar", nominal: "Rp 650.000" },
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
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Transparansi Keuangan
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Buku besar arus kas BUMDes dan operasional destinasi.</p>
        </div>
        
        {/* Tombol Unduh Laporan */}
        <button className="bg-white/5 border border-white/10 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl flex items-center space-x-2 hover:bg-white/10 hover:border-white/30 transition-all font-bold backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full sm:w-auto justify-center group text-sm md:text-base mt-2 sm:mt-0">
          <Wallet size={18} className="text-[#FF9F03] group-hover:scale-110 transition-transform" />
          <span>Rekap Bulanan</span>
        </button>
      </div>
      
      {/* 3 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
        
        {/* Card 1: Saldo Kas (Highlight dengan warna Sulo) */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
          <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03]"></div>
          <p className="text-xs md:text-sm font-bold text-white/50 uppercase tracking-widest mb-1 md:mb-2 ml-2 md:ml-3">Saldo Kas BUMDes</p>
          <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FC7A0B] to-[#FF9F03] ml-2 md:ml-3 drop-shadow-md">
            Rp 45.200.000
          </p>
        </div>
        
        {/* Card 2: Pemasukan (Hijau) */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
          <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-emerald-400 to-emerald-600"></div>
          <p className="text-xs md:text-sm font-bold text-white/50 uppercase tracking-widest mb-1 md:mb-2 ml-2 md:ml-3">Pemasukan Bulan Ini</p>
          <p className="text-2xl md:text-3xl font-black text-emerald-400 flex items-center ml-2 md:ml-3 drop-shadow-md">
            <ArrowUpRight size={24} className="mr-1.5 md:mr-2 text-emerald-400/80" /> Rp 18.500.000
          </p>
        </div>
        
        {/* Card 3: Pengeluaran (Merah) */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
          <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-red-400 to-red-600"></div>
          <p className="text-xs md:text-sm font-bold text-white/50 uppercase tracking-widest mb-1 md:mb-2 ml-2 md:ml-3">Pengeluaran Operasional</p>
          <p className="text-2xl md:text-3xl font-black text-red-400 flex items-center ml-2 md:ml-3 drop-shadow-md">
            <ArrowDownRight size={24} className="mr-1.5 md:mr-2 text-red-400/80" /> Rp 4.300.000
          </p>
        </div>
      </div>

      {/* Histori Transaksi (Ubah Tabel Jadi List untuk Mobile) */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col z-10 mt-6">
        
        {/* Header List */}
        <div className="p-4 md:p-5 border-b border-white/10 flex items-center bg-white/5">
          <div className="p-2 bg-gradient-to-br from-[#FA4D09]/20 to-[#FC7A0B]/20 rounded-lg border border-[#FA4D09]/30 mr-3 shadow-inner">
            <Receipt size={18} className="text-[#FF9F03]" />
          </div>
          <h3 className="font-bold text-base md:text-lg text-white">Histori Transaksi Terbaru</h3>
        </div>
        
        {/* Konten List (Responsif) */}
        <div className="flex flex-col divide-y divide-white/10">
          {transaksi.map((trx, i) => (
            <div 
              key={i} 
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 md:p-5 hover:bg-white/5 transition-colors group"
            >
              {/* Info Transaksi (Kiri) */}
              <div className="flex items-start space-x-3 md:space-x-4 mb-3 sm:mb-0">
                <div className="mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                  {trx.tipe === 'masuk' ? (
                    <ArrowUpRight size={20} className="text-emerald-400" />
                  ) : (
                    <ArrowDownRight size={20} className="text-red-400" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base leading-tight group-hover:text-[#FF9F03] transition-colors">
                    {trx.deskripsi}
                  </p>
                  <p className="flex items-center text-[11px] md:text-xs text-white/40 mt-1 md:mt-1.5 font-medium">
                    <CalendarDays size={12} className="mr-1.5" /> {trx.tanggal}
                  </p>
                </div>
              </div>
              
              {/* Nominal Transaksi (Kanan) */}
              <div className="sm:text-right pl-10 sm:pl-0">
                <p className={`font-black text-base md:text-lg ${trx.tipe === 'masuk' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {trx.tipe === 'masuk' ? '+' : '-'} {trx.nominal}
                </p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5 sm:hidden">
                  Status: Berhasil
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tombol Muat Lebih Banyak */}
        <div className="p-3 md:p-4 text-center bg-white/5 border-t border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
          <span className="text-xs md:text-sm font-bold text-[#FF9F03]">Lihat Semua Transaksi</span>
        </div>

      </div>
    </div>
  );
}