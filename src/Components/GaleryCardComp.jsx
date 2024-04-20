import React from 'react'
import{
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react"

function GaleryCardComp({image, label}) {
return (
    <>
        <Card className="w-272 h-272">
                <CardBody className="flex flex-col gap-4">
                    <img src={image} alt="" className="object-cover w-full h-full" />
                    <Typography variant='small' color='black'>
                        {label}
                    </Typography>
                </CardBody>
            </Card>
    </>
)
}

export default GaleryCardComp
