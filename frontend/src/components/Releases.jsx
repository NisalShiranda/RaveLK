
import React from 'react';

const RELEASES_DATA = [
  { id: 'SLU001', title: 'Stellar Wind', artist: 'Echo Daft', art: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600', date: 'OCT 2024' },
  { id: 'SLU002', title: 'Dark Void', artist: 'Noiyse', art: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600', date: 'SEP 2024' },
  { id: 'SLU003', title: 'Souls of Colombo', artist: 'Dimuth K', art: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=600', date: 'AUG 2024' },
  { id: 'SLU004', title: 'Afterlife', artist: 'Kyotto', art: 'https://images.unsplash.com/photo-1514525253344-a812ef9ee27f?auto=format&fit=crop&q=80&w=600', date: 'JUL 2024' },
  { id: 'SLU005', title: 'Morning Dew', artist: 'Echo Daft', art: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600', date: 'JUN 2024' },
  { id: 'SLU006', title: 'Nocturnal', artist: 'Noiyse', art: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=600', date: 'MAY 2024' },
];

const Releases = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold">The Catalog</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Latest Releases</h1>
          </div>
          <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            <button className="text-white border-b border-white pb-1">All</button>
            <button className="hover:text-white transition-colors">Originals</button>
            <button className="hover:text-white transition-colors">Remixes</button>
            <button className="hover:text-white transition-colors">EPs</button>
          </div>
        </div>

        {/* Featured Release */}
        <div className="mb-32 group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 aspect-[16/9] overflow-hidden border border-white/5 relative">
               <img 
                 src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200" 
                 alt="Featured Release" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100"
               />
               <div className="absolute top-8 left-8 bg-white text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">Featured</div>
            </div>
            <div className="lg:col-span-5 space-y-6">
               <p className="text-xs text-white/40 font-bold uppercase tracking-[0.4em]">SLU007 / OCT 2024</p>
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Midnight Pulse</h2>
               <h3 className="text-xl md:text-2xl text-white/60 font-light uppercase tracking-[0.2em]">Echo Daft & Noiyse</h3>
               <p className="text-sm text-white/40 leading-relaxed font-light max-w-md">
                 A heavy-hitting collaborative effort that merges aggressive techno transients with deep, melodic progressive atmospheres.
               </p>
               <div className="pt-4 flex items-center space-x-6">
                  <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:invert transition-all">Buy Now</button>
                  <div className="flex space-x-4 opacity-40">
                    <span className="text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Spotify</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Beatport</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {RELEASES_DATA.map((release) => (
            <div key={release.id} className="group cursor-pointer space-y-6">
              <div className="aspect-square overflow-hidden border border-white/5 relative bg-neutral-900">
                <img 
                  src={release.art} 
                  alt={release.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-tight group-hover:text-white/80 transition-colors">{release.title}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1">{release.artist}</p>
                </div>
                <p className="text-[9px] text-white/20 font-bold border border-white/10 px-2 py-1">{release.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Releases;
