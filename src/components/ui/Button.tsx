import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'ghost' | 'outline';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-display transition-colors duration-200 focus-visible:outline-2';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ember-500 text-carbon-950 hover:bg-ember-400',
  ghost: 'text-paper hover:text-ember-300',
  outline: 'border border-carbon-600 text-paper hover:border-ember-400 hover:text-ember-300',
};

/**
 * Devuelve las clases del botón sin renderizar nada. Úsalo cuando necesites
 * el mismo estilo en un elemento distinto a <button>, por ejemplo un <a>
 * que actúa como call-to-action (ver Hero.tsx).
 */
export function buttonClasses(variant: ButtonVariant = 'primary', className = '') {
  return `${base} ${variants[variant]} ${className}`;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/** Botón real (<button>) para acciones dentro de la página, como enviar un formulario. */
export default function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...rest} />;
}
