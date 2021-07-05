import React from 'react'
import { AiFillPhone } from "react-icons/ai";
export const Banner = () => {
  const handleClick = () => {

  }
    return (
      <section className="banner-container">
        <div className="banner">
          <h2>We`re on call 24/7 to react promptly </h2>
          <h2>to your emergence</h2>
          <span>
            <AiFillPhone /> 07012345678
          </span>
          or

         <a href="#contact"> <button>
            Contact Us
          </button>
          </a>
          
        </div>
      </section>
    );
}
export default Banner;
