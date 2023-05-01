import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <span className="tituloLogin">Inicio de Sesión</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="usuario@gmail.com"></input>
            <label>Contraseña</label>
            <input type="password" className="loginInput" placeholder="Ingresa Contraseña"></input>
            <button className="botonLogin">Iniciar Sesión</button>
        </form>
        <button className="registro">
          <Link className="link" to="/registrar">Registro</Link>
        </button>
    </div>
  );
}
