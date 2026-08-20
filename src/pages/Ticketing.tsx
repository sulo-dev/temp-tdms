import { tiketData } from '../data/mockData';
import { Printer, ShoppingCart, Ticket, Plus } from 'lucide-react';

export default function Ticketing() {
  return (
    // OPTIMASI: p-4 untuk mobile, p-8 untuk desktop, rounded-2xl untuk mobile
    <div 
      className="relative animate-fade-in space-y-4 md:space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-0"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#011D58' }}
    >
      {/* EFEK GLASSMORPHISM: Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[50%] bg-[#FA4D09] opacity-20 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[50%] bg-[#FF9F03] opacity-20 blur-[100px] md:blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>

      {/* Header Halaman */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-2">
        <div>
          {/* OPTIMASI: Ukuran font judul disesuaikan */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            POS Loket Tiket
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Manajemen e-ticketing dan retribusi destinasi.</p>
        </div>
        
        {/* Tombol Cetak (Full width di Mobile) */}
        <button className="bg-white/5 border border-white/10 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl flex items-center space-x-2 hover:bg-white/10 hover:border-white/30 transition-all font-bold backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full sm:w-auto justify-center group text-sm md:text-base mt-2 sm:mt-0">
          <Printer size={18} className="text-[#FF9F03] group-hover:scale-110 transition-transform" />
          <span>Cetak Laporan</span>
        </button>
      </div>

      {/* OPTIMASI: Gap disesuaikan antar kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10">
        
        {/* KOLOM KIRI: Daftar Tiket */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 md:gap-6">
          {tiketData.map((tiket) => (
            <div 
              key={tiket.id} 
              // OPTIMASI: Padding kartu tiket disesuaikan p-4/p-5/p-6
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <p className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-widest font-bold px-2.5 py-1 md:py-1.5 bg-white/5 rounded-md border border-white/10">
                  {tiket.kategori}
                </p>
                <div className="p-1.5 md:p-2 bg-gradient-to-br from-[#FA4D09]/10 to-[#FC7A0B]/10 rounded-lg border border-white/5 group-hover:border-[#FA4D09]/30 transition-colors shadow-inner">
                  <Ticket className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/40 group-hover:text-[#FF9F03] transition-colors" />
                </div>
              </div>
              
              <h3 className="font-bold text-lg md:text-xl text-white mb-4 md:mb-6 group-hover:text-[#FF9F03] transition-colors leading-tight flex-1">
                {tiket.nama}
              </h3>
              
              <div className="flex justify-between items-end mt-auto pt-2">
                {/* OPTIMASI: Teks harga disesuaikan untuk HP */}
                <p className="font-black text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Rp {tiket.harga.toLocaleString('id-ID')}
                </p>
                <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FA4D09] hover:text-white transition-colors border border-white/20 flex-shrink-0 ml-2">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* KOLOM KANAN: Keranjang Belanja */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] h-fit relative overflow-hidden flex flex-col mt-2 lg:mt-0">
          
          <div className="flex items-center space-x-3 border-b border-white/10 pb-4 md:pb-5 mb-4 md:mb-5 relative z-10">
            <div className="p-2 md:p-2.5 bg-gradient-to-br from-[#FA4D09]/20 to-[#FC7A0B]/20 rounded-xl border border-[#FA4D09]/30 shadow-[0_0_15px_rgba(250,77,9,0.3)]">
              <ShoppingCart size={18} className="text-[#FF9F03] md:w-5 md:h-5" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-white">Ringkasan Pesanan</h3>
          </div>
          
          {/* State Kosong (Belum ada tiket) */}
          <div className="py-10 md:py-16 flex flex-col items-center text-center opacity-60 relative z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center mb-3 md:mb-4 border border-white/10 shadow-inner">
              <Ticket className="w-8 h-8 md:w-10 md:h-10 text-white/50" />
            </div>
            <p className="text-xs md:text-sm font-bold text-white">Belum ada tiket dipilih</p>
            <p className="text-[10px] md:text-xs text-white/50 mt-1.5 md:mt-2 max-w-[180px] md:max-w-[200px]">Silakan pilih tiket di sebelah kiri untuk menambah ke keranjang.</p>
          </div>
          
          {/* Footer Checkout */}
          <div className="border-t border-white/10 pt-5 md:pt-6 mt-auto relative z-10">
            <div className="flex justify-between items-end mb-5 md:mb-6">
              <span className="text-white/60 font-semibold text-xs md:text-sm mb-1">Total Tagihan:</span>
              {/* OPTIMASI: Ukuran teks total tagihan */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC7A0B] to-[#FF9F03] text-3xl md:text-4xl font-black leading-none drop-shadow-md">
                Rp 0
              </span>
            </div>
            
            {/* Tombol Checkout Sulo */}
            <button className="w-full relative group overflow-hidden rounded-xl font-bold text-base md:text-lg py-3 md:py-4 shadow-[0_0_20px_rgba(250,77,9,0.2)] hover:shadow-[0_0_30px_rgba(250,77,9,0.4)] transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] transition-transform duration-500 group-hover:scale-105"></div>
              <span className="relative z-10 text-white drop-shadow-md flex justify-center items-center">
                Proses Pembayaran
              </span>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}