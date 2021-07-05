import React from 'react'
import classes from "./Footer.module.css"

import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa"; 

const Footer = () => {
    return (
      <footer>
        <div className={classes["first-footer"]}>
          <div className={classes.footer}>
            <div className={classes["footer-items"]}>
              <div className={classes["footer-item-1"] ,classes["footer-item"]}>
                <h3>Lorem Ipsum</h3>
                <div className={classes.underline}></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className={classes["footer-item-2"], classes["footer-item"]}>
                <h3>Our Offices</h3>
                <div className={classes.underline}></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className={classes["footer-item-3"], classes["footer-item"]}>
                <h3>Office Hours</h3>
                <div className={classes.underline}></div>
                <p>Monday: 8am-6pm</p>
                <p>Tuesday: 8am-6pm</p>
                <p>Wednesday: 8am-6pm</p>
                <p>Thursday: 8am-6pm</p>
                <p>Friday: 8am-4pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["second-footer-container"]}>
          <div className={classes["second-footer"]}>
            <span className={classes["nav-icon"]}>
              <AiFillFacebook />
            </span>
            <span className={classes["nav-icon"]}>
              <AiFillLinkedin />
            </span>
            <span className={classes["nav-icon"]}>
              <AiFillTwitterSquare />
            </span>
            <span className={classes["nav-icon"]}>
              <FaWhatsappSquare />
            </span>
          </div>
        </div>
      </footer>
    );
}

export default Footer
