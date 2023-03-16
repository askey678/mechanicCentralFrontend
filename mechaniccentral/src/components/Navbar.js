import { Link } from "react-router-dom";

const Navbar = () =>{
  const customerName = localStorage.getItem("customerDto.name");
  console.log(localStorage.getItem("customerDto.name"))
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-none p-3 mb-5 rounded float">
        <h4 className="navbar-brand" href="#">{customerName} &nbsp;&nbsp;&nbsp; </h4>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/customerpage/services"><h5>Services &nbsp;&nbsp; &nbsp;</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customerpage/package"><h5>Package &nbsp;&nbsp;&nbsp; </h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customerpage/onspotmechanic"><h5>Call Mechanic &nbsp;&nbsp;&nbsp; </h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customerpage/appointment"><h5>My Appoinment &nbsp;&nbsp;&nbsp; </h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customerpage/history"><h5>History &nbsp;&nbsp;&nbsp; </h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customerpage/logout"><h5>Logout &nbsp;&nbsp;&nbsp; </h5></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;