import React from "react"
import "./authentication.modules.css"

function AuthContent() {
    return (
        <div className="hero-body columns is-centered is-fullheight">
            <div className="column is-one-quarter ">
                <div className="card card-wrapper has-text-centered">
                    <p className="login-text is-size-3">Login</p>
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
                    <div className="login-utils-wrapper">
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
    return <>{AuthContent()}</>
}
export default Login
