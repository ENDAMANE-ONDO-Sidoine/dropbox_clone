import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { FaSignOutAlt } from 'react-icons/fa';

const SignIn = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
          {user ? (
           <>
              <h1 className="mb-4 text-3xl text-blue-500">Hello {user.username}</h1>
              <button 
                onClick={signOut} 
                className="..."
              >
                <FaSignOutAlt className="mr-2" /> Sign Out
              </button>
            </>*/}
          ) : (
            <h1 className="mb-4 text-3xl text-blue-500">Not signed in</h1>
          )}
        </main>
      )}
    </Authenticator>
  );
}


export default SignIn;
