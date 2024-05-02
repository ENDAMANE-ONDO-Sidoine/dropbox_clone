import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/utils/PrivateRoute';
import ProtectedPage from './Components/utils/ProtectedPage';
import FileUploader from './Components/FileUpload/';  // Check this path
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

// Layout component to include Header and Footer around the main content
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
        <Route path="/upload" element={<PrivateRoute><Layout><FileUploader /></Layout></PrivateRoute>} />
        <Route path="/" element={
          <PrivateRoute>
            <Layout>
              <ProtectedPage />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);
