import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Maincarosel from '../../components/HomeCarousel/MainCarousel';
import HospitalDetails from '../../components/HospitalDetails/HospitalDetails';
import Footer from '../../components/Footer/Footer';
import hospitalData from '../../components/HospitalDetails/HospitalData'; // Import the hospital data
import Chatbot from '../Home/chabot'; // Import the Chatbot component

const Home = () => {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the hospital data based on the search query
  const filteredHospitals = hospitalData.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="Home">
      <Chatbot />
      <div className='Navbar mb-2'>
        <Navbar />
      </div>
      <div className='maincontent mb-20'>
        <Maincarosel />
        <div className='mt-20'>
          <div className="maincontentheader flex flex-col">
            <div className="maincontentname">
              <p className='text-md font-medium mx-32'>Here is the</p>
              <h1 className='text-5xl font-bold -mt-2 mx-32 mb-10'> Hospital List</h1>
            </div>

            {/* Search bar */}
            <div className="search-bar mx-32 mb-10">
              <input
                type="text"
                placeholder="Search hospitals..."
                className="border border-gray-300 rounded px-4 py-2 w-full"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Render the HospitalDetails component with filtered data */}
          <HospitalDetails hospitalData={filteredHospitals} />
        </div>
      </div>
      <div className="chatbot">
      <Chatbot />
      </div>
      
      <div className='Footer'>
        <Footer />
      </div>
      <div className="chatbot">
      <Chatbot />
      </div>
    </div>
  );
}

export default Home;
