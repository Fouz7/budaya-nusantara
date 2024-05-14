import HeaderComp from '../Components/HeaderComp'
import ImageSlider from "../Components/ImageSlider.jsx";
import LandingPageMiddleContent from "../Components/LandingPageMiddleContent.jsx";
import RandomFactComp from "../Components/RandomFactComp.jsx";

function Landing() {
  return (
    <>
        <HeaderComp />
        <ImageSlider />
        <RandomFactComp />
        <LandingPageMiddleContent />
    </>
    
  )
}

export default Landing