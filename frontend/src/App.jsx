
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Artists from './components/Artists';
import ArtistProfile from './components/ArtistProfile';
import Events from './components/Events';
import Footer from './components/Footer';

// Importing local assets
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';
import echoCover from './assets/echocover.png';

// එක් එක් artist හට අදාළ වෙනස්ම වූ දත්ත (Dynamic Data)
const ARTISTS_DATA = [
  { 
    id: 1, 
    name: 'ECHO DAFT', 
    image: echoCover, 
    genre: 'DEEP PROGRESSIVE',
    bio: 'Echo Daft is a pioneer in the Sri Lankan Progressive House scene, known for his atmospheric soundscapes and deep rhythmic structures that define the underground.',
    popularSongs: [
      { title: 'Stellar Wind', art: echoCover },
      { title: 'Morning Dew', art: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=600' },
      { title: 'Aurora', art: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  { 
    id: 2, 
    name: 'NOIYSE', 
    image: card2,
    genre: 'MELODIC TECHNO',
    bio: 'Noiyse has built a global reputation for blending intense melodic elements with driving techno beats, making every performance a unique journey.',
    popularSongs: [
      { title: 'Dark Void', art: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600' },
      { title: 'Silent Echo', art: 'https://images.unsplash.com/photo-1514525253344-a812ef9ee27f?auto=format&fit=crop&q=80&w=600' },
      { title: 'Nocturnal', art: 'https://images.unsplash.com/photo-1429962714451-bb934ecbb4ec?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  { 
    id: 3, 
    name: 'DIMUTH K', 
    image: card3,
    genre: 'PROGRESSIVE HOUSE',
    bio: 'Dimuth K is a staple in the progressive world, delivering deep and meaningful sets that have resonated across global dance floors from London to Tokyo.',
    popularSongs: [
      { title: 'Souls of Colombo', art: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600' },
      { title: 'Inner Bloom', art: 'https://images.unsplash.com/photo-1514525253344-a812ef9ee27f?auto=format&fit=crop&q=80&w=600' },
      { title: 'Drifting', art: 'https://images.unsplash.com/photo-1429962714451-bb934ecbb4ec?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  { 
    id: 4, 
    name: 'KYOTTO', 
    image: card4,
    genre: 'DEEP HOUSE',
    bio: 'Kyotto brings a fresh and soulful perspective to the underground scene, with a focus on rhythm and groove that keeps the dance floor moving.',
    popularSongs: [
      { title: 'Afterlife', art: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600' },
      { title: 'Modern Soul', art: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600' },
      { title: 'Kyoto nights', art: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=600' },
    ]
  },
];

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // මෙතැනදී URL එකේ ඇති ID එක (#artist/1 වැනි) පරීක්ෂා කරයි
      if (hash.startsWith('#artist/')) {
        const id = parseInt(hash.split('/')[1]);
        const artist = ARTISTS_DATA.find(a => a.id === id);
        
        if (artist) {
          setSelectedArtist(artist);
          setCurrentView('artist-profile');
          window.scrollTo(0, 0);
        }
      } else {
        setCurrentView('home');
        setSelectedArtist(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Artist Profile View එක නම් පෙන්විය යුතු දේ (දත්ත සහිතව)
  if (currentView === 'artist-profile' && selectedArtist) {
    return (
      <div className="min-h-screen bg-black text-white">
        <ArtistProfile artist={selectedArtist} />
        <div className="p-10 text-center">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} 
              className="text-white/40 hover:text-white transition-colors uppercase tracking-widest text-xs border-b border-white/10 pb-2"
            >
              Back to Home
            </a>
        </div>
        <Footer />
      </div>
    );
  }

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
