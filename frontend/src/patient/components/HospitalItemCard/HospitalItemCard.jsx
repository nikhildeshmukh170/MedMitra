// src/components/HospitalItemCard/HospitalItemCard.js
import bedimg from "../../../assets/inpatient.png"
import emeimg from "../../../assets/emeimg.png"
import AIIMSimg from "../../../assets/aiims.jpeg"

import { Button } from '@headlessui/react';
import React from 'react';

const HospitalItemCard = ({ id, name, special, location ,totalbed, bed,emtotalbed, embed, discription, image }) => {
  return (
    <div className="hospital-item-card border border-gray-300 shadow-lg rounded-lg p-4 flex w-full gap-6 items-center justify-between">
      {/* Left Section: ID and Image */}
      <div className="left-section flex items-center gap-4 w-1/4">
        <h2 className="text-sm font-medium text-gray-700 gap-4">{id}</h2>
        <div className="mx-5 py-2 px-2 rounded-full">
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
      <div className="bed flex gap-3">
        <div className="hospital-price flex felx- font-semibold text-gray-500">
           <img className="w-[24px]" src={emeimg}></img>:<span className="text-red-600">{embed}</span>/<span className="text-gray-600">{emtotalbed}</span>
        </div>
        <div className="hospital-price flex felx- font-semibold text-gray-500">
           <img className="w-[24px]" src={bedimg}></img>:<span className="text-green-600">{bed}</span>/<span className="text-gray-600">{totalbed}</span>
        </div>
      </div>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 justify-center">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default HospitalItemCard;
