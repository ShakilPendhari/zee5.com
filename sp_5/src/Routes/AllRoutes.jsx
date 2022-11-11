import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Logo from "./Logo";
import Home from "./Home";
import TvShows from "./TvShows";
import Movies from './Movies';
import WebSeries from './WebSeries';
import News from './News';
import RightSideLogo from './RightSideLogo';
import Error from './Error';

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Logo/>}/>
       <Route path="/Home" element={<Home/>} />
       <Route path="/TvShows" element={<TvShows/>}/>
       <Route path="/Movies" element={<Movies/>}/>
       <Route path="/WebSeries" element={<WebSeries/>}/>
       <Route path="/News" element={<News/>}/>
       <Route path="/RightSideLogo" element={<RightSideLogo/>}/>
       <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default AllRoutes