import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importez l'icône de recherche

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center border-gray-300 border rounded px-2">
      <FaSearch className="text-gray-500" /> {/* Ajoutez l'icône de recherche */}
      <input
        type="text"
        placeholder="Search files"
        value={searchTerm}
        onChange={handleChange}
        className="border-none ml-2 focus:outline-none" // Ajoutez du style à l'input
      />
    </div>
  );
}
