import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hub } from '@aws-amplify/core'; // Corrected import statement
import { Authenticator } from '@aws-amplify/ui-react';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Define the listener function
    const listener = (data) => {
      if (data.payload.event === 'signIn') {
        navigate('/main'); // Navigate to the main page after sign-in
      }
    };

    // Add the listener
    Hub.listen('auth', listener);

    // Remove the listener when the component unmounts
    return () => Hub.removeListener('auth', listener); // Corrected method to remove listener
  }, [navigate]);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        user ? (
          <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="mb-4 text-3xl text-blue-500">Hello {user.username}</h1>
            <button onClick={signOut} className="...">
              Sign Out
            </button>
          </main>
        ) : null
      )}
    </Authenticator>
  );
};

export default SignIn;
