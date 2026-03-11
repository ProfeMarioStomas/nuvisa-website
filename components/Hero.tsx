import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-pattern"></div>
      <div className="hero-decoration"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            Frescura que se siente en cada bocado
          </div>
          <h1>
            Almuerzos con <span>sabor casero</span>, calidad profesional
          </h1>
          <p>
            En Nuvisa Food preparamos almuerzos frescos y nutritivos para
            empresas, eventos y personas que valoran comer bien todos los días
          </p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn-primary">
              Solicitar cotización →
            </a>
            <a href="#menu" className="btn-secondary">
              Ver nuestro menú
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <div>
              <Image src="/hero-image.png" alt="Imagen Hero" width={536} height={400} />
            </div>
            <div className="hero-stat stat-1">
              <div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Almuerzos al día</div>
              </div>
            </div>
            <div className="hero-stat stat-2">
              <div>
                <div className="stat-number">⭐ 4.9</div>
                <div className="stat-label">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
