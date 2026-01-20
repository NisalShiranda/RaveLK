
import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-32">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div><img src={logo}></img></div>
            </div>
            <p className="text-white/40 max-w-md leading-relaxed mb-10">
              Defining the future of electronic music in South Asia. We empower artists to push boundaries and create sonic experiences that resonate globally.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">SC</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">YT</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-8 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Artist Roster</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Latest Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Event Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">hello@ravelk.com</a></li>
              <li><a href="#" className="hover:text-white transition-colors">demos@ravelk.com</a></li>
              <li><a href="#" className="hover:text-white transition-colors">bookings@ravelk.com</a></li>
              <li><a href="#" className="hover:text-white transition-colors">press@ravelk.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium border-t border-white/5 pt-12">
          <p>© 2024 SL UNDERGROUND RECORDINGS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
