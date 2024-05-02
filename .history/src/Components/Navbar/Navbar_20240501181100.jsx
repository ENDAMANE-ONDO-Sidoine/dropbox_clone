import React from 'react';
import SignOut from './../Authentification/SignOut';
import logo_Dropbox from '../assets/logo_Dropbox.png';
import SearchBar from '../SearchBar/SearchBar';
const Navbar = () => {
    return (
        <div className="flex justify-between justify-items-center px-12 py-2 bg-white shadow">
            <h1><img src={logo_Dropbox} alt="Logo" className="h-[50px] w-[110px] rounded" /></h1>
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
        <FaSearch className="text-blue-600" />
      </button>
    </div>
  );
}

            <SignOut/>
        </div>
    );
}
 
export default Navbar;
