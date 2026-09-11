import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Lightbox from '../Lightbox';
import { GALLERY_IMAGES } from '../../data/content';
import type { GalleryCategory } from '../../types';

const CATEGORIES: Array<GalleryCategory | 'Todas'> = [
  'Todas',
  'Retrato',
  'Boda',
  'Evento',
  'Producto',
  'Calle',
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('Todas');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === 'Todas'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === filter),
    [filter]
  );

  return (
    <section id="galeria" className="py-24 sm:py-32">
      <Container>
        <SectionTitle
          frame="04"
          title="Galería"
          description="Una muestra del trabajo reciente. Haz clic en cualquier imagen para verla en grande."
        />

        {/* Filtros por categoría */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === cat
                  ? 'border-ember-500 bg-ember-500/10 text-ember-300'
                  : 'border-carbon-700 text-carbon-300 hover:border-carbon-500 hover:text-paper'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid tipo masonry con columnas CSS (sin librerías externas) */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {filtered.map((image, i) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              onClick={() => setActiveIndex(i)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-carbon-700/50 text-left"
            >
              <img
                src={image.image}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  image.span === 'lg'
                    ? 'aspect-[3/4]'
                    : image.span === 'md'
                    ? 'aspect-square'
                    : 'aspect-[4/3]'
                }`}
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-xs text-paper">{image.category}</span>
                <Expand className="h-4 w-4 text-paper" />
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <Lightbox
        images={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
