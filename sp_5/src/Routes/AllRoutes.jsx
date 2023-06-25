import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Video from "./Video/Video.jsx"
import TvShows from "./TvShows";
import Movies from './Movies';
import WebSeries from './WebSeries';
import News from './News';
import RightSideLogo from './RightSideLogo';
import Error from './Error';
import Searching from "./Searching"
import Home from './Home/Home.jsx';
import Login from '../Components/Login/Login.jsx';

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/TvShows" element={<TvShows/>}/>
       <Route path="/Movies" element={<Movies/>}/>
       <Route path="/WebSeries" element={<WebSeries/>}/>
       <Route path="/News" element={<News/>}/>
       <Route path="/RightSideLogo" element={<RightSideLogo/>}/>
       <Route path="/Video" element={<Video/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Searching" element={<Searching/>}/>
       <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default AllRoutes