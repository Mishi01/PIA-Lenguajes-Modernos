import "./post.css";
import {Link} from "react-router-dom"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ...

fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  }); 
 
export default function Post({post}) {
  const PF = "http://localhost:5000/fotos/"
  return (
    <div className="post">
        <img className="imagenPost" src={PF+post.foto} alt="beca ajedrez"></img>
        <div className="postInfo">
            <div className="categoria">
                <span className="categoriaPost">{post.categoria}</span>
            </div>
            <Link to = {`/post/${post._id}`} className="link">
             <span className="postTitulo">{post.titulo}</span>
            </Link>
            <hr/>
            <span className="postFecha">{post.createdAt}</span>
        </div>
        <p className="descripcionPost">
            {post.descripcion}
        </p>

    </div>
  );
}
