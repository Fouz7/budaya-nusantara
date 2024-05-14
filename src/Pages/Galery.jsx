import galery from '../data/galery';
import GaleryCardComp from '../Components/GaleryCardComp';
import HeaderComp from "../Components/HeaderComp.jsx";


const Galery = () => {

  const galeryPlace = galery;

  return (
    <>
      <HeaderComp/>
      <div className="grid grid-cols-4 gap-4 justify-items-center mt-14 p-8">
        {galeryPlace.map((place, index) => (
          <GaleryCardComp key={index} image={place.galeryImg} label={place.province} />
        ))}
      </div>
    </>
  );
};

export default Galery;