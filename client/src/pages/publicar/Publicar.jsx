import "./publicar.css";

export default function Publicar() {
  return (
    <div className="publicar">
        <img className="publicacionImagen" src="https://jugadoresdeajedrez.com/wp-content/uploads/2022/09/Por-Primera-vez-una-Universidad-Ofrece-una-Carrera-en-Ajedrez.jpg" alt="imagen del post"></img>
        <form className="crearPost">
            <div className="textoFormGroup">
                <label htmlFor="fileInput">
                    <i class="iconoAgregar fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}></input>
                <input type="text" placeholder="Título" className="publicacionInput" autoFocus={true}/>
            </div>
            <div className="textoFormGroup">
                <textarea placeholder="Información sobre beca.." type="text" className="publicacionInput publicarTexto"></textarea>
            </div>
            <button className="submit">Publicar</button>
        </form>
    </div>
  );
}
