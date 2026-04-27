import { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../config/constants';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'
      }`}>
        {/* Sleek corporate top stripe to showcase the dual colors elegantly */}
        <div className="absolute top-0 left-0 w-full h-1 flex">
          <div className="w-1/2 h-full bg-[var(--accent-primary)]"></div>
          <div className="w-1/2 h-full bg-[var(--accent-secondary)]"></div>
        </div>

        <div className="container-custom flex justify-between items-center mt-1">
          <RouterNavLink to="/" className="flex items-center gap-3 lg:gap-4 group">
            <Logo className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-500 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className={`text-xl lg:text-3xl font-black tracking-tighter uppercase leading-[0.8] ${isScrolled || location.pathname !== '/' ? 'text-[var(--navy-deep)]' : 'text-white'}`}>Styx Moon</span>
              <span className={`text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase mt-1 ${isScrolled || location.pathname !== '/' ? 'text-[var(--accent-primary)]' : 'text-blue-200'}`}>Tech Solutions</span>
            </div>
          </RouterNavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <RouterNavLink 
                  key={link.label} 
                  to={link.href} 
                  className={({ isActive }) => `text-xs font-black uppercase tracking-[0.15em] transition-colors relative group ${
                    isActive ? (isScrolled || location.pathname !== '/' ? 'text-[var(--accent-secondary)]' : 'text-white') : (isScrolled || location.pathname !== '/' ? 'text-[var(--navy-light)] hover:text-[var(--accent-primary)]' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-[2px] transition-all ${
                    location.pathname === link.href ? 'w-full bg-[var(--accent-secondary)]' : 'w-0 group-hover:w-full bg-[var(--accent-primary)]'
                  }`}></span>
                </RouterNavLink>
              ))}
            </div>
            <button 
              onClick={onQuoteClick}
              className={`text-xs font-black uppercase tracking-widest px-6 py-3 border-2 transition-all flex items-center gap-2 ${
                isScrolled || location.pathname !== '/' 
                  ? 'border-[var(--navy-deep)] text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-[var(--navy-deep)]'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              Contacto
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled || location.pathname !== '/' ? 'text-[var(--navy-deep)]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[var(--navy-deep)] overflow-hidden shadow-2xl absolute w-full top-full left-0 border-t-2 border-[var(--accent-primary)]"
            >
              <div className="container-custom py-8 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <RouterNavLink 
                    key={link.label} 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `text-xl font-black uppercase tracking-widest ${
                      isActive ? 'text-[var(--accent-primary)]' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </RouterNavLink>
                ))}
                <div className="h-px w-1/4 bg-white/20 my-2"></div>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="bg-white text-[var(--navy-deep)] w-full py-5 text-sm font-black uppercase tracking-widest flex justify-center items-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  Contacto Directo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

