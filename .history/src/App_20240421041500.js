
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '.../Authentification/SignIn';
import SignUp from '.../Authentification/SignUp';
import Header from './Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate replace to="/signin" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
