import React from "react";
import { useState } from "react";

let lon = 0.0;
let lat = 0.0;
let city = "";
let country = "";

const api = {
  key: "251d93628c5e12535295ba93482b0089",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [weather, setWeather] = useState({});
  // Automatically get IP address info
  fetch("http://ip-api.com/json/?fields=61439")
    .then((res) => res.json())
    .then((res) => {
      long = res.lon;
      lat = res.lat;
      city = res.city;
      country = res.country;
    });

  // Get weather info from openWeather API
  fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}
