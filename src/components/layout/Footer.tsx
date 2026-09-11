import { Aperture } from 'lucide-react';
import Container from '../ui/Container';
import { NAV_LINKS_ALL, SOCIAL_LINKS } from '../../data/content';
import SocialIcon from '../SocialIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-carbon-700/80 bg-carbon-950/60">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Aperture className="h-4 w-4 text-ember-400" strokeWidth={1.5} />
          <span className="font-display text-sm font-semibold text-paper">The Carrete</span>
        </a>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-carbon-400">
          {NAV_LINKS_ALL.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-paper">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <SocialIcon key={social.id} social={social} className="h-4 w-4 text-carbon-400 hover:text-ember-400" />
          ))}
        </div>
      </Container>

      <div className="border-t border-carbon-800">
        <Container className="py-4 text-center text-xs text-carbon-500 md:text-left">
          © {year} The Carrete. Todos los derechos reservados.
        </Container>
      </div>
    </footer>
  );
}
