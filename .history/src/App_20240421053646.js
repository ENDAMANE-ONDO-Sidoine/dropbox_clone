
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Components/Authentification/SignIn';
import SignUp from './Components/Authentification/SignUp';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/utils/PrivateRoute';
import ProtectedPage from './Components/utils/ProtectedPage';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Routes>
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/files" element={<PrivateRoute><ProtectedPage/></PrivateRoute>} />
        <Route path="/" element={<Navigate replace to="/signin" />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
