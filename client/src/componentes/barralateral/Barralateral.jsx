import { useEffect, useState } from "react";
import "./barralateral.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Barralateral() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get("/categorias")
            setCats(res.data)
        }
        getCats();
    },[])

  return (
    <div className="barralateral">
        <div className="elementoLateral">
            <span className="tituloElemento">SOBRE NOSOTROS</span>
            <img className="sobreNosotros" src="https://images.gr-assets.com/users/1622127889p6/50403898.jpg" alt="" />
            <p>Somos una comunidad de alumnos universitarios que sabemos que muchas veces estudiar es un reto del lado económico. Por eso, decidimos crear este blog para ayudar un poco a todos los estudiantes que necesitan un apoyo para seguir con sus estudios</p>
        </div>
        <div className="elementoLateral">
            <span className="tituloElemento">CATEGORÍAS</span>
            <ul className="listaLateral">
                {cats.map((c)=>(
                 <Link to = {`/?cats=${c.nombre}`} className="link">
                 <li className="elementoLista">{c.nombre}</li>
                 </Link>
                ))}
                
            </ul>
        </div>
        <div className="elementoLateral">
            <span className="tituloElemento">SÍGUENOS</span>
            <div className="socialLateral">
                <i class="iconoLateral fa-brands fa-square-facebook"></i>
                <i class="iconoLateral fa-brands fa-square-twitter"></i>
                <i class="iconoLateral fa-brands fa-square-instagram"></i>
                <i class="iconoLateral fa-brands fa-twitch"></i>
            </div>
        </div>
    </div>
    
  );
}
