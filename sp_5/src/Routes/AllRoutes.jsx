import React from "react";
import { Routes, Route } from "react-router-dom";
import Video from "./Video.jsx";
import TvShows from "./TvShows";
import Movies from "./Movies";
import WebSeries from "./WebSeries";
import News from "./News";
import RightSideLogo from "./RightSideLogo";
import Error from "./Error";
import Searching from "./Searching";
import Home from "./Home.jsx";
import Signup from "../Components/Signup.jsx";
import Login from "../Components/Login.jsx";
import Otp from "./Otp.jsx";
import Payment from "./Payment.jsx";
import PrivateRouteLogin from "../Components/PrivateRoutes/PrivateRouteLogin.jsx";
import PrivateRoutePremium from "../Components/PrivateRoutes/PrivateRoutePremium.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TvShows" element={<TvShows />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/WebSeries" element={<WebSeries />} />
      <Route path="/News" element={<News />} />
      <Route path="/RightSideLogo" element={<RightSideLogo />} />
      <Route
        path="/Video"
        element={
          <PrivateRouteLogin>
            <PrivateRoutePremium>
              <Video />
            </PrivateRoutePremium>
          </PrivateRouteLogin>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Searching" element={<Searching />} />
      <Route path="/verify-email" element={<Otp />} />
      <Route path="/verify-mobileNo" element={<Otp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
