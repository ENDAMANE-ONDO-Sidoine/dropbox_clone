import React from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';


const SignOut = () => {
    let navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            // Redirect to sign-in page after sign out
            navigate('/signin');  
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    }

    return (
        <button 
            onClick={handleSignOut} 
            className="bg-blue-500 hover:bg-red-500 text-white font-bold py px- rounded-xl  transform transition duration-500 ease-in-out hover:scale-110 flex justify-center items-center"
        >
            <FaSignOutAlt className="mr-2" />Sign Out
        </button>
    );
}

export default SignOut;
