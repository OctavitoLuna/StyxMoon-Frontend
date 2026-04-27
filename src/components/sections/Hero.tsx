import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Server, Shield, Code, Cpu } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero = ({ onQuoteClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20 bg-pattern-dark overflow-hidden">
      {/* Dynamic Accents */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[var(--accent-secondary)] opacity-[0.08] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[var(--accent-primary)] opacity-[0.05] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 text-white text-[10px] font-black mb-10 uppercase tracking-[0.3em] bg-white/5">
                <div className="w-2 h-2 bg-[var(--accent-secondary)] rounded-full animate-pulse"></div>
                Líderes en Tecnología Bolivia
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[0.95] mb-8 text-white tracking-tighter uppercase">
                Innovación <br />
                <span className="text-[var(--accent-secondary)]">Hecha Realidad.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl leading-relaxed font-light">
                Transformamos organizaciones con <span className="text-white font-bold">infraestructura crítica</span>, <span className="text-white font-bold">ciberseguridad</span> y <span className="text-white font-bold">desarrollo</span> de clase mundial.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button 
                  onClick={onQuoteClick}
                  className="btn-accent w-full sm:w-auto px-12 py-5 group shadow-2xl"
                >
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  to="/servicios" 
                  className="btn-outline w-full sm:w-auto px-12 py-5 bg-white/5 backdrop-blur-sm"
                >
                  Explorar Servicios
                </Link>
              </div>

              {/* Stats or trust bar */}
              <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/10 flex flex-wrap justify-between sm:justify-start gap-8 md:gap-12">
                 <div className="flex flex-col gap-1">
                    <span className="text-4xl font-black text-white leading-none">20<span className="text-[var(--accent-primary)]">+</span></span>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Instituciones</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-4xl font-black text-white leading-none">100<span className="text-[var(--accent-secondary)]">%</span></span>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Seguridad</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-4xl font-black text-white leading-none">24<span className="text-[var(--accent-primary)]">/</span>7</span>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Soporte</span>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 hidden xl:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Architectural Feature List */}
              <div className="relative z-10 bg-[var(--navy-light)] p-12 border-t-4 border-[var(--accent-primary)] shadow-2xl rounded-sm">
                 <div className="flex items-center justify-between mb-10">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-black/30 flex items-center justify-center rounded-sm border border-white/5">
                          <Cpu className="w-6 h-6 text-[var(--accent-secondary)]" />
                       </div>
                       <div>
                          <p className="text-white font-black text-lg uppercase tracking-tight">Arquitectura TI</p>
                          <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em]">Ecosistema Tecnológico</p>
                       </div>
                    </div>
                 </div>

                 {/* Focus Areas */}
                 <div className="space-y-4">
                    {[
                      { icon: Server, title: 'INFRAESTRUCTURA', desc: 'Sistemas Críticos & Nubes Híbridas' },
                      { icon: Shield, title: 'CIBERSEGURIDAD', desc: 'Protección Integral Detección de Amenazas' },
                      { icon: Code, title: 'DESARROLLO', desc: 'Sistemas a Medida High-Performance' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-5 bg-black/20 p-5 border border-white/5 hover:bg-black/40 transition-colors">
                        <div className="w-10 h-10 bg-[var(--navy-deep)] rounded-sm flex items-center justify-center border border-[var(--accent-primary)]/20 shadow-sm shrink-0">
                          <item.icon className="w-5 h-5 text-white/80" />
                        </div>
                        <div>
                          <p className="text-white font-black text-xs uppercase tracking-widest leading-none mb-1.5">{item.title}</p>
                          <p className="text-white/50 text-[10px] uppercase tracking-wider leading-tight">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Orbital Rings - subtle corporate accents */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-[var(--accent-primary)]/20 -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-white/[0.03] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
