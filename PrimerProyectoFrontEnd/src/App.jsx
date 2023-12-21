import axios from "axios";
import { useState, useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Meteorologia from "./views/meteorologia/Meteorologia";
import Plantilla from "./views/plantilla/Plantilla";

function App() {
  //useStates
  const [count, setCount] = useState(0);
  
  //hooks

  //funciones
  
  //useEffects

  return (<>
    <Meteorologia/>
  </> );
}

export default App;
