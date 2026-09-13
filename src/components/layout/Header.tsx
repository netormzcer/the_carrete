import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT, NAV_LINKS_ALL, NAV_SECTION_IDS } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import type { NavLink } from '../../types';

function NavItem({ link, active }: { link: NavLink; active: boolean }) {
  return (
    <a
      href={link.href}
      className={`relative py-1 text-lg transition-colors ${
        active ? 'text-paper' : 'text-carbon-300 hover:text-paper'
      }`}
    >
      {link.label}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-ember-400 transition-all duration-300 ${
          active ? 'w-full' : 'w-0'
        }`}
        aria-hidden="true"
      />
    </a>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-carbon-700/80 bg-carbon-950/70 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-30 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Links izquierda (solo escritorio) */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS_LEFT.map((link) => (
            <NavItem key={link.href} link={link} active={activeId === link.href.replace('#', '')} />
          ))}
        </nav>

        {/* Logo / título central */}
        <a
          href="#inicio"
          className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 md:relative md:left-auto md:translate-x-0 md:justify-self-center"
        >
          
          <span className="font-ephesis text-3xl tracking-tightest text-paper md:text-8xl my-5 md:my-0">
            The Carrete
          </span>

          
          
        </a>

        {/* Links derecha (solo escritorio) */}
        <nav className="hidden items-center gap-8 justify-self-end md:flex">
          {NAV_LINKS_RIGHT.map((link) => (
            <NavItem key={link.href} link={link} active={activeId === link.href.replace('#', '')} />
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="justify-self-end text-paper md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="border-t border-carbon-700/80 bg-carbon-950/95 backdrop-blur-md md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS_ALL.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-3 text-base text-carbon-200 hover:bg-carbon-800 hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
