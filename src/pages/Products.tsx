import { motion } from 'motion/react';
import { Filter, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'v-800',
    name: 'V-800 High Torque',
    description: 'Advanced 3-phase induction motor designed for heavy mining operations and material handling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw1TIrb68bPfuXygtktvyeFcK41L67TatHkjFl0qHIH617hWce1_jPCabH_j7eE7LbYvJeUtI6M88ZWkNceYR4RQwckfXbNQvKqDWuuzmDT7U0QCh1PKHBKShzBwm5nlpV0er5iajdu8YOUndW1eCrNyToMCq22twzOt_tj05TI6CD7CDvkQ8jkIKed1Cb2RFB8118On8jlkP-1Te0CifkArYoY8FcyDwvjfEAJabXJNj9yLPsN4rURZAWDdS0DRbk9DxaSv3R5Ng',
    tag: 'NEW SERIES',
    specs: [
      { label: 'Voltage', value: '480V AC' },
      { label: 'Power', value: '150 kW' }
    ]
  },
  {
    id: 'nexus-vfd',
    name: 'Nexus VFD Controller',
    description: 'Smart frequency control with integrated IoT diagnostics for predictive maintenance cycles.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM0AghVwWziF4q__vIA2YP5CCoc_ZDCOlKuDF-STnMbykF67Zt3asuN-M5EQHVL0975TewlUCET8BkjnN19UB-IN7fpE_hnqGG7vR3XVFsSbWuO9mUyJZpGMD27cXWmdOzm6SRkXxluzWK6D8bo3jSDxOlctL8RS3_eHk1U5n5wMro4mi0G8f4rLWZle2N9OOr-g2WIg3i9O0R8EC4h0IKaENwiHTmihJfKQdYstMJVCr1eSwopc5FhlKOgcMG0RdmWESHHV5lb2U',
    tag: 'BESTSELLER',
    tagColor: 'bg-primary-light',
    specs: [
      { label: 'Phase', value: 'Triple / Single' },
      { label: 'IP Rating', value: 'IP67 Waterproof' }
    ]
  },
  {
    id: 'titan-x-gen',
    name: 'Titan X-Gen Inverter',
    description: 'High-efficiency DC-AC conversion module optimized for grid-scale solar array installations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9EvmcQ2b0mVlcwjfva04PrLMcnK-gefCc-Ef5EMLGCFPHZfIRyutXbU0eN5FBeZJOLfEVhJMcXIRj5RvV0apu9pKte7HX7W0SyDn9Gt2oLPV7pRxOZrpTaItFT9gAI8GxuGpnao01RFIQZ9R0Z9MPYM66kgxM_76J1m_xWmT4lMFlNE6cFIOD6IIJrdN9bX04FUL1g3bDVfgV9ADYU4-hMAfY1hgr0UF_rRmZdnfJuYnND96BKnd3Q5dpFL6DmmiqqyZePDERDBw',
    specs: [
      { label: 'Efficiency', value: '98.4% Peak' },
      { label: 'Output', value: '500 kW Max' }
    ]
  },
  {
    id: 'core-s',
    name: 'Core-S Synchronous',
    description: 'Compact synchronous motor with permanent magnet technology for robotics and automation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb7L5LQzkZ6tTsZa30PTzlt35FBhbCrkj1FkLuYh1L8g4ae2QTPVl-oJ1NcF0b__EJ8vEXC7mb3omMX6FSBghwjhCLGwjgF30s87DBVoHK5OTGbBwF55CcWh-XCabTXNz5kLPosJgGDWkTKOkEveH6VQfvBFLiQ62dowAuH7FTDJ46MOvTujQ77AjAYPx4TdZeaWoHqu0Vgbv0jF52A_gkZxr0Z-qFAW6gS3-qK4vuerKN4NzXCy3VZIBbnThlQFztX2vMWhUk3qU',
    specs: [
      { label: 'RPM Range', value: '0 - 3000' },
      { label: 'Precision', value: '0.01 Degree' }
    ]
  },
  {
    id: 'sentinel-circuit',
    name: 'Sentinel Circuit Pro',
    description: 'Main distribution protection units with digital arc flash detection and isolation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2YBiv2YwJ9m2lYiMQ9XrFVWcRcO5BQKXWsFE6TMwMYFwoTw4iYivur3ebs4pJj5S8rPNDaEws79DHFr06E9t_NokK14_jqC0hhlNgmekPspsgF4dTA-iUPWCAKAnkoESgNvUl_pRJ9TX2wxVGZaOvePc6Ekcb6bVf8-aWRaXaId2a5Ub90Mk-V9qLlzPJoELXcFO-KYh-YBo-QsmvBjyA60i1ki0aqEI9_SJPk0lCOImD5p-ln_X66VSFkW5wKFDBX28NfGXQ-HA',
    tag: 'LIMIT-EDITION',
    tagColor: 'bg-red-600',
    specs: [
      { label: 'Current', value: 'Up to 4000A' },
      { label: 'Standards', value: 'IEC / UL / ANSI' }
    ]
  },
  {
    id: 'volt-cell-bess',
    name: 'Volt-Cell BESS',
    description: 'Modular Battery Energy Storage System for peak-shaving and backup power redundancy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgh1HRQeZRK9cLin4c8WUtVz2TsMpz_ywdKaC4oqgXTE_gF0hQrkIM8SHLPCU2U1UcMAPKhO6w0hdzg_3S_anIDYHDPi2zDgNDmXj8fjAm9QKKDKYNCgahC-UKXaWOsnZ9o7em7NsfYiDgj5V6Gj8gt6ypO8OzMHzlhxYnieD_DlR1A8_vicqoFR9ZRLz118a2CylqOboUJ5aUsw1T9rbQ1lfnbQ0Y1wYoDp3vowKkiJPXUALPQR-lubCedMc35qpBkCXnlQBt19A',
    specs: [
      { label: 'Capacity', value: '1.2 MWh Unit' },
      { label: 'Cycle Life', value: '8000+ Cycles' }
    ]
  }
];

