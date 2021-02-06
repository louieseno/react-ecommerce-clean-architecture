import React from "react"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import IconButton from "./IconButton"

const _openSocialMedia = (url) => {
    window.open(url, "_blank")
}

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
                            <IconButton
                                iconData={faFacebook}
                                sizeData={"2x"}
                                callBack={() => _openSocialMedia("https://www.facebook.com/WeWearWhere")}
                            />
                            <IconButton
                                iconData={faInstagram}
                                sizeData={"2x"}
                                callBack={() => _openSocialMedia("https://www.instagram.com/we_wear_where/")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
