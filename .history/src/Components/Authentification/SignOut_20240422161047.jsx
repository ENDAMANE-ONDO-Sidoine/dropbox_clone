import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@aws-amplify/auth';  // Directly import signOut
import { FaSignOutAlt } from 'react-icons/fa';

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut();  // Use the directly imported signOut function
            navigate('/signin');  
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return (
        <button onClick={handleSignOut} className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-xl transform transition duration-500 ease-in-out hover:scale-110 flex justify-center items-center">
            <FaSignOutAlt className="mr-1 hover:animate-bounce" />Sign Out
        </button>
    );
};

export default SignOut;
