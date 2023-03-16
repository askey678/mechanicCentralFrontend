import Navbar from "../components/Navbar";
import axios from "axios";
import {url} from '../config';
import { useState, useEffect } from "react";


const Services = () =>{

  const [services, setServices] = useState([])
  const [selectedServices, setSelectedServices] = useState([]);
 
  // const [selectedServicesDetails, setSelectedServicesDetails] = useState([]);
  useEffect(() => {
    console.log('all services got loaded')
    getServices()
  }, [])

  const getServices = () => {
   
    axios.get(url + "/customer/services").
      then(response => {
        if (response.status === 200) {
        setServices(response.data)
      }
      else {
        alert('error while loading list of serices')
      }
    })
  }
  const handleServiceChange = (e) => {
    const serviceId = parseInt(e.target.value);
    const isChecked = e.target.checked;
    if (isChecked) {
      // if (selectedServices.length === 0) {
      //   alert('Please select at least one service');
      //   return;
      // }
      if (selectedServices.length >= 5) {
        alert('You can select up to 5 services');
        e.target.checked = false;
        return;
      }
      setSelectedServices([...selectedServices, serviceId]);
      // setSelectedServicesDetails([...selectedServicesDetails, services.find(service => service.id === serviceId)]);
    } else {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
      // setSelectedServicesDetails(selectedServicesDetails.filter(service => service.id !== serviceId));
    }
  };
 
  
  
  const handleBookAppointment = () => {
    const custId= parseInt(localStorage.getItem("customerDto.id"));
    if (selectedServices.length === 0) {
      alert('Please select at least one service');
     
      return;
    }
    // Do something with the selected services
    axios.post(url + `/customer/bookappointment/${custId}`, {
      serviceIds: selectedServices,
      packageId: null,
      onSpotMechanic: false,
      servicetype: "SERVICES"
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
        <h1 className="page-title">Services</h1>
        <br></br>
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              
              <th>Title</th>
              <th>Description</th>
              <th>price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) =>
              <tr>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
                <td>
                  <input type="checkbox" 
                         value={service.id} 
                         checked={selectedServices.includes(service.id)} 
                         onChange={handleServiceChange} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
     
      </div>
    </>
    )
  
};

export default Services;
