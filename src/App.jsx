import { useState } from "react";
import "./App.css";
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import HourlyForecastDisplay from "./components/HourlyForecastDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState(null); // Per memorizzare i dati meteo

  // Funzione per ottenere i dati meteo dalla API
  const fetchWeatherData = async (city) => {
    const apiKey = "fc637617f4f21bf8db8a1a09b08652a7";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  

    try {
      const response = await fetch(url); // Effettua la richiesta alla API
      console.log("Respone", response); // Verifica la risposta

      // if (!response.ok) {
      //   throw new Error("Network response failed");
      // }

      const data = await response.json(); // Converte la risposta in formato json
      console.log("Weather Data:", data); // Verifica i dati ottenuti dall'API

      setWeatherData(data); // Aggiorna lo stato 
    } catch (error) {
      console.error("Error fetching weather data:", error); // Log degli errori
    }
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1>My Meteo</h1>
        <CityInput onCityChange={fetchWeatherData} /> {/* Componente per l'input della città */}
        {weatherData && <WeatherDisplay weatherData={weatherData} />} {/* Mostra i dati meteo attuali */}
        {weatherData && <HourlyForecastDisplay weatherData={weatherData} />} {/* Mostra le previsioni orarie */}
      </div>
      {weatherData && (
        <div className="forecast-section">
          <ForecastDisplay weatherData={weatherData} /> {/* Mostra le previsioni giornaliere */}
        </div>
      )}
    </div>
  );
};

export default App;
