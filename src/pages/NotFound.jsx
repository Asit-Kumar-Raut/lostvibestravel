import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import KonarkWatermark from '../components/KonarkWatermark';

export default function NotFound() {
  return (
    <div className="relative pattachitra-pattern min-h-screen flex items-center justify-center pt-20">
      
      {/* Slow spinning Konark background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <KonarkWatermark className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]" />
      </div>

      <div className="max-w-md mx-auto text-center px-4 relative z-10 space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-jagannathRed/10 border border-jagannathRed/30 text-jagannathRed animate-bounce">
          <Compass size={32} />
        </div>
        
        <h1 className="text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-ivoryWhite">Lost in the Vibe?</h2>
        
        <p className="text-sm text-ivoryWhite/60 leading-relaxed">
          The scenic route you followed seems to have led you off the map. Let us guide you back to the sanctuary.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-jagannathRed to-saffronOrange text-ivoryWhite rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all duration-300"
          >
            <Home size={14} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
