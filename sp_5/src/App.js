import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";



function App() {
  // const handleResize = ()=>{
    //    console.log("Height:",window.outerHeight);
    //    console.log("Width:",window.outerWidth)
    // }
    
  return (
    <div className="App" >
      <div className="cont">
        <Navbar />      
       <AllRoutes/>
      </div>
     
    </div>
  );
}

export default App;
