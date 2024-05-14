import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Galery from "./Pages/Galery";
import AboutUs from "./Pages/AboutUs";
import ProvinceDetail from "./Pages/ProvinceDetail.jsx";
import Contact from "./Pages/Contact.jsx";


function AppRouter() {

  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/gallery" element={<Galery/>}/>
        <Route path="/gallery/:name" element={<ProvinceDetail/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes> 

  )
}

export default AppRouter
