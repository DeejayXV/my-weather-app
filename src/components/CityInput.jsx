import React, { useState } from 'react';

const CityInput = ({ onCityChange }) => {
  const [city, setCity] = useState(''); //stato per meorizzare l'input della città

  const handleInputChange = (e) => { // gestione per il cambiamento dell'input
    setCity(e.target.value);
  };

  //gestione per il submit 
  const handleSubmit = (e) => { 
    e.preventDefault();
    onCityChange(city); //chiama la funzione per ottenere i dati del meteo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={city} 
        onChange={handleInputChange} 
        placeholder="Enter a city name" 
      />
      <button type="submit">Check the Weather</button>
    </form>
  );
};

export default CityInput;
