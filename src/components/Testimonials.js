import React from 'react'
import Person1 from "../images/116.jpg"
import classes from "./Testimonials.module.css"

const dummy_testimonials = [
  {
    comment: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad.",
    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "Etty Aguta",
    profession:"Lawyer"
  },
  {
    comment: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad.",
    img: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
    name: "Agnes Kwambai",
    profession: "Farmer"
  },
  {
    comment: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad.",
    img:"https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "Karoki Lelei",
    profession: "Teacher"
  }
]


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


            {dummy_testimonials.map(testimonial => {
              return (
              <div className={classes["testimonial"]}>
                <div className={classes.text}>
                  <p>
                   {testimonial.comment}
                </p>
                </div>
                <div className={classes["img-position"]}>
                  <div className={classes["img-container"]}>
                    <img alt="" src={testimonial.img}></img>
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <h5>{testimonial.profession}</h5>
                  </div>
                </div>
                </div>
              )
         }) }

          </div>
        </div>
      </section>
    );
}

export default Testimonials
