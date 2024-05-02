import React from 'react';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SignOut from '../SignOut/SignOut';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        <Route path="/upload" component={FileUpload} />
        <Route path="/files" component={FileList} />
    </Routes> 
      <Footer />
  );
}

export default App;
