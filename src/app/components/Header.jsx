import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons"
import { useHistory } from "react-router-dom"

const iconButton = ({ iconData, callBack }) => {
    return (
        <button className="button is-white" onClick={() => callBack()}>
            <span className="icon">
                <FontAwesomeIcon icon={iconData} size="lg" />
            </span>
        </button>
    )
}

const categories = (text) => {
    return <a className="navbar-item">{text}</a>
}
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
                        <div className="navbar-start">
                            {categories("Women")}
                            {categories("Men")}
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <input className="input is-normal" type="text" placeholder="Search Item" />
                            </div>

                            <div className="navbar-item">
                                <div className="navbar-end-items">
                                    {iconButton({ iconData: faUser, callBack: () => history.push("/auth/v1/login") })}
                                    {iconButton({ iconData: faCartPlus, callBack: () => console.log("cart") })}
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
