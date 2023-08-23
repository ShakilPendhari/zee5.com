import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Footer from "../Components/Footer/Footer";
import ScrollDivShow from "../Components/ScrollDivShow";
import ScrollDivMovies from "../Components/ScrollDivMovies";
import SkeletonShow from "../Components/Skeleton/Skeleton_shows";
import SkeletonMovies from "../Components/Skeleton/Skeleton_movies";
// import Slider from "../../Components/Slider/Slider";
import MainSlider from "../Components/MainSlider/MainSlider";
import style from "./../style/MainPages/Home.module.css";
import { BlockbusterFilms, Free_dubbed_movies, Latest_hindi_episodes_free, PopularMovies, PremiumTvShows, Top_ten_web_series_in_india, Trending_Near_You, Unmissable_Movies_Shows, top_10_movies } from "../utils/DataForMoviesAndShows";
import { useDispatch } from "react-redux";
import { AddToken } from "../Redux/Auth/auth.action";

const Home = () => {
  const [flag, setFlag] = useState(false);
  let id = useRef(null);
  const [ f, setF ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "SP5"
    id.current = setTimeout(() => setFlag(() => true), 1300);
    return () => clearTimeout(id.current);
  }, []);

  useEffect(()=>{
    let token = window.location.search.split("?").join("").split("token=").join("")
    if(token)
    {
      dispatch(AddToken(token))
    }
  },[dispatch])

  return (
    <div className={style.MainBox}>
      {/* Slider */}
      {/* <Slider /> */}
      <MainSlider title="Sliding/zee5_" />

      {/* Trending Near You */}
    
      {/* <button onClick={()=>setF(!f)}>Click</button> */}
      {flag ? (
        <ScrollDivMovies
          title = {Trending_Near_You}
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
         title = {Top_ten_web_series_in_india}
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
         title = {top_10_movies}
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
         title = {Unmissable_Movies_Shows}
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
          title={Latest_hindi_episodes_free}
          imgCount="13"
          head="Latest Hindi Episodes Free"
          url="/HindiEpisode/zee5_hindiEpisode"
        />
      ) : (
        <SkeletonShow />
      )}

      {/* Blockbuster Films */}
      {flag ? (
        <ScrollDivMovies
         title = {BlockbusterFilms}
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
          title={PremiumTvShows}
          imgCount="13"
          head="Premium Before TV Ep | ZEE TV"
          url="/PremiumShow/zee5PremiumShow"
        />
      ) : (
        <SkeletonShow />
      )}

      {/* Popular Movies */}

      {flag ? (
        <ScrollDivMovies
          title = {PopularMovies}
          imgCount="14"
          head="Popular Movies"
          url="/popularMovies/zee5_popularMovies"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* Free Dubbed Movies */}

      {flag ? (
        <ScrollDivMovies
         title = {Free_dubbed_movies}
          imgCount="14"
          head="Free Dubbed Movies"
          url="/dubbedMovies/zee5_dubbedMovies"
        />
      ) : (
        <SkeletonMovies />
      )}

      {/* Footer
      <Footer /> */}
    </div>
  );
};

export default Home;
