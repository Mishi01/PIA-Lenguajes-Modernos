import { useState } from "react";
import "./registrar.css";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ...

fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  });

export default function Registrar() {
  const [Nombre_usuario, setUsername] = useState("")
  const [Correo, setEmail] = useState("")
  const [Contraseña, setPassword] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/auth/registrar", {
        Nombre_usuario,
        Correo,
        Contraseña,
      });
      res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }
  };
  return (
    <div className="registrar">
        <span className="tituloRegistrar">Registro</span>
        <form className="registrarForm" onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input type="text" className="registrarInput" placeholder="Usuario1212"
             onChange={e=>setUsername(e.target.value)}></input>
            <label>Email</label>
            <input type="text" className="registrarInput" placeholder="usuario@gmail.com" onChange={e=>setEmail(e.target.value)}></input>
            <label>Contraseña</label>
            <input type="password" className="registrarInput" placeholder="Ingresa Contraseña" onChange={e=>setPassword(e.target.value)}></input>
            <button className="botonRegistrar" type="submit">Registrarse</button>
        </form>
        <button className="inicioSesion">
          <Link className="link" to="/login">Inicio de Sesión</Link>
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Algo salió mal!</span>}
    </div>
  );
}
