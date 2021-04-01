import React from "react"
import { useHistory } from "react-router-dom"
import Content from "app/components/Content"
import logo from "assets/img/logo.png"
import style from "./authentication.module.css"
const { cardWrapper, authUtilsWrapper } = style

function Register() {
    const history = useHistory()
    return (
        <Content includeHeader={false} includeFooter={false}>
            <div className="hero-body columns is-centered">
                <div className="column is-one-quarter">
                    <div className={`card ${cardWrapper} has-text-centered`}>
                        <img src={logo} alt="We Wear Where" onClick={() => history.push("/")} />
                        <div className="field">
                            <p className="control">
                                <input className="input is-primary is-normal" type="text" placeholder="Username" />
                            </p>
                        </div>
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
                                <input
                                    className="input is-primary is-normal"
                                    type="password"
                                    placeholder="Re-enter Password"
                                />
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-primary is-normal is-fullwidth">Create Account</button>
                            </p>
                        </div>

                        <div className={`${authUtilsWrapper} columns`}>
                            <div className="column">
                                Already have an account? <a href="/auth/v1/login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    )
}
export default Register
