
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Artists from './components/Artists';
import ArtistProfile from './components/ArtistProfile';
import Events from './components/Events';
import Footer from './components/Footer';

// Local assets import
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';
import echoCover from './assets/EchoCover.jpg';
import echoS1 from './assets/EchoS1.jpg';
import echoS2 from './assets/EchoS2.jpg';
import echoS3 from './assets/EchoS3.png';
import echoimg1 from './assets/EchoImg1.jpg';
import echoimg2 from './assets/EchoImg3.jpg';
import NoyseCover from './assets/NoyseCover.jpg';
import NoyseS1 from './assets/NoyseS1.jpg';
import NoyseS2 from './assets/NoyseS2.jpg'; 
import NoyseS3 from './assets/NoyseS3.jpg';
import NoyseImg1 from './assets/NoyseImg1.jpg';
import NoyseImg2 from './assets/NoyseImg2.jpg';
import DimuthCover from './assets/DimuthCover.jpg';
import DimuthS1 from './assets/DimuthS1.jpg';
import DimuthS2 from './assets/DimuthS2.jpg';
import DimuthS3 from './assets/DimuthS3.jpg';
import DimuthImg1 from './assets/DimuthImg1.jpg';
import DimuthImg2 from './assets/DimuthImg2.jpg';

const ARTISTS_DATA = [
  { 
    id: 1, 
    name: 'ECHO DAFT', 
    image: echoCover, 
    genre: 'DEEP PROGRESSIVE',
    bio: 'Echo Daft is a pioneer in the Sri Lankan Progressive House scene, known for his atmospheric soundscapes and deep rhythmic structures that define the underground.',
    popularSongs: [
      { title: 'Stellar Wind', art: echoS1 },
      { title: 'Morning Dew', art: echoS2 },
      { title: 'Aurora', art: echoS3 },
    ],
    gallery: [echoimg1, echoimg2]
  },
  { 
    id: 2, 
    name: 'NOIYSE', 
    image: NoyseCover,
    genre: 'MELODIC TECHNO',
    bio: 'Noiyse has built a global reputation for blending intense melodic elements with driving techno beats, making every performance a unique journey.',
    popularSongs: [
      { title: 'Dark Void', art: NoyseS1 },
      { title: 'Silent Echo', art: NoyseS2 },
      { title: 'Nocturnal', art: NoyseS3 },
    ],
    gallery: [NoyseImg1, NoyseImg2]
  },
  { 
    id: 3, 
    name: 'DIMUTH K', 
    image: DimuthCover,
    genre: 'PROGRESSIVE HOUSE',
    bio: 'Dimuth K is a staple in the progressive world, delivering deep and meaningful sets that have resonated across global dance floors from London to Tokyo.',
    popularSongs: [
      { title: 'Souls of Colombo', art: DimuthS1 },
      { title: 'Inner Bloom', art: DimuthS2 },
      { title: 'Drifting', art: DimuthS3 },
    ],
    gallery: [DimuthImg1, DimuthImg2]
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
      } else {
        setCurrentView('home');
        setSelectedArtist(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
