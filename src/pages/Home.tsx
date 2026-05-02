import { useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal, Phone, Mail, CheckCircle, PlaySquare } from 'lucide-react';
import homeVid from '../public/home-vid.mp4';
// I'll create a simple icon mapper or just use the icons directly

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };
  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div className="flex flex-col bg-[#040a1e]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:min-h-[850px] bg-[#040a1e] overflow-hidden flex flex-col justify-center pt-24 pb-16">
        <div className="relative z-10 max-w-360 mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left"
          >
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-6 font-bold leading-tight tracking-tight">
              Enabling smart and connected electric vehicles through software defined powertrain kits
            </h1>
            <p className="font-body text-sm md:text-base lg:text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Experience the future of EV design. Our software-defined powertrain kits empower you to build smarter, connected electric vehicles. Start your revolution today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#002f6c] text-white font-sans text-[10px] md:text-xs font-bold px-8 py-3 rounded-full hover:bg-[hover:bg-[#00429c]] transition-all border border-[#004f98] uppercase tracking-widest shadow-lg shadow-blue-900/20">
                GET A DEMO
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group w-full max-w-[600px] mx-auto aspect-video md:aspect-[4/3] bg-slate-900 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer border border-slate-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Play icon hint */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 group-hover:opacity-0 transition-opacity duration-300">
               <div className="bg-black/40 rounded-full p-4 backdrop-blur-sm">
                 <PlaySquare className="text-white" size={32} />
               </div>
            </div>
            {/* The Video (Shows first frame by default, plays on hover) */}
            <video
              ref={videoRef}
              src={homeVid}
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover z-0 bg-slate-900"
            />
          </motion.div>
        </div>

        {/* Trusted & Supported By Section */}
        <div className="w-full max-w-360 mx-auto px-6 md:px-16 mt-24 md:mt-32 pb-8 border-b border-slate-800/50">
          <h3 className="text-center text-white font-headline text-lg md:text-2xl mb-12 uppercase tracking-wide font-normal">
            Trusted & Supported By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24 opacity-90">
            {/* ST life.augmented */}
            <div className="flex flex-col items-center">
              <span className="text-[#39b4e6] text-4xl md:text-5xl font-bold tracking-tighter italic">ST</span>
              <span className="text-[#39b4e6] font-sans text-[8px] md:text-[10px] mt-1 font-light tracking-wide">life.augmented</span>
            </div>
            
            {/* IIT Kanpur / SIIC */}
            <div className="flex items-center gap-3 text-white text-left">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-[10px] md:text-xs font-bold shrink-0">IITK</div>
              <div className="text-[8px] md:text-[10px] font-bold leading-tight font-sans tracking-wide">
                STARTUP<br />
                INCUBATION AND<br />
                INNOVATION<br />
                CENTRE<br />
                IIT KANPUR
              </div>
            </div>

            {/* IIT Indore ace Foundation */}
            <div className="flex items-center gap-3 text-white text-left">
              <div className="text-[#e22d4c] font-bold text-3xl md:text-4xl leading-none italic pr-1">ace</div>
              <div className="text-[8px] md:text-[10px] font-bold leading-tight font-sans tracking-wide">
                IIT INDORE<br />
                Foundation
              </div>
            </div>

            {/* Citibank */}
            <div className="flex items-center font-sans text-2xl md:text-3xl font-medium tracking-tight text-[#2c82c9]">
              citi<span className="font-light text-[#294c73]">bank</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-16 max-w-360 mx-auto" id="about">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <span className="font-headline text-primary text-xs font-bold mb-4 block tracking-widest uppercase">
              OUR PURPOSE
            </span>
            <h2 className="font-headline text-2xl md:text-4xl mb-8 uppercase leading-tight">
              ENGINEERING RELIABILITY FOR A HIGH-VOLTAGE FUTURE.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <p className="font-body text-lg text-on-surface-v">
              Voltworks Industrial stands at the intersection of traditional craftsmanship and digital innovation. We design power distribution systems that form the backbone of modern infrastructure, ensuring efficiency, safety, and unwavering performance in the most demanding environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-outline-v">
              <div>
                <h3 className="font-headline text-xl mb-4 uppercase">OUR MISSION</h3>
                <p className="font-body text-slate-600">
                  To empower global industries with precision-engineered electrical solutions that prioritize durability and technical excellence above all else.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl mb-4 uppercase">OUR HISTORY</h3>
                <p className="font-body text-slate-600">
                  Founded in a small technical workshop, we have grown into a global leader in high-voltage engineering, maintaining our core values of integrity and meticulous design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-industrial-bg py-24 px-6 md:px-16">
        <div className="max-w-360 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-12 border border-outline-v/30 flex flex-col justify-between aspect-square md:aspect-auto">
              <span className="text-5xl md:text-6xl font-headline text-primary">30+</span>
              <p className="font-headline text-[10px] font-bold mt-8 tracking-widest uppercase text-slate-500">
                YEARS OF INNOVATION
              </p>
            </div>
            <div className="bg-navy text-white p-12 col-span-1 md:col-span-2 flex flex-col justify-between">
              <p className="font-body text-lg md:text-xl opacity-80 italic leading-relaxed">
                "Precision is not just a standard; it's our foundational philosophy. At Voltworks, every component is a testament to our commitment to industrial excellence."
              </p>
              <p className="font-headline text-[10px] font-bold mt-8 text-primary tracking-widest uppercase">
                CHIEF TECHNICAL OFFICER
              </p>
            </div>
            <div className="bg-white p-12 border border-outline-v/30 flex flex-col justify-between aspect-square md:aspect-auto">
              <span className="text-5xl md:text-6xl font-headline text-primary">500+</span>
              <p className="font-headline text-[10px] font-bold mt-8 tracking-widest uppercase text-slate-500">
                GLOBAL INSTALLATIONS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-24 px-6 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-2xl mx-auto"
        >
          <h2 className="font-headline text-2xl md:text-3xl text-white uppercase mb-6 leading-tight">
            Ready to Optimize Your Infrastructure?
          </h2>
          <p className="font-body text-base md:text-lg text-slate-400 mb-10">
            Consult with our engineering team to design a custom solution for your facility's power and control needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-white font-headline text-xs font-bold px-10 py-5 hover:bg-primary-light transition-all uppercase tracking-widest">
              Schedule Consultation
            </button>
            <button className="border border-slate-700 text-white font-headline text-xs font-bold px-10 py-5 hover:bg-slate-800 transition-all uppercase tracking-widest">
              Download Technical Catalog
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
