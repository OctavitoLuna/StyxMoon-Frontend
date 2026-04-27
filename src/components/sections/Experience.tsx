import { motion } from 'motion/react';
import { Building2, Plus, ArrowRight } from 'lucide-react';
import { CLIENTS } from '../../config/constants';

export const Experience = () => {
  const categories = [
    { id: 'Public', label: 'Sector Público y Seguridad', icon: Building2 },
    { id: 'Health/Education', label: 'Salud, Educación y Entidades Estatales', icon: Building2 },
    { id: 'Private/Social', label: 'Organizaciones Privadas y Sociales', icon: Building2 },
  ];

  return (
    <section id="experience" className="py-24 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[var(--accent-secondary)] font-bold uppercase tracking-widest text-sm mb-4 block">Trayectoría</span>
            <h2 className="section-title">Clientes y Experiencia</h2>
            <p className="text-lg text-[var(--text-secondary)]">Instituciones y organizaciones que confían en nuestra capacidad técnica para sus desafíos digitales.</p>
          </div>
          <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold bg-white px-6 py-3 rounded-sm shadow-sm border border-gray-100 uppercase tracking-wider text-xs">
            <Plus className="w-4 h-4" />
            <span>20+ Clientes Estatales</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6 bg-[var(--accent-primary)] text-white flex items-center gap-3">
                <cat.icon className="w-6 h-6 opacity-80" />
                <h3 className="font-bold leading-tight">{cat.label}</h3>
              </div>
              <ul className="p-6 space-y-4">
                {CLIENTS.filter(client => client.category === cat.id).map((client, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                    className="flex justify-between items-center group cursor-default"
                  >
                    <span className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent-primary)] transition-colors line-clamp-1">{client.name}</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-[var(--text-secondary)] font-medium italic mb-8">
              "Garantizamos la excelencia mediante un compromiso constante con nuestros aliados y la mejora continua de procesos."
            </p>
            <div className="h-0.5 w-24 bg-[var(--accent-secondary)] mx-auto opacity-50"></div>
        </div>
      </div>
    </section>
  );
};
