import React,{useContext} from 'react'
import { AuthContext } from '../Context/CreateAuthContext'
import "../App.css"


const Video = () => {
  const {url, setUrl, obj} = useContext(AuthContext);
  const {Title, Year, Type} = obj

  return (
    <div  >
    {console.log(url)}
        <img className='BoxHover' style={{width:"300px", height:"400px", marginTop:"100px"}} src={url} alt="id"/>
        <h3>{Title}</h3>
        <p>{Year}</p>
        <p>{Type}</p>
    </div>
  )
}

export default Video;