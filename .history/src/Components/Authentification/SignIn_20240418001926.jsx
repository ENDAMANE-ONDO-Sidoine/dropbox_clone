/*import React, { useState } from 'react';
//import Auth  from "@aws-amplify/auth";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await Auth.signIn(username, password);
      // handle successful sign in
    } catch (error) {
      console.error('Error signing in', error);
      // handle error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="p-12 bg-white rounded shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Se connecter</h1>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
          className="w-full px-5 py-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Mot de passe"
          type="password"
          className="w-full px-5 py-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button onClick={signIn} className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">Se connecter</button>
      </div>
    </div>
  );
};

export default SignIn;*/

