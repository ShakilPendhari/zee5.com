import React, { useState, useEffect, useContext, useRef } from "react";
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
import Scrolldiv from "../Components/Scrolldiv";

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

      <div>
        <Heading as="h2">Latest Hindi Episodes Free</Heading>
        <HStack>
          {Latest_Hindi_ep.map((item) => (
            <Box className="BoxHover" position="relative" key={item.url + 1}>
              <Image src={item.url} alt={item.url} />
              <RiVipCrownFill className="KingCrown" />
            </Box>
          ))}
        </HStack>
      </div>

      <div>
        <Heading as="h2">Blockbuster Films</Heading>
        <HStack>
          {Blockbuster_films.map((item) => (
            <Box className="BoxHover" position="relative" key={item.url + 1}>
              <Image src={item.url} alt={item.url} />
              <RiVipCrownFill className="KingCrown" />
            </Box>
          ))}
        </HStack>
      </div>

      <div>
        <Heading as="h2">Premium Before TV Ep | ZEE TV</Heading>
        <HStack>
          {premiun_Tv_ep.map((item) => (
            <Box className="BoxHover" position="relative" key={item.url + 1}>
              <Image src={item.url} alt={item.url} />
              <RiVipCrownFill className="KingCrown" />
            </Box>
          ))}
        </HStack>
      </div>

      <div>
        <Heading as="h2">Popular Movies</Heading>
        <HStack>
          {PopularMovies.map((item) => (
            <Box className="BoxHover" position="relative" key={item.url + 1}>
              <Image src={item.url} alt={item.url} />
              <RiVipCrownFill className="KingCrown" />
            </Box>
          ))}
        </HStack>
      </div>

      <div>
        <Heading as="h2">World Hits | Free Dubbed Movies</Heading>
        <HStack>
          {World_hits.map((item) => (
            <Box className="BoxHover" position="relative" key={item.url + 1}>
              <Image src={item.url} alt={item.url} />
              <RiVipCrownFill className="KingCrown" />
            </Box>
          ))}
        </HStack>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
