import { MapPin, Mail, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[var(--bg-primary)] pt-24 pb-10 relative z-10 border-t border-[var(--card-border)]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--bg-secondary)] rounded-l-[100px] opacity-50 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-5/12">
            <span className="text-[var(--accent-primary)] font-semibold tracking-wider uppercase text-sm mb-3 block">Soporte Corporativo</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Iniciemos su transformación</h2>
            <p className="text-[var(--text-secondary)] mb-10 text-lg">Conecte con nuestros arquitectos de soluciones. Diseñaremos la infraestructura que su empresa necesita para escalar de manera segura.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Sede Central</h4>
                  <p className="text-[var(--text-primary)] font-medium text-lg">La Paz - Bolivia</p>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">Calle Casimiro Corrales Nro 1237, Edificio CASSO piso 02 oficina 5</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Contacto Directo</h4>
                  <p className="text-[var(--text-primary)] font-medium text-lg">contacto@styxmoon.com</p>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">SLA de respuesta: &lt; 2 horas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Línea de Soporte</h4>
                  <p className="text-[var(--text-primary)] font-medium text-lg">+591 70000000</p>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">Soporte NOC 24/7/365</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 w-full">
            <form className="glass-card p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-t-4 border-t-[var(--accent-primary)]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[var(--text-secondary)]">Nombre Completo</label>
                  <input type="text" className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-lg px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50 focus:border-[var(--accent-primary)] transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[var(--text-secondary)]">Empresa</label>
                  <input type="text" className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-lg px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50 focus:border-[var(--accent-primary)] transition-all" placeholder="Nombre de su organización" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[var(--text-secondary)]">Correo Corporativo</label>
                <input type="email" className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-lg px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50 focus:border-[var(--accent-primary)] transition-all" placeholder="juan@empresa.com" />
              </div>
              
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[var(--text-secondary)]">Requerimiento</label>
                <textarea rows={4} className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-lg px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50 focus:border-[var(--accent-primary)] transition-all resize-none" placeholder="Describa brevemente sus necesidades de infraestructura..."></textarea>
              </div>
              
              <button className="w-full bg-[var(--accent-primary)] hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-blue-500/25">
                <span>Enviar Solicitud</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <p className="text-center text-[var(--text-secondary)] text-xs mt-4">Sus datos están protegidos por cifrado de extremo a extremo.</p>
            </form>
          </div>
        </div>

        <div className="border-t border-[var(--card-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="font-bold">Styx Moon</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Styx Moon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
