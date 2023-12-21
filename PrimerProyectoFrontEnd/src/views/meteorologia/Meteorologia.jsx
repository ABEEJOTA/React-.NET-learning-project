import axios from "axios";
import { useState, useEffect } from "react";
import "../../App.css";
import Tabla from "../../components/Tabla/Tabla.jsx";

//MAIN
function Meteorologia() {
  //useStates
  const [weather, setWeather] = useState([]);

  //hooks

  //funciones
  function GetWeatherData() {
    axios.
    get("https://localhost:7290/WeatherForecast/GetWeatherForecast").
    then((response) => setWeather(response.data));
  }

  //useEffects
  useEffect(()=>{
    // debugger
    console.log(weather);
  },[weather]);

  return (
    <>
      <button onClick={() => GetWeatherData()}>GET</button>
      <Tabla rows={weather} />
    </>
  );
}

export default Meteorologia;
