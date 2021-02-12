import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons"
import logo from "assets/img/logo.png"
import IconButton from "./IconButton"
import style from "./components.module.css"
const { navbarWrapper, navbarItem, navbarEnditems } = style

const Header = () => {
    const history = useHistory()
    const [isActive, setisActive] = useState(false)
    return (
        <header className="header">
            <div className="content has-text-centered">
                <nav className={`navbar ${navbarWrapper}`} role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <div className={`navbar-item ${navbarItem}`}>
                            <img src={logo} alt="We Wear Where" onClick={() => history.push("/")} />
                        </div>
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
                                <div className={`navbar-end-items ${navbarEnditems}`}>
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
