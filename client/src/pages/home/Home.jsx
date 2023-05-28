import { useEffect, useState } from "react";
import Barralateral from "../../componentes/barralateral/Barralateral";
import Header from "../../componentes/header/Header";
import Posts from "../../componentes/posts/Posts";
import "./home.css";
import axios from "axios"

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fecthPosts = async()=>{
      const res = await axios.get("/becas")
      console.log(res)
    }
    fecthPosts()
  },[])
  
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Barralateral/>
      </div>
    </>
  );
}
