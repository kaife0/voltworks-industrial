import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import homeVid from '../public/home-vid.mp4';
import top1 from '../public/top1.png';
import top2 from '../public/top2.png';
import top3 from '../public/top3.png';
import top4 from '../public/top4.png';
import techBrochure from '../public/Technical Brochure - Q4 FY 24-25.pdf';

// Partner images
import p1 from '../public/image.png';
import p2 from '../public/image (1).png';
import p3 from '../public/image (2).png';
import p4 from '../public/image (3).png';
import p5 from '../public/image (4).png';
import p6 from '../public/image (5).png';
import p7 from '../public/image (6).png';

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'VoltWorks was established by a team of powertrain engineers with a shared vision — to redefine EV performance through intelligent, software-defined drivetrains.',
    metric: 'Day 1',
    metricLabel: 'The Beginning',
    color: '#3b82f6',
    icon: '🚀',
  },
  {
    year: '2019',
    title: 'First Powertrain Prototype',
    description: 'Our first integrated motor-controller unit successfully completed 10,000 km of rigorous road testing, validating our core engineering philosophy.',
    metric: '10K km',
    metricLabel: 'Test Distance',
    color: '#6366f1',
    icon: '⚡',
  },
  {
    year: '2021',
    title: 'OTA Update Platform Launch',
    description: 'Launched our proprietary over-the-air (SOTA) firmware platform, enabling real-time performance improvements for deployed fleets across India and Southeast Asia.',
    metric: '200+',
    metricLabel: 'Vehicles Updated',
    color: '#8b5cf6',
    icon: '📡',
  },
  {
    year: '2022',
    title: 'Cloud Telemetry Integration',
    description: 'Deployed cloud-based telemetry streaming for in-depth vehicle health monitoring, predictive maintenance, and live performance analytics.',
    metric: '1M+',
    metricLabel: 'Data Points/Day',
    color: '#06b6d4',
    icon: '☁️',
  },
  {
    year: '2023',
    title: 'Global Market Expansion',
    description: 'Forged strategic partnerships with leading EV manufacturers across Europe and Asia, bringing VoltWorks technology to international markets.',
    metric: '12+',
    metricLabel: 'Countries Reached',
    color: '#10b981',
    icon: '🌍',
  },
  {
    year: '2024',
    title: 'Next-Gen Kit V3 Released',
    description: 'Launched the V3 powertrain kit — 40% lighter, 25% more efficient, and equipped with AI-driven torque vectoring for unmatched driving dynamics.',
    metric: '40%',
    metricLabel: 'Weight Reduction',
    color: '#f59e0b',
    icon: '🏎️',
  },
];

