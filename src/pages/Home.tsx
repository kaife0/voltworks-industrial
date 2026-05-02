import { motion } from 'motion/react';
import { Terminal, Phone, Mail, CheckCircle } from 'lucide-react';
// I'll create a simple icon mapper or just use the icons directly

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[870px] bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60"
            alt="Industrial motor assembly"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKZwW-IE6GkdJcXjxCwK2CLxSVHQnHCZPH5h1RaIWqclgdyQqjON2nUxbcu8GUzNDED-mcIXEWcrM7ccbs6YrzchiMTVfYpExAOlVZs0K5KDxDp_bwUVe6n0jfapVkfXWuaK6tXvB-Y9tw_9TL4tgcBMBT3F3djxXa1BJTMGJQRndWGk0TghpsA9yJ8XHYVfJIjfMT-5hsxjdA1WOiKCbagV89cq8DC9Uqt3nMEgLjf-9wKfZ0XwjoOzfIYkUlc3x0y6PmUsSHgbM"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-360 mx-auto px-6 md:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="bg-white/10 backdrop-blur-sm text-primary-light font-headline text-[10px] md:text-xs font-bold px-4 py-1 inline-block mb-6 tracking-widest uppercase">
              ESTABLISHED 1994
            </span>
            <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl text-white mb-6 uppercase leading-tight">
              Powering the Next <br className="hidden md:block" /> Generation of Industry
            </h1>
            <p className="font-body text-base md:text-lg text-slate-200 mb-10 max-w-xl">
              High-performance motor systems and advanced controllers engineered for maximum efficiency, durability, and precision control in demanding industrial environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white font-headline text-xs font-bold px-8 py-4 hover:bg-primary-light transition-all uppercase tracking-widest">
                Explore Product Line
              </button>
              <button className="border border-white text-white font-headline text-xs font-bold px-8 py-4 hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest">
                Technical Specs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-360 mx-auto" id="about">
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
