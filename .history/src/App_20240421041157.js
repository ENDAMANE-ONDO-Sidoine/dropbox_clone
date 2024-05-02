
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '.SignIn';
import SignUp from '.../Auth/SignUp';
import Header from '.../NavBar/Header';
import Footer from '.../Footer/Footer';

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