export default function Products() {
  return (
    <main className="max-w-360 mx-auto px-6 md:px-16 py-12 min-h-screen">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="font-headline text-3xl md:text-5xl text-charcoal mb-2 uppercase">Industrial Solutions</h1>
        <p className="font-body text-base md:text-lg text-slate-500 max-w-2xl">
          Precision-engineered electrical components designed for maximum durability in high-demand industrial environments.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Category */}
            <div>
              <h3 className="font-headline text-xs font-bold text-charcoal uppercase mb-4 pb-2 border-b border-outline-v tracking-widest">
                Category
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'All Products', count: 42 },
                  { name: 'Motors', count: 18, active: true },
                  { name: 'Controllers', count: 12 },
                  { name: 'Inverters', count: 8 }
                ].map((cat) => (
                  <li key={cat.name} className="flex items-center justify-between group cursor-pointer">
                    <span className={`font-body text-sm transition-colors ${cat.active ? 'text-primary font-bold' : 'text-slate-500 group-hover:text-primary'}`}>
                      {cat.name}
                    </span>
                    <span className={`text-[10px] font-headline font-bold px-2 py-0.5 ${cat.active ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Power Rating */}
            <div>
              <h3 className="font-headline text-xs font-bold text-charcoal uppercase mb-4 pb-2 border-b border-outline-v tracking-widest">
                Power Rating
              </h3>
              <div className="space-y-3">
                {['Below 50kW', '50kW - 250kW', 'Above 250kW'].map((rate) => (
                  <label key={rate} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-outline-v flex items-center justify-center group-hover:border-primary transition-colors">
                      {rate === '50kW - 250kW' && <div className="w-2 h-2 bg-primary"></div>}
                    </div>
                    <span className="font-body text-sm text-slate-600 group-hover:text-charcoal transition-colors">
                      {rate}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Application */}
            <div>
              <h3 className="font-headline text-xs font-bold text-charcoal uppercase mb-4 pb-2 border-b border-outline-v tracking-widest">
                Application
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Heavy Manufacturing' },
                  { name: 'Renewable Energy', active: true },
                  { name: 'Mining' },
                  { name: 'HVAC Systems' }
                ].map((app) => (
                  <span
                    key={app.name}
                    className={`px-3 py-1 text-[10px] font-headline font-bold uppercase cursor-pointer transition-colors ${
                      app.active ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 hover:bg-primary-light hover:text-white'
                    }`}
                  >
                    {app.name}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full border border-primary text-primary font-headline text-[10px] font-bold py-3 hover:bg-primary hover:text-white transition-all uppercase tracking-widest">
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <span className="font-body text-xs italic text-slate-400">Showing 1-6 of 18 Motors</span>
            <div className="flex items-center gap-4">
              <span className="font-headline text-[10px] font-bold uppercase tracking-tighter text-slate-500">Sort By:</span>
              <select className="bg-transparent border-none font-headline text-xs font-bold text-primary focus:ring-0 cursor-pointer p-0 uppercase">
                <option>Newest Arrivals</option>
                <option>Power (High to Low)</option>
                <option>Efficiency Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-100 p-6 group flex flex-col h-full hover:border-primary transition-all duration-300 relative"
              >
                <Link to={`/products/${product.id}`} className="absolute inset-0 z-10" />
                <div className="relative mb-6 overflow-hidden aspect-square border border-slate-50">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    alt={product.name}
                    src={product.image}
                  />
                  {product.tag && (
                    <div className={`absolute top-2 left-2 ${product.tagColor || 'bg-navy'} text-white px-2 py-1 text-[8px] font-headline font-bold tracking-widest uppercase`}>
                      {product.tag}
                    </div>
                  )}
                </div>
                <h4 className="font-headline text-lg text-charcoal mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">
                  {product.name}
                </h4>
                <p className="text-slate-500 font-body text-sm mb-6 flex-grow line-clamp-2">
                  {product.description}
                </p>
                <div className="space-y-3 mb-6">
                  {product.specs.map(spec => (
                    <div key={spec.label} className="flex justify-between items-center border-b border-slate-50 pb-2">
                      <span className="font-headline text-[9px] text-slate-400 uppercase tracking-widest">{spec.label}</span>
                      <span className="font-headline text-xs text-charcoal font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-navy text-white font-headline text-[10px] font-bold py-3 uppercase tracking-[0.2em] group-hover:bg-primary transition-all">
                  Technical Specs
                </button>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-slate-200 hover:border-primary text-slate-400 hover:text-primary transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary text-white font-headline font-bold text-xs">
              01
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-slate-200 hover:border-primary text-slate-400 hover:text-primary transition-colors font-headline font-bold text-xs">
              02
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-slate-200 hover:border-primary text-slate-400 hover:text-primary transition-colors font-headline font-bold text-xs">
              03
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-slate-200 hover:border-primary text-slate-400 hover:text-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
