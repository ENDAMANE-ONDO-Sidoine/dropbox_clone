import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './path-to-your-auth-hook'; // Update this path to where your auth hook is defined

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Your auth hook should provide this

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
