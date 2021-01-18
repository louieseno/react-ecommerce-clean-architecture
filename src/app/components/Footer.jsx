import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content columns footer-columns">
                    <div className="column">
                        <p className="foot-header">About We Wear Where</p>
                        <a href="">Information</a>
                    </div>
                    <div className="column">
                        <p className="foot-header">Help</p>
                        <a href="">FAQ</a>
                        <a href="">Contact us</a>
                        <a href="">Return Policy</a>
                    </div>
                    <div className="column">
                        <p className="foot-header">E-Newsletter</p>
                        <p>
                            Sign up and be the first-in-the know about new arrivals, promotions, in-store events and
                            more.
                        </p>
                    </div>
                    <div className="column">
                        <p className="foot-header">We Wear Where Social Account</p>
                        <div className="social-media-icons">
                            <span className="icon">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </span>
                            <span className="icon">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
