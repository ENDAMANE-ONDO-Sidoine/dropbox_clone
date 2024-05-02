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
        {/* The main app layout that includes Header and Footer should only be used for protected routes */}
        <Route
          path="/files"
          element={
            <PrivateRoute>
              <MainLayout>
                <ProtectedPage />
              </MainLayout>
            </PrivateRoute>
          }
        />
        {/* Authentication-related routes should not show the Header and Footer */}
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signin" element={<Navigate replace to="/auth" />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Redirect base route to /auth */}
        <Route path="/" element={<Navigate replace to="/auth" />} />
      </Routes>
    </Router>
  );
}

// The MainLayout component conditionally renders the Header and Footer based on the current route
function MainLayout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}import React from 'react';
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

// Layout for authenticated users
function MainLayout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// App component
function App() {
  // Assuming you have a state or context provider that holds the authentication status
  // const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signin" element={<Navigate replace to="/auth" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/files" element={
          <PrivateRoute>
            <MainLayout>
              <ProtectedPage />
            </MainLayout>
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;


export default App;
