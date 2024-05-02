import React from 'react';
import SignOut from '../Authentification/SignOut';
//import { Link } from 'react-router-dom';
import logo_dropbox from '../assets/logo_dropbox.png';
const Navbar = () => {
    return (
        <div className="flex justify-between p-4 bg-gray-100">
            

            <h1><Image src={logo_dropbox} alt="Logo" className="w-16/"></h1>

            <SignOut/>
        </div>
    );
}

export default Navbar;
