import React,{useState} from 'react'

import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa"; 
import Logo  from "../images/logo.png"
import classes from "./Navbar.module.css"

const Navbar = () => {
  const [toggeleOpen,setToggleIsOpen] = useState(false)
   const toggleNav = ()=> {
   setToggleIsOpen(!toggeleOpen)
    
  } 
  const closeToggle = () => {
    setToggleIsOpen(false)
  }
  
return (
  <div>
    <header className={toggeleOpen ? classes["nav-toggle"] : ""}>
     
      <div className={classes["mobile-nav-container"]}>
        <div className={classes["mobile-nav"]}>
          <div className={classes["mobile-logo"]}>
            <img style={{ width: "50px" }} src={Logo} alt=""/>
          </div>

          <div onClick={toggleNav} className={classes.hurmbuger}>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
          </div>
        </div>
      </div>
      <div className={classes["nav-container"]}>
        <nav>
          <div className={classes.logo}>
            <img style={{ width: "60px" }} src={Logo} alt="" />
          </div>
          <ul>
            <li onClick={closeToggle}>
              <a href="#home"> Home</a>

              <div className={classes["nav-underline"]}></div>
            </li>

            <li onClick={closeToggle}>
              <a href="#projects"> Projects</a>

              <div className={classes["nav-underline"]}></div>
            </li>

            <li onClick={closeToggle}>
              <a href="#contact"> Contacts</a>

              <div className={classes["nav-underline"]}></div>
            </li>

          </ul>
        </nav>
      </div>
      
    </header>
  </div>
);
} 
export default Navbar; 
