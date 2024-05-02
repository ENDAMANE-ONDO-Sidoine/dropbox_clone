import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignIn from './Components/Authentification/SignIn';
import SignUp from './Components/Authentification/SignUp';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Hub } from 'aws-amplify';

import PrivateRoute from './Components/utils/PrivateRoute';
import ProtectedPage from './Components/utils/ProtectedPage';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const Layout = ({ children }) => {
  const location = useLocation();
  // Determine if we are on a non-authentication related page
  const showLayout = !['/auth', '/signin', '/signup'].includes(location.pathname);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {showLayout && <Header />}
      {children}
      {showLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Navigate replace to="/auth" /></Layout>} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/files" element={<Layout><PrivateRoute><ProtectedPage/></PrivateRoute></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
