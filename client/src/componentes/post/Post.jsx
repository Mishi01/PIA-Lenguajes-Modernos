import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img className="imagenPost" src="https://jugadoresdeajedrez.com/wp-content/uploads/2022/09/Por-Primera-vez-una-Universidad-Ofrece-una-Carrera-en-Ajedrez.jpg" alt="beca ajedrez"></img>
        <div className="postInfo">
            <div className="categoria">
                <span className="categoriaPost">Deportiva</span>
            </div>
            <span className="postTitulo">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postFecha">Hace 1 mes</span>
        </div>
        <p className="descripcionPost">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias praesentium. Totam, voluptatibus? Officiis, enim illum nam placeat, saepe reprehenderit, nobis quo aspernatur neque fuga molestiae necessitatibus vero ratione sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias praesentium. Totam, voluptatibus? Officiis, enim illum nam placeat, saepe reprehenderit, nobis quo aspernatur neque fuga molestiae necessitatibus vero ratione sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias praesentium. Totam, voluptatibus? Officiis, enim illum nam placeat, saepe reprehenderit, nobis quo aspernatur neque fuga molestiae necessitatibus vero ratione sint.
        </p>
    </div>
  );
}
