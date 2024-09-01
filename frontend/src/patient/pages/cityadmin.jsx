import React, { useState } from 'react';

// Dummy data for hospitals and patients
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

const CityAdminPage = () => {
    const [expandedHospitalId, setExpandedHospitalId] = useState(null);
  
    // Function to toggle the expanded state of a hospital
    const toggleExpand = (hospitalId) => {
      setExpandedHospitalId((prevId) => (prevId === hospitalId ? null : hospitalId));
    };
  
    return (
      <div className="p-8 bg-red-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-12">City Admin Dashboard</h1>
        
        <div className="space-y-8">
          {dummyHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-lg shadow-lg border border-red-300">
              {/* Hospital Header */}
              <div className="flex justify-between items-center cursor-pointer bg-blue-600 text-white p-4 rounded-t-lg" onClick={() => toggleExpand(hospital.id)}>
                <h2 className="text-xl font-semibold">{hospital.name}</h2>
                <button className="text-yellow-100 hover:text-yellow-300 font-medium">
                  {expandedHospitalId === hospital.id ? "Collapse" : "Expand"}
                </button>
              </div>
  
              {/* Expandable Patient Details */}
              {expandedHospitalId === hospital.id && (
                <div className="mt-4 px-4 py-6">
                  <table className="w-full bg-white rounded-lg shadow-md">
                    <thead className="bg-red-700 text-white">
                      <tr>
                        <th className="py-3 px-5 border-b border-red-500">Patient ID</th>
                        <th className="py-3 px-5 border-b border-red-500">Name</th>
                        <th className="py-3 px-5 border-b border-red-500">Age</th>
                        <th className="py-3 px-5 border-b border-red-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hospital.patients.map((patient) => (
                        <tr key={patient.id} className="hover:bg-red-100 transition-colors">
                          <td className="py-3 px-5 border-b border-gray-200">{patient.id}</td>
                          <td className="py-3 px-5 border-b border-gray-200">{patient.name}</td>
                          <td className="py-3 px-5 border-b border-gray-200">{patient.age}</td>
                          <td className={`py-3 px-5 border-b border-gray-200 font-semibold ${patient.status === 'Accepted' ? 'text-green-700' : 'text-red-600'}`}>
                            {patient.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CityAdminPage;
