import React from 'react'


import data from "../data"
import classes from './Projects.module.css'


 const Projects = () => {
    return (
      <section className={classes["projects-container"]}>

        <div className={classes.projects}>
          <div className="title">
            <h2>Our Projects</h2>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className={classes["projects-list"]}>

        {data.map(house => {
          return (
            <div key={house.id} className={classes.project}>
              <img src={house.img} alt="" />
            </div>
          )
        })}
        
           
          </div>
        </div>
      </section>
    );
}

export default Projects;
