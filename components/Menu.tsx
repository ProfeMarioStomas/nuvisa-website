import Image from 'next/image';

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
            <Image
              src="/aji-de-gallina.png"
              alt="Imagen Menu Item"
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <span className="menu-tag">Popular</span>
          </div>
          <div className="menu-card-body">
            <h3>Ají de Gallina</h3>
            <p>
              Plato típico de la gastronomía peruana.
              Crema espesa de ají con pechuga de gallina deshilachada.
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
            <Image
              src="/lomo-saltado-bandeja.png"
              alt="Imagen Menu Item"
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
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
            <Image
              src="/ensalada-mediterranea.png"
              alt="Imagen Menu Item"
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <span className="menu-tag">Saludable</span>
          </div>
          <div className="menu-card-body">
            <h3>Planes Personalizados</h3>
            <p>
              Ofrecemos 3 patrones de alimentación saludable a tu elección: Mediterránea, DASH o Paleo.
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
