
import React from 'react';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#">
            <img 
              src={logoImage}
              alt="SL Underground Logo" 
              className="h-10 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
              onError={(e) => {
                e.target.src = 'https://api.dicebear.com/7.x/identicon/svg?seed=SLU&backgroundColor=ffffff';
              }}
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-white/60">
          <a 
            href="#artists-section" 
            className="hover:text-white transition-colors uppercase tracking-widest"
          >
            ARTISTS
          </a>
          <a 
            href="#releases" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors uppercase tracking-widest"
          >
            RELEASES
          </a>
          <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">EVENTS</a>
          <a 
            href="#about" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors uppercase tracking-widest"
          >
            ABOUT
          </a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-neutral-200 transition-colors uppercase tracking-widest">
          JOIN COMMUNITY
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
