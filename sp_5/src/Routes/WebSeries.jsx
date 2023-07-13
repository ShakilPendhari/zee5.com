import React from 'react'
import { useSelector } from 'react-redux';

const WebSeries = () => {
  const { data } = useSelector((store)=>store.data);
  // const {videoId} = data[0].id
  // const {title} = data[0].snippet

  return <div>
  {
    data && console.log(data,"hello",data[0].id.videoId)
  }
   { data && <iframe title={data[0].snippet.title} src={`https://www.youtube.com/embed/${data[0].id.videoId}?autoplay=1&mute=1`}></iframe> }
    </div>
}

export default WebSeries