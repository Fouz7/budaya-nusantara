import React from 'react'
import ProfileCard from '../Components/ProfileCard'
import HeaderComp from '../Components/HeaderComp'
import profile from '../data/profile'
import AboutUsComp from '../Components/AboutUsComp'

function AboutUs() {

  const profile2 = profile

  return (
    <div>
        <HeaderComp/>
        <AboutUsComp/>
    </div>
  )
}

export default AboutUs