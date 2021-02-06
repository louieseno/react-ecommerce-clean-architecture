import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons"

import IconButton from "./IconButton"

const Header = () => {
    const history = useHistory()
    const [isActive, setisActive] = useState(false)
    return (
        <header className="header">
            <div className="content has-text-centered">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <img src="/logo.png" />
                        </div>
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
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="navbar-end-items">
                                    <IconButton
                                        iconData={faUser}
                                        sizeData={"lg"}
                                        callBack={() => history.push("/auth/v1/login")}
                                    />
                                    <IconButton
                                        iconData={faCartPlus}
                                        sizeData={"lg"}
                                        callBack={() => console.log("here")}
                                    />
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
