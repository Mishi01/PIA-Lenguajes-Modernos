import Barralateral from "../../componentes/barralateral/Barralateral";
import Header from "../../componentes/header/Header";
import Posts from "../../componentes/posts/Posts";
import "./home.css";

export default function Home() {
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
