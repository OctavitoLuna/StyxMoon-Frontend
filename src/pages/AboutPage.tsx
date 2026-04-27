import { motion } from 'motion/react';
import { AboutUs } from '../components/sections/MissionVision';

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-20"
    >
      <div className="bg-[var(--accent-primary)] py-20 text-white text-center">
        <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Styx Moon</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Innovación, compromiso y excelencia técnica al servicio de tu organización.
            </p>
        </div>
      </div>
      <AboutUs />
    </motion.div>
  );
};
