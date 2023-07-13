import React from 'react'
import ScrollDivShow from '../Components/ScrollDivShows/ScrollDivShow'

const TvShows = () => {
  return (
    <div className='tvShows'>
       <ScrollDivShow imgCount="12" head="Latest Hindi Episodes Free" url="/HindiEpisode/zee5_hindiEpisode" />
    </div>
  )
}

export default TvShows