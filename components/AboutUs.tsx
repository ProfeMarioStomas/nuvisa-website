import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="nosotros" id="nosotros">
      <div className="nosotros-content">
        <div className="nosotros-visual reveal">
          <div>
            <Image
              src="/about-us.png"
              alt="Imagen Nosotros"
              width={530}
              height={530}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
        <div className="nosotros-text reveal">
          <span className="section-tag">Sobre nosotros</span>
          <h2>
            Cocina con <span>alma</span>, servicio con corazón
          </h2>
          <p>
            Nuvisa Food nace de la pasión por la buena cocina y la convicción de
            que comer bien no debería ser un lujo. Como la golondrina de nuestro
            logo, llegamos puntuales cada día llevando alimento fresco y
            preparado con dedicación a empresas y hogares.
          </p>
          <div className="valores-grid">
            <div className="valor-item">
              <div className="valor-icon">🥬</div>
              <div>
                <h4>Ingredientes frescos</h4>
                <p>Seleccionamos lo mejor cada mañana</p>
              </div>
            </div>
            <div className="valor-item">
              <div className="valor-icon">⏰</div>
              <div>
                <h4>Puntualidad</h4>
                <p>Tu almuerzo siempre a tiempo</p>
              </div>
            </div>
            <div className="valor-item">
              <div className="valor-icon">👨‍🍳</div>
              <div>
                <h4>Sabor casero</h4>
                <p>Cocinamos como en casa, pero mejor</p>
              </div>
            </div>
            <div className="valor-item">
              <div className="valor-icon">♻️</div>
              <div>
                <h4>Sustentabilidad</h4>
                <p>Envases eco-amigables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
