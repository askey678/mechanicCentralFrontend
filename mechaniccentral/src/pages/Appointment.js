import Navbar from "../components/Navbar";
import { useState, useEffect } from 'react';
import axios from "axios";
import { url } from "../config";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const custId = parseInt(localStorage.getItem("customerDto.id"));
  useEffect(() => {
    
    axios.get(url + `/customer/bookedappointments/${custId}`)
      .then(response => {
        if (response.status === 200) {
          setAppointments(response.data);
        } else {
          alert('error while loading list of serices')
        }
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
      <h1 className="page-title">Services</h1>
        <br></br>
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Customer ID</th>
              <th>Garage ID</th>
              <th>On-Spot Mechanic</th>
              <th>Services</th>
              <th>Package</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.customername}</td>
                <td>{appointment.garagename}</td>
                <td>{appointment.onSpotMechanic ? 'true' : 'false'}</td>
                <td>{appointment.services.map(service => service.name).join(', ')}</td>
                <td>{appointment.package_name}</td>
                <td>{appointment.appointmentstatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Appointment;
