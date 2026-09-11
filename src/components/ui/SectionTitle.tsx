import { motion } from 'framer-motion';

interface SectionTitleProps {
  frame: string; // ej. "02" — referencia al número de fotograma en el carrete
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

/**
 * Encabezado de sección compartido. El pequeño número junto al título
 * funciona como "número de fotograma" — un guiño coherente con la marca
 * "The Carrete" (rollo de fotografía análoga) en vez de una etiqueta genérica.
 */
export default function SectionTitle({
  frame,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-sm text-ember-400">{frame}</span>
        <span className="h-px w-8 bg-carbon-600" aria-hidden="true" />
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tightest text-paper sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-prose text-base text-carbon-300">{description}</p>
      )}
    </motion.div>
  );
}
