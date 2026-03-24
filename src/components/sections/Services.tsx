import { motion } from 'motion/react';
import { Database, FileText, HardDrive, Activity, Users, Mail } from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[var(--bg-secondary)] relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sistemas de <span className="text-gradient">Información</span></h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Automatización y control efectivo de procesos empresariales con tecnología de punta.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Database, title: "Repositorio de Documentos", desc: "Gestión centralizada y segura de toda la documentación institucional." },
            { icon: FileText, title: "Sistemas de Facturación", desc: "Control financiero ágil, preciso y adaptado a normativas vigentes." },
            { icon: HardDrive, title: "Sistemas de Inventarios", desc: "Trazabilidad en tiempo real de activos y recursos empresariales." },
            { icon: Activity, title: "Sistemas de Planificación", desc: "Optimización de recursos y tiempos para la toma de decisiones." },
            { icon: Users, title: "Administración de Pacientes", desc: "Soluciones especializadas para el sector salud y clínicas." },
            { icon: Mail, title: "Sistemas de Correspondencia", desc: "Flujos de comunicación interna y externa automatizados." }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
            >
              <service.icon className="w-10 h-10 text-[var(--accent-primary)] mb-6 group-hover:text-[var(--accent-secondary)] transition-colors" />
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-[var(--text-secondary)] text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
