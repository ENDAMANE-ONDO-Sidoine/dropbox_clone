import React from 'react';
import { FaSearch } from 'react-icons/fa'; 

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center border-gray-300 border rounded px-2 gao">
      <FaSearch className="text-gray-500" /> 
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
