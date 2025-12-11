import "../estilos/presentacion.css"
import perfil from "../assets/perfil.jpg";
export default function Presentacion() {
    return (
        <div className="contenedor">
            <div className="encabezado">
                <p>Mi perfil laboral</p>
            </div>

            <div className="perfil-contenedor">
                <img src={perfil} className="foto-perfil" />

                <div className="info-perfil">
                    <h2>Monica Liceth Tolosa Corredor</h2>
                    <p>Desarrolladora web</p>
                    <p>Me caracterizo por ser una persona responsable, puntual y con ganas de aprender, que trabaja bien en equipo y cumple sus responsabilidades con dedicación y compromiso.</p>
                </div>
            </div>

            <div className="seccion">
                <h3>Habilidades</h3>
                <ul>
                    <li>Respnsabilidad</li>
                    <li>Comunicación</li>
                    <li>Trabajo en equipo</li>
                    <li>Puntualidad</li>
                </ul>
            </div>

            <div className="seccion">
                <h3>Educación</h3>
                <div className="bloque">
                    <h4>Tecnico en desarrollo de software</h4>
                    <p>Centro de siseño y metrologia SENA, 2024</p>
                </div>
            </div>
        </div>
    );
}