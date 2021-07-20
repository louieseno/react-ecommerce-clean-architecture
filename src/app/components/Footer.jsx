import React from "react"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import IconButton from "./IconButton"
import style from "./components.module.css"
const { footWrapper, footerOveride } = style

const _openSocialMedia = (url) => {
    window.open(url, "_blank")
}

const Footer = () => {
    return (
        <footer className={`footer ${footerOveride}`}>
            <div className="container">
                <div className={`content columns ${footWrapper}`}>
                    <div className="column">
                        <p>About We Wear Where</p>
                        <a href="/information">Information</a>
                    </div>
                    <div className="column">
                        <p>Help</p>
                        <a href="/faq">FAQ</a>
                        <a href="/contact">Contact us</a>
                        <a href="/return-policy">Return Policy</a>
                    </div>
                    <div className="column">
                        <p>E-Newsletter</p>
                        <p>
                            Sign up and be the first-in-the know about new arrivals, promotions, in-store events and
                            more.
                        </p>
                    </div>
                    <div className="column">
                        <p>We Wear Where Social Account</p>
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
