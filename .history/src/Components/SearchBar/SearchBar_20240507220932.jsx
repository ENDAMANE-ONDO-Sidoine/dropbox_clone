import React from 'react';
import { FaSearch } from 'react-icons/fa'; 

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Ajoutez ici la logique de validation de la recherche
    console.log(`Searching for "${searchTerm}"`);
  };

  return (
    <div className="flex items-center border-blue-600 border rounded px-2 gap-2 shadown">
      <input
        type="text"
        placeholder="Search files"
        value={searchTerm}
        onChange={handleChange}
        className="border-none focus:outline-none" 
      />
      <button onClick={handleSearch}>
        <FaSearch className="text-blue-600 transform transition duration-500 ease-in-out hover:scale-110" />
      </button>
    </div>
  );
}
