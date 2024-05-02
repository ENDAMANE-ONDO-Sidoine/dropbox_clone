/*import React, { useState } from 'react';
import Auth from "@aws-amplify/auth";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      // handle successful sign up
    } catch (error) {
      console.error('Error signing up', error);
      // handle error
    }
  };

  return (
    <div>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;*/
rf
