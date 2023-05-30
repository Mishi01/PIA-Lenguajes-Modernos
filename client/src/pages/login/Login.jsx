import { Context } from "../../context/Context";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ...

fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  });

export default function Login() {

  const userRef  = useRef();
  const passRef = useRef();
  const{dispatch, isFetching} = useContext(Context)


  const handleSubmit = async (e)=>{
    e.preventDefault();
  
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        Nombre_usuario: userRef.current.value,
        Contraseña: passRef.current.value,
      });
    
    dispatch({type: "LOGIN_EXITOSO", payload:res.data });
    } catch (err) {
      dispatch({type: "LOGIN_FALLIDO"});
      notify2();
    }
  };

    const notify2 = () => {

      toast('Inicio de Sesión Fallido', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        theme: "dark",
        });}


  return (
    <div className="login">
        <span className="tituloLogin">Inicio de Sesión</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" className="loginInput" placeholder="Ingresa tu nombre" ref={userRef}></input>
            <label>Contraseña</label>
            <input type="password" className="loginInput" placeholder="Ingresa Contraseña" ref={passRef}></input>
            <button className="botonLogin" type="submit" disabled={isFetching}>Iniciar Sesión</button>
        </form>
        <button className="registro">
          <Link className="link" to="/registrar">Registro</Link>
        </button>
        <ToastContainer/>
    </div>
  );
}
