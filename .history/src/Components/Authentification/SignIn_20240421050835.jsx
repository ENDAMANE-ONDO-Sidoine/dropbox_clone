import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { FaSignOutAlt } from 'react-icons/fa';

const SignIn = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="mb-4 text-3xl text-blue-500">Hello {user.username}</h1>
          <button 
            onClick={signOut} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-500 ease-in-out hover:scale-110 flex items-center"
          >
            <FaSignOutAlt className="mr-2" /> Sign Out
          </button>
        </main>
      )}
    </Authenticator>
  );
}

export default SignIn;
