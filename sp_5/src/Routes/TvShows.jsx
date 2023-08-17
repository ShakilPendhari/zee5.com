import React, { useEffect, useRef, useState } from 'react'
import ScrollDivShow from '../Components/ScrollDivShow'
import SkeletonShow from '../Components/Skeleton/Skeleton_shows';

const TvShows = () => {
  const [flag, setFlag] = useState(false);
  let id = useRef(null);

  useEffect(() => {
    id.current = setTimeout(() => setFlag(() => true), 1200);
    return () => clearTimeout(id.current);
  }, []);

  return (
    <div className='tvShows'>
       {flag ? (
        <ScrollDivShow
          imgCount="13"
          head="Latest TvShow"
          url="/HindiEpisode/zee5_hindiEpisode"
        />
      ) : (
        <SkeletonShow />
      )}
       {flag ? (
        <ScrollDivShow
          imgCount="13"
          head="Famous TvShow"
          url="/PremiumShow/zee5PremiumShow"
        />
      ) : (
        <SkeletonShow />
      )}
    </div>
  )
}

export default TvShows