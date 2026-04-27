import { motion } from 'motion/react';
import { Hero } from '../components/sections/Hero';
import { SERVICES } from '../config/constants';
import { Code, Server, Cloud, Shield, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP = {
  code: Code,
  server: Server,
  cloud: Cloud,
  shield: Shield,
  wrench: Wrench
};

export const HomePage = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero onQuoteClick={onQuoteClick} />
      
      {/* Services Snippet - Pattern Light Background */}
      <section className="section-padding bg-pattern-light relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-4xl">
              <span className="text-[var(--accent-secondary)] font-black uppercase tracking-[0.4em] text-xs mb-6 block border-l-4 border-[var(--accent-secondary)] pl-6">Especialidades</span>
              <h2 className="section-title-blue">Soluciones de <br /> Próxima Generación</h2>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-medium">Infraestructura crítica y desarrollo de software con estándares globales adaptados a la realidad de Bolivia.</p>
            </div>
            <Link to="/servicios" className="btn-primary group h-fit">
              Explorar Catálogo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.slice(0, 3).map((service, idx) => {
              const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Code;
              return (
                <motion.div 
                  key={service.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="card-professional group p-12 hover:bg-[var(--navy-light)] transition-colors duration-500 rounded-sm"
                >
                  <div className="w-20 h-20 bg-[var(--navy-light)] text-white rounded-sm flex items-center justify-center mb-10 group-hover:bg-[var(--accent-secondary)] transition-colors duration-500 shadow-xl">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-[var(--navy-deep)] group-hover:text-white transition-colors uppercase tracking-tight">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium group-hover:text-white/70 transition-colors line-clamp-4">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Snippet - High Contrast Pulse Call to Action */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
           {/* Dynamic Banners */}
           <div className="grid lg:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-pattern-dark p-16 lg:p-24 text-left relative overflow-hidden shadow-2xl flex flex-col justify-center min-h-[500px] border-b-4 border-[var(--accent-secondary)] rounded-sm"
              >
                 <div className="relative z-10 w-full">
                    <span className="text-[var(--accent-secondary)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Trayectoria</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">Confianza <br /> <span className="text-[var(--accent-secondary)]">Nacional.</span></h2>
                    <p className="text-lg text-white/70 mb-12 leading-relaxed font-medium max-w-md">Respaldo técnico para más de 20 instituciones líderes en Bolivia. Protegiendo lo que más importa.</p>
                    <Link to="/experiencia" className="btn-accent inline-flex px-10 py-4 shadow-2xl w-fit text-xs">
                      Ver Experiencia
                    </Link>
                 </div>
                 {/* Decorative background shape */}
                 <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[var(--accent-secondary)] opacity-[0.05] blur-[100px] pointer-events-none"></div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-[var(--navy-light)] p-16 lg:p-24 text-left relative overflow-hidden shadow-2xl flex flex-col justify-center min-h-[500px] border-b-4 border-[var(--accent-primary)] rounded-sm"
              >
                 <div className="relative z-10 w-full">
                    <span className="text-[var(--accent-primary)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Contacto</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">Alcanza <br /> <span className="text-[var(--accent-primary)]">La Cima.</span></h2>
                    <p className="text-lg text-white/70 mb-12 leading-relaxed font-medium max-w-md">Optimiza tus procesos y escala tu infraestructura con arquitectura de nivel enterprise.</p>
                    <button onClick={onQuoteClick} className="btn-primary inline-flex px-10 py-4 shadow-2xl w-fit text-xs">
                       Iniciar Cotización
                    </button>
                 </div>
                 {/* Decorative accent */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)] opacity-10 blur-3xl pointer-events-none"></div>
              </motion.div>
           </div>
        </div>
      </section>
    </motion.div>
  );
};
