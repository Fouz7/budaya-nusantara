import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import logoGmail from '../assets/gmail.png'
import logoIg from '../assets/instagram.png'
import logoin from '../assets/linked.png'

function ProfileCard() {
  return (
    <Card className="w-96">
        <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
        >
            <img src="" alt="" />
        </CardHeader>
        <CardBody className="flex flex-col gap-4 " >
            <Typography variant='h3' color='black' className='text-center'>
                Irpansahpatinasarani
            </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center">
        <a href="mailto:someone@example.com">
            <img src={logoGmail} alt="" className='w-10' />
        </a>
            
            <img src={logoin} alt="" className='w-10' />
            <a href="https://www.instagram.com/irfansyah_679?igsh=dWEza2xnaGM0NGh0">
                <img src={logoIg} alt="" className='w-10' />
            </a>
        </CardFooter>
    </Card>
  )
}

export default ProfileCard