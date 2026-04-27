import { motion } from 'motion/react';
import { Target, Eye, Globe, Cpu, BarChart, ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-pattern-light overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Card-like image visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-square bg-[var(--navy-light)] overflow-hidden shadow-2xl flex items-center justify-center p-8 md:p-12 border-l-8 border-[var(--accent-primary)] rounded-sm">
               <div className="absolute inset-0 bg-grid-styx opacity-[0.05]"></div>
               
               <div className="grid grid-cols-2 gap-4 md:gap-8 w-full relative z-10">
                  {[Globe, Cpu, BarChart, ShieldCheck].map((Icon, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="bg-[#111827]/80 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center border border-white/5 aspect-square shadow-xl transition-colors hover:bg-[var(--accent-primary)] group rounded-sm"
                    >
                      <Icon className="w-10 h-10 md:w-16 md:h-16 text-white mb-4 group-hover:scale-110 transition-transform" />
                      <div className="h-1 lg:h-1.5 w-8 md:w-12 bg-[var(--accent-secondary)] rounded-full group-hover:bg-white transition-colors"></div>
                    </motion.div>
                  ))}
               </div>

               {/* Central Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_var(--accent-primary)_0%,_transparent_70%)] opacity-20 pointer-events-none"></div>
            </div>
            
            {/* Background elements to fill space */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[var(--accent-primary)] opacity-20 -z-10 rounded-sm"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--accent-secondary)] opacity-[0.03] -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--accent-secondary)] font-black uppercase tracking-[0.4em] text-xs mb-8 block border-l-4 border-[var(--accent-secondary)] pl-6">Nuestra Identidad</span>
            <h2 className="section-title-blue mb-10 leading-[1.1] uppercase tracking-tighter">Solucionamos la <br /> <span className="text-[var(--accent-secondary)]">Complejidad</span></h2>
            <div className="space-y-6 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              <p>
                En <span className="font-black text-[var(--navy-deep)] uppercase tracking-widest">Styx Moon</span>, creemos que la tecnología no debe ser un obstáculo, sino el puente hacia la eficiencia absoluta.
              </p>
              <p>
                Somos arquitectos digitales especializados en transformar organizaciones mediante soluciones de TI de alto rendimiento, combinando agilidad con excelencia técnica corporativa.
              </p>
              <div className="pt-8">
                 <button className="btn-primary group w-fit">
                    Conocer el equipo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission/Vision - High Impact Contrast */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="card-dark group border-t-4 border-t-[var(--accent-primary)]"
          >
            <div className="relative z-10">
               <div className="w-16 h-16 bg-[#111827] flex items-center justify-center mb-8 shadow-xl group-hover:bg-[var(--accent-primary)] transition-colors duration-500 rounded-sm">
                 <Target className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight uppercase">Misión</h3>
               <p className="text-white/80 text-lg leading-relaxed font-light">
                 Impulsar la soberanía tecnológica de nuestros clientes mediante asesoramiento estratégico y ejecución técnica impecable, elevando el estándar digital nacional.
               </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="card-professional group border-t-4 border-t-[var(--accent-secondary)]"
          >
            <div className="relative z-10">
               <div className="w-16 h-16 bg-[var(--navy-light)] flex items-center justify-center mb-8 shadow-xl group-hover:bg-[var(--accent-secondary)] transition-colors duration-500 rounded-sm">
                 <Eye className="w-8 h-8 text-white transition-colors duration-500" />
               </div>
               <h3 className="text-3xl lg:text-4xl font-black mb-6 text-[var(--navy-deep)] tracking-tight uppercase">Visión</h3>
               <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium">
                 Liderar la transformación digital en Bolivia como el aliado tecnológico más confiable y disruptivo, humanizando la tecnología y generando valor medible.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
