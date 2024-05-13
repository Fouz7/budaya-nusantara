import React, { useEffect, useState } from 'react';
import {Carousel, Typography} from "@material-tailwind/react";
import galery from '../data/galery';

function ImageSlider() {
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        const randomIndices = [];
        while(randomIndices.length < 4){
            let r = Math.floor(Math.random() * galery.length);
            if(randomIndices.indexOf(r) === -1) randomIndices.push(r);
        }
        setRandomImages(randomIndices.map(index => galery[index]));
    }, []);

    return (
        <Carousel autoplay={true} loop={true}>
            {randomImages.map((item, index) => (
                <div className="relative">
                    <img
                        key={index}
                        src={item.headerImg}
                        alt={item.province}
                        className="w-full h-96 object-cover"
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="absolute whitespace-nowrap shadow-2xl drop-shadow-2xl top-0 left-0 transform text-white p-2"
                    >
                        {item.province}
                    </Typography>
                </div>
            ))}
        </Carousel>
    );
}

export default ImageSlider;