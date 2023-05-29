import "./publicar.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Publicar() {
    const [titulo, setTitle] = useState("");
    const [descripcion, setDesc] = useState("");
    const [requisitos, setReq] = useState("");
    const [contacto, setCont] = useState("");
    const [file, setFile] = useState(null);

    const listo = () => {

        toast('Se ha creado un nuevo post en el blog!', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          theme: "light",
          autoClose: false,
          });}


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newBeca = {
            titulo,
            descripcion,
            requisitos,
            contacto,
        };

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newBeca.foto = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {console.log("No se subio foto")}
        }
        try {
            const res = await axios.post("/becas", newBeca);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {}
    };
  return (
    
    <div className="publicar">
        {file && (
            <img className="publicacionImagen" src={URL.createObjectURL(file)} alt="imagen del post"></img>
        )}
        <form className="crearPost" onSubmit={handleSubmit}>
            <div className="textoFormGroup">
                <label htmlFor="fileInput">
                    <i class="iconoAgregar fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}></input>
                <input type="text" placeholder="Título" className="publicacionInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="textoFormGroup">
                <textarea placeholder="Información general sobre beca.." type="text" className="publicacionInput publicarTexto" onChange={e=>setDesc(e.target.value)}></textarea>
                <textarea placeholder="Requisitos.." type="text" className="publicacionInput publicarTexto" onChange={e=>setReq(e.target.value)}></textarea>
                <textarea placeholder="Contacto.." type="text" className="publicacionInput publicarTexto" onChange={e=>setCont(e.target.value)}></textarea>
            </div>
            <button className="submit" type="submit" onClick={listo}>Publicar</button>
        </form>
        <ToastContainer/>
    </div>
  );
}
