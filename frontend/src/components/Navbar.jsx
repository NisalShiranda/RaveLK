
import React from 'react';
import logoImage from '../assets/logo.png';

// To use your local logo from the assets folder, uncomment the line below:
// import logoImage from '../assets/logo.png';

const Navbar= () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-15 flex items-center justify-between">
        <div className="flex items-center">
          {/* 
            Replace the 'src' below with {logoImage} once you have imported your local file.
            The h-10 class keeps the logo at a consistent height within the navbar.
          */}
          <img 
            src={logoImage}
            alt="SL Underground Logo" 
            className="h-10 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
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
