export default function Contact() {
  return (
    <section className="contacto" id="contacto">
      <div className="section-header reveal">
        <span className="section-tag">Contacto</span>
        <h2>Hablemos de tu próximo almuerzo</h2>
        <p>
          Cuéntanos qué necesitas y te preparamos una propuesta a la medida.
        </p>
      </div>
      <div className="contacto-wrapper">
        <div className="contacto-info reveal">
          <h3>Información de contacto</h3>
          <p>
            Estamos listos para atenderte. Escríbenos o llámanos y responderemos
            lo antes posible.
          </p>
          <div className="contacto-item">
            <div className="contacto-item-icon">📍</div>
            <div className="contacto-item-text">
              <strong>Ubicación</strong>
              <span>Iquique, Chile</span>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-icon">📞</div>
            <div className="contacto-item-text">
              <strong>Teléfono</strong>
              <span>+56 9 5094 5142</span>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-icon">✉️</div>
            <div className="contacto-item-text">
              <strong>Email</strong>
              <span>contacto@nuvisafood.cl</span>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-icon">🕐</div>
            <div className="contacto-item-text">
              <strong>Horario</strong>
              <span>Lunes a Sábado · 7:00 - 17:00</span>
            </div>
          </div>
        </div>
        <div className="contacto-form reveal">
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="tel" placeholder="+56 9 ..." />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" />
          </div>
          <div className="form-group">
            <label>Tipo de servicio</label>
            <select>
              <option value="">Selecciona una opción</option>
              <option>Almuerzos corporativos</option>
              <option>Catering para eventos</option>
              <option>Delivery personal</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Cuéntanos qué necesitas: cantidad de personas, frecuencia, preferencias alimentarias..."></textarea>
          </div>
          <button className="form-submit">Enviar solicitud →</button>
        </div>
      </div>
    </section>
  );
}
