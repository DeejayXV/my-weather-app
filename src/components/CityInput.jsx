import React, { useState } from 'react';

const CityInput = ({ onCityChange }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(city);
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
