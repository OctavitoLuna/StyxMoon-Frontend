import { motion } from 'motion/react';
import { Experience } from '../components/sections/Experience';
import { Partners } from '../components/sections/Partners';

export const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-20"
    >
      <div className="bg-[var(--accent-primary)] py-20 text-white text-center">
        <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiencia Certificada</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Un respaldo técnico sólido basado en alianzas internacionales y una amplia red de clientes satisfechos.
            </p>
        </div>
      </div>
      <Experience />
      <Partners />
    </motion.div>
  );
};
