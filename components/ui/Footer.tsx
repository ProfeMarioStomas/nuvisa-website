import Link from "next/link";

export default function Footer() {
  return (
  <footer>
    <div className="footer-content">
      <div className="footer-brand">
        <span className="brand-nuvisa">NUVISA</span><br />
        <span className="brand-food">food</span>
      </div>
      <div className="footer-links">
        <Link href="/#inicio">Inicio</Link>
        <Link href="/#servicios">Servicios</Link>
        <Link href="/#nosotros">Nosotros</Link>
        <Link href="/#menu">Menú</Link>
        <Link href="/#contacto">Contacto</Link>
      </div>
      <div className="footer-social">
        <Link href="#" aria-label="Instagram">📷</Link>
        <Link href="#" aria-label="Facebook">📘</Link>
        <Link href="#" aria-label="WhatsApp">💬</Link>
      </div>
    </div>
    <div className="footer-bottom">
      © 2026 Nuvisa Food. Todos los derechos reservados.
    </div>
  </footer>
  );
}
