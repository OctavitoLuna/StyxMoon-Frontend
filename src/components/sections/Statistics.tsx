import { AnimatedCounter } from '../ui/AnimatedCounter';

export const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6">
            <div className="text-5xl font-bold mb-2 flex justify-center items-center">
              +<AnimatedCounter value={500} />
            </div>
            <div className="text-lg opacity-80 uppercase tracking-wider font-medium">Proyectos Exitosos</div>
          </div>
          <div className="p-6 md:border-x border-white/20">
            <div className="text-5xl font-bold mb-2 flex justify-center items-center">
              <AnimatedCounter value={98} />%
            </div>
            <div className="text-lg opacity-80 uppercase tracking-wider font-medium">Clientes Satisfechos</div>
          </div>
          <div className="p-6">
            <div className="text-5xl font-bold mb-2 flex justify-center items-center">
              +<AnimatedCounter value={35} />
            </div>
            <div className="text-lg opacity-80 uppercase tracking-wider font-medium">Países Alcanzados</div>
          </div>
        </div>
      </div>
    </section>
  );
};
