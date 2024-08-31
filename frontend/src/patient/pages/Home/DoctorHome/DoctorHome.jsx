import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

const DoctorHome = () => {
  return (
    <div className='DoctorHome'>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="doctorprofile mx-20 mt-10">
        <p className='text-2xl font-bold'>Hi, Doctor</p>
        <p className='text-sm font-medium'>Welcome to our site</p>
        <p className='text-sm font-medium'>check your Appointment and fill the treatment details properly</p>
      </div>
    </div>
  )
}

export default DoctorHome