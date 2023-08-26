import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import PaymentFooter from "./Components/PaymentFooter/PaymentFooter";



function App() {
    const location = useLocation();
  return (
    <div className="App" >
      <div className="cont">
        <Navbar />      
       <AllRoutes/>
       {
        location.pathname === "/payment"?<PaymentFooter/>: <Footer/>
       }
       
      </div>
     
    </div>
  );
}

export default App;
