import { Wallet, ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Keuangan() {
  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-3xl font-bold text-[#072050]">Transparansi Keuangan BUMDes</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border-l-4 border-[#072050] shadow-sm">
          <p className="text-sm font-bold text-slate-500 mb-1">Saldo Kas BUMDes</p>
          <p className="text-3xl font-black text-[#072050]">Rp 45.200.000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
          <p className="text-sm font-bold text-slate-500 mb-1">Pemasukan Bulan Ini</p>
          <p className="text-3xl font-black text-green-600 flex items-center">
            <ArrowUpRight size={24} className="mr-2" /> Rp 18.500.000
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
          <p className="text-sm font-bold text-slate-500 mb-1">Pengeluaran Operasional</p>
          <p className="text-3xl font-black text-red-500 flex items-center">
            <ArrowDownRight size={24} className="mr-2" /> Rp 4.300.000
          </p>
        </div>
      </div>

      {/* Tabel Arus Kas */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-[#072050] flex items-center">
          <Wallet className="mr-2 text-[#FD9502]" size={18} /> Histori Transaksi Terbaru
        </div>
        <table className="w-full text-left text-sm">
          <tbody>
            <tr className="border-b">
              <td className="p-4 text-slate-500">14 Aug 2026</td>
              <td className="p-4 font-semibold text-[#072050]">Bagi Hasil Retribusi UMKM</td>
              <td className="p-4 text-right font-bold text-green-600">+ Rp 850.000</td>
            </tr>
            <tr className="border-b bg-slate-50/50">
              <td className="p-4 text-slate-500">13 Aug 2026</td>
              <td className="p-4 font-semibold text-[#072050]">Gaji Pemandu Wisata (Mingguan)</td>
              <td className="p-4 text-right font-bold text-red-500">- Rp 1.200.000</td>
            </tr>
            <tr>
              <td className="p-4 text-slate-500">12 Aug 2026</td>
              <td className="p-4 font-semibold text-[#072050]">Penjualan Tiket Loket (Setoran)</td>
              <td className="p-4 text-right font-bold text-green-600">+ Rp 4.500.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}