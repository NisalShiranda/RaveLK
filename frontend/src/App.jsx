
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Artists from './components/Artists';
import ArtistProfile from './components/ArtistProfile';
import Events from './components/Events';
import Footer from './components/Footer';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // URL එකේ hash එක පරීක්ෂා කර අදාළ view එක සෙට් කිරීම
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#artist-profile') {
        setCurrentView('artist-profile');
      } else {
        setCurrentView('home');
      }
    };

    // Load වෙද්දී සහ hash එක මාරු වෙද්දී ක්‍රියාත්මක වීමට
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Artist Profile View එක නම් පෙන්විය යුතු දේ
  if (currentView === 'artist-profile') {
    return (
      <div className="min-h-screen bg-black text-white">
        <ArtistProfile />
        <div className="p-10 text-center">
            <a href="/" className="text-white/40 hover:text-white transition-colors uppercase tracking-widest text-xs border-b border-white/10 pb-2">Back to Home</a>
        </div>
        <Footer />
      </div>
    );
  }

  // සාමාන්‍ය Landing Page එක (Home View)
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <Artists />
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default App;
