import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import ScrollDivMovies from '../Components/ScrollDivMovies';
import SkeletonMovies from '../Components/Skeleton/Skeleton_movies';
import { PopularMovies, Trending_Near_You } from '../utils/DataForMoviesAndShows';
import MainSlider from '../Components/MainSlider/MainSlider';

const WebSeries = () => {
  // const { data } = useSelector((store)=>store.data);
  // const {videoId} = data[0].id
  // const {title} = data[0].snippet
  const [flag, setFlag] = useState(false);
  let id = useRef(null);

  useEffect(() => {
    document.title = "SP5 | WebSeries"
    id.current = setTimeout(() => setFlag(() => true), 1200);
    return () => clearTimeout(id.current);
  }, []);

  return  <div className='tvShows'>
  <MainSlider index={7} title="Sliding/zee5_" />
    {flag ? (
        <ScrollDivMovies
          title = {PopularMovies}
          imgCount="14"
          head="Recent Webseries"
          url="/popularMovies/zee5_popularMovies"
        />
      ) : (
        <SkeletonMovies />
      )}
      {flag ? (
        <ScrollDivMovies
          title = {Trending_Near_You}
          imgCount="14"
          head="Famous Webseries"
          url="/TrendingNearYou/zee5Trending"
        />
      ) : (
        <SkeletonMovies />
      )}
     
 {/* { data && <iframe title={data[0].snippet.title} src={`https://www.youtube.com/embed/${data[0].id.videoId}?autoplay=1&mute=1`}></iframe> } */}
</div>
}

export default WebSeries

