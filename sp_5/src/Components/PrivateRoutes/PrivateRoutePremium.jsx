import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const PrivateRoutePremium = ({ children }) => {
  // const { isPremium } = useSelector((store) => store.data);

  // console.log("isPremium:", isPremium);

  // if (isPremium) {
  //   return <Navigate to="/payment" />;
  // }

  if (false) {
    return <Navigate to="/payment" />;
  }

  return children;
};

export default PrivateRoutePremium;
