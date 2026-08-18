import { tiketData } from '../data/mockData';
import { Printer, ShoppingCart, Ticket } from 'lucide-react';

export default function Ticketing() {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#072050]">POS Loket Tiket</h2>
          <p className="text-slate-500 mt-2">Manajemen e-ticketing dan retribusi.</p>
        </div>
        <button className="bg-white border-2 border-[#072050] text-[#072050] px-5 py-2.5 rounded-xl flex items-center space-x-2 hover:bg-[#072050] hover:text-white transition-colors font-bold">
          <Printer size={18} />
          <span>Cetak Laporan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Daftar Tiket (Kiri) */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {tiketData.map((tiket) => (
            <div 
              key={tiket.id} 
              className="bg-white p-5 rounded-2xl shadow-sm border-2 border-slate-100 cursor-pointer hover:border-[#FD9502] hover:shadow-md transition-all group"
            >
              <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">{tiket.kategori}</p>
              <h3 className="font-bold text-xl text-[#072050] mb-4 group-hover:text-[#FD9502] transition-colors">{tiket.nama}</h3>
              <p className="text-[#072050] font-black text-lg">Rp {tiket.harga.toLocaleString('id-ID')}</p>
            </div>
          ))}
        </div>

        {/* Kolom Keranjang Belanja (Kanan) */}
        <div className="bg-[#072050] p-6 rounded-2xl shadow-xl h-fit text-white relative overflow-hidden">
          {/* Aksen bulatan dekoratif */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

          <div className="flex items-center space-x-3 border-b border-white/20 pb-4 mb-4">
            <ShoppingCart className="text-[#FD9502]" />
            <h3 className="font-bold text-xl">Ringkasan Pesanan</h3>
          </div>
          
          <div className="py-12 flex flex-col items-center text-center opacity-60">
            <Ticket className="w-12 h-12 mb-3 text-white/30" />
            <p className="text-sm">Belum ada tiket yang dipilih</p>
          </div>
          
          <div className="border-t border-white/20 pt-5 mt-4">
            <div className="flex justify-between font-bold text-lg mb-6">
              <span className="text-slate-300">Total Tagihan:</span>
              <span className="text-[#FD9502] text-2xl">Rp 0</span>
            </div>
            {/* Tombol Aksi Utama menggunakan warna Orange Emas */}
            <button className="w-full bg-[#FD9502] text-[#072050] py-3.5 rounded-xl font-black text-lg hover:bg-orange-400 transition-colors shadow-lg shadow-[#FD9502]/20">
              Proses Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}