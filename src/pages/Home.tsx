import { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Terminal, Phone, Mail, CheckCircle, PlaySquare } from 'lucide-react';
import homeVid from '../public/home-vid.mp4';
import top1 from '../public/top1.png';
import top2 from '../public/top2.png';
import top3 from '../public/top3.png';
import top4 from '../public/top4.png';
import whyImg from '../public/why.png';
import techBrochure from '../public/Technical Brochure - Q4 FY 24-25.pdf';

// Partner images
import p1 from '../public/image.png';
import p2 from '../public/image (1).png';
import p3 from '../public/image (2).png';
import p4 from '../public/image (3).png';
import p5 from '../public/image (4).png';
import p6 from '../public/image (5).png';
import p7 from '../public/image (6).png';

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
            <img src={top1} alt="Top 1 Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain" />
            <img src={top2} alt="Top 2 Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain" />
            <img src={top3} alt="Top 3 Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain" />
            <img src={top4} alt="Top 4 Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Why VoltWorks Section */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-16 w-full">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-slate-800 mb-16 w-full max-w-360 mx-auto leading-snug">
          Introducing the new era of achieving high quality with cutting edge motors and controllers.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center w-full max-w-360 mx-auto">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Why VoltWorks?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Driven by innovation and a passion for revolutionizing the electric vehicle (EV) industry. Our team of experienced engineers, with expertise gleaned from years of working in Asian and European markets, brings together cutting-edge technology with a deep understanding of real-world needs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We specialize in developing the heart of any EV: the powertrain. This integrated system combines a state-of-the-art motor and controller, designed to optimize performance and efficiency. VoltWorks powertrains are built on a robust software stack, enabling over-the-air (SOTA) updates for continuous improvement. Additionally, real-time data streaming to the cloud allows for in-depth vehicle analysis, ensuring peak performance.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={whyImg} alt="Why VoltWorks Platform Ecosystem" className="w-full max-w-2xl object-contain drop-shadow-sm" />
          </div>
        </div>
      </section>

      {/* Unify & Partner Section */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-16 w-full text-center border-t border-slate-100">
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
          Unify, Track & Empower: Electrify your vehicles
        </h2>
        <p className="text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg">
          Craft the perfect powertrain for your vision. Our cutting-edge technology unlocks unique performance and unmatched safety, tailored to your vehicle's DNA.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center max-w-5xl mx-auto px-4">
          <img src={top1} alt="Partner 1" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p1} alt="Partner 2" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p2} alt="Partner 3" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p3} alt="Partner 4" className="h-10 md:h-12 lg:h-14 object-contain mix-blend-multiply scale-160" />
          <img src={p4} alt="Partner 5" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p5} alt="Partner 6" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p6} alt="Partner 7" className="h-12 md:h-14 lg:h-16 object-contain mix-blend-multiply scale-205" />
          <img src={p7} alt="Partner 8" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
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
            <Link to="/contact" className="bg-primary text-white font-headline text-xs font-bold px-10 py-5 hover:bg-primary-light transition-all uppercase tracking-widest inline-block text-center">
              Schedule Consultation
            </Link>
            <a href={techBrochure} download="Voltworks_Technical_Brochure.pdf" className="border border-slate-700 text-white font-headline text-xs font-bold px-10 py-5 hover:bg-slate-800 transition-all uppercase tracking-widest inline-block text-center">
              Download Technical Catalog
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
