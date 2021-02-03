import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    const [isActive, setisActive] = useState(false)
    return (
        <header className="header">
            <div className="content has-text-centered">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>
                        {/* Hamburger Icon for touch devices */}
                        <a
                            onClick={() => {
                                setisActive(!isActive)
                            }}
                            role="button"
                            className="navbar-burger"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarBasicExample"
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                        <div className="navbar-start">
                            <a className="navbar-item">Women</a>
                            <a className="navbar-item">Men</a>
                            <a className="navbar-item">Kids</a>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <input className="input is-normal" type="text" placeholder="Search Item" />
                            </div>

                            <div className="navbar-item">
                                <div className="navbar-end-items">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faUser} size="lg" />
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faCartPlus} size="lg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
