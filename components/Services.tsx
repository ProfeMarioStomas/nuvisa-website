export default function Services() {
  return (
    <section className="servicios" id="servicios">
      <div className="section-header reveal">
        <span className="section-tag">Nuestros servicios</span>
        <h2>Soluciones de alimentación para cada necesidad</h2>
        <p>
          Desde almuerzos corporativos diarios hasta catering para tus eventos
          especiales, nos adaptamos a ti.
        </p>
      </div>
      <div className="servicios-grid">
        <div className="servicio-card reveal">
          <div className="servicio-icon">🏢</div>
          <h3>Almuerzos Corporativos</h3>
          <p>
            Planes de alimentación diaria para tu equipo de trabajo. Menús
            variados, balanceados y puntuales. Ideal para oficinas, fábricas y
            sedes empresariales.
          </p>
          <span className="servicio-tag">B2B</span>
        </div>
        <div className="servicio-card reveal">
          <div className="servicio-icon">🎉</div>
          <h3>Catering & Eventos</h3>
          <p>
            Servicio completo para reuniones, celebraciones y eventos
            corporativos o sociales. Diseñamos menús a la medida de tu ocasión.
          </p>
          <span className="servicio-tag">B2B · B2C</span>
        </div>
        <div className="servicio-card reveal">
          <div className="servicio-icon">🛵</div>
          <h3>Delivery Personal</h3>
          <p>
            ¿Quieres comer rico sin cocinar? Recibe tu almuerzo casero en la
            puerta de tu hogar u oficina. Fresco, caliente y listo para
            disfrutar.
          </p>
          <span className="servicio-tag">B2C</span>
        </div>
      </div>
    </section>
  );
}
