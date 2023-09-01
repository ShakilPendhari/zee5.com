import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentFooter from "./Components/PaymentFooter/PaymentFooter";
import { Box } from "@chakra-ui/react";



function App() {
    let location = useLocation();
    const navigate = useNavigate();
  
    useEffect(()=>{
      // let href = window.location.pathname
      // location = {...location,state:href}
      // console.log("Location::",location);
      console.log(":: PreviousRouter :::",JSON.parse(localStorage.getItem("previousRouter")));
      navigate(JSON.parse(localStorage.getItem("previousRouter")));
    },[])
  return (
    <div className="App">
      <div className="cont">
        <Navbar />      
        <Box mt={{ base: "6.5rem", sm: "6.5rem", md: "5rem" }}>
           <AllRoutes/>
        </Box>
       {
        location.pathname === "/payment"?<PaymentFooter/>: <Footer/>
       }
       
      </div>
     
    </div>
  );
}

export default App;
