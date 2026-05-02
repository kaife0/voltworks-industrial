import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-industrial-bg min-h-screen">
      {/* Intro Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 border-b border-primary px-6 md:px-16 text-center">
        <h1 className="font-headline text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-white">Contact Us</h1>
        <p className="font-body text-slate-300 max-w-2xl mx-auto uppercase tracking-widest text-xs">
          Get in touch with our engineering team
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-360 mx-auto grid-schematic" id="contact">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Contact Form */}
          <div className="col-span-12 lg:col-span-7 bg-white p-8 md:p-12 border border-outline-v shadow-sm">
            <h2 className="font-headline text-2xl md:text-3xl mb-4 uppercase">TECHNICAL INQUIRY</h2>
            <p className="font-body text-slate-600 mb-12">
              Submit your specifications below. Our engineering team will review and respond within 24 business hours.
            </p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    FULL NAME
                  </label>
                  <input
                    className="border-b border-outline-v py-2 focus:outline-none focus:border-primary bg-transparent text-sm"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-headline text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    CORPORATE EMAIL
                  </label>
                  <input
                    className="border-b border-outline-v py-2 focus:outline-none focus:border-primary bg-transparent text-sm"
                    placeholder="j.doe@company.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="project-category" className="font-headline text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  PROJECT CATEGORY
                </label>
                <select id="project-category" title="Project Category" className="border-b border-outline-v py-2 focus:outline-none focus:border-primary bg-transparent text-sm appearance-none">
                  <option>Power Distribution</option>
                  <option>Industrial Automation</option>
                  <option>Custom Engineering</option>
                  <option>Maintenance & Support</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-headline text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  MESSAGE / SPECIFICATIONS
                </label>
                <textarea
                  className="border-b border-outline-v py-2 focus:outline-none focus:border-primary bg-transparent resize-none text-sm"
                  placeholder="Describe your technical requirements..."
                  rows={4}
                ></textarea>
              </div>
              <button
                className="bg-primary text-white font-headline text-xs font-bold px-10 py-4 uppercase tracking-widest hover:bg-primary-light transition-all flex items-center gap-4 w-full md:w-auto justify-center"
                type="submit"
              >
                SUBMIT INQUIRY
                <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin hidden"></div>
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>
          
          {/* Contact Details & Map */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="bg-white p-10 border border-outline-v">
              <h3 className="font-headline text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                HEADQUARTERS
              </h3>
              <div className="flex gap-4 mb-8">
                <div className="text-primary mt-1">
                  {/* Location icon */}
                  <div className="w-5 h-5 flex items-center justify-center border-2 border-primary rounded-full text-xs font-bold">L</div>
                </div>
                <div>
                  <p className="font-headline text-xl md:text-2xl leading-tight text-charcoal">
                    42 Industrial Way,<br />
                    Tech District, CA 94103
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-8 border-t border-outline-v">
                <div className="flex items-center justify-between">
                  <span className="font-headline text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    TECH SUPPORT
                  </span>
                  <a className="font-body font-bold hover:text-primary transition-colors text-sm" href="tel:+18005550199">
                    +1 (800) 555-0199
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-headline text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    SALES DEPT
                  </span>
                  <a className="font-body font-bold hover:text-primary transition-colors text-sm" href="mailto:sales@voltworks.com">
                    sales@voltworks.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-80 bg-slate-200 border border-outline-v relative overflow-hidden group">
              <img
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                alt="San Francisco Map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK7rplTdVXXwKbNS-YGWJvRbRh_zRLJf0bJQzBoU2uBskXhdDSFKh77n2AEAg4yxJfPk5pezgRSt5x0Gp9XpLbMfpxGCicslW5l0jv37xec2zPxZ6yq5d3Hbl0rZra5vd1-SNT2Fc4QpLtbBA3Sf3dYoXfZaYebwjTyHk4JHQZuDfHaN1CSeX3yhFecYdMt4WTm54hwRjkLdQX6oNBpZ_1xtRVFkmOSuvxE1p0J_Dq3OV_tf2m0qhaHeT2-xTw3npoZkury7d8P1Y"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary text-white p-4 shadow-xl">
                  <div className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-full text-xl font-bold">L</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
