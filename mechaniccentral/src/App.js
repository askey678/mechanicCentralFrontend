import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Signup';
import About from './pages/About';
import './App.css';
import Appointment from './pages/Appointment';
import Services from './pages/Services';
import Package from './pages/Package';
import Onspotmechanic from './pages/Onspotmechanic';
import History from './pages/History';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';


  function App() {
    return (
      <div>
        <div className="App">
          <Router>
            <Navigation />
            <div className="container">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/customerpage" element={<CustomerpageRoutes />} />
                <Route path="/customerpage/services" element={<Services />} />
                 <Route path="/customerpage/package" element={<Package />} />
                <Route path="/customerpage/onspotmechanic" element={<Onspotmechanic />} />
                <Route path="/customerpage/appointment" element={<Appointment />} />
                <Route path="/customerpage/history" element={<History />} />
                <Route path="/customerpage/logout" element={<Logout />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    );
  }
    
  function CustomerpageRoutes() {
    return (
      <>
       <Navbar/>
      </>
    );
  }
  

  
  function Navigation() {
    const location = useLocation();
  
    // Hide the navigation bar on the Customerpage route
    const shouldHideNavbar = location.pathname.startsWith('/customerpage');
  
    // Conditionally render the navigation bar
    if (shouldHideNavbar) {
      return null;
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-none p-3 mb-5 bg-body-tertiary rounded float">
      <h3 className="navbar-brand, text-black" href="#">
        Mechanic Central &nbsp; &nbsp;
      </h3>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <h5>Login &nbsp; </h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              <h5>Register &nbsp; </h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <h5>About Us &nbsp; </h5>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App