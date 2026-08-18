import { MapPin, Calendar, UserCheck } from 'lucide-react';

export default function PaketWisata() {
  const paketList = [
    { nama: "Susur Sungai Rammang-Rammang", harga: "250.000", kuota: "12/20", status: "Tersedia" },
    { nama: "Tracking Cultural Toraja", harga: "450.000", kuota: "15/15", status: "Penuh" },
    { nama: "Live-in Desa Wisata", harga: "850.000", kuota: "4/10", status: "Tersedia" },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-[#072050]">Local Experience & Paket</h2>
          <p className="text-slate-500 mt-1">Manajemen katalog wisata, kuota, dan pemandu.</p>
        </div>
        <button className="bg-[#FD9502] text-[#072050] px-4 py-2 rounded-xl font-bold hover:bg-orange-400">
          + Buat Paket Baru
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Katalog Paket */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {paketList.map((paket, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#072050]/5 rounded-lg text-[#072050]">
                  <MapPin size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${paket.status === 'Penuh' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                  {paket.status}
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#072050] leading-tight mb-2">{paket.nama}</h3>
              <p className="text-[#FD9502] font-black mb-4">Rp {paket.harga}</p>
              <div className="flex justify-between items-center text-sm border-t pt-4 text-slate-500">
                <span className="flex items-center"><Calendar size={14} className="mr-1"/> Kuota Hari Ini:</span>
                <span className="font-bold text-slate-800">{paket.kuota} org</span>
              </div>
            </div>
          ))}
        </div>

        {/* Panel Penugasan Pemandu */}
        <div className="bg-[#072050] p-6 rounded-2xl shadow-lg text-white">
          <h3 className="font-bold text-lg mb-4 flex items-center border-b border-white/20 pb-4">
            <UserCheck className="mr-2 text-[#FD9502]" /> Penugasan Pemandu
          </h3>
          <div className="space-y-4">
            {/* Mockup Item Penugasan */}
            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <p className="text-xs text-[#FD9502] font-bold mb-1">Pukul 10:00 WITA</p>
              <p className="font-semibold text-sm">Grup Turis Belanda (8 org)</p>
              <div className="mt-3 flex gap-2">
                <select className="bg-white text-slate-800 text-xs p-2 rounded-lg w-full outline-none">
                  <option>Pilih Pemandu...</option>
                  <option>Budi (Tersedia)</option>
                  <option>Siti (Tersedia)</option>
                </select>
                <button className="bg-[#FD9502] text-[#072050] px-3 rounded-lg font-bold text-xs">Tugaskan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}