// PatientDetails.js
import React, { useState } from 'react';
import patientData from '../../../Doctor/components/PatientDetails/patientData'; // Adjust the path as necessary
import TreatmentForm from '../../../Doctor/components/TreatmentForm/TreatmentForm'; // Adjust the path as necessary
import { Button } from '@headlessui/react';

const PatientDetails = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  const handleSave = () => {
    // Optionally handle additional logic after saving
  };

  return (
    <div className='PatientDetails flex flex-col border border-gray-300 h-[30rem] w-full max-w-6xl mx-auto gap-4 overflow-x-auto p-4'>
      {patientData.map((patient) => (
        <div key={patient.id} className='patientcards flex flex-col md:flex-row border border-gray-300 bg-white shadow-md rounded-lg p-4 gap-4'>
          <div className='flex-1'>
            <h3 className='text-lg font-semibold mb-2'>{patient.name}</h3>
            <p><strong>ID:</strong> {patient.id}</p>
            <p><strong>Phone No:</strong> {patient.phone}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Aadhaar:</strong> {patient.aadhaar}</p>
            <p><strong>Age:</strong> {patient.age}</p>
          </div>
          <div className='flex items-center justify-center'>
            <Button
              className='bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2'
              onClick={() => handleOpenForm(patient)}
            >
              Treatment
            </Button>
          </div>
        </div>
      ))}

      {selectedPatient && (
        <TreatmentForm
          isOpen={isModalOpen}
          onClose={handleCloseForm}
          patient={selectedPatient}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default PatientDetails;
