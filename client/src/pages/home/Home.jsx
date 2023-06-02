import { useEffect, useState } from "react";
import Barralateral from "../../componentes/barralateral/Barralateral";
import Header from "../../componentes/header/Header";
import Posts from "../../componentes/posts/Posts";
import "./home.css";
import axios from "axios"
import { useLocation } from "react-router";
import ClipLoader from "react-spinners/ClipLoader"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ...

fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  });

export default function Home() {
  const [posts, setPosts] = useState([]);
   
  const {search} = useLocation();

  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  useEffect(()=>{
    const fecthPosts = async()=>{
      const res = await axios.get("/becas"+search);
      setPosts(res.data)
    }
    fecthPosts()
  },[search]);
  
  return (
    <>
      <Header/>
     <div className="carga">
        {
          loading ? 
          <ClipLoader size={150} color={"#123abc"} loading={loading}></ClipLoader>
          :
          <div className="home">
          <Posts posts = {posts}/>
          <Barralateral/>
        </div>
        }
        </div>

    </>
  );
}
