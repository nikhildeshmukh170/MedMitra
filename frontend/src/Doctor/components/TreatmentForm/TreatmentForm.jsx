import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TreatmentForm = ({ patient, onClose, onSave }) => {
  // Initialize form state
  const [formData, setFormData] = useState({
    diseaseName: '',
    medicine: '',
    precaution: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API
      const response = await fetch('http://localhost:5000/api/treatment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: patient.id,
          ...formData,
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        toast.success('Treatment saved successfully'); // Show success toast
        onSave(); // Callback to handle post-save actions
        onClose(); // Close the form or modal
      } else {
        // Handle errors returned from the server
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to save treatment'); // Show error toast
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      toast.error('Failed to save treatment'); // Show error toast
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Treatment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Disease Name</label>
            <input
              type="text"
              name="diseaseName"
              value={formData.diseaseName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Medicine</label>
            <input
              type="text"
              name="medicine"
              value={formData.medicine}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Precaution</label>
            <textarea
              name="precaution"
              value={formData.precaution}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TreatmentForm;
