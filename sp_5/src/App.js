import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import {Container} from "@chakra-ui/react"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>

      </Container>
      <AllRoutes/>
    </div>
  );
}

export default App;
