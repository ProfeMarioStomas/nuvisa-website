export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="section-header reveal">
        <span className="section-tag">Nuestro menú</span>
        <h2>Sabores que cambian cada semana</h2>
        <p>
          Rotamos nuestro menú semanalmente para que siempre haya algo nuevo.
          Estos son algunos de nuestros platos favoritos.
        </p>
      </div>
      <div className="menu-grid">
        <div className="menu-card reveal">
          <div className="menu-card-image">
            🍗
            <span className="menu-tag">Popular</span>
          </div>
          <div className="menu-card-body">
            <h3>Pollo al Horno con Arroz</h3>
            <p>
              Pollo marinado al horno dorado, acompañado de arroz con vegetales
              y ensalada fresca del día.
            </p>
            <div className="menu-card-footer">
              <span className="menu-price">Consultar</span>
              <a href="#contacto" className="menu-order">
                Pedir →{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="menu-card reveal">
          <div className="menu-card-image">
            🥩
            <span className="menu-tag">Premium</span>
          </div>
          <div className="menu-card-body">
            <h3>Lomo Saltado</h3>
            <p>
              Trozos de lomo fino salteados con cebolla, tomate y ají, servidos
              con papas fritas y arroz blanco.
            </p>
            <div className="menu-card-footer">
              <span className="menu-price">Consultar</span>
              <a href="#contacto" className="menu-order">
                Pedir →
              </a>
            </div>
          </div>
        </div>
        <div className="menu-card reveal">
          <div className="menu-card-image">
            🥗
            <span className="menu-tag">Saludable</span>
          </div>
          <div className="menu-card-body">
            <h3>Bowl Mediterráneo</h3>
            <p>
              Base de quinoa con vegetales asados, garbanzos, hummus casero,
              aceitunas y aderezo de limón.
            </p>
            <div className="menu-card-footer">
              <span className="menu-price">Consultar</span>
              <a href="#contacto" className="menu-order">
                Pedir →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
