import "../estilos/navegacion.css"
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Presentación</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/consumo">Personajes</Link></li>
        <li><Link to="/envio">Buscar_personajes</Link></li>
        <li><Link to="/episodio">Episodios</Link></li>
        <li><Link to="/envio_episodio">Buscar_episodios</Link></li>
      </ul>
    </nav>
  );
}