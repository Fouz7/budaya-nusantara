import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Galery from "./Pages/Galery";
import AboutUs from "./Pages/AboutUs";


function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/galery" element={<Galery/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
    </Routes> 

  )
}

export default AppRouter
