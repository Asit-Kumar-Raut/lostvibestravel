import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Camera, Palette, Gamepad, Cpu, Heart, CheckCircle } from 'lucide-react';
import KonarkWatermark from '../components/KonarkWatermark';
import profileImage from '../assets/screenshot_contact.png';

export default function About() {
  
  const skills = [
    { name: 'Cinematic Photography', level: 92, icon: <Camera size={16} /> },
    { name: 'Odisha Pattachitra & Sketches', level: 85, icon: <Palette size={16} /> },
    { name: 'Travel Videography', level: 88, icon: <Compass size={16} /> },
    { name: 'Drone Aerials', level: 80, icon: <Cpu size={16} /> },
    { name: 'Immersive Gaming', level: 75, icon: <Gamepad size={16} /> },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Spark & Solitary Walks',
      desc: 'Began exploring the untouched parts of Odisha during local travels. Picked up the first DSLR to document temple motifs.',
    },
    {
      year: '2022',
      title: 'Merging Sketching and Camera',
      desc: 'Merged traditional pencil sketching with photography. Started sharing traveling sketches online under the tag LostVibesTravel.',
    },
    {
      year: '2024',
      title: 'YouTube & Vlogging Venture',
      desc: 'Launched YouTube vlogging to capture Odisha’s scenic routes, sunset viewpoints, and local historical structures.',
    },
    {
      year: '2026',
      title: 'Creative Heritage Expedition',
      desc: 'Undertaking visual research on Lord Jagannath chariot construction, local artisans, and wildlife conservation zones in Similipal.',
    },
  ];

  return (
    <div className="relative pattachitra-pattern min-h-screen pt-28 pb-20">
      
      {/* Background decoration */}
      <KonarkWatermark className="fixed -bottom-20 -left-20 w-[450px] h-[450px]" />
      <KonarkWatermark className="fixed -top-20 -right-20 w-[300px] h-[300px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-xs font-black uppercase text-saffronOrange tracking-widest mb-2 flex items-center justify-center gap-2">
            <Award size={14} className="text-templeYellow animate-pulse" />
            <span>Meet The Creator</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-ivoryWhite">
            About Jashobant Samal
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow mx-auto mt-4" />
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Picture Box */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-tr from-jagannathRed via-saffronOrange to-templeYellow shadow-2xl shadow-jagannathRed/30 overflow-hidden">
              <div className="w-full h-full rounded-full bg-templeBlack overflow-hidden relative group">
                <img
                  src={profileImage}
                  alt="Jashobant Samal profile picture"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.95]"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80';
                  }}
                />
                
                {/* Decorative Sambalpuri circle outline */}
                <div className="absolute inset-2 border-2 border-dashed border-templeYellow/30 rounded-full animate-spin-slow pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ivoryWhite to-white/70">
              "Chasing Sunsets, Scenic Routes, and Temple Motifs."
            </h3>
            
            <p className="text-base text-ivoryWhite/70 leading-relaxed">
              Hello, I am Jashobant Samal, a Photographer, Sketch Artist, and Gamer based out of Odisha. Through **LostVibesTravel**, I try to document the stories and visuals that lie off the beaten paths. Whether it is capturing the early morning sun rising over the Bay of Bengal, sketching the delicate details of temple carvings, or exploring imaginary landscapes in games, the driving force is the same: capturing true, authentic vibes.
            </p>

            <p className="text-base text-ivoryWhite/70 leading-relaxed">
              Odisha is a treasure of culture, spirituality, and natural beauty. From the pristine beaches of Puri to the deep forests of Similipal and the architectural miracle of the Konark Sun Temple, my mission is to capture and share these narratives in high fidelity using modern design, cinematic videos, and detailed scroll art.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-peacockGreen" />
                <span className="text-sm font-bold text-ivoryWhite/80">Adventure Lover</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-peacockGreen" />
                <span className="text-sm font-bold text-ivoryWhite/80">Nature Storyteller</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-peacockGreen" />
                <span className="text-sm font-bold text-ivoryWhite/80">Heritage Archivist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-peacockGreen" />
                <span className="text-sm font-bold text-ivoryWhite/80">Sunset Observer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skill progress bars & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-ivoryWhite">Creative & Technical Expertise</h3>
            <p className="text-sm text-ivoryWhite/60 leading-relaxed">
              Blending traditional handcrafted sketches with high-end camera equipment, drone operations, and high-framerate gaming.
            </p>
            
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="flex items-center gap-2 text-ivoryWhite">
                      <span className="text-saffronOrange">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                    <span className="text-templeYellow">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-panel-glow p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-jagannathRed/10 text-jagannathRed border border-jagannathRed/30">
                <Heart size={20} />
              </div>
              <h4 className="text-lg font-bold text-ivoryWhite">Our Mission</h4>
              <p className="text-xs text-ivoryWhite/60 leading-relaxed">
                To capture and document the remote routes, local architecture, and organic lifestyles of Odisha to celebrate regional identity globally.
              </p>
            </div>

            <div className="glass-panel-glow p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-saffronOrange/10 text-saffronOrange border border-saffronOrange/30">
                <Compass size={20} />
              </div>
              <h4 className="text-lg font-bold text-ivoryWhite">Our Vision</h4>
              <p className="text-xs text-ivoryWhite/60 leading-relaxed">
                To create a hybrid physical-digital archives of sketches and documentaries, connecting ancient craftsmanship with contemporary audiences.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline of Journey */}
        <div className="max-w-3xl mx-auto space-y-10">
          <h3 className="text-2xl font-black text-center text-ivoryWhite">Timeline of the Journey</h3>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Year tag left layout for desktop */}
                <div className="hidden md:block absolute right-[100%] top-0 mr-8 text-right">
                  <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-templeYellow to-saffronOrange">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-saffronOrange border border-templeBlack ring-4 ring-saffronOrange/20 animate-pulse" />

                {/* Content */}
                <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-2">
                  <span className="inline-block md:hidden text-sm font-black text-templeYellow mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-extrabold text-ivoryWhite">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-ivoryWhite/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
