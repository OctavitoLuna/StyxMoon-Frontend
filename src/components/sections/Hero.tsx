import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-[pulse_12s_ease-in-out_infinite]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-sm font-medium mb-6 text-[var(--accent-primary)]">
            Sistemas • Redes • Infraestructura
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Elevando la infraestructura <br className="hidden md:block" />
            tecnológica al <span className="text-gradient">siguiente nivel</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Soluciones Deep Tech para empresas que buscan liderar el futuro. Desde desarrollo de software hasta redes de fibra óptica de alta velocidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
              Explorar Servicios <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass-card font-semibold hover:bg-[var(--bg-secondary)] transition-colors">
              Contactar Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
