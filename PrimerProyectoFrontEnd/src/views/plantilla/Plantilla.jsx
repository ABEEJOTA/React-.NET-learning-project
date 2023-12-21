import axios from "axios";
import { useState, useEffect} from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../App.css";
import MiPrimeraTabla from "../../components/MiPrimerComponente/MiPrimerComponente";

function Plantilla() {
  //useStates
  const [count, setCount] = useState(0);
  const [respuesta, setRespuesta] = useState(5);
  const [weather, setWeather ] = useState([]);
  
  //hooks

  //funciones
  function GetWeather() {
    axios({
      method: "get",
      url: "https://localhost:7290/WeatherForecast/GetWeatherForecast",
    }).then((response) => setWeather(response.data));
  }

  //useEffects
  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(()=>{
    console.log(weather);
  }, [weather]);
  
  return (
    <>
      <div className="centered">
        <MiPrimeraTabla></MiPrimeraTabla>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setRespuesta(respuesta + 20)}>
          respuesta is {respuesta}
        </button>
        <button onClick={() => GetWeather()}>
          GET
        </button>
        {weather.map((x,index)=><div key={index}>{x.summary} {index}</div>)}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Plantilla;
