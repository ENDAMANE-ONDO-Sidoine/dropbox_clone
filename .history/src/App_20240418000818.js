import React from 'react';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components';
import SignOut from '../SignOut/SignOut';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import FileUpload from '../FileUpload/FileUpload';
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
    </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
