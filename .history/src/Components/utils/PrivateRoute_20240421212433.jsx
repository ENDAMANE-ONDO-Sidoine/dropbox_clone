// src/Components/utils/PrivateRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Correct path to your useAuth hook

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook to get the auth state

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
