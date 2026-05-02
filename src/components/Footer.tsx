import { Globe, Settings } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 max-w-360 mx-auto text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <div className="text-lg font-bold text-white mb-2">
            <span className="text-primary">VOLTWORKS</span> INDUSTRIAL
          </div>
          <div className="font-headline text-[10px] md:text-xs uppercase tracking-widest text-slate-400">
            © 2024 VOLTWORKS INDUSTRIAL. PRECISION ENGINEERING.
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-0">
          {['Technical Support', 'Warranty Info', 'Distributors', 'Privacy Policy'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-headline text-[10px] md:text-xs uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex space-x-6">
          <Globe size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
          {/* Using custom fallback as material symbols equivalents */}
          <div className="w-[18px] h-[18px] border-2 border-slate-400 rounded-full flex items-center justify-center text-[10px] text-slate-400 hover:text-white hover:border-white cursor-pointer transition-colors font-bold">V</div>
          <Settings size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}
