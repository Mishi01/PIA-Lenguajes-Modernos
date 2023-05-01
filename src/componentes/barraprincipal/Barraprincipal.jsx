import "./barraprincipal.css"
import { Link } from "react-router-dom";


export default function Barraprincipal(){
    const user=false;
    return (
        <div className="principal">
            <div className="barraIzquierda">
              <i class="iconoSuperior fa-brands fa-square-facebook"></i>
              <i class="iconoSuperior fa-brands fa-square-twitter"></i>
              <i class="iconoSuperior fa-brands fa-square-instagram"></i>
              <i class="iconoSuperior fa-brands fa-twitch"></i>

            </div>
            <div className="barraCentro">
                <ul className="barradeElementos">
                    <li className="barraElemento">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="barraElemento">
                        <Link className="link" to="/">SOBRE NOSOTROS</Link>
                    </li>
                    <li className="barraElemento">
                        <Link className="link" to="/">CONTACTO</Link>
                    </li>
                    <li className="barraElemento">
                        <Link className="link" to="/publicar">PUBLICAR</Link>
                    </li>
                    <li className="barraElemento">
                        {user && "CERRAR SESIÓN"}
                    </li>
                </ul>
            </div>
            <div className="barraDerecha">
                {
                    user  ? (
                        <img className="imagenDerecha" src="https://www.esiaz.ipn.mx/assets/files/mediaSuperior/img/inicio/apartado-becas.png" alt="imagen-becas" />
                    ):(
                    <ul className="barradeElementos">
                        <li className="barraElemento">
                            <Link className="link" to="/login">Inicio de Sesión</Link>
                        </li>
                        <li className="barraElemento">
                        <Link className="link" to="/registrar">Registrar</Link>
                        </li>
                    </ul>
                    )
                }
              <i className="iconoBuscar fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}