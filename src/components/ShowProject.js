import React from "react"
import ReactDOM from "react-dom"
import classes from "./showProject.module.css"

const ShowProject  = ({img,closeImage}) => {
    return ReactDOM.createPortal(
        <>
            <div onClick={closeImage} className={classes.backlay}></div>
                <div className={classes["show-project"]}>
                    <div className={classes["img-container"]}>
                        <button onClick={closeImage}>
                        <i class="fa-solid fa-xmark"></i>
                        </button>
                        <img src={img} />
                    </div>
                </div>
        </>,
        document.getElementById("root")
    )
}

export default ShowProject