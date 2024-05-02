import React from 'react';
import SignOut from './SignOut';
const Navbar = () => {
    return (
        <div className="flex justify-between p-4 bg-gray-100">
            <h1>Dropbox Clone</h1>
            <SignOut/>
        </div>
    );
}

export default Navbar;
