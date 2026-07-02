import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Camera, Image, Compass, Flame, ArrowDown, MapPin, Eye, Star, Heart } from 'lucide-react';
import KonarkWatermark from '../components/KonarkWatermark';

export default function Home() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const words = ['Photographer', 'Sketch Artist', 'Gamer', 'Traveler'];
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Places Explored', value: '45+' },
    { label: 'Travel Films', value: '18' },
    { label: 'Short Videos', value: '250+' },
    { label: 'Photography Works', value: '1,200+' },
    { label: 'Subscribers', value: '15.4K' },
    { label: 'Years of Journey', value: '6+' },
  ];

  const heritageList = [
    {
      title: 'Konark Sun Temple',
      description: 'The legendary 13th-century chariot temple dedicated to the Sun God Surya, adorned with intricate wheels.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Jagannath Culture',
      description: 'The ancient spiritual heart of Odisha, centered around the mystical Chariot Festival (Ratha Yatra).',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Pattachitra Artistry',
      description: 'Traditional, cloth-based scroll painting exhibiting mythological narratives and floral patterns.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Chilika Lake',
      description: 'Asia’s largest brackish water lagoon, home to Irrawaddy dolphins and millions of migratory birds.',
      image: 'https://images.unsplash.com/photo-1616447833502-3c814138e658?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Similipal Biosphere',
      description: 'A pristine forest reserve filled with lush valleys, towering waterfalls, and royal Bengal tigers.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Tribal Villages',
      description: 'Experiencing the untouched lifestyle and organic heritage of local tribal communities.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      title: 'Chasing Golden Sunsets',
      location: 'Puri Beach',
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      title: 'Mist and Shifting Clouds',
      location: 'Eastern Ghats',
    },
    {
      url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      title: 'Untouchable Wilderness',
      location: 'Similipal',
    },
    {
      url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
      title: 'Ancient Roots',
      location: 'Koraput Valley',
    },
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      title: 'Scenic Roads & Trails',
      location: 'Daringbadi',
    },
    {
      url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
      title: 'Breathtaking Waterfalls',
      location: 'Barehipani',
    },
  ];

  const stories = [
    {
      title: 'Documenting the Chariots of Puri',
      desc: 'An immersive photologue capturing the wooden crafts and spiritual energy of the annual Ratha Yatra festival.',
      category: 'Culture',
      date: 'June 2026',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Chasing the Sunset in Chilika Lagoon',
      desc: 'Boating past tranquil waters to photograph red crabs, dolphins, and the floating fishing villages.',
      category: 'Adventure',
      date: 'April 2026',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Debabrata Das',
      role: 'Cultural Historian',
      comment: 'The visual storytelling captures the essence of Odisha heritage without feeling cliché. A masterpiece of travel documentation!',
      rating: 5,
    },
    {
      name: 'Sneha Mohanty',
      role: 'Art Collector',
      comment: 'The sketches are incredibly detailed, and the photography shows angles of Chilika I had never seen before.',
      rating: 5,
    },
    {
      name: 'Rohan Sharma',
      role: 'Vlogger',
      comment: 'This is the benchmark for travel portfolio design. The reels and YouTube shorts integration is exceptionally smooth.',
      rating: 5,
    },
  ];

  return (
    <div className="relative pattachitra-pattern min-h-screen">
      
      {/* Konark background watermark */}
      <KonarkWatermark className="fixed -bottom-20 -right-20 w-[450px] h-[450px] md:w-[600px] md:h-[600px]" />
      <KonarkWatermark className="fixed -top-20 -left-20 w-[300px] h-[300px] opacity-[0.02]" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Cinematic Overlay & Glowing Orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-templeBlack z-10" />
        
        {/* Rotating colorful gradient spots */}
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-jagannathRed/15 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-saffronOrange/10 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-20 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider text-templeYellow uppercase">
              <Flame size={14} className="text-saffronOrange animate-pulse" />
              <span>Chasing Sunsets & Scenic Routes</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-ivoryWhite">
              LOST VIBES
              <span className="block mt-2 bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(193,18,31,0.3)]">
                TRAVEL
              </span>
            </h1>
          </motion.div>

          {/* Typing animation block */}
          <div className="h-10 flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl text-ivoryWhite/80 font-medium">
              Every journey tells a story of a{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWordIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="font-bold text-templeYellow"
                >
                  {words[activeWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/videos"
              className="flex items-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-jagannathRed to-saffronOrange text-ivoryWhite rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-jagannathRed/30 transition-all duration-300"
            >
              <span>Watch Journey</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 px-8 py-3.5 bg-white/5 border border-white/10 text-ivoryWhite hover:bg-white/10 rounded-full font-bold tracking-wide transition-all duration-300"
            >
              <span>Meet The Artist</span>
            </Link>
          </motion.div>

          {/* Down Arrow / Mouse Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase font-bold tracking-widest text-ivoryWhite/60">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-5 h-8 border-2 border-ivoryWhite/40 rounded-full flex justify-center pt-1"
            >
              <div className="w-1.5 h-1.5 bg-templeYellow rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 relative z-20 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel-glow p-6 rounded-2xl text-center cursor-default"
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-templeYellow to-saffronOrange mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-ivoryWhite/60 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Odisha Heritage Cards */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase text-saffronOrange tracking-widest mb-2 flex items-center justify-center gap-2">
              <Compass size={14} className="animate-spin-slow text-templeYellow" />
              <span>Odisha Kalakriti</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-ivoryWhite">
              Inspiring Heritage & Traditions
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heritageList.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[380px] rounded-2xl overflow-hidden glass-panel border border-white/15"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-[0.3] transition-all"
                  />
                </div>
                
                {/* Inner Pattern Borders (Sambalpuri/Pattachitra style) */}
                <div className="absolute inset-4 border border-white/5 group-hover:border-templeYellow/20 transition-colors pointer-events-none rounded-xl" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <span className="text-[10px] text-templeYellow font-bold tracking-widest uppercase mb-1.5">Culture & Arts</span>
                  <h4 className="text-2xl font-black text-ivoryWhite group-hover:text-templeYellow transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-ivoryWhite/75 mt-2 line-clamp-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-xs text-saffronOrange font-bold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                    <span>Read More</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery (Masonry Layout) */}
      <section className="py-24 relative z-20 bg-black/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between mb-16">
            <div>
              <h2 className="text-xs font-black uppercase text-saffronOrange tracking-widest mb-1 flex items-center gap-2">
                <Camera size={14} />
                <span>Captured Moments</span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-ivoryWhite">
                Scenic Sunsets & Visual Tales
              </h3>
            </div>
            <Link
              to="/about"
              className="mt-4 sm:mt-0 inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-templeYellow text-xs font-bold uppercase text-ivoryWhite hover:text-templeYellow transition-all duration-300"
            >
              <span>Meet Photographer</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Masonry-like Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden glass-panel border border-white/5 group cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay Card Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-1 text-[10px] text-templeYellow font-bold tracking-widest uppercase mb-1">
                    <MapPin size={10} />
                    <span>{image.location}</span>
                  </div>
                  <h4 className="text-lg font-bold text-ivoryWhite">{image.title}</h4>
                  
                  <div className="mt-3 flex items-center justify-between text-xs text-ivoryWhite/60">
                    <span className="flex items-center gap-1"><Eye size={12} /> View Details</span>
                    <span className="flex items-center gap-1 text-jagannathRed"><Heart size={12} fill="currentColor" /> Love</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase text-saffronOrange tracking-widest mb-2 flex items-center justify-center gap-2">
              <Image size={14} />
              <span>Travel Logs</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-ivoryWhite">
              Featured Travel Stories
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {stories.map((story) => (
              <div key={story.title} className="glass-panel rounded-2xl overflow-hidden border border-white/5 group hover:border-white/10 transition-colors duration-300">
                <div className="h-[260px] overflow-hidden relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-saffronOrange text-templeBlack rounded-full">
                    {story.category}
                  </span>
                </div>
                <div className="p-8 space-y-3">
                  <div className="text-xs text-ivoryWhite/50 font-bold uppercase tracking-wider">
                    {story.date}
                  </div>
                  <h4 className="text-2xl font-bold text-ivoryWhite group-hover:text-templeYellow transition-colors duration-300">
                    {story.title}
                  </h4>
                  <p className="text-sm text-ivoryWhite/60 leading-relaxed line-clamp-2">
                    {story.desc}
                  </p>
                  <Link
                    to="/videos"
                    className="inline-flex items-center space-x-1.5 text-xs text-saffronOrange font-bold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform duration-300 pt-2"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-20 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold text-ivoryWhite">Voices of the Vibe Community</h3>
            <p className="text-sm text-ivoryWhite/60 mt-2">What historians, photographers, and visitors have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-panel-glow p-8 rounded-2xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-templeYellow">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-ivoryWhite/80 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>
                
                <div>
                  <div className="font-bold text-ivoryWhite">{t.name}</div>
                  <div className="text-xs text-saffronOrange">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-templeBlack"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
              <div className="p-6 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center gap-1.5 text-xs text-templeYellow font-bold tracking-widest uppercase mb-1">
                  <MapPin size={12} />
                  <span>{lightboxImage.location}</span>
                </div>
                <h4 className="text-xl font-bold text-ivoryWhite">{lightboxImage.title}</h4>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/85 text-white p-2 rounded-full transition-colors border border-white/10"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
