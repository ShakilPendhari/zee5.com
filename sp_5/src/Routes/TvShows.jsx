import React, { useEffect, useRef, useState } from 'react'
import ScrollDivShow from '../Components/ScrollDivShow'
import SkeletonShow from '../Components/Skeleton/Skeleton_shows';
import { Latest_hindi_episodes_free, PremiumTvShows } from '../utils/DataForMoviesAndShows';
import { premiun_Tv_ep } from '../RawMaterial/Home';
import MainSlider from '../Components/MainSlider/MainSlider';

const TvShows = () => {
  const [flag, setFlag] = useState(false);
  let id = useRef(null);

  useEffect(() => {
    document.title = "SP5 | TvShows"
    id.current = setTimeout(() => setFlag(() => true), 1200);
    return () => clearTimeout(id.current);
  }, []);

  return (
    <div className='tvShows'>
      <MainSlider index={5} title="Sliding/zee5_" />

       {flag ? (
        <ScrollDivShow
          title={Latest_hindi_episodes_free}
          imgCount="13"
          head="Latest TvShow"
          url="/HindiEpisode/zee5_hindiEpisode"
        />
      ) : (
        <SkeletonShow />
      )}
       {flag ? (
        <ScrollDivShow
          title={PremiumTvShows}
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