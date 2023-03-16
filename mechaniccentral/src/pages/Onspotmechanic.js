import Navbar from "../components/Navbar"
import axios from "axios";
import {url} from '../config';


const Onspotmechanic =() =>{

 
  
  const handleBookAppointment = () => {
    const custId= parseInt(localStorage.getItem("customerDto.id"));
  
   
    // Do something with the selected services
    axios.post(url + `/customer/bookappointment/${custId}`, {
      serviceIds: null,
      packageId: null,
      onSpotMechanic: true,
      servicetype: "ONSPOTMECHANIC"
    }).then(response => {
      alert('Your appointment booked, MECHANIC coming soon')
    }).catch(error => {
      alert('error while booking appointment, try after some time')
    })
    
  };
    return (
    
       <>
    <Navbar/>
     <div>
      
       <h1>Call Mechanic at your Service</h1>
       <br></br>
       <br></br>
       <p>
        <h5 >
        * Call the Mechanic on Your Spot <br></br>  <br></br>
        * Mechanic from nearby Garages will reach you as soon as possible <br></br> <br></br>
        * Basic fixed price applied on the distance between your location and mechanic coming from is applicable on Appointment <br></br> <br></br>
        * Addtional charges of services you avail from mechanic will part of your engagement<br></br> <br></br>
        <br></br>
</h5>
       </p>
       <button className="btn btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
     </div>
   </>
    )
    
}
export default Onspotmechanic