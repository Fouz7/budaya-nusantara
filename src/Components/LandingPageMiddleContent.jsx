import garudaImg from '../assets/garuda.png';
import {Typography} from "@material-tailwind/react";
import text from '../data/text';

function LandingPageMiddleContent (){
    const words = text.text.split(' ').map((word, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="word">{word} </span>
    ));


    return (
        <>
            <div className='flex justify-center mt-14'>
                    <img
                        src={garudaImg}
                        alt="Garuda Image"
                        className="w-64 h-64"
                    />
            </div>
            <Typography className='my-12 text-center mx-56'>
                {words}
            </Typography>
        </>
    )
}

export default LandingPageMiddleContent;