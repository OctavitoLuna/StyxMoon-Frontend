import { motion } from 'motion/react';

export const Partners = () => {
  return (
    <section className="py-24 border-t border-[var(--card-border)] bg-[var(--bg-secondary)] relative overflow-hidden z-10">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--accent-primary)] font-semibold tracking-wider uppercase text-sm mb-3 block">Ecosistema Tecnológico</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">Partners Estratégicos</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">Alianzas certificadas con los líderes globales en infraestructura y ciberseguridad.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { name: 'Cisco', desc: 'Networking' },
            { name: 'Dell', desc: 'Enterprise Servers' },
            { name: 'HP', desc: 'Computing' },
            { name: 'Fortinet', desc: 'Cybersecurity' },
            { name: 'Ubiquiti', desc: 'Wireless' },
            { name: 'MikroTik', desc: 'Routing' },
            { name: 'Lenovo', desc: 'Workstations' },
            { name: 'Kingston', desc: 'Storage' },
            { name: 'TP-Link', desc: 'Access Points' },
            { name: 'Epson', desc: 'Imaging' }
          ].map((brand, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-[var(--accent-primary)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,78,216,0.15)] cursor-pointer bg-[var(--bg-primary)]"
            >
              <div className="font-bold text-xl text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-1">
                {brand.name}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] font-medium">
                {brand.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
