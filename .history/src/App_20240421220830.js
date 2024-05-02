import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import SignIn from './Components/Authentification/SignIn';
import SignUp from './Components/Authentification/SignUp';
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout><PrivateRoute><ProtectedPage/></PrivateRoute></Layout>} />
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);
