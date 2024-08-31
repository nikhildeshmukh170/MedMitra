// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './patient/components/Login/Login';
import Home from './patient/pages/Home/Home';
import DoctorHome from './patient/pages/Home/DoctorHome/DoctorHome';

function App() {
  // Assume userRole is determined after login
  // It could be 'patient' or 'doctor'
  const [userRole, setUserRole] = React.useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctor-home" element={<DoctorHome />} />
        {/* Redirect to appropriate home page based on role */}
        <Route
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
        />
      </Routes>
    </Router>
  );
}

export default App;
