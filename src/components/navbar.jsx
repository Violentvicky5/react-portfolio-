import React from "react";

import { Link } from "react-router-dom";





function Navbar() {
   return <ul>
    <li><Link to={"/hero"}>intro</Link> </li>
    <li><Link to={"/about"}>about</Link> </li>
    <li><Link to={"/projects"}>projects</Link> </li>
    <li><Link to={"/skills"}>skills</Link> </li>
    <li><Link to={"contact"}>contact</Link></li>
    </ul>   
}



export default Navbar;