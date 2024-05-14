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
                        src='https://onedrive.live.com/embed?resid=30CE3FEB3451B567%2117534&authkey=%21AMRWdOFydvgRYR4&width=494&height=505'
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