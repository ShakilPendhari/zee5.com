import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Scrolldiv from "../../Components/ScrollDivMovies/ScrollDivMovies";
import ScrollDivShow from "../../Components/ScrollDivShows/ScrollDivShow";
import Slider from "../../Components/Slider/Slider";
import ScrollDivMovies from "../../Components/ScrollDivMovies/ScrollDivMovies";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import SkeletonMovies from "../../Components/Skeleton/Skeleton_movies";
import SkeletonShow from "../../Components/Skeleton/Skeleton_shows";
import MainSlider from "../../Components/MainSlider/MainSlider";

const Home = () => {
  const [flag, setFlag] = useState(false);
  let id = useRef(null);

  useEffect(() => {
    id.current = setTimeout(() => setFlag(() => true), 3000);
    return () => clearTimeout(id.current);
  }, []);

  return (
    <div className="MainBox">
      {/* Slider */}
      {/* <Slider /> */}
      <MainSlider/>

      {/* Trending Near You */}
      {flag ? (
        <ScrollDivMovies
          imgCount="14"
          head="Trending Near You"
          url="/TrendingNearYou/zee5Trending"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* top 10 web series */}
      {flag ? (
        <ScrollDivMovies
          imgCount="10"
          head="Top 10 Web Series in India"
          url="/top10webSeries/zee5_top10_web_searies"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* top 10 movies */}
      {flag ? (
        <ScrollDivMovies
          imgCount="10"
          head="Top 10 Movies in India"
          url="/top10movies/zee5top10Movies"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* Unmissable Movies & Shows */}
      {flag ? (
        <ScrollDivMovies
          imgCount="14"
          head="Unmissable Movies & Shows"
          url="/unmissedMovies/zee5unmissedmovies"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* Latest Hindi Episodes Free */}
      {flag ? (
        <ScrollDivShow
          imgCount="13"
          head="Latest Hindi Episodes Free"
          url="/HindiEpisode/zee5_hindiEpisode"
        />
      ) : (
        <SkeletonShow />
      )}

      {/* Blockbuster Films */}
      {flag ? (
        <Scrolldiv
          imgCount="14"
          head="Blockbuster Films"
          url="/blockbusterMovie/zee5_blockbuster_movie"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* Premium Before TV Ep | ZEE TV */}
      {flag ? (
        <ScrollDivShow
          imgCount="13"
          head="Latest Hindi Episodes Free"
          url="/PremiumShow/zee5PremiumShow"
        />
      ) : (
        <SkeletonShow />
      )}

      {/* Popular Movies */}

      {flag ? (
        <Scrolldiv
          imgCount="14"
          head="Popular Movies"
          url="/popularMovies/zee5_popularMovies"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* Free Dubbed Movies */}

      {flag ? (
        <Scrolldiv
          imgCount="14"
          head="Free Dubbed Movies"
          url="/dubbedMovies/zee5_dubbedMovies"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
