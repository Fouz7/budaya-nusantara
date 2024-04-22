import React from 'react'
import ProfileCard from '../Components/ProfileCard'
import HeaderComp from '../Components/HeaderComp'
import profile from '../data/profile'

function AboutUs() {

  const profile2 = profile

  return (
    <div>
        <HeaderComp/>
        <div className='mt-32 flex justify-evenly'>
          {profile2.map((profile, index) => (
            <ProfileCard 
              key={index} 
              pic={profile.picture} 
              email={profile.email} 
              name={profile.nama} 
              ig={profile.instagram} 
              linked={profile.linked} 
            />
          ))}
        </div>
    </div>
  )
}

export default AboutUs