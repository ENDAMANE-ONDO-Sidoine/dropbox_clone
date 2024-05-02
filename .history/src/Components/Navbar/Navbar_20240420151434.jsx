import React from 'react';
import SignOut from '../Authentification/SignOut';
//import { Link } from 'react-router-dom';
import logo_
const Navbar = () => {
    return (
        <div className="flex justify-between p-4 bg-gray-100">
            <h1>Dropbox Clone</h1>
            <img src="./Components/assets/logo_dropbox.png" alt="Logo" className="w-16/>
            <SignOut/>
        </div>
    );
}

export default Navbar;
