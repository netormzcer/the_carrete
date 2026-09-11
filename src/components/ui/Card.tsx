import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  frame: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Tarjeta minimalista. En vez de sombra + radio genéricos, usa una línea
 * superior punteada que evoca la perforación de un rollo de película,
 * coherente con el resto del sistema visual.
 */
export default function Card({ frame, title, children, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative border-t border-dashed border-carbon-600 pt-6 transition-colors hover:border-ember-500/60 ${className}`}
    >
      <span className="font-display text-xs text-carbon-400 group-hover:text-ember-400">
        {frame}
      </span>
      <h3 className="mt-3 font-display text-xl font-semibold text-paper">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-carbon-300">{children}</div>
    </motion.div>
  );
}
