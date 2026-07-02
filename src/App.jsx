import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Shorts from './pages/Shorts';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  const isShortsPage = location.pathname === '/shorts';

  return (
    <div className="relative min-h-screen bg-templeBlack text-ivoryWhite selection:bg-saffronOrange selection:text-templeBlack overflow-x-hidden">
      {/* Custom interactive cursor */}
      <CustomCursor />
      
      {/* Cinematic particle background */}
      <ParticleBackground />

      {/* Sticky navbar header */}
      <Navbar />

      {/* Page Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Shared Footer component (suppressed on full-screen shorts view) */}
      {!isShortsPage && <Footer />}
    </div>
  );
}

export default App;
