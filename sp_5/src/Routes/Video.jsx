import React,{useContext} from 'react'
import { AuthContext } from '../Context/CreateAuthContext'


const Video = () => {
  const {url, setUrl} = useContext(AuthContext)

  return (
    <div>
    {console.log(url)}
        <img src={url} alt="id"/>
    </div>
  )
}

export default Video;