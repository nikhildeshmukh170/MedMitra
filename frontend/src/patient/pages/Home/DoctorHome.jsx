import React, { useEffect, useState } from 'react';
import Navbarcopy from '../../components/Navbar/Navbarcopy';
import PatientDetails from '../../../Doctor/components/PatientDetails/PatientDetails';

const DoctorHome = () => {
  const [patients, setPatients] = useState([40]); // State to store patient data
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch patient data from the backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/patients'); // Adjust the endpoint as needed
        const data = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className='DoctorHome bg-gray-100 min-h-screen'>
      {/* Navbar Section */}
      <div className="Navbar">
        <Navbarcopy />
      </div>

      {/* Doctor Profile Section */}
      <div className="doctorprofile mx-10 lg:mx-20 mt-10 p-6 bg-white shadow-md rounded-md">
        <p className='text-3xl font-bold text-gray-800 mb-2'>Hi, Doctor</p>
        <p className='text-sm font-medium text-gray-600'>Welcome to our site</p>
        <p className='text-sm font-medium text-gray-600 mt-1'>
          Check your appointment and fill out the treatment details properly.
        </p>
        {/* Display Patient Count */}
        {!loading ? (
          <p className='text-lg font-semibold text-gray-800 mt-4'>
            Total Patients: 40
          </p>
        ) : (
          <p className='text-sm font-medium text-gray-600 mt-4'>Loading patients...</p>
        )}
      </div>

      {/* Appointment Section */}
      <div className='doctorappointment mx-10 lg:mx-20 mt-10'>
        <PatientDetails />
      </div>
    </div>
  );
};

export default DoctorHome;
