import React, { useState, useEffect } from 'react';

const ProtectedPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1000); // Disparaît après 1 seconde

    return () => clearTimeout(timer); // Efface le timer si le composant est démonté
  }, []);

  return (
    <div className="flex items-center justify-center ">
      {showWelcome && <div className="text-3xl text-green-500">Welcome!</div>}
    </div>
  );
};

export default ProtectedPage;
