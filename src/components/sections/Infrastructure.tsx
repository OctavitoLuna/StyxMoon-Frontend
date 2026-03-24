import { motion } from 'motion/react';
import { Network, Server, Wifi, ShieldCheck } from 'lucide-react';

export const Infrastructure = () => {
  return (
    <section id="infrastructure" className="py-24 relative z-10 overflow-hidden bg-[var(--bg-primary)]">
      {/* Circuit background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent-secondary) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Infraestructura <span className="text-gradient">Deep Tech</span></h2>
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
              Diseñamos e implementamos soluciones integrales de redes y servidores para mantener su empresa conectada, segura y operando a máxima capacidad.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Network, title: "Cableado Estructurado & Fibra Óptica", desc: "Instalaciones bajo normas internacionales (ISO/IEC, ANSI/EIA/TIA)." },
                { icon: Server, title: "Administración de Servidores", desc: "Directorio, Correo, Proxy Web, DNS y sistemas de virtualización." },
                { icon: Wifi, title: "Redes Inalámbricas", desc: "Despliegue y configuración de redes WiFi de alta densidad." },
                { icon: ShieldCheck, title: "Seguridad & Monitoreo", desc: "Sistemas de monitorización de red y auditoría de sistemas." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">{item.title}</h4>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="glass-card p-8 shadow-[0_8px_30px_rgba(15,23,42,0.08)] relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-primary)] opacity-10 rounded-full blur-3xl"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b border-[var(--card-border)] pb-5 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--bg-secondary)] rounded-lg border border-[var(--card-border)]">
                      <Server className="w-5 h-5 text-[var(--accent-primary)]" />
                    </div>
                    <span className="font-semibold text-sm tracking-wider uppercase text-[var(--text-primary)]">System Status</span>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">Operational</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                  <div className="bg-[var(--bg-secondary)] p-5 rounded-xl border border-[var(--card-border)] hover:border-[var(--accent-primary)] transition-colors duration-300">
                    <div className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 font-medium">Uptime SLA</div>
                    <div className="text-3xl font-bold font-mono text-[var(--text-primary)]">99.99<span className="text-lg text-[var(--text-secondary)]">%</span></div>
                  </div>
                  <div className="bg-[var(--bg-secondary)] p-5 rounded-xl border border-[var(--card-border)] hover:border-[var(--accent-primary)] transition-colors duration-300">
                    <div className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 font-medium">Avg Latency</div>
                    <div className="text-3xl font-bold font-mono text-[var(--text-primary)]">1.2<span className="text-lg text-[var(--text-secondary)]">ms</span></div>
                  </div>
                </div>

                {/* Network Graph Mockup */}
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-end text-sm mb-2">
                    <span className="font-medium text-[var(--text-secondary)]">Network Traffic</span>
                    <span className="font-mono text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded border border-[var(--card-border)] text-[var(--text-primary)]">10 Gbps</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-24 w-full">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 85, 65, 95, 80].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: "20%" }}
                        animate={{ height: [`${height * 0.4}%`, `${height}%`, `${height * 0.4}%`] }}
                        transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-80 rounded-t-sm"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
