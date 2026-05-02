import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-360 mx-auto">
        <div className="text-2xl font-black tracking-tighter">
          <Link to="/" className="flex items-center gap-3">
            <img
              alt="Voltworks Icon"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugEKrF3JlIjk0PG3ai5ZOD_EEZRGKbIn9wase02MgX4PiwtAYmOjHP7jP-gxtDxlCPhZuYmXHB1zYBEjLqM_Kt0MoM_b__PExTz9qIUVGmdjrmFKS8zsYzf-9mnWFkHneNurWkEE1CZ_ylLjA0fMu7abxByDHXVZ4QH20v9IxHMFKoEE9W4UA-KdHqwYTri76tuufqWOp28LBlbrKeCa-XLkcFcvWlnZ9ewr0LKjM0Z58cthwRfNJ2hskh3uOW5tsWwTpPiNKkYrA"
            />
            <span className="font-headline tracking-tighter text-primary text-xl md:text-2xl">VOLTWORKS</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-headline tracking-tight uppercase font-medium text-sm transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-slate-600 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden sm:block bg-primary text-white font-sans text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 md:py-3 uppercase tracking-widest hover:bg-primary-light transition-all rounded-none">
            Request Quote
          </button>
          <button 
            className="md:hidden text-slate-900 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}

          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-headline tracking-tight uppercase font-medium text-sm transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <button className="w-full bg-primary text-white font-sans text-[10px] font-bold px-4 py-3 uppercase tracking-widest hover:bg-primary-light transition-all rounded-none">
                  Request Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
