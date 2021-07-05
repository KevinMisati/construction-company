import React from 'react'
import classes from "./Contact.module.css"
const Contacts = () => {
  const handleSubmit = (e) => {
     e.preventDefault()
   }
    return (
      <section className={classes["contacts-container"]}>
        <div className={classes.contacts}>
          <div className={classes.title}>
            <h2>Contacts Us</h2>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={classes["container-flex"]}>
              <div className={classes["first-nav-contacts"]}>
                <input placeholder="Name" name="fname" type="text" />
                <input placeholder="Email" name="email" type="email" />
               
              </div>
              <div className={classes["second-nav-contacts"]}>
                <textarea cols="10" ros="60"></textarea>
              </div>
            </div>
            <div className={classes['btn-container']}>
              <button className="btn">send message</button>
            </div>
          </form>
        </div>
      </section>
    );
}

export default Contacts;
