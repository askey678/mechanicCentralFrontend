import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("customerDto");
    navigate("/aboutus");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <h1>You have been Logged out</h1>
    </>
  );
};

export default Logout;
