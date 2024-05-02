import React from 'react';
import { FaSearch } from 'react-icons/fa'; 

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center border-blue-600 border rounded px-2 gap-2 sh">
      <FaSearch className="text-blue-600" /> 
      <input
        type="text"
        placeholder="Search files"
        value={searchTerm}
        onChange={handleChange}
        className="border-none focus:outline-none" 
      />
    </div>
  );
}
