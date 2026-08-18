import { CalendarHeart, Ticket } from 'lucide-react';

export default function EventSeni() {
  const eventList = [
    { nama: "Tari Paduppa Penyambutan", jadwal: "Sabtu, 15 Aug 2026", tiketTerjual: "45/50", status: "Upcoming" },
    { nama: "Upacara Adat Rambu Solo (Simulasi)", jadwal: "Minggu, 23 Aug 2026", tiketTerjual: "120/200", status: "Upcoming" },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-3xl font-bold text-[#072050]">Atraksi & Sanggar Seni</h2>
      <p className="text-slate-500 mt-1">Jadwal pertunjukan budaya dan tiket event khusus.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventList.map((event, i) => (
          <div key={i} className="bg-[#072050] p-6 rounded-2xl shadow-md text-white flex flex-col relative overflow-hidden">
             {/* Ornamen Desain */}
             <div className="absolute -right-6 -top-6 text-white/5">
                <CalendarHeart size={120} />
             </div>
             
            <h3 className="font-bold text-2xl text-[#FD9502] mb-1 z-10">{event.nama}</h3>
            <p className="text-slate-300 text-sm z-10 mb-6">{event.jadwal}</p>
            
            <div className="mt-auto bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 flex justify-between items-center z-10">
              <div>
                <p className="text-xs text-slate-300 uppercase tracking-wider mb-1">Tiket Terjual</p>
                <p className="font-bold text-lg flex items-center">
                  <Ticket size={16} className="mr-2 text-[#FD9502]" /> {event.tiketTerjual}
                </p>
              </div>
              <button className="bg-[#FD9502] text-[#072050] px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-400">
                Kelola Tiket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}