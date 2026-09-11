import { Instagram, Facebook, Mail } from 'lucide-react';
import type { SocialLink } from '../types';

/** lucide-react no incluye el logo de marca de WhatsApp; se define en SVG propio. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.858.505 3.646 1.463 5.213L2 22l4.897-1.437a9.96 9.96 0 0 0 5.107 1.401c5.518 0 10.004-4.486 10.004-10.004C22.008 6.486 17.522 2 12.004 2Zm0 18.09a8.06 8.06 0 0 1-4.16-1.152l-.298-.177-2.906.853.868-2.844-.194-.293a8.086 8.086 0 1 1 6.69 3.613Z" />
    </svg>
  );
}

const ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  mail: Mail,
  whatsapp: WhatsAppGlyph,
} as const;

export default function SocialIcon({
  social,
  className = 'h-5 w-5',
}: {
  social: SocialLink;
  className?: string;
}) {
  const Icon = ICONS[social.icon];
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="transition-colors"
    >
      <Icon className={className} />
    </a>
  );
}
