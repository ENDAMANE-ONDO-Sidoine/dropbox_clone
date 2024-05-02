import React from 'react';
import SignOut from '../Authentification/SignOut';
//import { Link } from 'react-router-dom';
import logo_Dropbox from '../assets/logo_Dropbox.png';
const Navbar = () => {
    return (
        <div className="flex justify-between justify-items-center px-12 py-4 bg-gray-200">
            <h1><img src={logo_Dropbox} alt="Logo" className="h-[50px] w-[100px]" /></h1>
            <SignOut/>
        </div>
    );
}
 rounded-2xl px-4 py-2 hover:bg-gray-300 transition duration-
export default Navbar;
