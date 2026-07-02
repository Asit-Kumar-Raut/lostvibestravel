import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  MapPin, 
  Volume2, 
  VolumeX, 
  ChevronUp, 
  ChevronDown, 
  Play,
  Bookmark
} from 'lucide-react';

const SHORTS_IDS = [
  'f9MOor_7mr4', 'IgR3_JYAbuc', 'pGnguvI6O_I', 'GeACqgn8i0U', 'G69nnBlHM5Q',
  '3x74P7Tj2G4', 'XoGw7KpZkp0', 'Ofp4kmKEVM8', 'iNU0RS3gz70', 'LM16SQ8oLEg',
  'xeT0tFtXCu0', 'B54dkQRgbo0', 'duqFzgIVcR4', 'GrsNMO8WZww', 'yQh2ChKaonI',
  'y_WNDzltqCE', 'tynIi-bKW8o', 'uGbgsegSCvw', 'rVzZqc141FA', 'TDNP5BT3Fnc',
  'VAY_AzHoYnU', 'arytmOyLKdo', 'adlEE7zzKKQ', 'kuKAEbvH3vE', '2r614LTOIjY',
  'xnL42HTeo_U', 'r0O3gdjpI2E', 'eJ3aeSKgOoU', '9cydvMGdK_Y', 'obUHLhSdjDk',
  '9edq2zzhPes', 'E44pO-fr4no', 'lX_Juu3C6cY', 'Qy-PftWEeEY', 'VeStAItGKnM',
  'aEAygzuazMY', 'Wo7QzOaiL4s', 'IcE5uVDLDZM', 'W1UJTddfePw', '787F43IHkUw',
  'YyHw4aOmCYU', 'c-fcMvDMans', 'mREBNqqh818', 'MhQ_oOm5Xm4', 'HrJv-UYoIGU',
  'KbhgUojhcdg', 'tjY-bH4VrV8', 'ioCHH51jhIE', 'b-kUkhkmQIo', 'VQ8s_o1LVdA',
  'waSnCywNE_M', '58vO9hpe7fs', 'cx3h_yTqKwE', '5prDuQxiBKA', 'lGjZrC8mW2A'
];

