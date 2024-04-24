import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

import logoGmail from '../assets/gmail.png'
import logoIg from '../assets/instagram.png'
import logoin from '../assets/linked.png'

function ProfileCard({name, pic, email, ig, linked}) { 
  return (
    <Card className="w-96">
      {/* <CardHeader  className="h-80 bg-none ">
        <img 
            src={pic} 
            alt="profile-picture"
            className='rounded-full'
        />
      </CardHeader>  */}
      <CardBody className="justify-between text-end flex flex-row items-center">
      <Typography variant="h4" color="blue-gray" className="i">
          {name} 
        </Typography>
        <img 
                src={pic} 
                alt="profile-picture"
                className='rounded-full  w-20 h-20'
        />
      </CardBody>
      {/* <CardFooter className="flex justify-center gap-7 pt-2">
        <a href="mailto:${email}">
            <img 
                src={logoGmail} 
                alt="" 
                className='w-10 h-10'
            />
        </a>
        <a href={ig}>
            <img 
                src={logoIg} 
                alt="" 
                className='w-10 h-10'
            />
        </a>
        <a href={linked}>
            <img 
                src={logoin} 
                alt="" 
                className='w-10 h-10'
            />
        </a>
      </CardFooter> */}
    </Card>
  )
}



export default ProfileCard