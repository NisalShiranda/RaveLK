import React from 'react';

/**
 * @typedef {Object} ArtistProfileProps
 * @property {Object} artist
 * @property {number} artist.id
 * @property {string} artist.name
 * @property {string} artist.image
 * @property {string} artist.genre
 * @property {string} artist.bio
 * @property {Array<{title: string, art: string}>} artist.popularSongs
 */

const ArtistProfile = ({ artist }) => {
  if (!artist) return null;

  return (
    <div id="artist-profile" className="bg-black text-white font-['Inter'] scroll-mt-20">
      {/* 1. Artist Hero Section */}
      <section className="relative h-screen flex flex-col justify-end pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={artist.image} 
            alt={artist.name} 
            className="w-full h-full object-cover grayscale brightness-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-[10px] text-white/60 uppercase tracking-[0.5em] mb-4 font-bold">
            ARTIST ROSTER / {artist.genre}
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black tracking-tighter mb-6 leading-none uppercase">
            {artist.name}
          </h1>
          
          <div className="w-full h-[1px] bg-white/10 mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-md">
               <p className="text-xs text-white/40 uppercase tracking-[0.2em] leading-relaxed">
                Representing the futuristic soundscapes of {artist.genre} within the Sri Lankan Underground community.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {['Spotify', 'Instagram', 'Soundcloud', 'YouTube'].map((social) => (
                <div key={social} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[9px] font-bold hover:bg-white hover:text-black transition-all cursor-pointer uppercase tracking-widest group">
                  <span className="group-hover:scale-110 transition-transform">{social.substring(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Most Popular Songs Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex justify-between items-center mb-24">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">Most Popular Releases</h2>
          <div className="h-[1px] flex-grow mx-8 bg-white/5 hidden md:block"></div>
          <div className="flex space-x-2">
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-40 hover:opacity-100 cursor-pointer transition-all">&larr;</div>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-40 hover:opacity-100 cursor-pointer transition-all">&rarr;</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {artist.popularSongs.map((song, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square mb-8 overflow-hidden relative bg-neutral-900 border border-white/5">
                <img 
                  src={song.art} 
                  alt={song.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full shadow-xl">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">{song.title}</h3>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-medium">[ {artist.name} ]</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Biography & Image Grid */}
      <section className="py-40 bg-neutral-950/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="inline-block px-4 py-1 border border-white/10 text-[9px] uppercase tracking-[0.4em] text-white/40">Biography</div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase">
                {artist.bio}
              </h3>
              
              <div className="max-w-md space-y-6 text-[11px] text-white/40 leading-relaxed uppercase tracking-[0.2em] font-medium italic">
                <p>
                  As an integral part of the SL Underground collective, {artist.name} continues to push the boundaries of electronic music, blending deep rhythmic structures with local cultural elements.
                </p>
                <p>
                  Their performances are more than just DJ sets; they are sonic journeys that capture the heart of the Colombo underground scene.
                </p>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <button className="bg-white text-black px-12 py-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-neutral-200 transition-all active:scale-95">
                  Book Artist
                </button>
                <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">Press Kit &rarr;</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="row-span-2 aspect-[4/5] overflow-hidden border border-white/5">
                <img 
                  src={artist.image} 
                  className="w-full h-full object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-700" 
                  alt="Artist Main Portrait" 
                />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=600" 
                  className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-all duration-700" 
                  alt="Studio Gear" 
                />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600" 
                  className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-all duration-700" 
                  alt="Live Concert Environment" 
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