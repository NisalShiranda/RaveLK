
import React from 'react';

const EVENTS_DATA = [
  { 
    id: 1, 
    title: 'EQUINOX', 
    date: 'DEC 12', 
    time: '22:00 - 06:00',
    location: 'LOT 14, COLOMBO', 
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800',
    price: '$25.00',
    status: 'TICKETS AVAILABLE'
  },
  { 
    id: 2, 
    title: 'FORMA PROJECT', 
    date: 'DEC 28', 
    time: '16:00 - 02:00',
    location: 'MIRISSA BEACH', 
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800',
    price: '$40.00',
    status: 'EARLY BIRD SOLD OUT'
  },
  { 
    id: 3, 
    title: 'DEEP NIGHTS', 
    date: 'JAN 05', 
    time: '23:00 - 05:00',
    location: 'LEVEL 4, COLOMBO', 
    image: 'https://images.unsplash.com/photo-1514525253344-a812ef9ee27f?auto=format&fit=crop&q=80&w=800',
    price: '$15.00',
    status: 'TICKETS AVAILABLE'
  },
  { 
    id: 4, 
    title: 'MONZA RAVE', 
    date: 'JAN 20', 
    time: '21:00 - LATE',
    location: 'WAREHOUSE 02', 
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecbb4ec?auto=format&fit=crop&q=80&w=800',
    price: '$30.00',
    status: 'COMING SOON'
  },
  { 
    id: 5, 
    title: 'SOLSTICE', 
    date: 'FEB 14', 
    time: '18:00 - 04:00',
    location: 'PORT CITY, COLOMBO', 
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    price: '$50.00',
    status: 'TICKETS AVAILABLE'
  },
  { 
    id: 6, 
    title: 'TECHNO THERAPY', 
    date: 'MAR 02', 
    time: '22:00 - 06:00',
    location: 'THE VAULT', 
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    price: '$20.00',
    status: 'TICKETS AVAILABLE'
  },
];

const EventsPage = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold">The Calendar</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Events & Tours</h1>
          </div>
          <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            <button className="text-white border-b border-white pb-1">Upcoming</button>
            <button className="hover:text-white transition-colors">Archive</button>
            <button className="hover:text-white transition-colors">Festival Map</button>
          </div>
        </div>

        {/* Featured Showcase */}
        <div className="mb-32 relative h-[60vh] md:h-[70vh] w-full overflow-hidden border border-white/5 group">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" 
            alt="Main Festival" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4">
            <div className="bg-white text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest inline-block mb-4">Big Event</div>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none">SLU FESTIVAL 2025</h2>
            <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.3em] text-white/60 pt-4">
               <span>COLOMBO CITY CENTER</span>
               <span className="w-1 h-1 bg-white/40 rounded-full"></span>
               <span>AUG 15-17</span>
            </div>
            <button className="mt-8 px-12 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:invert transition-all active:scale-95">
              Secure Early Access
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {EVENTS_DATA.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden mb-8 border border-white/5 bg-neutral-900">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md w-14 h-14 border border-white/10">
                   <span className="text-xs font-black tracking-tighter">{event.date.split(' ')[0]}</span>
                   <span className="text-[10px] font-light text-white/40">{event.date.split(' ')[1]}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                   <p className="text-[10px] uppercase tracking-widest font-bold text-white/80">{event.status}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-white/80 transition-colors">{event.title}</h3>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">{event.location} • {event.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold tracking-tighter">{event.price}</p>
                  <button className="text-[10px] uppercase tracking-widest font-black text-white/30 group-hover:text-white transition-colors border-b border-white/10 mt-2">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Call to Action */}
        <div className="mt-48 p-12 md:p-24 border border-white/5 bg-neutral-950/30 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Never Miss a Beat.</h2>
          <p className="text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] mb-12 max-w-xl mx-auto leading-loose">
            Join our mailing list to get priority access to tickets, exclusive merch drops and members-only events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
             <input 
               type="email" 
               placeholder="EMAIL ADDRESS" 
               className="bg-white/5 border border-white/10 px-6 py-4 text-[10px] uppercase tracking-widest focus:outline-none focus:border-white/30 flex-grow"
             />
             <button className="bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:invert transition-all">
               Subscribe
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
