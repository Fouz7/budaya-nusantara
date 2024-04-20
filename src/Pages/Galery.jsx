import React from 'react';
import galery from '../data/galery';
import GaleryCardComp from '../Components/GaleryCardComp';


const Galery = () => {

  const galeryPlace = galery;

  return (
    <>
    <div className="grid grid-cols-4 gap-4">
      {galeryPlace.map((place, index) => (
        <GaleryCardComp key={index} image={place.galeryImg} label={place.province} />
      ))}
    </div>
    </>
  );
};

export default Galery;