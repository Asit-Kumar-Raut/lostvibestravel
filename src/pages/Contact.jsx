import { Phone, MapPin, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/screenshot_contact.png';
import KonarkWatermark from '../components/KonarkWatermark';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  return (
    <div className="relative pattachitra-pattern min-h-screen pt-28 pb-20 overflow-hidden">
      
      {/* Background Motifs */}
      <KonarkWatermark className="fixed -bottom-20 -left-20 w-[450px] h-[450px]" />
      <KonarkWatermark className="fixed top-20 -right-20 w-[300px] h-[300px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with Fade-In Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-xs font-black uppercase text-saffronOrange tracking-widest mb-2 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-templeYellow animate-pulse" />
            <span>Connect Directly</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-ivoryWhite tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm text-ivoryWhite/60 mt-2">Connect via phone, social media, or explore the location hub.</p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow mx-auto mt-4" />
        </motion.div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Creator profile details & Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* profile card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center space-y-4 shadow-xl hover:border-templeYellow/20 transition-all duration-300"
            >
              <div className="relative">
                {/* Glowing border rings */}
                <div className="absolute inset-0 bg-gradient-to-tr from-jagannathRed via-saffronOrange to-templeYellow rounded-full blur-md opacity-70 animate-pulse" />
                <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-jagannathRed via-saffronOrange to-templeYellow overflow-hidden shadow-xl">
                  <div className="w-full h-full rounded-full bg-templeBlack overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Jashobant Samal Contact profile"
                      className="w-full h-full object-cover scale-105 filter contrast-[1.05]"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-ivoryWhite">Jashobant Samal</h3>
                <span className="text-xs text-saffronOrange font-bold tracking-widest uppercase mt-0.5 block">Photographer & Sketcher</span>
              </div>
              
              <div className="w-12 h-px bg-white/10" />
              
              <p className="text-xs text-ivoryWhite/65 leading-relaxed max-w-sm">
                Available for bookings, collaborations, travel documentaries, custom sketches, and design orders. Feel free to contact using the action links below.
              </p>
            </motion.div>

            {/* Premium Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone Card (Redirects to dialer, hides number in text) */}
              <motion.a
                href="tel:9937860895"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel-glow p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-jagannathRed/10 border border-jagannathRed/30 text-jagannathRed group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-ivoryWhite uppercase tracking-wide">Call Creator</h4>
                  <span className="text-xs font-bold text-templeYellow tracking-wider block mt-1 hover:underline">Open Mobile Dialer</span>
                </div>
              </motion.a>

              {/* Instagram Card */}
              <motion.a
                href="https://www.instagram.com/lostvibestravel/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-panel-glow p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-saffronOrange/10 border border-saffronOrange/30 text-saffronOrange group-hover:scale-110 transition-transform duration-300">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-ivoryWhite uppercase tracking-wide">Instagram DM</h4>
                  <span className="text-xs font-bold text-templeYellow tracking-wider block mt-1 hover:underline">@lostvibestravel</span>
                </div>
              </motion.a>

            </div>
          </div>

          {/* Right Column: Google Maps Location Hub */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Embedded Google Map Box */}
            <div className="glass-panel p-5 rounded-3xl border border-white/10 flex flex-col h-full space-y-4 hover:border-templeYellow/20 transition-all duration-300 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-templeYellow font-bold tracking-widest uppercase">
                  <Compass size={14} className="animate-spin-slow text-saffronOrange" />
                  <span>Odisha, India</span>
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-ivoryWhite/40 uppercase tracking-widest">
                  <MapPin size={10} className="text-jagannathRed" />
                  <span>Bhubaneswar</span>
                </span>
              </div>
              
              <div className="relative flex-grow min-h-[360px] rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                {/* Embedded google map */}
                <iframe
                  title="Bhubaneswar Odisha Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d119743.41160359871!2d85.75168058204907!3d20.301026047535496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e169540c75%3A0xc3b83b3815e985b4!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1719900000000!5m2!1sen!2sin"
                  className="w-full h-full absolute inset-0 border-0 filter brightness-[0.8] contrast-[1.05]"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
