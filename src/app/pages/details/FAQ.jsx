import React, { useState } from "react"
import Content from "app/components/Content"
import styles from "./details.module.css"
const { detailHeader, infoImage } = styles

function FAQContent() {
    const [dropdownActive, setDropdownActive] = useState(false)
    const handleClick = () => {
        if (dropdownActive) {
            setDropdownActive(false)
        } else {
            setDropdownActive(true)
        }
        console.log(dropdownActive)
    }
    return (
        <div className={`columns is-centered hero-body ${infoImage}`}>
            <div className={`column is-two-fifths has-text-centered `}>
                <p className={detailHeader}>{"FAQ"}</p>
                <div className={`dropdown ${dropdownActive ? "is-active" : ""}`}>
                    <div className="dropdown-trigger">
                        <button
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu3"
                            onClick={() => handleClick()}
                        >
                            <span>Click me</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                        <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                                Overview
                            </a>
                            <a href="#" className="dropdown-item">
                                Modifiers
                            </a>
                            <a href="#" className="dropdown-item">
                                Grid
                            </a>
                            <a href="#" className="dropdown-item">
                                Form
                            </a>
                            <a href="#" className="dropdown-item">
                                Elements
                            </a>
                            <a href="#" className="dropdown-item">
                                Components
                            </a>
                            <a href="#" className="dropdown-item">
                                Layout
                            </a>
                            <hr className="dropdown-divider" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const FAQ = () => {
    var ContentDetails = Content(FAQContent, true, true)

    return <>{ContentDetails}</>
}
export default FAQ
