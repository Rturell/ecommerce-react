import React from 'react'
import img from '../HeroImage/assets/pexels-lukas-hartmann-1827234.jpg'

function HeroImage() {
  return (
    <>
      <img
        className="h-[300px] md:h-[550px] w-[100%] object-cover object-center border-b-8"
        src={img}
        alt="Store Image"
      />
    </>
  );
}

export default HeroImage