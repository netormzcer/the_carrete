import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import SocialIcon from '../SocialIcon';
import { CONTACT_INFO, SERVICE_OPTIONS, SOCIAL_LINKS } from '../../data/content';

type Status = 'idle' | 'sent';

/**
 * GitHub Pages es hosting estático: no hay backend para procesar el form.
 * Esta versión arma un `mailto:` con los datos como solución sin costo y sin
 * dependencias. Para un envío real sin abrir el cliente de correo del
 * usuario, reemplaza `handleSubmit` por una llamada a un servicio como
 * Formspree, EmailJS o Getform (todos compatibles con sitios 100% estáticos).
 */
export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const service = form.get('service');
    const message = form.get('message');

    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nServicio de interés: ${service}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Nuevo contacto desde The Carrete&body=${body}`;

    setStatus('sent');
    e.currentTarget.reset();
  };

  return (
    <section id="contacto" className="py-24 sm:py-32">
      <Container>
        <SectionTitle
          frame="05"
          title="Contacto"
          description="Cuéntame qué estás planeando y te respondo en menos de 24 horas."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Datos de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-carbon-200 hover:text-paper">
              <Mail className="h-4 w-4 text-ember-400" />
              {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-carbon-200 hover:text-paper">
              <Phone className="h-4 w-4 text-ember-400" />
              {CONTACT_INFO.phone}
            </a>
            <p className="flex items-center gap-3 text-carbon-200">
              <MapPin className="h-4 w-4 text-ember-400" />
              {CONTACT_INFO.location}
            </p>

            <div className="mt-4 flex gap-5 border-t border-carbon-700 pt-6">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.id} social={social} className="h-5 w-5 text-carbon-300 hover:text-ember-400" />
              ))}
            </div>

            <img
            className="bg-white rounded-full m-auto p-0 shrink-0 object-contain size-[120px] md:mt-2"
            src="/img/the_carrete.webp"
            alt="The Carrete"
          />
          </motion.div>
          

          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" name="name" type="text" required autoComplete="name" />
              <Field label="Correo" name="email" type="email" required autoComplete="email" />
            </div>

            <label className="flex flex-col gap-2 text-sm text-carbon-300">
              Servicio de interés
              <select
                name="service"
                defaultValue=""
                required
                className="rounded-lg border border-carbon-600 bg-carbon-900 px-4 py-3 text-paper focus-visible:outline-2"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-carbon-300">
              Mensaje
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Fecha, lugar y todo lo que consideres importante para tu sesión."
                className="resize-none rounded-lg border border-carbon-600 bg-carbon-900 px-4 py-3 text-paper placeholder:text-carbon-500 focus-visible:outline-2"
              />
            </label>

            <Button type="submit" variant="primary" className="self-start">
              Enviar mensaje
            </Button>

            {status === 'sent' && (
              <p className="text-sm text-ember-300" role="status">
                Se abrió tu cliente de correo con el mensaje listo para enviar.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm text-carbon-300">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-lg border border-carbon-600 bg-carbon-900 px-4 py-3 text-paper placeholder:text-carbon-500 focus-visible:outline-2"
      />
    </label>
  );
}
