import "./Home.css";
import { useNavigate } from "react-router-dom";

// Raw material
// import data, {
//   Top10_movies,
//   Latest_Hindi_ep,
//   Top10_webseries,
//   Blockbuster_films,
//   premiun_Tv_ep,
//   PopularMovies,
//   World_hits,
// } from "../../RawMaterial/Home.js";
import Footer from "../../Components/Footer/Footer";
import Scrolldiv from "../../Components/ScrollDivMovies/ScrollDivMovies";
import ScrollDivShow from "../../Components/ScrollDivShows/ScrollDivShow";
import Slider from "../../Components/Slider/Slider";
import ScrollDivMovies from "../../Components/ScrollDivMovies/ScrollDivMovies";

const Home = () => {
  const navigate = useNavigate();
  // const ref = useRef(null);

  // const { setUrl, loading, setLoading } = useContext(AuthContext);

  const redirectToVideo = (e) => {
    console.log(e.target.currentSrc);
    // setUrl(e.target.currentSrc);
    navigate("/video");
  };

  // if (loading) {
  //   return (
  //     <>
  //       <button
  //         onClick={() => {
  //           loading ? setLoading(false) : setLoading(true);
  //         }}
  //       >
  //         change
  //       </button>
  //       {/* <Loading /> */}
  //     </>
  //   );
  // }

  return (
    <div className="MainBox">
      {/* Slider */}
      <Slider />

      {/* Trending Near You */}
      <ScrollDivMovies
        imgCount="14"
        head="Trending Near You"
        url="/TrendingNearYou/zee5Trending"
      />

      {/* top 10 web series */}
      <ScrollDivMovies
        imgCount="10"
        head="Top 10 Web Series in India"
        url="/top10webSeries/zee5_top10_web_searies"
      />

      {/* top 10 movies */}
      <ScrollDivMovies
        imgCount="10"
        head="Top 10 Movies in India"
        url="/top10movies/zee5top10Movies"
      />

      {/* Unmissable Movies & Shows */}
      <ScrollDivMovies
        imgCount="10"
        head="Unmissable Movies & Shows"
        url="/unmissedMovies/zee5unmissedmovies"
      />

      {/* Latest Hindi Episodes Free */}
      <ScrollDivShow
        imgCount="12"
        head="Latest Hindi Episodes Free"
        url="/HindiEpisode/zee5_hindiEpisode"
      />

      {/* Blockbuster Films */}
      <Scrolldiv
        imgCount="10"
        head="Blockbuster Films"
        url="/blockbusterMovie/zee5_blockbuster_movie"
      />

      {/* Premium Before TV Ep | ZEE TV */}
      <ScrollDivShow
        imgCount="12"
        head="Latest Hindi Episodes Free"
        url="/PremiumShow/zee5PremiumShow"
      />

      {/* Popular Movies */}
      <Scrolldiv
        imgCount="10"
        head="Popular Movies"
        url="/popularMovies/zee5_popularMovies"
      />

      {/* Free Dubbed Movies */}
      <Scrolldiv
        imgCount="10"
        head="Free Dubbed Movies"
        url="/dubbedMovies/zee5_dubbedMovies"
      />

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Home;
