import Barraprincipal from "./componentes/barraprincipal/Barraprincipal";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Publicar from "./pages/publicar/Publicar";
import Registrar from "./pages/registrar/Registrar";
import Solo from "./pages/solo/Solo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user=false;
  return (
    <Router>
      <Barraprincipal/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/registrar' element={user ? <Home/>:<Registrar/>} />
        <Route path='/login' element={user ? <Home/>:<Login/>} />
        <Route path='/publicar' element={user ? <Publicar/>:<Registrar/>} />
        <Route path='/post/:postId' element={<Solo/>} />
      </Routes>
    </Router>
  );
}

export default App;
