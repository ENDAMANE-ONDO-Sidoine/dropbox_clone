import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify'; // Import Amplify
import { Auth } from '@aws-amplify/auth'; // Corrected Auth import
import '@aws-amplify/ui-react/styles.css';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/utils/PrivateRoute';
import ProtectedPage from './Components/utils/ProtectedPage';
import FileUploader from './Components/FileUpload/FileUpload.jsx';
import FileList from './Components/FileList/FileList.jsx';
import config from './aws-exports';

Amplify.configure(config);

const Layout = ({ children, user }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <FileList />
        <FileUploader user={user} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Layout user={user}>
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
