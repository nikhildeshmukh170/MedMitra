import React, { useState } from 'react';
import HospitalItemCard from '../HospitalItemCard/HospitalItemCard';
import hospitalData from './HospitalData'; // Import the data

const HospitalDetails = () => {
  // Use imported data as the initial state
  const [item_list, setItemList] = useState(hospitalData);

  return (
    <div className="HospitalDetails flex flex-col  overflow-x-auto h-[36rem] w-[90rem] gap-8 m-auto">
      <div className="Hospital_item flex flex-col  h-auto w-[80rem] m-auto gap-4">
        {item_list.map((item, index) => (
          <HospitalItemCard
            key={index}
            id={item._id}
            name={item.name}
            special={item.Special}
            location={item.location}
            bed={item.bed}
            totalbed={item.totalbed}
            embed={item.embed}
            emtotalbed={item.emtotalbed}
            discription={item.discription}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalDetails;
