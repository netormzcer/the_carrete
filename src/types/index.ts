export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface Service {
  id: string;
  frame: string; // número de fotograma, ej. "01A" — referencia estética al carrete
  title: string;
  description: string;
  features: string[];
}

export type GalleryCategory = 'Retrato' | 'Boda' | 'Evento' | 'Producto' | 'Calle';

export interface GalleryImage {
  id: string;
  image: string;
  category: GalleryCategory;
  alt: string;
  /** proporción para el efecto masonry: controla cuántas filas ocupa */
  span: 'sm' | 'md' | 'lg';
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'whatsapp' | 'mail';
}
