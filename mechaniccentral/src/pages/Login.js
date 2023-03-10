import axios from "axios";
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { url } from "../config";



const Login = () => {

  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  const navigate=useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault();

   axios.get(url+`/customer/login?email=${email}&password=${password}`, {
      email,
      password
    }).then(response => {
      if (response.status === 200) {
        console.log("Login successful");
        const customerDto = response.data;
        alert("Login Successfully!! Welcome "+customerDto.name)
        navigate('/customerpage');
      }
    })
    .catch(error => console.log(error));
};
  
    return (
        <div className="d-flex justify-content-center">
        <div className="w-50">
    <div>
        <form onSubmit={handleSubmit}>
  {/* <!-- Email input --> */}
  <h2>Login</h2>
  <br></br>
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} className="form-control" />
    <label className="form-label" for="form2Example1"><h5>Email address</h5></label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} className="form-control" />
    <label className="form-label" for="form2Example2"><h5>Password</h5></label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""  unchecked />
        <label className="form-check-label" > Remember me </label>
      </div>
    </div>

   
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Log In</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>Not a member? <Link to="/register">
                    <a className=" btn-warning">Register</a>
                </Link> </p>
  
   
  </div>
</form>
    </div>
     </div>
     </div>
    )
}
export default Login