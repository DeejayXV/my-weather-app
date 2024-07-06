import { useState } from "react";

const CityInput = ({ onCityChange }) => {
  const [city, setCity] = useState(''); // Stato per memorizzare l'input della città

  // Gestione del cambiamento dell'input
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // Gestione del submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("City:", city);
    onCityChange(city); // Chiama la funzione per ottenere i dati meteo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={city} 
        onChange={handleInputChange} 
        placeholder="Enter city name" 
      />
        <button type="submit">Search</button>
    </form>
  );
};

export default CityInput;
