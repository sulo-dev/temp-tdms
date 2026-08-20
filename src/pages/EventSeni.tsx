import { CalendarHeart, Ticket, Plus, MapPin, Clock } from 'lucide-react';

export default function EventSeni() {
  const eventList = [
    { 
      nama: "Tari Paduppa Penyambutan", 
      jadwal: "Sabtu, 15 Aug 2026", 
      waktu: "19:00 WITA",
      lokasi: "Panggung Utama",
      tiketTerjual: 50, 
      totalTiket: 50, 
      status: "Selesai" 
    },
    { 
      nama: "Upacara Adat Rambu Solo", 
      jadwal: "Minggu, 23 Aug 2026", 
      waktu: "10:00 WITA",
      lokasi: "Area Budaya Toraja",
      tiketTerjual: 120, 
      totalTiket: 200, 
      status: "Upcoming" 
    },
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
            Atraksi & Sanggar Seni
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Jadwal pertunjukan budaya dan tiket event khusus.</p>
        </div>
        
        {/* Tombol Buat Event Baru */}
        <button className="bg-gradient-to-r from-[#FA4D09] to-[#FC7A0B] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-bold flex items-center space-x-2 shadow-[0_4px_20px_rgba(250,77,9,0.3)] hover:shadow-[0_4px_25px_rgba(250,77,9,0.5)] transition-all w-full sm:w-auto justify-center text-sm md:text-base mt-2 sm:mt-0 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          <span>Buat Event Baru</span>
        </button>
      </div>

      {/* Grid Kartu Event */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 relative z-10">
        {eventList.map((event, i) => {
          const isUpcoming = event.status === 'Upcoming';
          const persentaseTiket = (event.tiketTerjual / event.totalTiket) * 100;

          return (
            <div 
              key={i} 
              className={`bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${isUpcoming ? 'hover:bg-white/10' : 'opacity-80 hover:opacity-100'} flex flex-col`}
            >
              {/* Garis Gradasi atas kartu */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4D09] via-[#FC7A0B] to-[#FF9F03] ${isUpcoming ? 'opacity-50 group-hover:opacity-100' : 'opacity-20'} transition-opacity`}></div>

              {/* Watermark Ornamen Desain Besar */}
              <div className="absolute -right-8 -bottom-8 text-white/[0.03] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 pointer-events-none">
                <CalendarHeart size={160} />
              </div>

              {/* Header Kartu: Status & Judul */}
              <div className="flex justify-between items-start mb-3 md:mb-4 relative z-10">
                <h3 className={`font-black text-xl md:text-2xl leading-tight pr-4 ${isUpcoming ? 'text-white group-hover:text-[#FF9F03]' : 'text-white/60'} transition-colors`}>
                  {event.nama}
                </h3>
                <span className={`px-2.5 py-1 md:py-1.5 rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-widest border shadow-inner flex-shrink-0 ${
                  isUpcoming 
                    ? 'bg-[#FF9F03]/10 text-[#FF9F03] border-[#FF9F03]/20' 
                    : 'bg-white/5 text-white/40 border-white/10'
                }`}>
                  {event.status}
                </span>
              </div>
              
              {/* Info Jadwal & Lokasi */}
              <div className="space-y-2 mb-6 md:mb-8 relative z-10">
                <p className="flex items-center text-xs md:text-sm text-white/70 font-medium">
                  <CalendarHeart size={14} className="mr-2 text-white/40" />
                  {event.jadwal} <span className="mx-2 text-white/20">|</span> <Clock size={14} className="mr-1.5 text-white/40"/> {event.waktu}
                </p>
                <p className="flex items-center text-xs md:text-sm text-white/70 font-medium">
                  <MapPin size={14} className="mr-2 text-white/40" />
                  {event.lokasi}
                </p>
              </div>
              
              {/* Panel Bawah: Tiket */}
              <div className="mt-auto bg-black/20 border border-white/5 p-4 rounded-xl backdrop-blur-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
                
                {/* Info & Progress Tiket */}
                <div className="w-full sm:w-1/2">
                  <div className="flex justify-between items-end mb-1.5">
                    <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-bold">Tiket Terjual</p>
                    <p className="font-black text-sm md:text-base flex items-center text-white">
                      <Ticket size={14} className={`mr-1.5 ${isUpcoming ? 'text-[#FA4D09]' : 'text-white/30'}`} /> 
                      {event.tiketTerjual} <span className="text-white/40 text-xs font-normal ml-1">/ {event.totalTiket}</span>
                    </p>
                  </div>
                  {/* Progress Bar Mini */}
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${isUpcoming ? 'bg-gradient-to-r from-[#FA4D09] to-[#FF9F03] shadow-[0_0_8px_#FC7A0B]' : 'bg-white/30'}`} 
                      style={{ width: `${persentaseTiket}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tombol Aksi */}
                <button className={`w-full sm:w-auto px-4 py-2.5 rounded-lg font-bold text-xs md:text-sm transition-all shadow-lg ${
                  isUpcoming 
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-[#FA4D09]/50' 
                    : 'bg-transparent text-white/30 border border-white/10 cursor-not-allowed'
                }`}>
                  Kelola Tiket
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}