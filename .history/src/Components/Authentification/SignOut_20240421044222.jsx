import React from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    let navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            navigate('/signin');  // Redirect to sign-in page after sign out
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    }

    return (
        <button 
            onClick={handleSignOut} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Sign Out
        </button>
    );
}

export default SignOut;
