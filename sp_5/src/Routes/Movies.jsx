import React, { useEffect, useRef, useState } from 'react'
import ScrollDivMovies from '../Components/ScrollDivMovies'
import SkeletonMovies from '../Components/Skeleton/Skeleton_movies';

const Movies = () => {
  const [flag, setFlag] = useState(false);
  let id = useRef(null);

  useEffect(() => {
    id.current = setTimeout(() => setFlag(() => true), 1200);
    return () => clearTimeout(id.current);
  }, []);
  return (
    <>
        {flag ? (
        <ScrollDivMovies
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
          imgCount="10"
          head="Movies"
          url="/top10movies/zee5top10Movies"
        />
      ) : (
        <SkeletonMovies />
      )}
    </>
  )
}

export default Movies