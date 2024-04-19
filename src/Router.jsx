import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Galery from "./Pages/Galery";


function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/galery" element={<Galery/>}/>
    </Routes> 

  )
}

export default AppRouter
