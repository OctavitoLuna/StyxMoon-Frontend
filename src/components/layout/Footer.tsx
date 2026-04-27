import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { CONTACT_INFO, NAV_LINKS } from '../../config/constants';

export const Footer = () => {
  return (
    <footer className="bg-[var(--styx-grey)] border-t border-gray-200 pt-24 pb-12 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-styx opacity-[0.03]"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
          {/* Column 1: Identity Corporativa */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Logo className="w-14 h-14 text-[var(--accent-primary)]" />
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight text-[var(--accent-primary)] leading-none uppercase">Styx Moon</span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--accent-secondary)]">Excellence in Tech</span>
              </div>
            </div>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed italic border-l-4 border-[var(--accent-primary)] pl-6 py-2">
              "Impulsando el crecimiento tecnológico con soluciones a medida y respaldo experto."
            </p>
          </div>

          {/* Column 2: Contacto Directo */}
          <div className="space-y-8">
            <h4 className="text-xs font-black text-[var(--accent-primary)] uppercase tracking-[0.4em] relative">
              Contacto Directo
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--accent-secondary)] rounded-sm"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-white rounded-sm shadow-sm border border-gray-200 flex items-center justify-center text-[var(--accent-secondary)] group-hover:bg-[var(--accent-secondary)] group-hover:text-white group-hover:border-[var(--accent-secondary)] transition-all shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-base">
                  <p className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs mb-1">Dirección: La Paz, Bolivia</p>
                  <p className="text-[var(--text-secondary)]">{CONTACT_INFO.address.split(', La Paz')[0]}</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-white rounded-sm shadow-sm border border-gray-200 flex items-center justify-center text-[var(--accent-secondary)] group-hover:bg-[var(--accent-secondary)] group-hover:text-white group-hover:border-[var(--accent-secondary)] transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-base">
                  <p className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs mb-1">Teléfono / Celular:</p>
                  {CONTACT_INFO.phones.map(p => <p key={p} className="text-[var(--text-secondary)]">{p}</p>)}
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-white rounded-sm shadow-sm border border-gray-200 flex items-center justify-center text-[var(--accent-secondary)] group-hover:bg-[var(--accent-secondary)] group-hover:text-white group-hover:border-[var(--accent-secondary)] transition-all shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-base">
                  <p className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs mb-1">Correo Electrónico:</p>
                  {CONTACT_INFO.emails.map(e => <p key={e} className="text-[var(--text-secondary)] truncate">{e}</p>)}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Enlaces Rápidos */}
          <div className="space-y-8">
            <h4 className="text-xs font-black text-[var(--accent-primary)] uppercase tracking-[0.4em] relative">
              Enlaces rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--accent-secondary)] rounded-sm"></span>
            </h4>
            <ul className="grid grid-cols-2 gap-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 group uppercase tracking-wider text-xs"
                  >
                    <ChevronRight className="w-4 h-4 text-[var(--accent-secondary)] transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-8">
               <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200">
                  <p className="text-[10px] font-black text-[var(--accent-primary)] uppercase tracking-widest mb-2">Nit: 9994930011</p>
                  <p className="text-xs font-bold text-[var(--text-secondary)]">Consultoría en proyectos de informática y suministro de programas.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Final Bar */}
        <div className="pt-12 border-t border-gray-200 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Styx Moon. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-black text-[var(--accent-primary)] uppercase tracking-widest">
             <a href="#" className="hover:text-[var(--accent-secondary)] transition-colors">Aviso de Privacidad</a>
             <a href="#" className="hover:text-[var(--accent-secondary)] transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
