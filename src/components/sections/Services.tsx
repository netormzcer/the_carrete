import { Check } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { SERVICES } from '../../data/content';

export default function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <Container>
        <SectionTitle
          frame="03"
          title="Servicios"
          description="Paquetes pensados para adaptarse a distintos proyectos. Todos incluyen edición profesional y entrega digital en alta resolución."
        />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.id} frame={service.frame} title={service.title}>
              <p>{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
