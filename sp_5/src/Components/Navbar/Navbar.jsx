import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo.svg"

const links = [
 
  {
    to:"/Home",
    title:"Home"
  },
  {
    to:"/TvShows",
    title:"TvShows"
  },
  {
    to:"/Movies",
    title:"Movies"
  },
  {
    to:"/WebSeries",
    title:"WebSeries"
  },
  {
    to:"/News",
    title:"News"
  },
  {
    to:"/RightSideLogo",
    title:"icon"
  }
];

let activeStyle = {
  textDecoration: "none",
  color: "red"
};

let normal = {
  textDecoration: "none",
  color: "White"
};


const Navbar = () => {
  return (
    <div className='Navbar' style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      <NavLink>
        <img alt="logo" src={Logo}/>
      </NavLink>
         {
          links.map((el)=>(
            <NavLink 
              key={el.to}
              style={({ isActive }) => (isActive ? activeStyle : normal)}
              to={el.to}
              end
              >
               {el.title}
             </NavLink>
            ))
         }
    </div>
  )
}

export default Navbar