import { motion } from 'motion/react';
import { PARTNERS } from '../../config/constants';

export const Partners = () => {
  const categories = [
    { id: 'Infrastructure', label: 'Infraestructura y Hardware' },
    { id: 'Communication', label: 'Comunicación y Colaboración' },
    { id: 'Security', label: 'Seguridad y Confianza' },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="section-title">Aliados y Tecnologías de Respaldo</h2>
          <p className="section-subtitle mx-auto">
            Trabajamos con tecnologías líderes y herramientas reconocidas a nivel mundial que respaldan nuestra eficiencia y garantizan la excelencia en cada proyecto.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat, catIdx) => (
            <div key={cat.id}>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">{cat.label}</h3>
                <div className="h-[1px] w-full bg-gray-100"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {PARTNERS.filter(p => p.category === cat.id).map((partner, idx) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIdx * 0.1) + (idx * 0.05) }}
                    className="group"
                  >
                    {/* Uniform Size Box: h-20 w-full */}
                    <div className="h-24 w-full bg-gray-50/50 border border-gray-100 rounded-sm p-4 flex flex-col items-center justify-center hover:bg-white hover:shadow-sm hover:border-[var(--accent-primary)] transition-all duration-300">
                      <span className="font-bold text-[var(--text-primary)] text-sm group-hover:text-[var(--accent-primary)] transition-colors leading-tight text-center">
                        {partner.name}
                      </span>
                      {partner.description && (
                        <span className="text-[9px] text-[var(--accent-secondary)] font-bold mt-1 uppercase tracking-tighter text-center leading-none">
                          {partner.description}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
