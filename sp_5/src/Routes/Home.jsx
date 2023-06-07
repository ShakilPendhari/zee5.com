import React, { useState, useEffect, useContext } from "react";
import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import "../Css/Home.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { RiVipCrownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


// Raw material
import data, {
  Top10_movies,
  Latest_Hindi_ep,
  Top10_webseries,
  Blockbuster_films,
  premiun_Tv_ep,
  PopularMovies,
  World_hits,
} from "../RawMaterial/Home.js";
import { AuthContext } from "../Context/CreateAuthContext";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";
import Scrolldiv from "../Components/ScrollDivMovies";
import ScrollDivShow from "../Components/ScrollDivShow";

const Home = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  


  const { setUrl, loading, setLoading } = useContext(AuthContext);

  const redirectToVideo = (e) => {
    console.log(e.target.currentSrc);
    setUrl(e.target.currentSrc);
    navigate("/video");
  };

  useEffect(() => {
    let clousers = setInterval(() => {
      setCount((value) => value + 1);
      // console.log(count);
    }, 3000);

    return () => clearInterval(clousers);
  }, [count]);

  if (count === 8) {
    setCount((value) => (value = 1));
  }

  if (loading) {
    return (
      <>
        <button
          onClick={() => {
            loading ? setLoading(false) : setLoading(true);
          }}
        >
          change
        </button>
        <Loading />
      </>
    );
  }

  return (
    <div className="MainBox">
      <div className="clousor">
        <Box
          disabled={count <= 1}
          onClick={() => {
            if (count >= 1) {
              setCount((value) => value - 1);
            } else {
              setCount((value) => (value = data.length - 2));
            }
          }}
        >
          <SlArrowLeft className="logoClouser" />
        </Box>
        <Box display="flex" className="sliding">
          <img
            style={{ width: "100%", height: "65vh", flex: "3" }}
            src={`/Sliding/zee5_${count}.png`}
            alt="movie"
          />
        </Box>
        <Box
          disabled={count <= data.length - 1}
          onClick={() => {
            setCount((value) => value + 1);
          }}
        >
          <SlArrowRight className="logoClouser" />
        </Box>
      </div>


      {/* Trending Near You */}
      <Scrolldiv imgCount="14" head="Trending Near You" url="/TrendingNearYou/zee5Trending"/>

     {/* top 10 web series */}
     <Scrolldiv imgCount="10" head="Top 10 Web Series in India" url="/top10webSeries/zee5_top10_web_searies"/>

     {/* top 10 movies */}
     <Scrolldiv imgCount="10" head="Top 10 Movies in India" url="/top10movies/zee5top10Movies"/>

     {/* Unmissable Movies & Shows */}
     <Scrolldiv imgCount="10" head="Unmissable Movies & Shows" url="/unmissedMovies/zee5unmissedmovies"/>

  
      {/* Latest Hindi Episodes Free */}
      <ScrollDivShow imgCount="12" head="Latest Hindi Episodes Free" url="/HindiEpisode/zee5_hindiEpisode" />


       {/* Blockbuster Films */}
     <Scrolldiv imgCount="10" head="Blockbuster Films" url="/blockbusterMovie/zee5_blockbuster_movie"/>

     {/* Premium Before TV Ep | ZEE TV */}
     <ScrollDivShow imgCount="12" head="Latest Hindi Episodes Free" url="/PremiumShow/zee5PremiumShow" />

       {/* Popular Movies */}
     <Scrolldiv imgCount="10" head="Popular Movies" url="/popularMovies/zee5_popularMovies"/>

      {/* Free Dubbed Movies */}
      <Scrolldiv imgCount="10" head="Free Dubbed Movies" url="/dubbedMovies/zee5_dubbedMovies"/>

      <Footer />
    </div>
  );
};

export default Home;
