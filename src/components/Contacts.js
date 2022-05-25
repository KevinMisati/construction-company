import React,{useState} from 'react'
import classes from "./Contact.module.css"
const Contacts = () => {
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [email, setEmail] = useState("");

  const [name, setName] = useState("")
  const [nameIsValid,setNameIsValid] = useState(true)
  
  const [message, setMessage] = useState("")
  const [messageIsValid,setMessageIsValid] = useState(true)

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
   
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim().length > 0 && email.includes("@")) {
      setEmailIsValid(true)
    }
    else {
      setEmailIsValid(false)
      return;
    }

    if (name.trim().length > 0 ) {
      setNameIsValid(true)
    }
    else {
      setNameIsValid(false)
      return;
    }

    if (message.trim().length > 0) {
      setMessageIsValid(true)
    }
    else {
      setMessageIsValid(false)
      return;
    }
   }
    return (
      <div className="contacts-section">
      <section id="contact" className={classes["contacts-container"]}>
        <div className={classes.contacts}>
          <div className={classes.title}>
            <h2>Contacts Us</h2>
            <div className="underline"></div>
            <p>We are here always for you.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={classes["container-flex"]}>
              <div className={classes["first-nav-contacts"]}>
                <input
                  onChange={handleNameChange}
                  value={name}
                  placeholder="Name"
                  name="fname"
                  type="text"
                  className={nameIsValid ? "" :classes.invalid}
                />
                <input  className= {emailIsValid ? "": classes.invalid } value={email} onChange = {handleEmailChange} placeholder="Email" name="email" type="email" />
               
              </div>
              <div className={classes["second-nav-contacts"]}>
                <textarea
                  cols="10"
                  ros="60"
                  value={message}
                  onChange= {handleMessageChange}
                  className={messageIsValid ? "" : classes.invalid}
                ></textarea>
              </div>
            </div>
            <div className={classes['btn-container']}>
              <button className="btn">send message</button>
            </div>
          </form>
        </div>
      </section>
      </div>
    );
}

export default Contacts;
