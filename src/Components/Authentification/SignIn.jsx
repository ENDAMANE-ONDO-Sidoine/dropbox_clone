import React, { useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to authentication state change
    const unsubscribe = onAuthUIStateChange((nextAuthState, authData) => {
      if (nextAuthState === AuthState.SignedIn) {
        navigate('/'); // Redirect to home page after sign-in
      }
    });

    return unsubscribe; // Unsubscribe on unmount
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Authenticator />
    </div>
  );
};

export default SignIn;
