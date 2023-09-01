import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

function takeToken() {
  try {
    let val = JSON.parse(localStorage.getItem("sp5Token")) || "";

    return val;
  } catch (e) {
    console.log("Error:", e);
  }
}

function isValid(token) {
  const { expireSession } = jwtDecode(token);
  console.log("expireSession::", expireSession > Date.now());
  if (expireSession && expireSession > Date.now()) {
    return true;
  }
  return false;
}




const PrivateRouteLogin = ({ children }) => {
  const { token } = useSelector((store) => store.auth);
  let tokenVal = token || takeToken();

  // localStorage.setItem("previousRouter",JSON.stringify("/Video"))

  if (tokenVal === "" || !isValid(tokenVal)) {
    return <Navigate to="/Login" />
  }

  return children;
};

export default PrivateRouteLogin;
