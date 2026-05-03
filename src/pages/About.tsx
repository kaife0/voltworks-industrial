import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className=""
    >
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPP6wc5eD2KEGGbZ4vd3LgMkoifDsPGRVGmSnyzzfeZ83rY-V4Fu8KUjKQJLizjAl_N3H2czmg8fE-PdUXpcoxHkLwp22BdgPNyMUeVGJbhBjY2zX7MoeumC_5tobwm-mBk3EPSdNldPEf_1eQnXp7saIJ5uBu1oMWOTUe9vGroj5-fynmr0meSMrUMIFG5blpsiBS9uSmzFb_fyKmiqvQjExmP03zcgifkWQOctQ_5RiVbnMh7fMqOsXzp_zLIqXMi8jdzYhjM9E"
            alt="industrial"
          />
          {/* stronger dark overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-16 w-full">
          <div className="max-w-3xl text-white py-12">
            <span className="font-label-caps text-label-caps text-primary mb-4 block">PRECISION ENGINEERING SINCE 1994</span>
            <h1 className="font-headline-xl text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] leading-tight font-bold">ELECTRIFYING INNOVATION</h1>
            <p className="font-body-lg text-body-lg text-white/90 leading-relaxed">
              At VoltWorks, we are revolutionizing the way motors and controllers work in the modern world. Our technology is at the forefront of industrial automation, powered by the expertise of German and Swiss engineers.
            </p>
            <p className="font-body-md text-body-md text-white/80 mt-4">
              We are a team founded by IIT BHU and IIT Delhi alumni focusing on providing high-performance solutions that drive the future of connected devices. Our advanced platforms offer OEMs a seamless way to transform device data into actionable insights while ensuring safety and security. At VoltWorks, we focus on delivering efficiency, reliability, and robust performance to help you stay ahead in the software-defined mobility era.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-headline-lg text-headline-lg">Our Journey</h2>
            <div className="h-px flex-1 mx-12 mb-3 bg-outline-variant" />
            <span className="font-label-caps text-label-caps text-outline">EVOLUTION &amp; MILESTONES</span>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2" />
            <div className="grid grid-cols-4 gap-8 relative z-10">
              <div className="group">
                <div className="bg-background p-8 border border-outline-variant hover:border-primary transition-colors mb-12 relative">
                  <span className="font-headline-md text-headline-md text-primary mb-4 block">2018</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">Built India’s most energy-efficient concept vehicle, showcasing extreme efficiency and lightweight design.</p>
                  <div className="absolute -bottom-[54px] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary group-hover:scale-150 transition-transform" />
                </div>
              </div>

              <div className="group mt-24">
                <div className="absolute -top-[54px] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary group-hover:scale-150 transition-transform" />
                <div className="bg-background p-8 border border-outline-variant hover:border-primary transition-colors relative">
                  <span className="font-headline-md text-headline-md text-primary mb-4 block">2019</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">Developed an autonomous concept vehicle to advance and validate next-generation driver-assist technologies.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-background p-8 border border-outline-variant hover:border-primary transition-colors mb-12 relative">
                  <span className="font-headline-md text-headline-md text-primary mb-4 block">2021</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">Responded to the COVID crisis by designing and deploying modular medical oxygen plants for emergency relief.</p>
                  <div className="absolute -bottom-[54px] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary group-hover:scale-150 transition-transform" />
                </div>
              </div>

              <div className="group mt-24">
                <div className="absolute -top-[54px] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary group-hover:scale-150 transition-transform" />
                <div className="bg-primary text-white p-8 border border-primary relative shadow-lg">
                  <span className="font-headline-md text-headline-md text-on-primary mb-4 block">2023</span>
                  <p className="font-body-md text-body-md text-white/90">Founded VoltWorks — consolidating decades of engineering and product expertise into a precision industrial brand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-surface-bright">
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">Core Principles</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Our values aren't just words on a wall; they are the technical specifications for how we conduct business and engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white border border-outline-variant p-10 hover:border-primary transition-all group overflow-hidden">
              <span className="inline-flex items-center justify-center w-14 h-14 text-3xl text-primary mb-6 bg-primary/5 rounded-md group-hover:scale-105 transition-transform" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M11.983 2.25c.47 0 .85.38.85.85v1.07a6.51 6.51 0 0 1 1.45.42l.76-.76a.85.85 0 0 1 1.204 0l.602.602a.85.85 0 0 1 0 1.203l-.756.756c.135.452.227.922.27 1.396h1.098c.47 0 .85.38.85.85v.85c0 .47-.38.85-.85.85h-1.096a6.68 6.68 0 0 1-.27 1.396l.756.756a.85.85 0 0 1 0 1.204l-.602.602a.85.85 0 0 1-1.204 0l-.76-.76c-.45.172-.914.304-1.387.396v1.074c0 .47-.38.85-.85.85h-.85a.85.85 0 0 1-.85-.85v-1.074a6.68 6.68 0 0 1-1.397-.396l-.76.76a.85.85 0 0 1-1.203 0l-.603-.602a.85.85 0 0 1 0-1.204l.756-.756a6.68 6.68 0 0 1-.27-1.396H2.85A.85.85 0 0 1 2 11.983v-.85c0-.47.38-.85.85-.85h1.097c.043-.474.135-.944.27-1.396l-.756-.756a.85.85 0 0 1 0-1.203l.602-.602a.85.85 0 0 1 1.204 0l.76.76c.473-.092.937-.224 1.387-.396V3.1c0-.47.38-.85.85-.85h.85zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" clipRule="evenodd" />
                </svg>
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">Comprehensive 360° Solutions</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">End-to-end delivery from concept and engineering to on-site commissioning — optimizing efficiency, safety, and lifecycle performance.</p>
            </div>

            <div className="bg-white border border-outline-variant p-10 hover:border-primary transition-all group overflow-hidden">
              <span className="inline-flex items-center justify-center w-14 h-14 text-3xl text-primary mb-6 bg-primary/5 rounded-md group-hover:scale-105 transition-transform" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-8 0c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C13 14.17 8.33 13 8 13zm8 0c-.29 0-1.82.15-2.88.78.47.57.88 1.25 1.17 2.03C15.68 16 17.39 15 18 15c1.66 0 3 1.34 3 3v1h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-1.38.83-2.56 2-3.05z" />
                </svg>
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">One Team, One Vision</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Cross-disciplinary collaboration focused on practical outcomes — fast iteration, clear ownership, and aligned objectives.</p>
            </div>

            <div className="bg-white border border-outline-variant p-10 hover:border-primary transition-all group overflow-hidden">
              <span className="inline-flex items-center justify-center w-14 h-14 text-3xl text-primary mb-6 bg-primary/5 rounded-md group-hover:scale-105 transition-transform" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">Relentless Innovation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We pursue practical breakthroughs — improving performance, lowering energy use, and making systems smarter and safer.</p>
            </div>

            <div className="bg-white border border-outline-variant p-10 hover:border-primary transition-all group overflow-hidden">
              <span className="inline-flex items-center justify-center w-14 h-14 text-3xl text-primary mb-6 bg-primary/5 rounded-md group-hover:scale-105 transition-transform" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM11 12.13L3.21 8 11 4.87 18.79 8 11 12.13z" />
                  <path d="M11 13.75V21h2v-7.25l-1 .55-1-.55z" />
                </svg>
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">Cultivate &amp; Share Knowledge</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Open learning and rigorous documentation ensure our teams and partners grow together — faster, safer, and more reliably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="flex items-center gap-8 mb-16">
            <h2 className="font-headline-lg text-headline-lg whitespace-nowrap">The Leadership</h2>
            <div className="h-px w-full bg-outline-variant" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mb-6">
                <img className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFiTT9iPhYG_Z2Dwb-qj7UtcoGrwNjGBYVF6sjBnRQ8ih5HhTIi99KGHx8_89iqZxVmWt-lampEe1GefNZ7jR9kWmJ-GDl92NWmYCJnecLhf_Uwvf7MxAXtdNYcgXXqPKuX_7rSzklsNJ8xhNXAgkye21JVBHZ9VPofd6ShNsZHaU8I-dt0S_1YwvbYvxL71If8IkhEmPno4hxVQbbRjTpvtf8ADiDDPt4MogoIEME-5zldVqePap3HMRSkQq4wA6cw3FtqzkQFxo" alt="Marcus Sterling" />
              </div>
              <span className="font-label-caps text-label-caps text-primary mb-2 block">CHIEF EXECUTIVE OFFICER</span>
              <h4 className="font-headline-md text-headline-md">Marcus Sterling</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Leading the strategic vision and global expansion of Voltworks Precision Engineering.</p>
            </div>

            <div className="group">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mb-6">
                <img className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgraYaRgLAjz_XsBT0rW6BQrqw6oG04lrcKzh8Fz-oXisY5pSZh9sdDakgHA9TgDfWyV84FjJl83c6C9Auc0rB-Q2GY0FV77p6C0kgrRyRFG1eI2OuFKuOxVWbiYLtS9YkyfWhI8lZvA5nkQrz_9xThv6FbsNeruJ9DcamF13FsXNdrbQFJTe5rXNpa_AGP4q3bDSBvHVqlxF4prEOQKAVk0sgQaUho8FF7dAzH01ezyBuJIslCLRpV-lZ8-5N5IpPrunvYpxu5t4" alt="Elena Rodriguez" />
              </div>
              <span className="font-label-caps text-label-caps text-primary mb-2 block">CHIEF BUSINESS OFFICER</span>
              <h4 className="font-headline-md text-headline-md">Elena Rodriguez</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Orchestrating commercial partnerships and sustainable growth initiatives across five continents.</p>
            </div>

            <div className="group">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mb-6">
                <img className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Jhf4jbdlXG5Ic6n0dun-1neNYxVPy8jdlRomq_NgFYV8Z0I7fLGQs9XJ1YDCeLYhuRcxdEg2_FqrqT3ZTc7TRLs4Zk8XHSykAUz0t4ASB12MuOtKQkEMHhUsUv54zDnzW3AOxP6AAgKPNfgmJCneMFdq9NI74KnECJR9Dxn3nq5UYWIwDOLO4ucrqi-5WTL24SgAb0zfTGxxiX2-74M4nX4dMeI_kLnhr3DL4ePZfvKve7MNjbj76O27OipS1qW8fdifMS0rQ9U" alt="David Chen" />
              </div>
              <span className="font-label-caps text-label-caps text-primary mb-2 block">CHIEF TECHNOLOGY OFFICER</span>
              <h4 className="font-headline-md text-headline-md">David Chen, PhD</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Pioneering the next generation of industrial electrical systems and intelligent grid solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Projects Grid */}
      <section className="py-24 bg-surface-container-high overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
              <h2 className="font-headline-lg text-headline-lg mb-6">Operational Excellence</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">A look inside our state-of-the-art facilities and some of our most challenging infrastructure projects worldwide.</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group h-64 overflow-hidden">
                  <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWpa_VSUuNM3G4D03fpScwEB3cm0yA2wBQsjbHggxWUv3dXj_bWlr4tzL_dS0R0u7JRk0fkoR6IVoSixg0SFbaD2F4niRDd0KyJNaQczofkElmeZCWIYivgSy871Cmf7xoAz2ZnMCSkSRPH9sMUn3ky3WBafD1As4_L0r57DNvEZKjjjmx3LMoCfX0jOckf7rmHnu7QpjicmDmB1xLPqYIXutfc-mqYJQLDtYON5eBLUg7PKrcGztNpmpk6vQSPEz8R3HsrvcVw5M" alt="tech" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-label-caps text-[10px] tracking-widest bg-primary px-3 py-1">TECH R&amp;D CENTER</span>
                  </div>
                </div>
                <div className="relative group h-64 overflow-hidden mt-8">
                  <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5iiLNgXl-6YA2HP4YlRBHqJtSQYw_cdKBnQDKp-wYrnzgPYHWBzv7RPw1yg5l2YYVneXxNegKeVF4FGafl0-vpeEcTt5ZDHGAtaM_rrzhNoZJa6wA3em7L4nP8hgwIr9L0Z2nHZtgMfNpiGCV7NL0woRdCXYWY3Jm_lZBFTTJUcxf_axFFRcCCPlbwxwd9YXkKaL12uPBuMbq1JUA2rlg3nlbCCVTebrsMw9-_v4uTEB2xQY6tps84kAyoppJZDT7iwoAs-Q2RDw" alt="infra" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-label-caps text-[10px] tracking-widest bg-primary px-3 py-1">GLOBAL INFRASTRUCTURE</span>
                  </div>
                </div>
                <div className="relative group h-64 overflow-hidden -mt-8">
                  <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJYeiQdzZ9zI70mE6pA8D4LBj7-a0sphDCvjNsywb_rZyU_vUlysX83Wbdd1RuE85-xabOX6Rcj-KkEWQHosjs3s3c-oJNVR3MSvlafQ4GffhRLa_zXqveTxluFiKpfDS3ZTnp-OUnlcFTsUIZM8SiZappa-DWyEonS0P8ahJ7WHMSu45JuzRICt5En4pYDKtt5eAGbfNjpeYzYk0TkN2Uaa9qHmrYftpqvD0Xhh_TSvoqHSE75ncbFH6Ws3nLeyL5q5b7gY4tD0" alt="components" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-label-caps text-[10px] tracking-widest bg-primary px-3 py-1">COMPONENT DESIGN</span>
                  </div>
                </div>
                <div className="relative group h-64 overflow-hidden">
                  <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6usws0svM1MNYcmLrh8UkAZQOttbIZ_bamXZhT-DbdopFtxAia9g9KsA6QiZgqg-htv8Dekf7_zz6y6AvEumjKdmZRiKA6BLgxWFfMg6SmH878TqIpooPa1JYHSkVIgcDJzgsw5akOWEseTK-ATkbyUHfKWKj8rK3jAkqmy2HfJS7fxxJJyk-WKXYif5w-wnGQ9OWglr3lGp3Tr7cFCqToQPqGbDYb1BTlMsd6ZzNUOtZtA6anGuTmGcxA7hhZfXh4MKlbngyvaw" alt="monitoring" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-label-caps text-[10px] tracking-widest bg-primary px-3 py-1">SYSTEMS MONITORING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
