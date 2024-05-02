import React, { useState, useEffect } from 'react';
import Auth from "@aws-amplify/auth";
// Correct import

const ProtectedPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser() // Correct method call
      .then(user => setUsername(user.username))
      .catch(err => console.log(err));

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1000); // Disappears after 1 second

    return () => clearTimeout(timer); // Clears the timer if the component is unmounted
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {showWelcome && <div className="text-2xl">Welcome, {username}!</div>}
    </div>
  );
};

export default ProtectedPage;
