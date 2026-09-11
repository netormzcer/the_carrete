/**
 * Fondo global fijo (efecto parallax) detrás de todas las secciones.
 * - `bg-scroll md:bg-fixed`: en móvil se evita `background-attachment: fixed`
 *   porque Safari/iOS lo maneja mal (jank de scroll); en escritorio sí se fija.
 * - El degradado oscuro garantiza legibilidad del texto sobre la foto.
 */
export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="absolute inset-0 bg-scroll bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/seed/carrete-bg/1920/1280')" }}
      />
      {/* Overlay oscuro: de casi opaco arriba a muy opaco abajo para legibilidad total */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/85 via-carbon-950/90 to-carbon-950" />
      {/* Textura de grano sutil — referencia directa al grano de película análoga */}
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-40" />
    </div>
  );
}
