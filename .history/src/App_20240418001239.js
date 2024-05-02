import React from 'react';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SignOut from './Components/Authentification/SignOut';
import SignIn from './Components/Authentification/SignIn';
import SignUp from './Components/Authentification/SignUp';
import FileUpload from './Components/FileUpload/FileUpload';
import FileList from '../FileList/FileList';



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
        <Route path="/sharefile" component={F} />
    </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
