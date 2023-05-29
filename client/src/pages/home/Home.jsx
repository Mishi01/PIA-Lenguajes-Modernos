import { useEffect, useState } from "react";
import Barralateral from "../../componentes/barralateral/Barralateral";
import Header from "../../componentes/header/Header";
import Posts from "../../componentes/posts/Posts";
import "./home.css";
import axios from "axios"
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
   
  const {search} = useLocation();

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
      <div className="home">
        <Posts posts = {posts}/>
        <Barralateral/>
      </div>
    </>
  );
}
