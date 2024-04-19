import React from 'react';
import{
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react"


const GaleryPlaces = [
  { label: 'Dki jakarta', image: 'Jakarta.jpg' },
  { label: 'Aceh', image: 'Aceh.jpg' },
  { label: 'Jawa Barat', image: 'Jawa barat.jpg' },
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
        <Card key={index}  className="w-272 h-272">
        
        <CardBody className="flex flex-col gap-4">
                <img src={place.image} alt="" className="object-cover w-full h-full" />
            <Typography variant='p' color='black'>
                {place.label}
            </Typography>
        </CardBody>
       
    </Card>
      ))}
    </div>
  );
};

export default Galery;