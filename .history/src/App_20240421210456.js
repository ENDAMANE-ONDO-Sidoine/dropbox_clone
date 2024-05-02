import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Components/Authentification/SignIn';
import SignUp from './Components/Authentification/SignUp';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/utils/PrivateRoute';
import ProtectedPage from './Components/utils/ProtectedPage';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/files" element={<PrivateRoute><ProtectedPage/></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
