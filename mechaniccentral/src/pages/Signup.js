import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../config";
const Signup = () => {
    
  const [passwordError, setPasswordError] = useState('')
 
  const[name, setname]=useState('')
  const[email, setEmail]=useState('')
  const[mobile, setMobile]=useState('')
  const[password, setPassword]=useState('')
  const[confirmpassword, setconfirmPassword]=useState('')

  const navigate = useNavigate();
    const handleSubmit =(event) => {
      
      event.preventDefault();
      if (password !== confirmpassword) {
        setPasswordError('Passwords do not match');
        return;
      }
      axios.post(url+'/customer/register', {
        name,
        email,
        mobile,
        password
      })
      .then(response => {
        if (response.status === 201) {
          alert("Registration Successfull!!! Welcome to Mechanical Central")
          console.log("Registration successful");
          navigate('/login');
        }
      })
      .catch(error => console.log(error));
    };
 
    return(
        <div className="d-flex justify-content-center">
        <div className="w-50">
    <div>
        <form onSubmit={handleSubmit}>
  {/* <!-- Email input --> */}
  <h2>Register</h2>
  
  <div className="form-outline mb-4">
    <input type="text"  name="name" value={name} required onChange={(e) => setname(e.target.value)} className="form-control" />
    <label className="form-label" ><h5>Name</h5></label>
  </div>
  <div className="form-outline mb-4">
    <input type="email"  name="email" value={email} required onChange={(e) => setEmail(e.target.value)}  className="form-control" />
    <label className="form-label" ><h5>Email address</h5></label>
  </div>
  <div className="form-outline mb-4">
    <input type="mobile" name="mobile" value={mobile} required onChange={(e) => setMobile(e.target.value)}  className="form-control" />
    <label className="form-label" ><h5>Phone</h5></label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)}  className="form-control" />
    <label className="form-label" ><h5>Password</h5></label>
  </div>
  <div className="form-outline mb-4">
    <input type="password" name="confirmpassword" value={confirmpassword} required onChange={(e) => setconfirmPassword(e.target.value)}  className="form-control" />
    <label className="form-label" ><h5>ConfirmPassword &nbsp; &nbsp;</h5></label>
    {passwordError && <span className="text-danger">{passwordError}</span>}
  </div>


  

   
  

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <h6><p>Already a member? <Link to="/login">
                    <a className=" btn-warning">Login</a>
                </Link></p></h6>
  
   
  </div>
</form>
    </div>
     </div>
     </div>
    )
    
}
export default Signup