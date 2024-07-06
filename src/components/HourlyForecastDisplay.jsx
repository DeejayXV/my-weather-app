const HourlyForecastDisplay = ({ weatherData }) => {
    if (!weatherData) {
      return null;
    }
  
    console.log(weatherData);
  
    // Prendiamo le previsioni orari del giorno attuale (ogni 3 ore)
    const hourlyForecasts = weatherData.list.slice(0, 8);
  
    return (
      <div className="hourly-forecast-container">
        {hourlyForecasts.map((forecast, index) => (
          <div className="hourly-forecast" key={index}>
            <p>{new Date(forecast.dt_txt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            <hr />
            <p>{forecast.main.temp} °C</p>
            <p>H: {forecast.main.humidity} %</p>
            {/* <p>{forecast.weather[0].description}</p> */}
          </div>
        ))}
      </div>
    );
  };
  
  export default HourlyForecastDisplay;
  