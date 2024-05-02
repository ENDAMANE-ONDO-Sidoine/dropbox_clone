import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const ProtectedPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch the current authenticated user using AWS Amplify's Auth class
    Auth.currentAuthenticatedUser()
      .then(user => {
        setUsername(user.username);
      })
      .catch(err => {
        console.log(err);
        setShowWelcome(false); // If there is an error, don't show the welcome message
      });

    // Set a timer to hide the welcome message after 1 second
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {showWelcome && <div className="text-2xl">Welcome, {username}!</div>}
    </div>
  );
};

export default ProtectedPage;
