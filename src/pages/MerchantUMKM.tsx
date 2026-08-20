import { Store, Percent, Plus } from 'lucide-react';

export default function MerchantUMKM() {
  const umkmList = [
    { nama: "Warung Kopi Daeng", jenis: "Kuliner", bagiHasil: "10%", totalSetoran: "Rp 1.500.000" },
    { nama: "Suvenir Lontara", jenis: "Suvenir", bagiHasil: "15%", totalSetoran: "Rp 3.200.000" },
    { nama: "Sewa Baju Adat Bodo", jenis: "Jasa", bagiHasil: "20%", totalSetoran: "Rp 850.000" },
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
            Partnership UMKM
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Daftar mitra lokal dan pencatatan bagi hasil destinasi.</p>
        </div>
        
        {/* Tombol Tambah Mitra */}
        <button className="bg-gradient-to-r from-[#FA4D09] to-[#FC7A0B] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-bold flex items-center space-x-2 shadow-[0_4px_20px_rgba(250,77,9,0.3)] hover:shadow-[0_4px_25px_rgba(250,77,9,0.5)] transition-all w-full sm:w-auto justify-center text-sm md:text-base mt-2 sm:mt-0 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          <span>Tambah Mitra</span>
        </button>
      </div>

      {/* Grid Kartu UMKM (Responsive: 1 -> 2 -> 3 kolom) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {umkmList.map((umkm, i) => (
          <div 
            key={i} 
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Garis Gradasi atas kartu */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Badge Kategori (Pojok Kanan Atas) */}
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-white/10 to-transparent border-b border-l border-white/10 text-white/80 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-bl-xl backdrop-blur-md">
              {umkm.jenis}
            </div>

            {/* Nama UMKM & Ikon */}
            <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-5 pt-2">
              <div className="p-2 md:p-3 bg-gradient-to-br from-[#FA4D09]/10 to-[#FC7A0B]/10 rounded-xl border border-white/5 group-hover:border-[#FA4D09]/30 transition-colors shadow-inner flex-shrink-0">
                <Store size={22} className="text-[#FF9F03] md:w-[24px] md:h-[24px]" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-[#FF9F03] transition-colors leading-tight pr-6">
                {umkm.nama}
              </h3>
            </div>
            
            {/* Informasi Bagi Hasil & Kontribusi */}
            <div className="border-t border-white/10 pt-4 md:pt-5 space-y-2 md:space-y-3">
              <div className="flex justify-between items-center text-xs md:text-sm text-white/60 font-medium">
                <span className="flex items-center">
                  <Percent size={14} className="mr-1.5 text-white/40"/> Bagi Hasil: 
                </span>
                <strong className="text-white bg-white/10 px-2 py-0.5 rounded border border-white/5">{umkm.bagiHasil}</strong>
              </div>
              
              <div className="flex justify-between items-center text-xs md:text-sm text-white/60 font-medium">
                <span>Total Kontribusi:</span>
                {/* Highlight Kontribusi dengan warna Orange Sulo */}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC7A0B] to-[#FF9F03] text-sm md:text-base font-black">
                  {umkm.totalSetoran}
                </strong>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}