import React from "react"
import Content from "app/components/Content"
import { useHistory } from "react-router-dom"
import logo from "assets/img/logo.png"
import style from "./authentication.module.css"
const { authUtilsWrapper, cardWrapper, forgotPassword } = style
function Login() {
    const history = useHistory()
    return (
        <Content includeHeader={false} includeFooter={false}>
            <div className="hero-body columns is-centered">
                <div className="column is-one-quarter">
                    <div className={`card ${cardWrapper} has-text-centered`}>
                        <img src={logo} alt="We Wear Where" onClick={() => history.push("/")} />
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
                                <button className="button is-primary is-normal is-fullwidth">Login</button>
                            </p>
                        </div>
                        <div className={authUtilsWrapper}>
                            <a href="">Forgot Password?</a>
                            <div className={`${forgotPassword} columns is-1`}>
                                <div className="column">Not a member yet?</div>
                                <div className="column">
                                    <a href="/auth/v1/register">Create Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    )
}
export default Login
