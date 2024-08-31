import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';

const maincarosel = () => {

    const items = MainCaroselData.map((item, index) => (
        <div key={index} className='carousel-item h-[27rem] object-contain'>
            <img className='cursor-pointer w-full' role='presentation' src={item.src} alt={`Carousel item ${index}`} />
        </div>
    ));

  return (
    <div>
        <AliceCarousel
        // mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
    </div>
  )
}

export default maincarosel