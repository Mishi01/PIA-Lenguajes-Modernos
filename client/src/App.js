import { useContext } from "react";
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
import { Context } from "./context/Context";
import Nosotros from "./pages/Nosotros/Nosotros";

function App() {
  const {usuario} = useContext(Context)
  let publicarLabel
  if (usuario == null) {
      publicarLabel = <Route path='/publicar' element= {<Registrar/>} />
  } else {
    if (usuario.Tipo == 'admin') {
      publicarLabel = <Route path='/publicar' element={<Publicar/>} />
    } else {
      publicarLabel = <Route path='/' element= {<label> </label>} />
    }
  }
  return (
    <Router>
      <Barraprincipal/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/registrar' element={usuario ? <Home/>:<Registrar/>} />
        <Route path='/login' element={usuario ? <Home/>:<Login/>} />
        {publicarLabel}
        <Route path='/post/:postId' element={<Solo/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
      </Routes>
    </Router>
  );
}

export default App;
