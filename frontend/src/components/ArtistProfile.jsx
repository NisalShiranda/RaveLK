
import React from 'react';

const ArtistProfile = ({ artist }) => {
  if (!artist) return null;

  return (
    <div id="artist-profile" className="bg-black text-white scroll-mt-20 font-sans selection:bg-white selection:text-black">
      {/* 1. Artist Hero Section */}
      <section className="relative h-[85vh] flex flex-col justify-end pb-16 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={artist.image} 
            alt={artist.name} 
            className="w-full h-full object-cover grayscale brightness-[0.35] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-white/30"></span>
            <p className="text-[10px] text-white/50 uppercase tracking-[0.6em] font-medium">
              ROSTER / {artist.genre}
            </p>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none uppercase">
            {artist.name}
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-white/10">
            <div className="max-w-md">
               <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] leading-relaxed font-light">
                Pioneering the Sri Lankan underground movement through raw sonic exploration and deep rhythmic structures.
              </p>
            </div>
            
            <div className="flex space-x-3">
              {['SP', 'IG', 'SC', 'YT'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-white hover:text-black transition-all cursor-pointer group">
                  <span className="group-hover:scale-110 transition-transform">{social}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Most Popular Songs Section */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-white/40 font-bold">Featured Releases</h2>
          <div className="flex space-x-2">
             <button className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-xs opacity-40 hover:opacity-100 hover:bg-white/5 transition-all">&larr;</button>
             <button className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-xs opacity-40 hover:opacity-100 hover:bg-white/5 transition-all">&rarr;</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artist.popularSongs.map((song, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square mb-6 overflow-hidden relative bg-neutral-900 border border-white/5">
                <img 
                  src={song.art} 
                  alt={song.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest">{song.title}</h3>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] mt-2">Catalog No. SLU-0{artist.id}{i+1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Redesigned Biography Section */}
      <section className="py-24 bg-neutral-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold">The Narrative</p>
                <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase leading-[1.1]">
                  A Journey Through <br/> <span className="text-white/40">Sonic Landscapes.</span>
                </h3>
              </div>

              <div className="max-w-xl space-y-6 text-sm md:text-base text-white/60 leading-relaxed font-light">
                <p>
                  {artist.bio}
                </p>
                <p>
                  Rooted in the vibrant culture of Colombo, {artist.name} bridges the gap between deep-seated traditions and futuristic electronic sounds. Every set is a carefully curated experience designed to transport the listener into the heart of the underground.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6">
                <button className="bg-white text-black px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:invert transition-all active:scale-95">
                  Request Booking
                </button>
                <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors flex items-center">
                  Full Electronic Press Kit 
                  <span className="ml-2 text-xs">→</span>
                </a>
              </div>
            </div>

            {/* Gallery Side */}
            <div className="grid grid-cols-12 grid-rows-2 gap-3 aspect-square lg:aspect-[4/4]">
              <div className="col-span-8 row-span-2 overflow-hidden border border-white/10 group">
                <img 
                  src={artist.image} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Portrait" 
                />
              </div>
              <div className="col-span-4 row-span-1 overflow-hidden border border-white/10 group">
                <img 
                  src={artist.gallery[0] || artist.image} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Gallery 1" 
                />
              </div>
              <div className="col-span-4 row-span-1 overflow-hidden border border-white/10 group">
                <img 
                  src={artist.gallery[1] || artist.image} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Gallery 2" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
