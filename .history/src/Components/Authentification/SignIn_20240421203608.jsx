import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { FaSignOutAlt } from 'react-icons/fa';

const SignIn = () => {
  return (
    // The Authenticator component itself might have some default styling.
    // We wrap it in a div that has full viewport height and flexbox centering.
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Authenticator>
        {({ signOut, user }) => (
          user ? (
            <>
              <h1 className="mb-4 text-3xl text-blue-500">Hello {user.username}</h1>
              <button 
                onClick={signOut} 
                className="..."
              >
                <FaSignOutAlt className="mr-2" /> Sign Out
              </button>
            </>
          ) : (
            // This seems to be unnecessary here because Authenticator will handle the sign-in state itself.
            <h1 className="mb-4 text-3xl text-blue-500">Not signed in</h1>
          )
        )}
      </Authenticator>
    </div>
  );
};

export default SignIn;
