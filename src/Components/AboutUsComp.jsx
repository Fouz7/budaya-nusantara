import React from 'react'
import aboutUs from '../data/aboutUs'
function AboutUsComp() {

    const aboutUsText = aboutUs

  return (
<div className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">TENTANG KAMI</h2>
    <p className="text-gray-600">
       {aboutUsText.text}
git     </p>
    {/* Add more paragraphs here */}
</div>

  )
}

export default AboutUsComp
