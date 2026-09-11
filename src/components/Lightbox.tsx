import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const image = activeIndex !== null ? images[activeIndex] : null;
  const isOpen = image !== null;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && activeIndex !== null) {
        onNavigate((activeIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && activeIndex !== null) {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  return createPortal(
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-carbon-950/95 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.img
            key={image.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            src={image.image}
            alt={image.alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-5 top-5 rounded-full bg-carbon-900/70 p-2 text-paper hover:text-ember-400"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex! - 1 + images.length) % images.length);
            }}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-carbon-900/70 p-2 text-paper hover:text-ember-400 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex! + 1) % images.length);
            }}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-carbon-900/70 p-2 text-paper hover:text-ember-400 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display text-xs text-carbon-400">
            {activeIndex! + 1} / {images.length} — {image.category}
          </span>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
