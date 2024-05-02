// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const PrivateRoute = ({ children }) => {
    const { user } = useAuthenticator();
    return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
