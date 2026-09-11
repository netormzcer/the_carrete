import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from '../types';

const AUTOPLAY_MS = 6000;

export default function Carousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  };

  const slide = slides[index];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-carbon-700/60 shadow-soft">
      <div className="relative aspect-[4/5] w-full  sm:aspect-[15/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-carbon-950/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-ember-300">
                {slide.eyebrow}
              </p>
              <p className="mt-2 max-w-md text-sm text-carbon-200 sm:text-base">
                {slide.subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles manuales */}
      <button
        onClick={() => {
          prev();
          restartAutoplay();
        }}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-carbon-950/50 p-2 text-paper backdrop-blur-sm transition-colors hover:bg-carbon-950/80"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => {
          next();
          restartAutoplay();
        }}
        aria-label="Siguiente imagen"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-carbon-950/50 p-2 text-paper backdrop-blur-sm transition-colors hover:bg-carbon-950/80"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicadores estilo "perforación de carrete" */}
      <div className="absolute right-4 top-4 flex gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              setIndex(i);
              restartAutoplay();
            }}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-ember-400' : 'w-1.5 bg-paper/50 hover:bg-paper/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
