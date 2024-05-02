import React from 'react';
//import { Auth } from '@aws-amplify/ui-react';
import Auth from "@aws-amplify/auth";



const SignOut = () => {
  const signOut = async () => {
    try {
      await Auth.signOut();
      // handle successful sign out
    } catch (error) {
      console.error('Error signing out', error);
      // handle error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <button onClick={signOut} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none">Se déconnecter</button>
    </div>
  );
};

export default SignOut;
