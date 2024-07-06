const ForecastDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  console.log("Forecast Data:", weatherData); 

  // Filtra i dati per avere solo una previsione per giorno (ad esempio, alle 12:00)
  const dailyForecasts = weatherData.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

  return (
    <>
      <h2 className="forecast-title">Forecast in the next 5 days:</h2>
      <div className="forecast-container">
        {dailyForecasts.map((forecast, index) => (
          <div className="forecast" key={index}>
            <p>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
            <hr />
            <p>Temp: {forecast.main.temp} °C</p>
            <p>Humidity: {forecast.main.humidity} %</p>
            <p>{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForecastDisplay;
