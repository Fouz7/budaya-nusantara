import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Galery from "./Pages/Galery";
import AboutUs from "./Pages/AboutUs";
import ProvinceDetail from "./Pages/ProvinceDetail.jsx";


function AppRouter() {

  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/gallery" element={<Galery/>}/>
        <Route path="/gallery/:name" element={<ProvinceDetail/>}/>
    </Routes> 

  )
}

export default AppRouter
