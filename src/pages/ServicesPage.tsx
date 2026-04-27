import { motion } from 'motion/react';
import { Services } from '../components/sections/Services';

export const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-20"
    >
      <div className="bg-[var(--accent-primary)] py-20 text-white text-center">
        <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios y Soluciones TI</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Diseñamos la infraestructura que permite a tu empresa escalar de manera segura y eficiente.
            </p>
        </div>
      </div>
      <Services />
      
      {/* Additional value section for "structuralized" feel */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="container-custom">
           <div className="card-professional bg-white p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent-primary)]">¿No encuentras lo que buscas?</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">Nuestros arquitectos pueden diseñar una solución personalizada basada en tus necesidades específicas de infraestructura, desarrollo o seguridad.</p>
              </div>
              <button className="btn-primary whitespace-nowrap group">Consultoría Técnica</button>
           </div>
        </div>
      </section>
    </motion.div>
  );
};
