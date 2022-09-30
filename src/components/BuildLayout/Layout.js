import React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


import HomeWrapper from "./HomeWrapper";

import About from "./About/About";

import {Route, Routes, HashRouter, NavLink } from "react-router-dom";


function Layout(){

return(
<>
<HashRouter>
<Nav className="justify-content-center"> 
<ul className="siteheader">
<li></li>
<li><NavLink to="/">GRAFIDOLAR</NavLink></li>
<li><NavLink to="/about">Más info</NavLink></li>
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