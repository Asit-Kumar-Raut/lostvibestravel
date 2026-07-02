import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 16} height={props.size || 16}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 bg-gradient-to-t from-black via-[#080808] to-templeBlack border-t border-white/5 overflow-hidden">
      {/* Wave animation at the top of the footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] text-white/5"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.7,143,111.41,222.93,101.18c48.81-6.24,96.34-18.72,143.19-27.42C358,74.52,349.8,75,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-jagannathRed to-saffronOrange rounded-lg">
                <span className="text-templeYellow font-black text-sm">LV</span>
              </div>
              <span className="font-extrabold text-lg tracking-wider text-ivoryWhite">
                lostvives<span className="text-templeYellow">Traveler</span>
              </span>
            </div>
            <p className="text-sm text-ivoryWhite/60 leading-relaxed">
              Chasing sunsets & scenic routes. Capturing the divine colors of Odisha and documenting journeys across lands.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.youtube.com/@jasobantasamal-pn2vw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-jagannathRed hover:text-white transition-colors duration-300"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.instagram.com/lostvibestravel/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-saffronOrange hover:text-white transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-templeYellow tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles size={14} className="text-saffronOrange" />
              <span>Explore</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-ivoryWhite/60 hover:text-templeYellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-ivoryWhite/60 hover:text-templeYellow transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/videos" className="text-ivoryWhite/60 hover:text-templeYellow transition-colors">Videos</Link>
              </li>
              <li>
                <Link to="/shorts" className="text-ivoryWhite/60 hover:text-templeYellow transition-colors">Shorts</Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivoryWhite/60 hover:text-templeYellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Designer Profile */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-templeYellow tracking-wider uppercase flex items-center gap-1.5">
              <span>Website Designer</span>
            </h3>
            <p className="text-sm text-ivoryWhite/60 leading-relaxed">
              Designed & Developed by **Asit Kumar Raut**.
            </p>
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/asit-kumar-raut-275845322/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-skyBlue/20 to-skyBlue/10 hover:from-skyBlue/30 hover:to-skyBlue/20 text-skyBlue text-xs font-bold uppercase rounded-lg border border-skyBlue/20 transition-all duration-300"
              >
                <Linkedin size={14} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-ivoryWhite/40">
          <p>© {new Date().getFullYear()} LostVibesTravel. Made with ❤️ in Odisha.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="https://www.youtube.com/@jasobantasamal-pn2vw" target="_blank" rel="noopener noreferrer" className="hover:text-templeYellow transition-colors">YouTube Subscribe</a>
            <a href="https://www.instagram.com/lostvibestravel/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-templeYellow transition-colors">Instagram Follow</a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-gradient-to-r hover:from-jagannathRed hover:to-saffronOrange hover:text-white transition-all text-ivoryWhite border border-white/5"
            >
              <span>Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
