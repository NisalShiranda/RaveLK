
import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';



const artists = [
  { id: 1, name: 'ECHO DAFT', image: card1 },
  { id: 2, name: 'NOIYSE', image: card2 },
  { id: 3, name: 'DIMUTH K', image: card3 },
  { id: 4, name: 'KYOTTO', image: card4 },
];

const Artists = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl font-black">Our Artists</h2>
        <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">View All Artists &rarr;</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {artists.map((artist) => (
          <div key={artist.id} className="relative group overflow-hidden aspect-[4/5] bg-neutral-900">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-black tracking-tighter">{artist.name}</h3>
              <p className="text-[10px] text-white/50 tracking-[0.2em] mt-1 italic">DEEP PROGRESSIVE</p>
            </div>
            
            <div className="absolute top-6 right-6 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-neutral-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artists;