export default function Shorts() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeShortIndex, setActiveShortIndex] = useState(0);
  const [shortLikes, setShortLikes] = useState(
    SHORTS_IDS.reduce((acc, id) => {
      acc[id] = Math.floor(Math.random() * 400) + 120;
      return acc;
    }, {})
  );
  const [likedShorts, setLikedShorts] = useState({});
  const [savedShorts, setSavedShorts] = useState({});

  const containerRef = useRef(null);

  // Detect scroll offset for snap active index
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      const index = Math.round(scrollTop / height);

      if (index !== activeShortIndex && index >= 0 && index < SHORTS_IDS.length) {
        setActiveShortIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeShortIndex]);

  const handleLikeShort = (id) => {
    const isLiked = likedShorts[id];
    setLikedShorts({ ...likedShorts, [id]: !isLiked });
    setShortLikes(prev => ({
      ...prev,
      [id]: isLiked ? prev[id] - 1 : prev[id] + 1
    }));
  };

  const handleSaveShort = (id) => {
    setSavedShorts({ ...savedShorts, [id]: !savedShorts[id] });
  };

  const handleShare = (idx, id) => {
    navigator.clipboard.writeText(`https://youtube.com/shorts/${id}`);
    alert(`Link copied to clipboard for Short Vibe #${idx + 1}`);
  };

  const scrollShort = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const height = container.clientHeight;
    const currentScroll = container.scrollTop;
    
    const targetScroll = direction === 'down' 
      ? currentScroll + height 
      : currentScroll - height;

    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center pt-16 md:pt-20">
      
      {/* Full screen simulator frame */}
      <div className="w-full h-full max-w-[430px] relative bg-[#020202] border-x border-white/5 flex flex-col justify-end">
        
        {/* Navigation & Volume floating overlay */}
        <div className="absolute top-6 right-4 z-30 flex flex-col space-y-3.5">
          <button
            onClick={() => scrollShort('up')}
            disabled={activeShortIndex === 0}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/80 flex items-center justify-center border border-white/10 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronUp size={20} />
          </button>
          <button
            onClick={() => scrollShort('down')}
            disabled={activeShortIndex === SHORTS_IDS.length - 1}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/80 flex items-center justify-center border border-white/10 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronDown size={20} />
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/80 flex items-center justify-center border border-white/10 cursor-pointer"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        {/* Snap scrollable viewport */}
        <div 
          ref={containerRef} 
          className="w-full h-full overflow-y-scroll scroll-snap-type-y-mandatory scrollbar-none"
          style={{
            scrollSnapType: 'y mandatory',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {SHORTS_IDS.map((id, idx) => {
            const isActive = idx === activeShortIndex;
            const likesCount = shortLikes[id] || 0;

            return (
              <div 
                key={id} 
                className="w-full h-full flex-shrink-0 relative flex items-center justify-center bg-black"
                style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always', height: '100%' }}
              >
                {/* Embed YouTube Shorts Player */}
                {isActive ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
                    title={`Short ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full absolute inset-0 object-cover"
                  />
                ) : (
                  /* Placeholder Cover when inactive */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-[#050505] to-[#121212]">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Play size={24} className="text-templeYellow" />
                    </div>
                    <span className="text-[10px] text-ivoryWhite/40 uppercase tracking-widest mt-4">Vibe Short {idx + 1}</span>
                  </div>
                )}

                {/* Dark gradient overlay covering video text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none z-10" />

                {/* Creator info & description overlay */}
                <div className="absolute bottom-8 left-5 right-16 z-20 space-y-2 pointer-events-none">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-jagannathRed to-saffronOrange flex items-center justify-center p-0.5">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-black text-templeYellow">LV</div>
                    </div>
                    <span className="font-extrabold text-sm text-ivoryWhite">@lostvibestravel</span>
                  </div>
                  <p className="text-xs text-ivoryWhite/90 leading-relaxed line-clamp-2">
                    Beautiful scenic routes & sunset vibes across Odisha. Travel film snippet #{idx + 1}. #odisha #lostvibestravel
                  </p>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-templeYellow">
                    <MapPin size={10} />
                    <span>Odisha, India</span>
                  </div>
                </div>

                {/* Sidebar Controls Overlay */}
                <div className="absolute bottom-20 right-4.5 z-20 flex flex-col items-center space-y-6">
                  {/* Like Button */}
                  <button
                    onClick={() => handleLikeShort(id)}
                    className="flex flex-col items-center space-y-1 focus:outline-none cursor-pointer"
                  >
                    <div className={`p-3 rounded-full backdrop-blur-md border transition-all ${
                      likedShorts[id] 
                        ? 'bg-jagannathRed/20 border-jagannathRed text-jagannathRed scale-110' 
                        : 'bg-black/60 border-white/10 text-white/90 hover:text-jagannathRed'
                    }`}>
                      <Heart size={16} fill={likedShorts[id] ? 'currentColor' : 'none'} />
                    </div>
                    <span className="text-[10px] font-bold text-ivoryWhite/80">{likesCount}</span>
                  </button>

                  {/* Comment Button */}
                  <button
                    onClick={() => alert(`Comments overlay disabled for Vibe Short #${idx + 1}`)}
                    className="flex flex-col items-center space-y-1 focus:outline-none cursor-pointer text-white/90 hover:text-templeYellow"
                  >
                    <div className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 transition-colors">
                      <MessageSquare size={16} />
                    </div>
                    <span className="text-[10px] font-bold text-ivoryWhite/80">{Math.floor(likesCount / 8)}</span>
                  </button>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => handleSaveShort(id)}
                    className="flex flex-col items-center space-y-1 focus:outline-none cursor-pointer"
                  >
                    <div className={`p-3 rounded-full backdrop-blur-md border transition-all ${
                      savedShorts[id]
                        ? 'bg-saffronOrange/20 border-saffronOrange text-saffronOrange scale-110'
                        : 'bg-black/60 border-white/10 text-white/90 hover:text-saffronOrange'
                    }`}>
                      <Bookmark size={16} fill={savedShorts[id] ? 'currentColor' : 'none'} />
                    </div>
                    <span className="text-[10px] font-bold text-ivoryWhite/80">{savedShorts[id] ? 'Saved' : 'Save'}</span>
                  </button>

                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(idx, id)}
                    className="flex flex-col items-center space-y-1 focus:outline-none cursor-pointer text-white/90 hover:text-skyBlue"
                  >
                    <div className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 transition-colors">
                      <Share2 size={16} />
                    </div>
                    <span className="text-[10px] font-bold text-ivoryWhite/80">Share</span>
                  </button>
                </div>

                {/* Floating Index indicator */}
                <div className="absolute top-6 left-4 z-30 pointer-events-none">
                  <span className="text-[10px] font-bold bg-black/50 text-templeYellow px-2.5 py-1 rounded-full uppercase border border-white/5">
                    Short {idx + 1} / {SHORTS_IDS.length}
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
