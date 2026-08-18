import { FileText, Download, FileSpreadsheet } from 'lucide-react';

export default function Laporan() {
  const laporanList = [
    { nama: "Statistik Pengunjung Bulanan", deskripsi: "Data demografi turis lokal & mancanegara." },
    { nama: "Laporan Keuangan Tahunan", deskripsi: "Neraca rugi laba dan pembagian bagi hasil." },
    { nama: "Data Okupansi Akomodasi", deskripsi: "Tingkat keterisian seluruh homestay lokal." },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-3xl font-bold text-[#072050]">Pusat Laporan & Export</h2>
      <p className="text-slate-500 mt-1">Generate laporan otomatis untuk Dinas Pariwisata dan arsip BUMDes.</p>

      <div className="grid grid-cols-1 gap-4">
        {laporanList.map((lap, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-3 bg-slate-100 rounded-xl text-[#072050]">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#072050]">{lap.nama}</h3>
                <p className="text-sm text-slate-500">{lap.deskripsi}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 font-semibold text-sm">
                <Download size={16} className="mr-2" /> PDF
              </button>
              <button className="flex items-center px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 font-semibold text-sm">
                <FileSpreadsheet size={16} className="mr-2" /> Excel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}