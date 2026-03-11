import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <h2>¿Listo para comer <span>diferente</span>?</h2>
      <p>Cotiza hoy tu plan de almuerzos corporativos o haz tu primer pedido personal. Sin compromiso.</p>
      <Link href="/#contacto" className="btn-primary">Escríbenos ahora →</Link>
    </section>
  );
}
