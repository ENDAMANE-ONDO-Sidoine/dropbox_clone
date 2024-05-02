import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Components/Authentification/SignIn';
import SignUp from './Components/Authentification/SignUp';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ProtectedPage from './Components/utils/ProtectedPage';
import { Amplify, Hub } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setIsAuthenticated(true);
          break;
        case 'signOut':
          setIsAuthenticated(false);
          break;
        default:
          break;
      }
    });

    return () => Hub.remove('auth');
  }, []);

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <Routes>
          <Route path="/auth" element={<SignIn />} />
          <Route path="/signin" element={<Navigate replace to="/auth" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/files" element={<PrivateRoute><ProtectedPage /></PrivateRoute>} />
          <Route path="/" element={<Navigate replace to="/auth" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
