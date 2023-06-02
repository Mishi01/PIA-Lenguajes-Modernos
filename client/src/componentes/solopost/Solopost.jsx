import { useLocation } from "react-router-dom";
import "./solopost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import swal from "sweetalert"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ...

fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  });


export default function Solopost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/fotos/"
    const {usuario} = useContext(Context)

    const [titulo, setTitle] = useState("");
    const [descripcion, setDesc] = useState("");
    const [requisitos, setReq] = useState("");
    const [contacto, setCont] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/becas/"+path);
            setPost(res.data)
            setTitle(res.data.titulo)
            setDesc(res.data.descripcion)
            setCont(res.data.contacto)
            setReq(res.data.requisitos)
        }
        getPost();
    },[path])

    const alertaBorrar=()=>{
        swal({
            title:"Eliminar Beca",
            text:"¿Estás seguro que quieres borrar esta beca?",
            icon:"warning",
            buttons: ["No", "Si"]
        }).then(respuesta=>{
            if(respuesta){
                swal({text: "La beca se ha borrado con éxito", icon:"success"})
                handleDelete()
            }
        })
    }

    const alertaEditar=()=>{
        swal({
            title:"Editar Beca",
            text:"¿Estás seguro que quieres aplicar estos cambios?",
            icon:"warning",
            buttons: ["No", "Si"]
        }).then(respuesta=>{
            if(respuesta){
                swal({text: "La beca se ha editado con éxito", icon:"success"})
                handleEditar()
            }
        })
    }


    const handleDelete =async ()=>{
        try {
            await axios.delete("/becas/"+path)
            window.location.replace("/");
        } catch (err) {}
        
    }

    const meInteresa = () =>{
        if(usuario){
            swal({
                title:"Suscripción a beca",
                text:"Se ha enviado tu información al coordinador de becas, espera su correo en estos días.",
                icon:"info",
                buttons: "OK"
            })
        }else{
            swal({
                title:"¿Ya tienes una cuenta?",
                text:"Necesitas iniciar sesión para suscribirte a una beca",
                icon:"warning",
                buttons: "OK"
            })
        }
    }

    const handleEditar = async ()=>{
        try {
            await axios.put("/becas/"+path, {titulo, descripcion, requisitos, contacto})
            window.location.reload();
        } catch (err) {}
    }

    

    let publicarLabel1
    let publicarLabel2
    if (usuario === null) {
        publicarLabel1 = (<i class="fa-regular fa-eye"></i>)
    } else {
        if(usuario.Tipo ==='admin'){
            publicarLabel1 = (<i class="icono fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>)
            publicarLabel2 = (<i class="icono fa-solid fa-trash" onClick={alertaBorrar}></i>)
    }else{publicarLabel1 = (<i class="fa-regular fa-eye"></i>)}}
  
  return (
    <div className="soloPost">
        <div className="info">
            {post.foto &&
            <img className="postFoto" src={PF+post.foto} alt="info del post" />
            
        }
        <button className="meInteresaBoton" onClick={meInteresa}>Me interesa</button>
        {
            updateMode ?  <input type="text" value={titulo} onChange={(e)=>setTitle(e.target.value)} className="solopostTituloInput" autoFocus></input> : (
                <h1 className="solopostTitulo">{post.titulo}
                    <div className="editarPost">
                        {publicarLabel1}
                        {publicarLabel2}
                    </div>
                </h1>
                
            )
        }

            <div className="postDescripcion" >
                <span className="solopostAutor">Autor: <b>Equipo Becario</b></span>
                <span className="solopostFecha">{post.createdAt}</span>
            </div>
            {
                updateMode ?  <textarea type="text" value={descripcion} onChange={(e)=>setDesc(e.target.value)} className="postdatoGeneralInput"></textarea> : (
                    <p className="postdatoGeneral">{post.descripcion} 
                    </p>
                    )
                }

                {
                updateMode ?  <textarea type="text" value={requisitos} onChange={(e)=>setReq(e.target.value)} className="postdatoGeneralInput"></textarea> : (
                    <p className="postdato">{post.requisitos} 
                    </p>
                    )
                }

                {
                updateMode ?  <textarea type="text" value={contacto} onChange={(e)=>setCont(e.target.value)} className="postdatoGeneralInput"></textarea> : (
                    <p className="postdato">{post.contacto} </p>
                    )
                }
                
                {updateMode && (<button className="soloPostBoton" onClick={alertaEditar}>Editar</button>)}
      
        </div>
    </div>
  );
}
