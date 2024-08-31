import bedimg from "../../../assets/inpatient.png";
import emeimg from "../../../assets/emeimg.png";
import { Button } from '@headlessui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Rate from "../Rate/Rate";

const HospitalItemCard = ({ id, name, special, location, totalbed, bed, emtotalbed, embed, discription, image, isLoggedIn }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBookNowClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to login page
    } else {
      setShowSuccessMessage(true);
    }
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
    setShowLoginPrompt(false);
    setShowSuccessMessage(false);
  };

  return (
    <div className="hospital-item-card border border-gray-300 shadow-lg rounded-lg p-4 flex w-full gap-6 items-center justify-between">
      {/* Left Section: ID and Image */}
      <div className="left-section flex items-center gap-4 w-1/4">
        <h2 className="text-xl font-bold text-gray-700 gap-4">{id}</h2>
        <div className="mx-10 py-2 px-2 rounded-full">
          <img
            src={image}
            alt={name}
            className="hospital-image w-32 h-32 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Middle Section: Details */}
      <div className="hospital-details flex flex-col w-1/2 gap-2">
        <h2 className="hospital-name text-2xl font-bold">{name}</h2>
        <p className="hospital-description text-gray-700 font-medium text-xs -mt-2">{special}</p>
        <p className="hospital-description text-gray-700 font-medium text-xs -mt-2">{location}</p>
        <p className="hospital-description text-gray-700 font-large text-base">{discription}</p>
      </div>

      {/* Right Section: Price and Button */}
      <div className="hospital-info flex flex-col items-end w-1/4 gap-2 justify-center align-center">
        <div className="-mt-5"><Rate /></div>
        <div className="bed flex gap-3">
          <div className="hospital-price flex font-semibold text-gray-500">
            <img className="w-[24px]" src={emeimg} alt="Emergency Beds" />:<span className="text-red-600">{embed}</span>/<span className="text-gray-600">{emtotalbed}</span>
          </div>
          <div className="hospital-price flex font-semibold text-gray-500">
            <img className="w-[24px]" src={bedimg} alt="Total Beds" />:<span className="text-green-600">{bed}</span>/<span className="text-gray-600">{totalbed}</span>
          </div>
        </div>
        <Button onClick={handleBookNowClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 justify-center mx-5 mt-5">
          BOOK NOW
        </Button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Are you sure you want to book?</p>
            <div className="flex justify-end gap-2 mt-4">
              <Button onClick={handleCloseModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">No</Button>
              <Button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">Yes</Button>
            </div>
          </div>
        </div>
      )}

      {/* Login Prompt */}
      {showLoginPrompt && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Please login to proceed with the booking.</p>
            <div className="flex justify-end gap-2 mt-4">
              <Button onClick={handleCloseModal} className="bg-blue-500 text-white px-4 py-2 rounded">Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Successfully booked!</p>
            <div className="flex justify-end gap-2 mt-4">
              <Button onClick={handleCloseModal} className="bg-blue-500 text-white px-4 py-2 rounded">Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalItemCard;
