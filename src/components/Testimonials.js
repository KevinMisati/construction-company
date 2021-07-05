import React from 'react'
import Person1 from "../images/116.jpg"
import classes from "./Testimonials.module.css"


const Testimonials = () => {
    return (
      <section className={classes["testimonials-container"]}>
        <div className={classes.testimonials}>
          <div className="title">
            <h2>Testimonials</h2>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className={classes["testimonials-list"]}>
            <div className={classes["testimonial"]}>
              <div className={classes.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className={classes["img-position"]}>
                <div className={classes["img-container"]}>
                  <img alt="" src={Person1}></img>
                </div>
                <div>
                  <h4>Kevin Misati</h4>
                  <h5>Web Developer</h5>
                </div>
              </div>
            </div>

            <div className={classes.testimonial}>
              <div className={classes.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className={classes["img-position"]}>
                <div className={classes["img-container"]}>
                  <img alt="" src={Person1}></img>
                </div>
                <div>
                  <h4>Kevin Misati</h4>
                  <h5>Web Developer</h5>
                </div>
              </div>
            </div>

            <div className={classes.testimonial}>
              <div className={classes.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className={classes["img-position"]}>
                <div className={classes["img-container"]}>
                  <img alt="" src={Person1}></img>
                </div>
                <div>
                  <h4>Kevin Misati</h4>
                  <h5>Web Developer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonials
