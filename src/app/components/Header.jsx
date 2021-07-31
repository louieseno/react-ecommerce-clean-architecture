import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { faShoppingCart, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons"
import logo from "assets/img/logo.png"
import IconButton from "./IconButton"
import style from "./components.module.css"
import { contoller } from "./controller"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const { navbarWrapper, navbarItem, navbarEnditems, dropDown } = style

const Header = () => {
    const history = useHistory()
    const [isActive, setisActive] = useState(false)
    const { totalItems, user, userDropDown, onUserDropDown, onSignOut } = contoller()
    return (
        <header className="header">
            <div className="content has-text-centered">
                <nav className={`navbar ${navbarWrapper}`} role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <div className={`navbar-item ${navbarItem}`}>
                            <img src={logo} alt="We Wear Where" onClick={() => history.push("/jackets")} />
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
                                    {user ? (
                                        <div
                                            className={`dropdown ${userDropDown ? "is-active" : ""}`}
                                            onClick={() => onUserDropDown()}
                                        >
                                            <div className="dropdown-trigger">
                                                <div className={dropDown}>
                                                    <span>{user.username}</span>
                                                    <span className="icon is-small">
                                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu has-text-left" id="dropdown-menu" role="menu">
                                                <button
                                                    className="button is-danger is-light"
                                                    onClick={() => onSignOut()}
                                                >
                                                    <span>Sign Out</span>
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon={faSignOutAlt} size={"sm"} />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <IconButton
                                            iconData={faUser}
                                            iconName={"auth"}
                                            itemTotal={0}
                                            sizeData={"lg"}
                                            callBack={() => history.push("/auth/login")}
                                        />
                                    )}

                                    <IconButton
                                        iconData={faShoppingCart}
                                        iconName={"cart"}
                                        itemTotal={totalItems}
                                        sizeData={"lg"}
                                        callBack={() => history.push("/checkout")}
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
