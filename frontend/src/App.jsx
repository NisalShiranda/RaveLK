
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import About from './components/About';
import Releases from './components/Releases';
import Artists from './components/Artists';
import ArtistProfile from './components/ArtistProfile';
import Events from './components/Events';
import Footer from './components/Footer';

// Local assets import
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';

const ARTISTS_DATA = [
  { 
    id: 1, 
    name: 'ECHO DAFT', 
    image: card1, 
    genre: 'DEEP PROGRESSIVE',
    bio: 'Echo Daft is a pioneer in the Sri Lankan Progressive House scene, known for his atmospheric soundscapes and deep rhythmic structures that define the underground.',
    popularSongs: [
      { title: 'Stellar Wind', art: card1 },
      { title: 'Morning Dew', art: card2 },
      { title: 'Aurora', art: card3 },
    ],
    gallery: [card2, card3]
  },
  { 
    id: 2, 
    name: 'NOIYSE', 
    image: card2,
    genre: 'MELODIC TECHNO',
    bio: 'Noiyse has built a global reputation for blending intense melodic elements with driving techno beats, making every performance a unique journey.',
    popularSongs: [
      { title: 'Dark Void', art: card2 },
      { title: 'Silent Echo', art: card4 },
      { title: 'Nocturnal', art: card1 },
    ],
    gallery: [card1, card4]
  },
  { 
    id: 3, 
    name: 'DIMUTH K', 
    image: card3,
    genre: 'PROGRESSIVE HOUSE',
    bio: 'Dimuth K is a staple in the progressive world, delivering deep and meaningful sets that have resonated across global dance floors from London to Tokyo.',
    popularSongs: [
      { title: 'Souls of Colombo', art: card3 },
      { title: 'Inner Bloom', art: card1 },
      { title: 'Drifting', art: card2 },
    ],
    gallery: [card4, card1]
  },
  { 
    id: 4, 
    name: 'KYOTTO', 
    image: card4,
    genre: 'DEEP HOUSE',
    bio: 'Kyotto brings a fresh and soulful perspective to the underground scene, with a focus on rhythm and groove that keeps the dance floor moving.',
    popularSongs: [
      { title: 'Afterlife', art: card4 },
      { title: 'Modern Soul', art: card2 },
      { title: 'Kyoto nights', art: card3 },
    ],
    gallery: [card3, card2]
  },
];

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith('#artist/')) {
        const id = parseInt(hash.split('/')[1]);
        const artist = ARTISTS_DATA.find(a => a.id === id);
        
        if (artist) {
          setSelectedArtist(artist);
          setCurrentView('artist-profile');
          window.scrollTo(0, 0);
        }
      } else if (hash === '#about') {
        setCurrentView('about');
        window.scrollTo(0, 0);
      } else if (hash === '#releases') {
        setCurrentView('releases');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
        setSelectedArtist(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // View: Artist Profile
  if (currentView === 'artist-profile' && selectedArtist) {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        <ArtistProfile artist={selectedArtist} />
        <div className="py-20 text-center border-t border-white/5 bg-neutral-950/20">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} 
              className="inline-block text-white/40 hover:text-white transition-all uppercase tracking-[0.4em] text-[10px] border-b border-white/10 pb-2 hover:border-white"
            >
              Back to Community &rarr;
            </a>
        </div>
        <Footer />
      </div>
    );
  }

  // View: About Us (Standalone)
  if (currentView === 'about') {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        <Navbar />
        <div className="pt-20">
          <About />
        </div>
        <Footer />
      </div>
    );
  }

  // View: Releases (Standalone)
  if (currentView === 'releases') {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        <Navbar />
        <div className="pt-20">
          <Releases />
        </div>
        <Footer />
      </div>
    );
  }

  // View: Home
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
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
