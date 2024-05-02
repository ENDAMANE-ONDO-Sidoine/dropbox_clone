import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/utils/PrivateRoute';
import ProtectedPage from './Components/utils/ProtectedPage';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main page or protected area of the app */}
        <Route path="/" element={
          <PrivateRoute>
            <Layout>
              <ProtectedPage />
            </Layout>
          </PrivateRoute>
        } />
        {/* If you have a custom sign-in or sign-up route, you can add them here */}
        {/* Redirect all other paths to the main page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

// Using withAuthenticator HOC to wrap the App component for handling the authentication
export default withAuthenticator(App);
