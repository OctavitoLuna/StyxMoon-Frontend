import { motion } from 'motion/react';
import { Code, Server, Cloud, Shield, Wrench } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../../config/constants';

const ICON_MAP = {
  code: Code,
  server: Server,
  cloud: Cloud,
  shield: Shield,
  wrench: Wrench
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Servicios y Soluciones TI</h2>
          <p className="section-subtitle mx-auto">
            Servicios diseñados para optimizar la operación, seguridad y crecimiento de tu organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Code;
            const whatsappMessage = encodeURIComponent(`Hola StyxMoon, vengo de su sitio web y me gustaría recibir información sobre su servicio de: ${service.title}.`);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-professional flex flex-col group h-full"
              >
                <div className="w-14 h-14 bg-[var(--navy-light)] text-white rounded-sm flex items-center justify-center mb-8 group-hover:bg-[var(--accent-secondary)] transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {service.title}
                </h4>
                <p className="text-[var(--text-secondary)] leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-100">
                   <a 
                     href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[var(--accent-primary)] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all inline-flex uppercase tracking-wider text-xs"
                   >
                      Más información
                      <Icon className="w-4 h-4" />
                   </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
