import React from 'react';
import SignOut from '../Authentification/SignOut';
//import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="flex justify-between p-4 bg-gray-100">
            <h1>Dropbox Clone</h1>
            <img src=".Compone" alt="Logo" className="w-16/>
            <SignOut/>
        </div>
    );
}

export default Navbar;
