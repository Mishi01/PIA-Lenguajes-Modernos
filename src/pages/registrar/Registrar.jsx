import "./registrar.css";
import { Link } from "react-router-dom";

export default function Registrar() {
  return (
    <div className="registrar">
        <span className="tituloRegistrar">Registro</span>
        <form className="registrarForm">
            <label>Usuario</label>
            <input type="text" className="registrarInput" placeholder="Usuario1212"></input>
            <label>Email</label>
            <input type="text" className="registrarInput" placeholder="usuario@gmail.com"></input>
            <label>Contraseña</label>
            <input type="password" className="registrarInput" placeholder="Ingresa Contraseña"></input>
            <button className="botonRegistrar">Registrarse</button>
        </form>
        <button className="inicioSesion">
          <Link className="link" to="/login">Inicio de Sesión</Link>
        </button>
    </div>
  );
}
