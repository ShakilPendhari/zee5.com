import React from 'react'
// import { AuthContext } from '../Context/CreateAuthContext'
import "../App.css"

let Title;

const Video = () => {
  // const {url, setUrl, obj} = useContext(AuthContext);
  // const {Title, Year, Type} = obj;

  return (
    <div  >
    {/* {console.log(url)}
        <img className='BoxHover' style={{width:"300px", height:"400px", marginTop:"100px"}} src={url} alt="id"/>
        <h3>{Title}</h3>
        <p>{Year}</p>
        <p>{Type}</p> */}
        {
          {/* console.log(Title,url,Year,Type) */}
        }
        <iframe title="video" src={`https://www.youtube.com/embed/${Title}?autoplay=1&mute=1`}></iframe>
    </div>
  )
}

export default Video;