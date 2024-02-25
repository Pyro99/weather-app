import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('Mumbai');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Invalid city name. Please try again.');
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  const handleSearch = (city) => {
    setCity(city);
    fetchWeather(city);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <Search onSubmit={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
