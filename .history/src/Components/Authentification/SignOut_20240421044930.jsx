import React from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

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
            className="bg-blue-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-2xl  transform transition duration-500 ease-in-out hover:scale-110"
        >
            Sign Out
        </button>
    );
}

export default SignOut;
