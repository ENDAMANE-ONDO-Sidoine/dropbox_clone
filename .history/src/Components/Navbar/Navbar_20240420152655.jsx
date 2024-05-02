import React from 'react';
import SignOut from '../Authentification/SignOut';
//import { Link } from 'react-router-dom';
import logo_dropbox from '../assets/logo_dropbox.png';
const Navbar = () => {
    return (
        <div className="flex justify-between p-4 bg-gray-100">
            <img src=logo_dropbox.png alt="Logo" className="w-16/>

            <h1>Dropbox Clone</h1>
            <SignOut/>
        </div>
    );
}

export default Navbar;
