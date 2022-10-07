import React from "react"


import Nav from 'react-bootstrap/Nav';


import HomeWrapper from "./HomeWrapper";

import About from "./About/About";

import {Route, Routes, HashRouter, NavLink } from "react-router-dom";
import Grafidolar_Header from '../../assets/Grafidolar_Header.svg'
import house_door_fill from '../../assets/house-door-fill.svg'


//import Grafido from '../../assets/Header_GRAFIDOLAR.svg'

function Layout(){

return(
<>
<HashRouter>
<Nav className="justify-content-center"> 
<ul className="siteheader">
<li></li>
<li><NavLink to="/">
  <img
src={Grafidolar_Header}

  />
</NavLink></li>
<li><NavLink className="hoverable" to={"/"}> <img src={house_door_fill} width={20} height={20}/> </NavLink></li>
<li><NavLink className="hoverable"to="/about">Info</NavLink></li>
</ul>
</Nav>
<Routes>
<Route exact path="/" element={<HomeWrapper/>}/>
<Route path="/about" element={<About/>}/>
</Routes>


</HashRouter>

</>
    )
}
export default Layout;