export default function Home() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  return (
    <div className="flex flex-col bg-[#040a1e]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
        {/* Background video */}
        <video
          src={homeVid}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Multi-layer overlay for premium depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#040a1e]/95 via-[#040a1e]/75 to-[#040a1e]/95" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#040a1e]/90 via-transparent to-[#040a1e]/60" />

        {/* Animated glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none z-10"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none z-10"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Main content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 w-full pt-28 pb-24 md:pt-36 md:pb-32">
          <div className="max-w-4xl">

            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">Software-Defined Powertrain Technology</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Enabling </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
                Smart & Connected
              </span>
              <br />
              <span className="text-white">Electric Vehicles</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-slate-300 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
            >
              Next-generation powertrain kits built on a robust software stack — with OTA updates, real-time cloud telemetry, and AI-driven performance optimization.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center mb-16"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #4338ca)', boxShadow: '0 0 30px rgba(59,130,246,0.35)' }}
              >
                <span className="relative z-10">Get a Demo</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap gap-8 md:gap-12 items-center"
            >
              {[
                { value: '30+', label: 'Years of Innovation' },
                { value: '500+', label: 'Global Installations' },
                { value: '12+', label: 'Countries' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-2xl md:text-3xl font-headline font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">{stat.label}</span>
                </div>
              ))}
              <div className="hidden md:block h-8 w-px bg-slate-700" />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-400 tracking-wide">OTA Updates Active</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent"
          />
        </motion.div>
      </section>


      {/* Trusted & Supported By Section (moved below hero) */}
      <section className="w-full bg-[#040a1e]">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mt-4 md:mt-5 pb-2 md:pb-2 border-b border-slate-800/50">
          <h3 className="text-center text-white font-headline text-base md:text-lg lg:text-xl mb-4 md:mb-6 uppercase tracking-wide font-normal">
            Trusted & Supported By
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-10 lg:gap-x-14 opacity-90 w-full">
            <img src={top1} alt="Top 1 Logo" className="w-24 md:w-32 lg:w-40 object-contain" />
            <img src={top2} alt="Top 2 Logo" className="w-40 md:w-56 lg:w-72 object-contain" />
            <img src={top3} alt="Top 3 Logo" className="w-28 md:w-40 lg:w-48 object-contain" />
            <img src={top4} alt="Top 4 Logo" className="w-24 md:w-32 lg:w-40 object-contain" />
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="relative w-full bg-gradient-to-b from-[#040a1e] via-[#070d28] to-[#040a1e] py-20 md:py-32 overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-4">Our Journey</span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
              Milestones That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Define Us</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              From a bold idea to a global powertrain leader — every step has been engineered with purpose.
            </p>
          </motion.div>

          {/* Timeline rail */}
          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden md:block absolute top-[2.25rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Year dots row */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-0 mb-10">
              {milestones.map((m, i) => (
                <motion.button
                  key={m.year}
                  onClick={() => setActiveMilestone(i)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 group focus:outline-none"
                >
                  {/* Dot */}
                  <div
                    className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: activeMilestone === i
                        ? `radial-gradient(circle, ${m.color}40, ${m.color}15)`
                        : 'rgba(255,255,255,0.04)',
                      border: `2px solid ${activeMilestone === i ? m.color : 'rgba(255,255,255,0.12)'}`,
                      boxShadow: activeMilestone === i ? `0 0 18px ${m.color}60, 0 0 6px ${m.color}40` : 'none',
                    }}
                  >
                    <span className="text-sm">{m.icon}</span>
                    {activeMilestone === i && (
                      <motion.span
                        layoutId="activePulse"
                        className="absolute inset-0 rounded-full"
                        style={{ border: `1.5px solid ${m.color}`, opacity: 0.5 }}
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  {/* Year label */}
                  <span
                    className="font-headline text-xs md:text-sm font-bold tracking-widest transition-all duration-300"
                    style={{ color: activeMilestone === i ? m.color : 'rgba(148,163,184,0.7)' }}
                  >
                    {m.year}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Detail Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                  border: `1px solid ${milestones[activeMilestone].color}30`,
                  boxShadow: `0 0 60px ${milestones[activeMilestone].color}10`,
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: `linear-gradient(90deg, ${milestones[activeMilestone].color}, transparent)` }}
                />
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  {/* Year + icon */}
                  <div className="flex flex-col gap-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                      style={{ background: `${milestones[activeMilestone].color}15`, border: `1.5px solid ${milestones[activeMilestone].color}30` }}
                    >
                      {milestones[activeMilestone].icon}
                    </div>
                    <div>
                      <p className="text-5xl md:text-6xl font-headline font-bold" style={{ color: milestones[activeMilestone].color }}>
                        {milestones[activeMilestone].metric}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-slate-500 mt-1 font-bold">
                        {milestones[activeMilestone].metricLabel}
                      </p>
                    </div>
                  </div>
                  {/* Title + desc */}
                  <div className="md:col-span-2">
                    <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2" style={{ color: milestones[activeMilestone].color }}>
                      {milestones[activeMilestone].year}
                    </p>
                    <h3 className="font-headline text-xl md:text-3xl text-white font-bold mb-4 leading-snug">
                      {milestones[activeMilestone].title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {milestones[activeMilestone].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveMilestone(i => Math.max(0, i - 1))}
                disabled={activeMilestone === 0}
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 transition-all duration-200"
              >
                ←
              </button>
              <div className="flex gap-2 items-center">
                {milestones.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMilestone(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: activeMilestone === i ? '24px' : '6px',
                      height: '6px',
                      background: activeMilestone === i ? milestones[i].color : 'rgba(100,116,139,0.5)',
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveMilestone(i => Math.min(milestones.length - 1, i + 1))}
                disabled={activeMilestone === milestones.length - 1}
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 transition-all duration-200"
              >
                →
              </button>
            </div>
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center max-w-5xl mx-auto px-4">
          <img src={top1} alt="Partner 1" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p1} alt="Partner 2" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p2} alt="Partner 3" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p3} alt="Partner 4" className="h-10 md:h-12 lg:h-14 object-contain mix-blend-multiply md:scale-110 lg:scale-165" />
          <img src={p4} alt="Partner 5" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p5} alt="Partner 6" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          <img src={p6} alt="Partner 7" className="h-10 md:h-12 lg:h-14 object-contain mix-blend-multiply md:scale-110 lg:scale-215" />
          <img src={p7} alt="Partner 8" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="bg-white py-16 md:py-32 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto overflow-hidden" id="about">
        <div className="grid grid-cols-12 gap-6 md:gap-16">
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
      <section className="bg-industrial-bg py-16 px-4 sm:px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
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
