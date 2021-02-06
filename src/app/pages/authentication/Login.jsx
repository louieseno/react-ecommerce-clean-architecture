import React from "react"
import style from "./authentication.module.css"
import Content from "app/components/Content"
import LogoColumn from "app/components/LogoColumn"
const { loginText, loginUtilsWrapper, cardWrapper } = style
function AuthContent() {
    return (
        <div className="columns is-centered">
            <LogoColumn />
            <div className="column  is-half ">
                <div className={`card ${cardWrapper} has-text-centered hero-body`}>
                    <p className={`${loginText} is-size-3`}>Login</p>
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary is-normal" type="email" placeholder="Email" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary is-normal" type="password" placeholder="Password" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-primary is-normal is-fullwidth">Submit</button>
                        </p>
                    </div>
                    <div className={loginUtilsWrapper}>
                        <a href="">Forgot Password?</a>
                        <div className="columns is-1 sign-up">
                            <div className="column">Not a member yet?</div>
                            <div className="column">
                                <a href="">Create Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Login = () => {
    var ContentDetails = Content(AuthContent, false, false)

    return <>{ContentDetails}</>
}
export default Login
