import { Tent, Plus, } from 'lucide-react';

export default function SewaAlat() {
  const alatList = [
    { nama: "Pelampung (Life Jacket)", total: 50, disewa: 15, rusak: 2 },
    { nama: "Perahu Katinting", total: 10, disewa: 8, rusak: 0 },
    { nama: "Tenda Dome (Kapasitas 4)", total: 15, disewa: 5, rusak: 1 },
    { nama: "Alat Snorkeling", total: 30, disewa: 20, rusak: 5 },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-[#072050]">Inventory Sewa Alat</h2>
          <p className="text-slate-500 mt-1">Manajemen stok perlengkapan wisata dan status perawatan.</p>
        </div>
        <button className="bg-[#FD9502] text-[#072050] px-4 py-2 rounded-xl font-bold flex items-center hover:bg-orange-400">
          <Plus size={18} className="mr-1" /> Tambah Alat
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#072050] text-white text-sm">
              <th className="p-4 font-semibold">Nama Perlengkapan</th>
              <th className="p-4 font-semibold text-center">Total Stok</th>
              <th className="p-4 font-semibold text-center">Tersedia</th>
              <th className="p-4 font-semibold text-center">Sedang Disewa</th>
              <th className="p-4 font-semibold text-center">Rusak/Perawatan</th>
              <th className="p-4 font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {alatList.map((alat, i) => {
              const tersedia = alat.total - alat.disewa - alat.rusak;
              return (
                <tr key={i} className="border-b hover:bg-slate-50">
                  <td className="p-4 font-bold text-[#072050] flex items-center">
                    <Tent size={16} className="mr-2 text-[#FD9502]" /> {alat.nama}
                  </td>
                  <td className="p-4 text-center font-bold">{alat.total}</td>
                  <td className="p-4 text-center text-green-600 font-bold">{tersedia}</td>
                  <td className="p-4 text-center text-blue-600 font-bold">{alat.disewa}</td>
                  <td className="p-4 text-center text-red-500 font-bold">{alat.rusak}</td>
                  <td className="p-4 text-right">
                    <button className="text-sm bg-slate-100 text-[#072050] px-3 py-1 rounded-lg hover:bg-slate-200 border border-slate-300">
                      Update Stok
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}