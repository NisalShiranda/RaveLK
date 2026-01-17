
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center font-black text-black text-xl">SL</div>
          <span className="font-bold tracking-tighter text-xl">UNDERGROUND</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">ARTISTS</a>
          <a href="#" className="hover:text-white transition-colors">RELEASES</a>
          <a href="#" className="hover:text-white transition-colors">EVENTS</a>
          <a href="#" className="hover:text-white transition-colors">ABOUT</a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-neutral-200 transition-colors">
          JOIN COMMUNITY
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
