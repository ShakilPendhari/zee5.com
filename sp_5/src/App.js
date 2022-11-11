import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import {Container,Flex} from "@chakra-ui/react"



function App() {
  return (
    <div className="App">
      <Container className="cont">
        <Navbar />      
       <AllRoutes/>
      </Container>
     
    </div>
  );
}

export default App;
