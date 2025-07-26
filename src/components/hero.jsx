import React from "react";
import myImg from "../../photos/my_img.png"


import "../../styles/myImg.css"


function Hero() {
  return ( <div>
        <h1 style={{color:"gold", textTransform:"capitalize"}}>Vignesh Ravichandran </h1>
       <div className="img_para"> <img className="myimage" src={myImg} alt="my_img" />
        <p className="scroll_bar" >Hi, I'm Vignesh Ravichandran — a passionate and self-taught full stack developer.

I began my coding journey in December 2024, starting with front-end development. Over time, I've built a strong foundation in HTML, CSS, JavaScript, and React.

I hold a B.E. degree (2015–2019 batch) and bring one year of real-world experience as a Sales Executive at Buzzworks Advancing Human Capital. My journey reflects persistence, having overcome financial challenges to continue learning and building projects.

I’m currently focused on creating responsive, user-friendly web applications and constantly improving my skills to become a professional full stack developer</p></div>
    </div>)
    
}




export default Hero; 