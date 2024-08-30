import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Maincarosel from '../../components/HomeCarousel/MainCarousel';

const Home = () => {
  return (
    <div className="Home">
        <div className='Navbar mb-2'>
            <Navbar />
          </div>
          <div className='maincontent'>
            <Maincarosel />
          </div>
    </div>
  )
}

export default Home