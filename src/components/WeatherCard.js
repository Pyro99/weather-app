import React from 'react';

const WeatherCard = ({ weather }) => {
    console.log(weather);
  const { name, main, weather: [current], wind, dt } = weather;

  const iconUrl = `https://openweathermap.org/img/wn/${current.icon}@2x.png`;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold">{name}</h2>
      <img src={iconUrl} alt={current.main} className="w-20 h-20 mb-2" />
      <p className="text-xl">{current.main}</p>
      <p className="text-gray-600">Temp : {((main.temp) - 273.15).toFixed(2)}°C</p>
      <p className="text-gray-600">Humidity : {main.humidity}%</p>
      <p className="text-gray-600">Pressure : {main.pressure} mb</p>
      <p className="text-gray-600">Wind : {(wind.speed * 3.6).toFixed(2)} km/hr</p>
    </div>
  );
};

export default WeatherCard;