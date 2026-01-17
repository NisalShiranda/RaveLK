
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./assets/hero.png" 
          alt="DJ Deck Concert" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              Home of Sri Lanka's <br />
              <span className="text-white/40">Underground EDM</span> Artists
            </h1>
          </div>
          
          <div className="max-w-xs text-sm text-white/50 leading-relaxed font-light">
            <p>
              NAMU IS A DYNAMIC AND CUTTING-EDGE RECORD LABEL DEDICATED TO DISCOVERING AND PROMOTING THE MOST EXCITING NEW ELECTRONIC MUSIC ARTISTS FROM AROUND THE WORLD. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
