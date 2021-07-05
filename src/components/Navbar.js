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
  
return (
  <div>
    <header className={toggeleOpen ? classes["nav-toggle"] : ""}>
      <div className={classes["nav-contacts-container"]}>
      <div className={classes["nav-contacts"]}>
          <div className={classes["first-contacts"]}>
            <span>
              <AiFillPhone /> 07012345678
            </span>
            <span>
              <MdEmail /> <i className={classes.email}>info@gmail.com</i>
            </span>
          </div>
          <div className={classes["second-contacts"]}>
            <ul>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className={classes["nav-icons"]}>
                    <AiFillFacebook />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className={classes["nav-icons"]}>
                    <AiFillLinkedin />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className={classes["nav-icons"]}>
                    <AiFillTwitterSquare />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className={classes["nav-icons"]}>
                    <FaWhatsappSquare />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      <nav>
        <div className={classes.logo}>
          <img style={{width:"60px"}} src={Logo} alt="" />
        </div>
        <ul>
          <li>
            Home
            <div className={classes["nav-underline"]}></div>
          </li>
          <li>
            About
            <div className={classes["nav-underline"]}></div>
          </li>
          <li>
            Projects
            <div className={classes["nav-underline"]}></div>
          </li>
          <li>
            Portifolio
            <div className={classes["nav-underline"]}></div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);
} 
export default Navbar; 
