import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const STATS = [
  { value: '5+', label: 'años de experiencia' },
  { value: '50+', label: 'sesiones entregadas' },
  { value: '20+', label: 'Eventos cubiertos' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32">
      <Container>
        <SectionTitle frame="02" title="Sobre mí" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-carbon-700/60"
          >
            <img
              src="./img/neto.webp"
              alt="Fotógrafo de The Carrete trabajando en sesión"
              className="h-full w-full object-cover grayscale-[15%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="max-w-prose text-base leading-relaxed text-carbon-200 sm:text-lg">
              Empecé disparando en carretes de 35mm por lo que me obligaba a
              ser: sin borrar, sin repetir la toma cien veces. Esa disciplina
              se quedó conmigo aunque hoy trabaje en digital. Busco el
              instante real antes que la pose perfecta.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-carbon-300">
              Con base en Nuevo León y Tamaulipas, trabajo con personas y
              marcas en todo el país que quieren fotografía honesta: retratos
              que se sienten como la persona es, bodas que se recuerdan sin
              exagerar, y producto que vende porque se ve real.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-carbon-700 pt-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-carbon-400 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
