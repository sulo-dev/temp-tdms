import { Store, Percent } from 'lucide-react';

export default function MerchantUMKM() {
  const umkmList = [
    { nama: "Warung Kopi Daeng", jenis: "Kuliner", bagiHasil: "10%", totalSetoran: "Rp 1.500.000" },
    { nama: "Suvenir Lontara", jenis: "Suvenir", bagiHasil: "15%", totalSetoran: "Rp 3.200.000" },
    { nama: "Sewa Baju Adat Bodo", jenis: "Jasa", bagiHasil: "20%", totalSetoran: "Rp 850.000" },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-3xl font-bold text-[#072050]">Partnership & Merchant UMKM</h2>
      <p className="text-slate-500 mt-1">Daftar mitra lokal dan pencatatan retribusi/bagi hasil destinasi.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {umkmList.map((umkm, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-[#FD9502] transition-colors">
            <div className="absolute top-0 right-0 bg-[#072050] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
              {umkm.jenis}
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-orange-50 rounded-xl text-[#FD9502]">
                <Store size={24} />
              </div>
              <h3 className="font-bold text-lg text-[#072050]">{umkm.nama}</h3>
            </div>
            <div className="flex justify-between items-center text-sm border-t pt-4 text-slate-600">
              <span className="flex items-center"><Percent size={14} className="mr-1"/> Bagi Hasil: <strong className="ml-1">{umkm.bagiHasil}</strong></span>
            </div>
            <div className="mt-2 text-sm text-slate-600">
              Total Kontribusi: <strong className="text-green-600">{umkm.totalSetoran}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}