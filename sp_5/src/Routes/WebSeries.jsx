import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import ScrollDivMovies from '../Components/ScrollDivMovies';
import SkeletonMovies from '../Components/Skeleton/Skeleton_movies';

const WebSeries = () => {
  // const { data } = useSelector((store)=>store.data);
  // const {videoId} = data[0].id
  // const {title} = data[0].snippet
  const [flag, setFlag] = useState(false);
  let id = useRef(null);

  useEffect(() => {
    id.current = setTimeout(() => setFlag(() => true), 1200);
    return () => clearTimeout(id.current);
  }, []);

  return  <div className='tvShows'>
   {flag ? (
        <ScrollDivMovies
          imgCount="14"
          head="Famous WebSeries"
          url="/popularMovies/zee5_popularMovies"
        />
      ) : (
        <SkeletonMovies />
      )}
   {flag ? (
        <ScrollDivMovies
          imgCount="14"
          head="Latest Webseries"
          url="/TrendingNearYou/zee5Trending"
        />
      ) : (
        <SkeletonMovies />
      )}
     
</div>
}

export default WebSeries


 {/* { data && <iframe title={data[0].snippet.title} src={`https://www.youtube.com/embed/${data[0].id.videoId}?autoplay=1&mute=1`}></iframe> } */}