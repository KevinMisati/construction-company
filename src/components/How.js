import React from 'react'
import classes from "./How.module.css"

import { InnovationIcon, EnvironmentIcon, SafetyIcon, CommunityIcon,QualityIcon } from "../../src/icons"

const How = () => {
return (
  <>
    <article id="about" className={classes["how-container"]}>
      <div className={classes.how}>
        <div className="title">
          <h2>How we make it possible</h2>
          <div className="underline"></div>
         
        </div>
        <div className={classes.hows}>
          <div className={classes["how-item"]}>
            <div className={classes["outer-icon"]}>
              <div className={classes["inner-icon"]}>
               <SafetyIcon />
              </div>
            </div>

            <h3>Safety</h3>
            <p>
              Safety is our number one priority and our exacting health and safety standards have been accredited to the highest level.
            </p>
          </div>
          <div className={classes["how-item"]}>
            <div className={classes["outer-icon"]}>
              <div className={classes["inner-icon"]}>
                <InnovationIcon />
              </div>
            </div>
            <h3>Innovation</h3>
            <p>
              We are fully committed to provide a more efficient and progressive service through driving and embracing innovative technologies.
            </p>
          </div>
          <div className={classes["how-item"]}>
            <div className={classes["outer-icon"]}>
              <div className={classes["inner-icon"]}>
               <EnvironmentIcon />
              </div>
            </div>
            <h3>Environment</h3>
            <p>
              We strive to continually improve our sustainable working practices to affect positive change in our business and the industry.
            </p>
          </div>
          <div className={classes["how-item"]}>
            <div className={classes["outer-icon"]}>
              <div className={classes["inner-icon"]}>
               <CommunityIcon />
              </div>
            </div>
            <h3>Community</h3>
            <p>
              We have a clear focus on working to improve our local community and finding ways to add further value to our clients and partners.
            </p>
          </div>
          <div className={classes["how-item"]}>
            <div className={classes["outer-icon"]}>
              <div className={classes["inner-icon"]}>
                <QualityIcon />
              </div>
            </div>
            <h3>Quality</h3>
            <p>
              We have a steadfast belief in achieving the highest level of quality and delivering best practice through our products and services
            </p>
          </div>
          
        </div>
      </div>
    </article>
  </>
);
}

export default How;
