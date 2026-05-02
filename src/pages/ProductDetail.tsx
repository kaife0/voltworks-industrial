import { motion } from 'motion/react';
import { ChevronRight, ZoomIn, Box, FileText, Download, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  // Mock data for the VX-9000 as representative
  const product = {
    name: 'VX-9000 INDUSTRIAL MOTOR',
    series: 'HIGH-TORQUE AC SERIES',
    description: 'Engineered for heavy-duty manufacturing and precision automation. The VX-9000 delivers unparalleled reliability with a peak efficiency rating of IE5, designed to operate in extreme thermal environments.',
    tags: ['480V STANDARD', 'IP66 RATED', 'IE5 EFFICIENCY'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb7RWyiFSdYuZ3UU2qz8dF53kQoX_9YdGer72xnksPQp4He8SfUekQlniFMfIX9x8Z90oqx2aa9_MG_9_1QGHjAFpbz9Xy-9bRYD03tMn46u7ms5Iw3hZMQPEbRSGqIthT1uapRLJjbXi4RktdaFa0LEasnd_uKghVpGPLtEodD1adHY0VnDX72NjGmjzRCjpx2fbQAc2kkVwA0pEIuTUwlf2WX_Ca8EOnSLyKzumpJJaRJtk77SWd0LWpryIU6RqA_mOXIXVg89g',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCupzM24EDYdPy1IbaqBceJF-AxzPwMbpoqt28TISXJaPmYV1N0FSUzPeGV3AoLAv4J_P__84lQ3lhHdUY4ptrSEcK_vWr-7OGXFOOUnPRVXTCr_KcFnJ0-qo3hlvaIU02rBZJxa8ZTMz2cGSThESFwtpXstPdx8z0qNsD2AYF6hZHgtwHIUP5kgPxjLEpzMr_KyFOdcDabxIiczYjUeOvRQlKZ-dxfGPjwvWHiVDW61Tf6b7xAhRaqKxq9kjbBTLpS3D7RBbGvO0Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCBpUhfckqAqExlHZo4j22HKWxX5R8sdnCpMLc4NEaoZm6PT9UxcQHV7nDkFV7r0dKotbUDAvQutcPFgmaiTaDUkf9pZLDIXR9ZV0JvWq9IMCbGEezqueVXvb4DT_P_c-WBez19U4SvOgLwnLqE8Z9P8z5v8XyFlHF3dX8mtqCv1zdZFgCAy1_0sI9O8nfBap8OCf6WhNS_X1oXgp6y3kjqdptshrR9cjI73FHThp_8vXN8U60-Wjx5KooejEzSMIEKd5Pr2eM_CA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA53Jj7vjwPr3UCxmi0pv54at-xIaiD6EZE9WGHMXgd1qLwlFCTyLuFvPZRjKIZVeiizU2_9Y4454n1_4fLg6yhe0dpGjHvH-qP_LBVdcaZ9QWCYuFT_e6E3CxbchXl630u548UbqeNm0dyLtZFKpq41lfH0MwFiA1LgpdxeSXNXMi9i7UEdtEKjjOwbPhxyhYpOOlO7yQ6Euy2DwZ2tGuj2QYHDN0JzGbJFt4K5ANl_XM6jbSXaOBpc5mkJk61hTK8Aor7q_j_yjg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZRB4G5TOb0vMc5cy16S8ulRa4guM354npX7Ik4VosVv0hyJizFSFwO8pGqMYoOsuRk6olEOblJEZ7GbhHZY-yfKprbY11c-41wFD_cd_lD2c_9WkuOY8wfw8TQtoT_nl-JvmNhlpeL7LLhE9FX0n4h8ivaq2h4zk-eGqLlAHUTYbmzioKihuBm5gvt0gdN-eqfk_YIAGAO6CdwOhDvtk-kn9eMMvs1GxHckCepYAtnj-2OqPS_xRl7YiifBL-M41nr4dAdj4EpzI'
    ],
    specs: [
      { label: 'Rated Power', value: '45 kW (60 HP)' },
      { label: 'Operating Voltage', value: '380-480 VAC, 3-Phase' },
      { label: 'Rated Torque', value: '286 Nm' },
      { label: 'Nominal Speed', value: '1500 RPM @ 50Hz' },
      { label: 'Insulation Class', value: 'Class H (180°C)' }
    ],
    features: [
      'Double-shielded ball bearings for maintenance-free operation over 50,000 hours.',
      'Advanced thermal management with integrated PT100 sensors in all three phases.',
      'Marine-grade epoxy coating for superior corrosion resistance in chemical plants.',
      'Compatible with all major Variable Frequency Drives (VFD) brands.'
    ]
  };

  return (
    <main className="max-w-360 mx-auto px-6 md:px-16 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center space-x-2 text-slate-400 font-headline text-[10px] md:text-xs tracking-widest uppercase">
        <Link to="/products" className="hover:text-primary transition-colors">Catalog</Link>
        <ChevronRight size={14} className="mt-[-2px]" />
        <Link to="/products" className="hover:text-primary transition-colors">Industrial Motors</Link>
        <ChevronRight size={14} className="mt-[-2px]" />
        <span className="text-charcoal font-bold">VX-9000 Series High-Torque AC Motor</span>
      </nav>

      <div className="grid grid-cols-12 gap-8 md:gap-16">
        {/* Product Visual Section */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white border border-slate-100 p-8 flex items-center justify-center relative group">
            <img
              alt={product.name}
              className="w-full h-auto object-contain mix-blend-multiply"
              src={product.mainImage}
            />
            <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
              <button className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center hover:border-primary transition-colors shadow-sm">
                <ZoomIn size={18} />
              </button>
              <button className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center hover:border-primary transition-colors shadow-sm">
                <Box size={18} />
              </button>
            </div>
          </div>
          {/* Technical Gallery */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {product.gallery.map((img, idx) => (
              <div
                key={idx}
                className={`aspect-square bg-white border ${
                  idx === 0 ? 'border-primary' : 'border-slate-100 opacity-60'
                } p-2 hover:opacity-100 transition-all cursor-pointer`}
              >
                <img className="w-full h-full object-cover" src={img} alt={`Detail ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info & Specs */}
        <div className="col-span-12 lg:col-span-5 flex flex-col">
          <div className="mb-6">
            <span className="font-headline text-primary text-xs font-bold mb-2 block tracking-widest uppercase">
              {product.series}
            </span>
            <h1 className="font-headline text-3xl md:text-5xl text-charcoal mb-4 uppercase leading-none">
              {product.name}
            </h1>
            <p className="font-body text-base text-slate-500 mb-6 leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-500 font-headline text-[10px] font-bold uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Specification Table */}
          <div className="border-y border-slate-200 py-6 mb-8">
            <h3 className="font-headline text-sm md:text-base font-bold mb-4 uppercase tracking-tighter">
              Technical Specifications
            </h3>
            <div className="space-y-4">
              {product.specs.map(spec => (
                <div key={spec.label} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                  <span className="font-headline text-[10px] text-slate-400 uppercase tracking-widest leading-none mt-1">
                    {spec.label}
                  </span>
                  <span className="font-headline text-xs md:text-sm font-bold text-charcoal text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Downloads Section */}
          <div className="mb-8">
            <h3 className="font-headline text-[10px] font-bold text-slate-400 mb-4 tracking-widest uppercase">
              Resource Center
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="flex items-center p-4 border border-slate-100 hover:border-primary group transition-colors">
                <FileText size={20} className="text-primary mr-3" />
                <div>
                  <p className="text-[10px] font-bold font-headline leading-none uppercase tracking-widest mb-1">Datasheet</p>
                  <p className="text-[9px] text-slate-400">PDF, 2.4 MB</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-4 border border-slate-100 hover:border-primary group transition-colors">
                <Download size={20} className="text-primary mr-3" />
                <div>
                  <p className="text-[10px] font-bold font-headline leading-none uppercase tracking-widest mb-1">CAD Models</p>
                  <p className="text-[9px] text-slate-400">STEP, 15 MB</p>
                </div>
              </a>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="bg-navy p-8 text-white">
            <h4 className="font-headline text-xl mb-2 uppercase tracking-tighter">Inquire for Pricing</h4>
            <p className="text-slate-400 text-sm mb-6 font-body">
              Connect with our technical sales team for bulk quotes and integration support.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  className="w-full bg-navy border-b border-slate-700 text-white focus:ring-0 focus:border-primary py-3 px-0 font-body text-sm placeholder:text-slate-600"
                  placeholder="Professional Email Address"
                  type="email"
                />
              </div>
              <button className="w-full bg-primary py-4 font-headline text-xs font-bold tracking-[0.2em] hover:bg-primary-light transition-all uppercase">
                REQUEST CONFIGURATION
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Secondary Details: Tabs/Bento Grid */}
      <section className="mt-24">
        <div className="border-b border-slate-200 flex space-x-12 mb-12 overflow-x-auto whitespace-nowrap">
          {['Description', 'Dimensions', 'Warranty'].map((tab, idx) => (
            <button
              key={tab}
              className={`pb-4 border-b-2 font-headline text-xs font-bold tracking-widest uppercase transition-all ${
                idx === 0 ? 'border-primary text-charcoal' : 'border-transparent text-slate-400 hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-8">
            <h3 className="font-headline text-2xl md:text-3xl mb-6 uppercase tracking-tight text-charcoal">
              Uncompromising Power for Critical Infrastructure
            </h3>
            <div className="space-y-6 font-body text-slate-600 max-w-3xl text-sm md:text-base">
              <p>
                The VX-9000 Series represents the pinnacle of Voltworks' motor engineering. Developed specifically for continuous duty cycles in harsh industrial environments, these motors utilize advanced rare-earth magnets and proprietary winding patterns to achieve ultra-low harmonic distortion and exceptional thermal stability.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-4 bg-slate-50 p-8 border-l-4 border-primary">
            <h4 className="font-headline text-sm md:text-base font-bold mb-4 uppercase text-charcoal">
              Expert Support
            </h4>
            <p className="font-body text-slate-600 mb-6 italic text-sm leading-relaxed">
              "The VX-9000 is our go-to for high-torque applications. The build quality exceeds NEMA standards and the support from Voltworks is world-class."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 overflow-hidden border border-slate-100">
                <img
                   className="w-full h-full object-cover"
                   alt="Arthur MacKenzie"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvbzsTQNy5xGJKYF0qChqgNaDovwPN9u3EONLD_7kNZTRUUeMpe06TlJr1scbvJCLryL3SMlINu3H3TbMVjfPGt5WH3tJ0PI2epFzaUxJPnjSrgmodyF7gBaGfeDsohkVfKMA-VX8UP8EXC2K3_GsoE9BJNqPncoa8M9eGA5bjGbJJciV1YHeQpnfj1ZXMfwW-hwRab2E2hQSs4bR5Q5jAFspC4MWe4PUk-eSWkzGW6tcoNuXbJPO57xUU6T-6zW32fA0VEK_KNqg"
                />
              </div>
              <div>
                <p className="font-bold text-[10px] md:text-xs font-headline tracking-widest uppercase text-charcoal">ARTHUR MACKENZIE</p>
                <p className="text-[10px] text-slate-500 font-headline uppercase tracking-tighter">Director of Operations, GridSys Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
