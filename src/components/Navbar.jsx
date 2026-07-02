import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Videos', path: '/videos' },
    { name: 'Shorts', path: '/shorts' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-templeBlack/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative w-9 h-9 flex items-center justify-center bg-gradient-to-tr from-jagannathRed to-saffronOrange rounded-lg overflow-hidden shadow-md shadow-jagannathRed/30 group-hover:scale-105 transition-transform duration-300">
                {/* Custom Minimal Logo Icon combining Camera Lens, Sunrise and Compass */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-templeYellow">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="6" />
                  <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="4" />
                  {/* Rays representing Sunrise / Compass points */}
                  <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="85" x2="50" y2="95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <line x1="5" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <line x1="85" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  {/* Small mountains diagonal path inside */}
                  <path d="M 38 60 L 50 48 L 62 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <marquee 
                scrollamount="3" 
                className="w-32 sm:w-40 font-extrabold text-lg sm:text-xl tracking-wider text-ivoryWhite group-hover:text-templeYellow transition-colors duration-300"
              >
                lostvives<span className="text-templeYellow">Traveler</span>
              </marquee>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1"
                  >
                    <span className={isActive ? 'text-templeYellow' : 'text-ivoryWhite/80 hover:text-templeYellow'}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Social Redirect Buttons (Right Side) */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.youtube.com/@jasobantasamal-pn2vw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase bg-jagannathRed hover:bg-jagannathRed/95 text-ivoryWhite rounded-full shadow-lg shadow-jagannathRed/25 hover:shadow-jagannathRed/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Youtube size={14} className="animate-pulse" />
                <span>Subscribe</span>
              </a>
              <a
                href="https://www.instagram.com/lostvibestravel/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase border border-saffronOrange text-saffronOrange hover:bg-saffronOrange hover:text-templeBlack rounded-full shadow-lg hover:shadow-saffronOrange/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Instagram size={14} />
                <span>Follow</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-ivoryWhite/80 hover:text-templeYellow focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-templeBlack/95 border-b border-white/5 backdrop-blur-lg md:hidden overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-bold tracking-wider uppercase transition-colors ${
                      isActive ? 'text-templeYellow' : 'text-ivoryWhite/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="w-full h-px bg-white/5 my-2" />
              
              <div className="flex flex-col w-full space-y-3 pt-2">
                <a
                  href="https://www.youtube.com/@jasobantasamal-pn2vw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-jagannathRed text-ivoryWhite font-bold rounded-lg"
                >
                  <Youtube size={16} />
                  <span>SUBSCRIBE ON YOUTUBE</span>
                </a>
                <a
                  href="https://www.instagram.com/lostvibestravel/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 border border-saffronOrange text-saffronOrange font-bold rounded-lg"
                >
                  <Instagram size={16} />
                  <span>FOLLOW ON INSTAGRAM</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
