import type {
  NavLink,
  HeroSlide,
  Service,
  GalleryImage,
  SocialLink,
} from '../types';

// ---------------------------------------------------------------------------
// Todas las imágenes usan picsum.photos como PLACEHOLDER.
// Reemplaza cada `image` por las fotos reales del carrete antes de publicar.
// El parámetro /seed/xxx fija la imagen para que no cambie en cada recarga.
// ---------------------------------------------------------------------------

export const NAV_LINKS_LEFT: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
];

export const NAV_LINKS_RIGHT: NavLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export const NAV_LINKS_ALL: NavLink[] = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

// Referencia estable (calculada una sola vez) para el scroll-spy del Header.
export const NAV_SECTION_IDS: string[] = NAV_LINKS_ALL.map((l) => l.href.replace('#', ''));

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: './img/c1.webp',
    eyebrow: 'Retrato editorial',
    title: 'Cada carrete cuenta una historia',
    subtitle:
      'Fotografía documental y de retrato para personas y marcas que no quieren fotos genéricas.',
  },
  {
    id: 'slide-2',
    image: './img/c2.webp',
    eyebrow: 'Bodas y celebraciones',
    title: 'Los mejores recuerdos en las mejores fotos',
    subtitle:
      'Cobertura completa de bodas y eventos con un ojo entrenado para lo espontáneo.',
  },
  {
    id: 'slide-3',
    image: './img/c3.webp',
    eyebrow: 'Producto y marca',
    title: 'Una foto convence más que mil palabras',
    subtitle: 'Fotografía comercial limpia, pensada para catálogo, e‑commerce y redes.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'retratos',
    frame: '01A',
    title: 'Retratos',
    description:
      'Sesiones individuales o en pareja, en estudio o exteriores, con dirección de poses incluida.',
    features: ['1 hora de sesión', 'fotos editadas', 'Locación a elegir'],
  },
  {
    id: 'bodas',
    frame: '02A',
    title: 'Bodas',
    description:
      'Cobertura del día completo: preparativos, ceremonia, fiesta y los detalles que nadie más nota.',
    features: ['Cobertura de evento', 'Galería digital privada', 'Captura de los mejores momentos'],
  },
  {
    id: 'eventos',
    frame: '03A',
    title: 'Eventos',
    description:
      'Corporativos, cumpleaños, graduaciones. Registro discreto sin interrumpir el momento.',
    features: ['Tarifa por hora', 'Entrega en 3 días', 'Uso comercial incluido'],
  },
  {
    id: 'producto',
    frame: '04A',
    title: 'Producto y marca',
    description:
      'Fotografía de catálogo, e‑commerce y contenido para redes sociales con dirección de arte.',
    features: ['Fondo blanco o lifestyle', 'Retoque incluido', 'Formatos para redes'],
  },
  {
    id: 'familia',
    frame: '05A',
    title: 'Sesiones familiares',
    description:
      'Retratos familiares relajados, en casa o al aire libre, ideales para regalar en fin de año.',
    features: ['Hasta 6 personas', '20 fotos editadas', 'Impresiones opcionales'],
  },
  {
    id: 'book',
    frame: '06A',
    title: 'Book fotográfico',
    description:
      'Portafolio personal o profesional: modelos, actores, LinkedIn y redes con dirección completa.',
    features: ['Varios cambios de vestuario', 'Asesoría de estilo', 'Book digital + impreso'],
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', image: './img/g1.webp', category: 'Retrato', alt: 'Retrato en luz natural', span: 'lg' },
  { id: 'g2', image: './img/g4.webp', category: 'Retrato', alt: 'Detalle de anillos de boda', span: 'sm' },
  { id: 'g3', image: './img/g5.webp', category: 'Evento', alt: 'Fotografía callejera en blanco y negro', span: 'md' },
  { id: 'g4', image: './img/g2.webp', category: 'Retrato', alt: 'Producto sobre fondo neutro', span: 'lg' },
  { id: 'g5', image: './img/g6.webp', category: 'Calle', alt: 'Momento de celebración en evento', span: 'sm' },
  { id: 'g6', image: './img/g7.webp', category: 'Evento', alt: 'Retrato en estudio', span: 'md' },
  { id: 'g7', image: './img/g3.webp', category: 'Retrato', alt: 'Pareja durante la ceremonia', span: 'lg' },
  { id: 'g8', image: './img/g8.webp', category: 'Boda', alt: 'Detalle de anillos de boda', span: 'sm' },
  { id: 'g9', image: './img/g9.webp', category: 'Producto', alt: 'Detalle de producto artesanal', span: 'md' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'ig', label: 'Instagram', href: 'https://instagram.com/thecarrete', icon: 'instagram' },
  { id: 'fb', label: 'Facebook', href: 'https://facebook.com/ithecarrete', icon: 'facebook' },
  { id: 'wa', label: 'WhatsApp', href: 'https://wa.me/+528110200177', icon: 'whatsapp' },
  { id: 'mail', label: 'Correo', href: 'mailto:thecarrete@outlook.com', icon: 'mail' },
];

export const CONTACT_INFO = {
  email: 'thecarrete@outlook.com',
  phone: '+52 811 020 0177',
  location: 'México',
};

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
