import React from 'react';

const GaleryPlaces = [
  { label: 'Bali', image: 'bali.jpg' },
  { label: 'Jakarta', image: 'jakarta.jpg' },
  { label: 'Bandung', image: 'bandung.jpg' },
  { label: 'Yogyakarta', image: 'yogyakarta.jpg' },
  { label: 'Surabaya', image: 'surabaya.jpg' },
  { label: 'Medan', image: 'medan.jpg' },
  { label: 'Palembang', image: 'palembang.jpg' },
  { label: 'Makassar', image: 'makassar.jpg' },
  { label: 'Semarang', image: 'semarang.jpg' },
  { label: 'Padang', image: 'padang.jpg' },
];

const Galery = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {GaleryPlaces.map((place, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center m-2"
        >
          <img
            src={place.image}
            alt={place.label}
            className="w-20 h-20 object-cover rounded-full mb-4"
          />
          <p className="text-lg font-semibold">{place.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Galery;