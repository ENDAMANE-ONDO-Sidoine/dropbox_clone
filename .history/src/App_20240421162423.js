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
  // You might want to include a state here to check if the user is authenticated
  // For the sake of example, let's assume you have a hook that does this:
  // const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <Routes>
          {/* 
            Assuming you want a single sign-in route.
            Redirect /signin to /auth to consolidate paths. 
          */}
          <Route path="/auth" element={<SignIn />} />
          <Route path="/signin" element={<Navigate replace to="/auth" />} />
          <Route path="/signup" element={<SignUp />} />
          {/* 
            Protect the /files route so that only authenticated users can access it.
            Replace <ProtectedPage/> with your actual app content component.
          */}
          <Route path="/files" element={<PrivateRoute><ProtectedPage/></PrivateRoute>} />
          {/* 
            Redirect the base route to /auth for unauthenticated users.
            If the user is authenticated, you might want to redirect them to /files or
            another appropriate path that represents the main content of your app.
          */}
          <Route path="/" element={<Navigate replace to="/auth" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
