import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <div className="weather-info">Please enter a city to check the weather.</div>;
  }
  console.log(weatherData) //verifica i dati del meteo attuale

  return (
    <div className="weather-info">
      <h2>Weather in {weatherData.city.name}:</h2>
      <p>Current Temperature: {weatherData.list[0].main.temp} °C</p>
      <p>Current Humidity: {weatherData.list[0].main.humidity} %</p>
      <p>{weatherData.list[0].weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
