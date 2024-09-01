import React from 'react';
import Footer from '../../components/Footer/Footer'; // Ensure this is correctly exported
import Navbarcopy from '../../components/Navbar/Navbarcopy'; // Ensure this is correctly exported
import { Player } from 'lottie-react'; // Correct import for Lottie animations
// import aboutAnimation from '../../assets/lottie/about-animation.json'; // Ensure the path is correct
import logo from "../../../assets/logo.png"

const About = () => {
  return (
    <div className="About bg-gray-50 min-h-screen">
      <Navbarcopy />
      <div className="about-content mx-8 md:mx-16 lg:mx-32 my-12 md:my-20">
        <header className="about-header text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">About MidMitra</h1>
          <p className="text-lg md:text-xl mt-4 text-gray-600">Your trusted partner in healthcare solutions.</p>
        </header>
        
        <section className="company-overview mb-12">
          <div className="flex justify-center mb-8">
            <img src={logo} className="w-64 h-64 bg-black" loop autoplay />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Company Overview</h2>
          <p className="text-base md:text-lg text-gray-600">
            MidMitra is dedicated to providing innovative healthcare solutions and services that enhance patient care and streamline medical processes. Our mission is to improve healthcare accessibility and efficiency through cutting-edge technology and exceptional service.
          </p>
        </section>
        
        <section className="mission-values mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Mission & Values</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Our mission is to revolutionize the healthcare industry by leveraging technology to deliver better outcomes for patients and providers alike. We are committed to integrity, innovation, and excellence in everything we do.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">Integrity</li>
            <li className="mb-2">Innovation</li>
            <li className="mb-2">Excellence</li>
            <li>Patient-Centric Care</li>
          </ul>
        </section>
        
        <section className="history mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">History</h2>
          <p className="text-base md:text-lg text-gray-600">
            Founded in [Year], MidMitra has grown from a small startup into a leading provider of healthcare solutions. Our journey has been marked by a commitment to innovation and a dedication to improving patient outcomes.
          </p>
        </section>

        <section className="team mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Our Team</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Our team comprises experienced professionals with a passion for healthcare and technology. We work collaboratively to drive innovation and deliver exceptional service to our clients.
          </p>
          {/* You can add team member profiles or photos here */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
