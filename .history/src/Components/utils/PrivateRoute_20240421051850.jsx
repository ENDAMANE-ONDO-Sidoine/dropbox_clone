import React from 'react';
import { Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import

const PrivateRoute = ({ children }) => {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                user ? children : <Navigate to="/auth" />
            )}
        </Authenticator>
    );
}

export default PrivateRoute;
