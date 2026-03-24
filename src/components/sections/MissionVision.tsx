import { motion } from 'motion/react';
import { Activity, Globe } from 'lucide-react';

export const MissionVision = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestra <span className="text-gradient">Esencia</span></h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Consolidando el futuro tecnológico a través de la innovación constante.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)] opacity-10 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 text-white shadow-lg">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Brindar a nuestros clientes todo el asesoramiento y apoyo tecnológico, cubriendo todas sus necesidades a través de nuestros profesionales capacitados, convirtiéndoles en una ventaja competitiva en el mercado global.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-secondary)] opacity-10 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 text-white shadow-lg">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Consolidarnos como una empresa líder en TI, formando personal altamente capacitado, competitivo y comprometido, proporcionando las herramientas tecnológicas necesarias para superar desafíos y crear ventajas absolutas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
