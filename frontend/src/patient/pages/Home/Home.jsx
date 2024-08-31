import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Maincarosel from '../../components/HomeCarousel/MainCarousel';
import HospitalDetails from '../../components/HospitalDetails/HospitalDetails';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="Home">
        <div className='Navbar mb-2'>
            <Navbar />
          </div>
          <div className='maincontent mb-20'>
            <Maincarosel />
            <div className='mt-20'>
              <HospitalDetails />
            </div>
          </div>
          <div className='Footer'>
            <Footer />
          </div>
    </div>
  )
}

export default Home