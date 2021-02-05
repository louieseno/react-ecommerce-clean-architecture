import React from "react"

import "./components.modules.css"

var Loader = () => {
    return (
        <div className="body-spinner">
            <div className="spinner">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}
export default Loader
