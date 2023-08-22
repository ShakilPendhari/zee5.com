import React, { useEffect, useRef, useState } from 'react'
import ScrollDivMovies from '../Components/ScrollDivMovies'
import SkeletonMovies from '../Components/Skeleton/Skeleton_movies';
import { Top_ten_web_series_in_india, top_10_movies } from '../utils/DataForMoviesAndShows';
import MainSlider from '../Components/MainSlider/MainSlider';

const Movies = () => {
  const [flag, setFlag] = useState(false);
  let id = useRef(null);

  useEffect(() => {
    id.current = setTimeout(() => setFlag(() => true), 1200);
    return () => clearTimeout(id.current);
  }, []);
  return (
    <>
        <MainSlider title="Sliding/zee5_" />
        {flag ? (
        <ScrollDivMovies
          title = {Top_ten_web_series_in_india}
          imgCount="10"
          head="Famous Movies"
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
          head="Latest Movies"
          url="/top10movies/zee5top10Movies"
        />
      ) : (
        <SkeletonMovies />
      )}
    </>
  )
}

export default Movies