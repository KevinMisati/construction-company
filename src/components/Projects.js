import React,{useState} from 'react'
import data from "../data"
import classes from './Projects.module.css'
import ShowProject from "./ShowProject"


 const Projects = () => {
   const [img,setImg] = useState("")
   const [showProject,setShowProject] = useState(false)

   const handleImgClicked = (img) => {
      setImg(img)
      console.log(img,"ing")
      setShowProject(true)
   }

   const closeImage = () => {
      setShowProject(false)
   }
    return (
      <>
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
            <>
              
              <div key={house.id} className={classes.project}>
                <img onClick={() => handleImgClicked(house.img)} src={house.img} alt="" />
              </div>
            </>
          )
        })
        }
        
           
          </div>
        </div>
      </section>
        { showProject && <ShowProject
            img={img}
            closeImage={closeImage}
         />}
      </>
    );
}

export default Projects;
