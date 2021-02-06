import React from "react"

import style from "./components.module.css"
const { bodySpinner, spinner, inner, one, two, three } = style

var Loader = () => {
    return (
        <div className={bodySpinner}>
            <div className={spinner}>
                <div className={`${inner} ${one}`}></div>
                <div className={`${inner} ${two}`}></div>
                <div className={`${inner} ${three}`}></div>
            </div>
        </div>
    )
}
export default Loader
