import "./solopost.css";

export default function Solopost() {
  return (
    <div className="soloPost">
        <div className="info">
            <img className="postFoto" src="https://jugadoresdeajedrez.com/wp-content/uploads/2022/09/Por-Primera-vez-una-Universidad-Ofrece-una-Carrera-en-Ajedrez.jpg" alt="info del post" />
            <h1 className="solopostTitulo">Lorem ipsum, dolor sit amet consectetur adipisicing elit
                <div className="editarPost">
                    <i class="icono fa-solid fa-pen-to-square"></i>
                    <i class="icono fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="postDescripcion">
                <span className="solopostAutor">Autor: <b>Equipo</b></span>
                <span className="solopostFecha">Hace 1 mes</span>
            </div>
            <p className="postdatoGeneral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non quam aliquid accusantium, cum expedita nesciunt in veritatis accusamus nam atque placeat minus doloremque cupiditate nostrum ipsum? Nobis, nemo officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non quam aliquid accusantium, cum expedita nesciunt in veritatis accusamus nam atque placeat minus doloremque cupiditate nostrum ipsum? Nobis, nemo officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non quam aliquid accusantium, cum expedita nesciunt in veritatis accusamus nam atque placeat minus doloremque cupiditate nostrum ipsum? Nobis, nemo officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non quam aliquid accusantium, cum expedita nesciunt in veritatis accusamus nam atque placeat minus doloremque cupiditate nostrum ipsum? Nobis, nemo officia. 
            </p>
        </div>
    </div>
  );
}
