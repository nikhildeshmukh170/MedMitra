import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './patient/components/Login/Login';
import Home from './patient/pages/Home/Home';
import Homecopy from './patient/pages/Home/Homecopy';
import DoctorHome from './patient/pages/Home/DoctorHome';
import Signup from './patient/components/SignUp/Signup'; // Import the Signup component
import Chatbot from './patient/pages/Home/chabot';
import ReceptionistHome from './patient/pages/Home/ReceptionistHome';
import CityAdminPage from './patient/pages/cityadmin';
import PharmacyPage from './patient/pages/pharmacy';


function App() {
  // Assume userRole is determined after login
  // It could be 'patient' or 'doctor'
  const [userRole, setUserRole] = React.useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
        <Route path="/chat" element={<Chatbot setUserRole={setUserRole} />} />
        <Route path="/signup" element={<Signup />} /> {/* Add signup route */}
        <Route path="/patienthome" element={<Homecopy />} />
        <Route path="/receptionisthome" element={<ReceptionistHome />} />
        <Route path="/admin" element={<CityAdminPage />} />
        <Route path="/doctorhome" element={<DoctorHome />} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path='/' element={<Home />} />
        {/* Redirect to appropriate home page based on role */}
        {/* <Route
          path="/"
          element={
            userRole === 'patient' ? (
              <Navigate to="/home" />
            ) : userRole === 'doctor' ? (
              <Navigate to="/doctor-home" />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
