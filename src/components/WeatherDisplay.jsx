const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <div className="weather-info">Please enter a city to get the weather.</div>;
  }

  console.log("Weather Data attuale:", weatherData); 

  return (
    <div className="weather-info">
      <h2>Weather in {weatherData.city.name} now:</h2>
      <p> Temperature: {weatherData.list[0].main.temp} °C</p>
      <p> Humidity: {weatherData.list[0].main.humidity} %</p>
      <p>State: {weatherData.list[0].weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
