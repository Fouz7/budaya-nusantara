import HeaderComp from "../Components/HeaderComp.jsx";
import {Typography} from "@material-tailwind/react";
import irpan from '../assets/irpan.png';
import aldrian from '../assets/Aldrian.png';
import leader from '../assets/fauzan.png'
import linked from '../assets/linked.png';
import ig from '../assets/instagram.png';
import gmail from '../assets/gmail.png';


function Contact() {
  return (
      <div>
          <HeaderComp/>
          <div className='flex items-center mt-20'>
              <div className='border-t-4 border-gray-400 flex-grow mr-3'/>
              <Typography className='mx-3 font-bold'>
                  TIM HIMAIK
              </Typography>
              <div className='border-t-4 border-gray-400 flex-grow ml-3'/>
          </div>
          <div className='flex justify-center'>
              <div className='mt-36 mx-5'>
                  <div className='bg-member h-48 w-72 relative contact-radius'>
                      <img
                          src={irpan}
                          alt='irpan'
                          className='absolute right-5 h-64 -bottom-2 -mb-1'
                      />
                      <span className='absolute -left-6 top-24 transform -rotate-90 text-blue-400 text-xl'>
                          ANGGOTA
                      </span>
                  </div>
                  <Typography className='text-center'>
                      Irpansah Pati Nasarani
                  </Typography>
                  <div className='flex justify-center gap-3'>
                      <img
                          src={linked}
                          alt='linked'
                          className='h-10 w-10'
                      />
                      <img
                          src={ig}
                          alt='ig'
                          className='h-10 w-10'
                      />
                      <img
                          src={gmail}
                          alt='gmail'
                          className='h-10 w-10'
                      />
                  </div>
              </div>
              <div className='mt-36 mx-5'>
                  <div className='bg-leader h-48 w-72 relative contact-radius'>
                      <img
                          src={leader}
                          alt='leader'
                          className='absolute right-5 h-80 -bottom-0 -mb-0'
                      />
                      <span className='absolute -left-2 top-24 transform -rotate-90 text-blue-900 font-bold text-xl'>
                          KETUA
                      </span>
                  </div>
                  <Typography className='text-center'>
                      Dhiki Fauzan
                  </Typography>
                  <div className='flex justify-center gap-3'>
                      <img
                          src={linked}
                          alt='linked'
                          className='h-10 w-10'
                      />
                      <img
                          src={ig}
                          alt='ig'
                          className='h-10 w-10'
                      />
                      <img
                          src={gmail}
                          alt='gmail'
                          className='h-10 w-10'
                      />
                  </div>
              </div>
              <div className='mt-36 mx-5'>
                  <div className='bg-member h-48 w-72 relative contact-radius'>
                      <img
                          src={aldrian}
                          alt='irpan'
                          className='absolute right-8 h-72 bottom-1 -mb-1'
                      />
                      <span className='absolute -left-5 top-24 transform -rotate-90 text-blue-400 text-xl'>
                          ANGGOTA
                      </span>
                  </div>
                  <Typography className='text-center'>
                      Aldrian Aryapramestu
                  </Typography>
                  <div className='flex justify-center gap-3'>
                      <img
                          src={linked}
                          alt='linked'
                          className='h-10 w-10'
                      />
                      <img
                          src={ig}
                          alt='ig'
                          className='h-10 w-10'
                      />
                      <img
                          src={gmail}
                          alt='gmail'
                          className='h-10 w-10'
                      />
                  </div>
              </div>
          </div>

      </div>
  )
}

export default Contact;