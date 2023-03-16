import Navbar from "../components/Navbar";
import axios from "axios";
import {url} from '../config';
import { useState, useEffect } from "react";


const Package =()=>{
    const [packages, setPackages] = useState([])
    const [selectedPackage, setSelectedPackage] = useState(null);
  
  

    useEffect(() => {
      console.log('all services got loaded')
      getPackages()
    }, [])
  
    
    const getPackages = () => {
    
      axios.get(url + "/customer/packages").
        then(response => {
          if (response.status === 200) {
          setPackages(response.data)
        }
        else {
          alert('error while loading list of albums')
        }
      })
      
    }

    const handlePackageChange = (e) => {
      setSelectedPackage(parseInt(e.target.value));
    }
   
    const handleBookAppointment = () => {
      const custId= parseInt(localStorage.getItem("customerDto.id"));
      if (selectedPackage.length === 0) {
        alert('Please select at least one service');
       
        return;
      }

      // Do something with the selected services
      axios.post(url + `/customer/bookappointment/${custId}`, {
        serviceIds: null,
        packageId: selectedPackage,
        onSpotMechanic: false,
        servicetype: "PACKAGE"
      }).then(response => {
        alert('Your appointment booked, wait for garage to accept!')
      }).catch(error => {
        alert('error while booking appointment, try after some time')
      });
    };
  
    return (
     
      <>
        <Navbar/>
        <div>
        <h1 className="page-title">Package</h1>
        <br></br>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((packagee) => 
              
              <tr key={packagee.id}>
                <td>{packagee.id}</td>
                <td>{packagee.name}</td>
                <td>{packagee.description}</td>
                <td>{packagee.price}</td>
                <td>
                  <input
                    type="radio"
                    name="package"
                    value={packagee.id}
                    checked={selectedPackage === packagee.id}
                    onChange={handlePackageChange}
                  />
                </td>
              </tr>
              
            )}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
      </div>
      </>
      )
    
}
export default Package;
