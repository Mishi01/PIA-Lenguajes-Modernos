import Barralateral from "../../componentes/barralateral/Barralateral";
import Header from "../../componentes/header/Header";
import Posts from "../../componentes/posts/Posts";
import "./home.css";

const userAction = async () => {
  const response = await fetch('http://localhost:4352/Becas');
  const myJson = await response;
  console.log(myJson);
}

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home" onLoad={userAction}>
        <Posts/>
        <Barralateral/>
      </div>
    </>
  );
}
