import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { buttonClasses } from '../ui/Button';
import Carousel from '../Carousel';
import { HERO_SLIDES } from '../../data/content';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center pt-28 pb-16">
      <Container className="flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl text-center"
        >
          <br />
          <p className="mt-5 font-display text-sm text-ember-400">Ernesto Ramírez - Fotógrafo Principal</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tightest text-paper sm:text-5xl lg:text-6xl">
            Una historia en cada foto.
          </h1>
          <p className="mt-6 max-w-prose text-base text-carbon-300 sm:text-lg">
            Retratos, bodas, eventos y producto con una mirada profesional. Cada
            proyecto se trabaja como un carrete completo: con principio,
            desarrollo y un cierre que se queda contigo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contacto" className={buttonClasses('primary')}>
              Agendar sesión
            </a>
            <a href="#galeria" className={buttonClasses('outline')}>
              Ver galería
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full 2xl:w-[45vw]"
        >
          <Carousel slides={HERO_SLIDES} />
        </motion.div>
      </Container>
    </section>
  );
}
