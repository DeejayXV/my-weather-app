import React from 'react';

const ForecastDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
  console.log(weatherData) //verifica i dati delle previsioni


  const dailyForecasts = weatherData.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));
  // filtra i dati, cosi avremo solo una previsione per giorno (ore 12:00) 

  return (
    
    <div className="forecast-container">
      {dailyForecasts.map((forecast, index) => (
        
        <div className="card" key={index}>
            {/* <p>Forecast in the next days:</p> */}
          <p>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
          <p>Temp: {forecast.main.temp} °C</p>
          <p>Humidity: {forecast.main.humidity} %</p>
          <p>{forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastDisplay;
