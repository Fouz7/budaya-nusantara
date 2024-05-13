import React from 'react'
import{
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react"
import {useNavigate} from "react-router-dom";

function GaleryCardComp({image, label}) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/gallery/${label}`)
    }

return (
    <div onClick={handleClick}>
        <Card className="w-64 h-72 flex flex-col gap-4 relative hover:cursor-pointer overflow-hidden">
            <img src={image} alt=""
                 className="object-cover w-full h-full rounded-xl transform transition-all duration-500 hover:scale-110"/>
            <Typography variant="h6" color="blue-gray"
                        className="absolute whitespace-nowrap shadow-2xl drop-shadow-2xl bottom-0 left-1/2 transform -translate-x-1/2 text-white p-2">
                {label}
            </Typography>
        </Card>
    </div>
)
}

export default GaleryCardComp
