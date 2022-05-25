import React from 'react'


import data from "../data"
import classes from './Projects.module.css'


 const Projects = () => {
    return (
      <section id="projects" className={classes["projects-container"]}>

        <div className={classes.projects}>
          <div className="title">
            <h2>Our Projects</h2>
            <div className="underline"></div>
            <p>Have a look at some of our projects.</p>
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
