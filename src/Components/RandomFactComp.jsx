import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Typography} from "@material-tailwind/react";
import randomFacts from '../data/randomFact.json';

function RandomFactComp(){
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className='flex flex-col justify-center m-3'>
            <div className='flex justify-center'>
                <div className='z-10 bg-green-900 text-white w-72 p-6 text-center custom-radius'>
                    Random Facts about Indonesia
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='bg-brown-200 text-white w-5/6 -mt-5 p-3 rounded-xl text-center'>
                    <Slider {...settings}>
                        {randomFacts.faktaBudayaIndonesia.map((fact) => (
                            <div key={fact.id}>
                                <Typography className='mt-5'>
                                    {fact.deskripsi}
                                </Typography>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default RandomFactComp;