
import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';

const ArtistProfile = () => {
  return (
    /* මෙතන තියෙන id එක Navbar එකේ href එකට සමාන විය යුතුයි. 
       scroll-mt-20 දාන්නේ navbar එකට යට වෙන්නේ නැතිව ලස්සනට පේන්න. */
    <div id="artist-profile" className="bg-black text-white font-['Inter'] scroll-mt-20">
      {/* 1. Artist Hero Section */}
      <section className="relative h-screen flex flex-col justify-end pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&q=80&w=2000" 
            alt="Marcus Cardello Hero" 
            className="w-full h-full object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter mb-4 leading-none">
            Marcus Cardello
          </h1>
          
          <div className="w-full h-[1px] bg-white/20 mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="max-w-md text-sm text-white/40 uppercase tracking-widest leading-relaxed">
              Join us in celebrating the power of music and the artists who bring it to life.
            </p>
            
            <div className="flex space-x-4">
              {['Spotify', 'IG', 'Apple', 'YT', 'TikTok'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Most Popular Song Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-24 tracking-tight">Most popular song</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {[
            { title: 'Dream of us', art: card1 },
            { title: 'Sadness', art: card2 },
            { title: 'Parasite', art: card3 },
          ].map((song, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square mb-8 overflow-hidden relative">
                <img 
                  src={song.art} 
                  alt={song.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold mb-1">{song.title}</h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">[ Marcus Cardello ]</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-4 mt-16">
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-40 hover:opacity-100 cursor-pointer">&larr;</div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-40 hover:opacity-100 cursor-pointer">&rarr;</div>
        </div>
      </section>

      {/* 3. Videos Section */}
      <section className="py-32 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Videos</h2>
        </div>
        
        <div className="relative flex items-center justify-center space-x-8 overflow-hidden">
          <div className="w-1/4 aspect-video bg-neutral-900 opacity-20 transform -translate-x-12 shrink-0">
            <img src={card1} className="w-full h-full object-cover grayscale" />
          </div>
          
          <div className="w-3/4 md:w-2/3 aspect-video relative group shrink-0 shadow-2xl">
            <img 
              src={card2} 
              className="w-full h-full object-cover grayscale" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
              <div className="text-4xl md:text-6xl font-black tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                lithuania <span className="text-white/40">HQ</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          
          <div className="w-1/4 aspect-video bg-neutral-900 opacity-20 transform translate-x-12 shrink-0">
             <img src={card3} className="w-full h-full object-cover grayscale" />
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-16 max-w-7xl mx-auto px-12">
          <div className="flex ml-auto space-x-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-40 hover:opacity-100 cursor-pointer">&larr;</div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-40 hover:opacity-100 cursor-pointer">&rarr;</div>
          </div>
        </div>
      </section>

      {/* 4. Biography & Image Grid */}
      <section className="py-40 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              As Sweden continuously breeds the most lucrative talent in dance music, it is no surprise to see the young Marcus Cardello appear from the shadows.
            </h3>
            
            <div className="max-w-md space-y-6 text-sm text-white/40 leading-relaxed uppercase tracking-wider">
              <p>
                The Rave Itu Marcus Cardello has gathered the most public attention from his pandemic themed mashup on TikTok that became massively viral in Sweden.
              </p>
              <p>
                It became the summer anthem for many graduated students, reported by many Swedish celebrities, and Cardello also got interviewed by one of the biggest newspapers in Sweden, Expressen.
              </p>
            </div>

            <a href="#" className="inline-block text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white pb-2 hover:text-white/60 hover:border-white/60 transition-all">
              Book artist &rarr;
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2">
              <img 
                src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale" 
                alt="Portrait"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=600" 
                className="w-full aspect-square object-cover grayscale" 
                alt="Studio"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600" 
                className="w-full aspect-square object-cover grayscale" 
                alt="Live Performance"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
