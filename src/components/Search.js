import React, { useState } from 'react';

const Search = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
    setCity('');
  };

  return (
    <form className="flex items-center mb-4" onSubmit={handleSubmit}>
      <input
        className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500 w-full mr-2"
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;