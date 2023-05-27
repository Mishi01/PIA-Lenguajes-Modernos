import "./solo.css";
import BarraLateral from "../../componentes/barralateral/Barralateral"
import Solopost from "../../componentes/solopost/Solopost";

export default function Solo() {
  return (
    <div className="solo">
        <Solopost/>
        <BarraLateral/>
    </div>
  );
}
