import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Authenticator />
    </div>
  );
};

export default SignIn;
