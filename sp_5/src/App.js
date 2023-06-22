import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import {Container,Flex} from "@chakra-ui/react"



function App() {
  const handleResize = ()=>{
     console.log("Height:",window.outerHeight);
     console.log("Width:",window.outerWidth)
  }
  return (
    <div className="App" onResize={handleResize}>
      <Container className="cont">
        <Navbar />      
       <AllRoutes/>
      </Container>
     
    </div>
  );
}

export default App;
