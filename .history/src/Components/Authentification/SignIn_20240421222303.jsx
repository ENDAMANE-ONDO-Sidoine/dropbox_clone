import React from 'react';
import { Authenticator, FormField, UsernameAlias, SignIn as AmplifySignIn } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const SignIn = () => {
  const MySignIn = () => (
    <AmplifySignIn headerText="Mon application React avec AWS Amplify" slot="sign-in">
      <div slot="username-field">
        <FormField type="email" required={true} label="Adresse e-mail" placeholder="Entrez votre adresse e-mail" />
      </div>
      <div slot="password-field">
        <FormField type="password" required={true} label="Mot de passe" placeholder="Entrez votre mot de passe" />
      </div>
    </AmplifySignIn>
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Authenticator usernameAlias={UsernameAlias.EMAIL} components={{ SignIn: MySignIn }} />
    </div>
  );
};

export default SignIn;
