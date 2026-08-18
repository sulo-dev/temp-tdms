import { Home, LogIn, LogOut } from 'lucide-react';

export default function Homestay() {
  const kamarList = [
    { nama: "Kamar Mawar (Milik P. Budi)", status: "Terisi", tamu: "Keluarga Bapak Andi" },
    { nama: "Kamar Melati (Milik B. Siti)", status: "Tersedia", tamu: "-" },
    { nama: "Rumah Panggung (Milik P. Jono)", status: "Tersedia", tamu: "-" },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-3xl font-bold text-[#072050]">Manajemen Homestay Lokal</h2>
      <p className="text-slate-500 mt-1">Daftar kamar warga, kalender, dan check-in/out.</p>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-[#072050] flex items-center">
            <Home size={18} className="mr-2 text-[#FD9502]" /> Daftar Ketersediaan (Hari Ini)
          </h3>
          <button className="text-sm text-[#072050] border border-[#072050] px-3 py-1 rounded-lg hover:bg-slate-100">
            Lihat Kalender Penuh
          </button>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b text-sm text-slate-500">
              <th className="p-4">Nama Homestay / Kamar</th>
              <th className="p-4">Status Real-time</th>
              <th className="p-4">Tamu Saat Ini</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kamarList.map((kamar, i) => (
              <tr key={i} className="border-b hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-[#072050]">{kamar.nama}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${kamar.status === 'Terisi' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                    {kamar.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-600">{kamar.tamu}</td>
                <td className="p-4 text-right flex justify-end gap-2">
                  {kamar.status === 'Tersedia' ? (
                    <button className="flex items-center text-xs bg-[#072050] text-white px-3 py-2 rounded-lg hover:bg-[#0a2e73]">
                      <LogIn size={14} className="mr-1" /> Check-in
                    </button>
                  ) : (
                    <button className="flex items-center text-xs bg-red-50 text-red-600 px-3 py-2 rounded-lg border border-red-200 hover:bg-red-100">
                      <LogOut size={14} className="mr-1" /> Check-out
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}