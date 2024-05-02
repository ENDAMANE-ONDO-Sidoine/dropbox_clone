import React from 'react';
import SignOut from '../Authentification/SignOut';
//import { Link } from 'react-router-dom';
import logo_ropbox from '../assets/logo_Dropbox.png';
const Navbar = () => {
    return (
        <div className="flex justify-between p-4 bg-gray-100">
            <h1><img src={logo_dropbox} alt="Logo" className="h-[50px] w-[100px]" /></h1>
            <SignOut/>
        </div>
    );
}

export default Navbar;
