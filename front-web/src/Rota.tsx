import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import Home from "./Home/Index";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Rota() {
  return (
    <BrowserRouter> 
     <Navbar />    
        <Routes>
          <Route path='/' element={<Home />} />             
          <Route path='/Orders' element={<Orders />} />          
        </Routes>
   
    </BrowserRouter>
  )
}

export default Rota;