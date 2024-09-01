import React, { useState } from 'react';
import Navbarcopy from '../components/Navbar/Navbarcopy';

// Sample data including prescriptions
const dummyHospitals = [

    {
      id: 1,
      name: "AIIMS Hospital",
      patients: [
        { id: 1, name: "Rajesh Kumar", age: 30, status: "Accepted" },
        { id: 2, name: "Aarushi Sharma", age: 25, status: "Rejected" },
        { id: 3, name: "Deepak Patel", age: 45, status: "Accepted" },
        { id: 4, name: "Meera Gupta", age: 28, status: "Rejected" },
      ],
    },
    {
      id: 2,
      name: "MAX Hospital",
      patients: [
        { id: 5, name: "Suresh Gupta", age: 40, status: "Accepted" },
        { id: 6, name: "Priya Singh", age: 35, status: "Rejected" },
        { id: 7, name: "Ankit Verma", age: 50, status: "Accepted" },
        { id: 8, name: "Pooja Sharma", age: 30, status: "Rejected" },
      ],
    },
    {
      id: 3,
      name: "Emergency Hospital",
      patients: [
        { id: 9, name: "Vikram Patel", age: 45, status: "Accepted" },
        { id: 10, name: "Neeta Reddy", age: 28, status: "Rejected" },
        { id: 11, name: "Sandeep Kumar", age: 39, status: "Accepted" },
        { id: 12, name: "Geeta Singh", age: 33, status: "Rejected" },
      ],
    },
    {
      id: 4,
      name: "Fortis Healthcare",
      patients: [
        { id: 13, name: "Anil Verma", age: 50, status: "Accepted" },
        { id: 14, name: "Kavita Mehta", age: 32, status: "Rejected" },
        { id: 15, name: "Sunil Gupta", age: 37, status: "Accepted" },
        { id: 16, name: "Rita Joshi", age: 29, status: "Rejected" },
      ],
    },
    {
      id: 5,
      name: "Apollo Hospitals",
      patients: [
        { id: 17, name: "Sunil Yadav", age: 29, status: "Accepted" },
        { id: 18, name: "Sneha Agarwal", age: 40, status: "Rejected" },
        { id: 19, name: "Rajiv Sinha", age: 41, status: "Accepted" },
        { id: 20, name: "Anita Sharma", age: 26, status: "Rejected" },
      ],
    },
    {
      id: 6,
      name: "Manipal Hospitals",
      patients: [
        { id: 21, name: "Ravi Kumar", age: 35, status: "Accepted" },
        { id: 22, name: "Meena Joshi", age: 27, status: "Rejected" },
        { id: 23, name: "Nitin Agarwal", age: 44, status: "Accepted" },
        { id: 24, name: "Sonia Reddy", age: 32, status: "Rejected" },
      ],
    },
    {
      id: 7,
      name: "Lilavati Hospital",
      patients: [
        { id: 25, name: "Rakesh Sharma", age: 42, status: "Accepted" },
        { id: 26, name: "Sunita Chaudhary", age: 33, status: "Rejected" },
        { id: 27, name: "Karan Mehta", age: 29, status: "Accepted" },
        { id: 28, name: "Aarti Verma", age: 31, status: "Rejected" },
      ],
    },
    {
      id: 8,
      name: "Columbia Asia",
      patients: [
        { id: 29, name: "Rajiv Sinha", age: 38, status: "Accepted" },
        { id: 30, name: "Nisha Kapoor", age: 31, status: "Rejected" },
        { id: 31, name: "Amit Kumar", age: 36, status: "Accepted" },
        { id: 32, name: "Ruchi Patel", age: 27, status: "Rejected" },
      ],
    },
    {
      id: 9,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      patients: [
        { id: 33, name: "Arun Bhardwaj", age: 46, status: "Accepted" },
        { id: 34, name: "Shalini Kapoor", age: 29, status: "Rejected" },
        { id: 35, name: "Manoj Yadav", age: 53, status: "Accepted" },
        { id: 36, name: "Meenal Sharma", age: 30, status: "Rejected" },
      ],
    },
    {
      id: 10,
      name: "Jaslok Hospital",
      patients: [
        { id: 37, name: "Harsh Patel", age: 31, status: "Accepted" },
        { id: 38, name: "Renu Mehta", age: 34, status: "Rejected" },
        { id: 39, name: "Naveen Kumar", age: 43, status: "Accepted" },
        { id: 40, name: "Kiran Joshi", age: 29, status: "Rejected" },
      ],
    }
  
];

const PharmacyPage = () => {
    const [expandedHospitalId, setExpandedHospitalId] = useState(null);
  
    const handleToggle = (id) => {
      setExpandedHospitalId(expandedHospitalId === id ? null : id);
    };
  
    return (
      <div className="bg-blue-50 min-h-screen">
        <Navbarcopy />
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6">Pharmacy Page</h1>
        {dummyHospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white shadow-md rounded-lg mb-6 border border-blue-200">
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-blue-100 hover:bg-blue-200 transition duration-200 ease-in-out"
              onClick={() => handleToggle(hospital.id)}
            >
              <h2 className="text-xl font-semibold text-blue-700">{hospital.name}</h2>
              <span className="text-blue-600 font-medium">
                {expandedHospitalId === hospital.id ? 'Hide' : 'Show'} Patients
              </span>
            </div>
            {expandedHospitalId === hospital.id && (
              <div className="p-4">
                {hospital.patients.map((patient) => (
                  <div
                    key={patient.id}
                    className="border border-blue-300 rounded-lg p-4 mb-4 bg-blue-50 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-blue-800">{patient.name}</h3>
                    </div>
                    <p className="text-sm text-blue-600 mb-2">Age: {patient.age}</p>
                    <div className="bg-blue-100 p-3 rounded-md">
                      <h4 className="font-medium text-blue-700">Prescription:</h4>
                      <ul className="list-disc list-inside text-sm text-blue-600 mt-2">
                        <li>Medication A - 1 tablet daily</li>
                        <li>Medication B - 2 tablets after meals</li>
                        {/* Add more prescription details as needed */}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default PharmacyPage;
