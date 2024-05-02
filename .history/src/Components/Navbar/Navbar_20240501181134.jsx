import React from 'react';
import SignOut from './../Authentification/SignOut';
import logo_Dropbox from '../assets/logo_Dropbox.png';
import SearchBar from '../SearchBar/SearchBar';
const Navbar = () => {
    return (
        <div className="flex justify-between justify-items-center px-12 py-2 bg-white shadow">
            <h1><img src={logo_Dropbox} alt="Logo" className="h-[50px] w-[110px] rounded" /></h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SignOut/>
        </div>
    );
}
 
export default Navbar;
