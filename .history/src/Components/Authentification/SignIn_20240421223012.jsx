import React from 'react';
import { Authenticator, Form, FormField, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';

const SignIn = () => {
  const MySignIn = () => {
    const handleSignIn = async (event) => {
      event.preventDefault();

      const form = new FormData(event.target);
      const username = form.get('username');
      const password = form.get('password');

      try {
        await Auth.signIn(username, password);
      } catch (error) {
        console.error('Error signing in: ', error);
      }
    };

    return (
      <Form onSubmit={handleSignIn}>
        <FormField name="username" label="Nom d'utilisateur" required />
        <FormField name="password" label="Mot de passe" type="password" required />
        <Button type="submit">Se connecter</Button>
      </Form>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Authenticator components={{ SignIn: MySignIn }} />
    </div>
  );
};

export default SignIn;
