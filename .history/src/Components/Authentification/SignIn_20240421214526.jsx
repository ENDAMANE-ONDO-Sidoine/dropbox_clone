import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
          navigate('/main'); // replace '/main' with the path to your main app
          break;
        // Add cases for other authentication events if needed
        default:
          break;
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
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
