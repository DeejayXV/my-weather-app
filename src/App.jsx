import React, { useState } from 'react';
import './App.css';
import CityInput from './components/CityInput';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = 'fc637617f4f21bf8db8a1a09b08652a7';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    // const response = await fetch(url);
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    <div className="app-container">
      <div className="container">
        <h1>My Meteo</h1>
        <CityInput onCityChange={fetchWeatherData} />
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
      </div>
      {weatherData && <ForecastDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
