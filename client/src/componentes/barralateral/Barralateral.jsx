import "./barralateral.css";

export default function Barralateral() {
  return (
    <div className="barralateral">
        <div className="elementoLateral">
            <span className="tituloElemento">SOBRE NOSOTROS</span>
            <img className="sobreNosotros" src="https://images.gr-assets.com/users/1622127889p6/50403898.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente labore, facilis eligendi omnis quaerat velit et corrupti eos quas quia, magni sit excepturi voluptate deleniti quam eius modi reprehenderit.</p>
        </div>
        <div className="elementoLateral">
            <span className="tituloElemento">CATEGORÍAS</span>
            <ul className="listaLateral">
                <li className="elementoLista">DEPORTIVAS</li>
                <li className="elementoLista">ACADÉMICAS</li>
                <li className="elementoLista">ESCASOS RECURSOS</li>
                <li className="elementoLista">TALENTOS</li>
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
