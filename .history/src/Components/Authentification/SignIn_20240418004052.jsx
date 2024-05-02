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

import React from 'react'

export default function SignIn() {
  return (
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
          <div className="max-w-sm w-full text-gray-600">
              <div className="text-center">
                  <img src="h" width={150} className="mx-auto" />
                  <div className="mt-5 space-y-2">
                      <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                      <p className="">Don't have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
                  </div>
              </div>
              <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 space-y-5"
              >
                  <div>
                      <label className="font-medium">
                          Email
                      </label>
                      <input
                          type="email"
                          required
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                  </div>
                  <div>
                      <label className="font-medium">
                          Password
                      </label>
                      <input
                          type="password"
                          required
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                  </div>
                  <button
                      className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                  >
                      Sign in
                  </button>
                  <div className="text-center">
                      <a href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</a>
                  </div>
              </form>
          </div>
      </main>
  
  )
}

