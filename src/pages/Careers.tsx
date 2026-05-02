import { motion } from 'motion/react';

export default function Careers() {
  return (
    <div className="bg-industrial-bg min-h-screen">
      {/* Intro Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 border-b border-primary px-6 md:px-16 text-center">
        <h1 className="font-headline text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-white">Careers</h1>
        <p className="font-body text-slate-300 max-w-2xl mx-auto uppercase tracking-widest text-xs">
          Join our team of elite engineers
        </p>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="bg-white p-12 border border-outline-v shadow-sm text-center">
          <h2 className="font-headline text-3xl mb-4 uppercase">Open Positions</h2>
          <p className="font-body text-slate-600">
            We currently don't have any open positions. Please check back later.
          </p>
        </div>
      </section>
    </div>
  );
}
