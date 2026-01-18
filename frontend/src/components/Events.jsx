
import React from 'react';
import e1 from '../assets/e1.png';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.png';
import e4 from '../assets/e4.png';

const events = [
  { id: 1, title: 'MORZA', date: 'DEC 12', location: 'LOT 14, COLOMBO', image: e1 },
  { id: 2, title: 'AQUALIC', date: 'DEC 28', location: 'MIRISSA BEACH', image: e2 },
  { id: 3, title: 'FLYING DUST', date: 'JAN 05', location: 'LEVEL 4, COLOMBO', image: e3 },
  { id: 4, title: 'FROM DUSK', date: 'JAN 20', location: 'WAREHOUSE 02', image: e4 },
];

const Events= () => {
  return (
    <section className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-black">Upcoming Events</h2>
          <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors underline underline-offset-8">Ticket Shop &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden mb-6 border border-white/5">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-[10px] font-bold">
                  {event.date}
                </div>
              </div>
              <h3 className="text-lg font-bold group-hover:text-white transition-colors">{event.title}</h3>
              <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
