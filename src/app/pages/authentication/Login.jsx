import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Content from "app/components/Content"
import Loader from "app/components/Loader"
import logo from "assets/img/logo.png"
import style from "./authentication.module.css"
import { FormField } from "app/components/Form/FormFields"
import { controller } from "./controller"

const { authUtilsWrapper, cardWrapper, forgotPassword } = style
function Login() {
    const { loading, onSignIn, onNavigateHome } = controller()
    return (
        <Content includeHeader={false} includeFooter={false}>
            {loading && <Loader />}
            {!loading && (
                <div className="hero-body columns is-centered">
                    <div className="column is-one-quarter">
                        <div className={`card ${cardWrapper} has-text-centered`}>
                            <img src={logo} alt="We Wear Where" onClick={() => onNavigateHome()} />
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: "",
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string().email("Invalid email address.").required("Email required."),
                                    password: Yup.string().required("Password required."),
                                })}
                                onSubmit={(values) => onSignIn(values)}
                            >
                                <Form>
                                    <FormField label="Email" type="email" name="email" placeholder="Enter Email" />
                                    <FormField
                                        label="Password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                    />

                                    <button className="button is-primary is-normal is-fullwidth" type="submit">
                                        Login
                                    </button>
                                </Form>
                            </Formik>

                            <div className={authUtilsWrapper}>
                                <a href="">Forgot Password?</a>
                                <div className={`${forgotPassword} columns is-1`}>
                                    <div className="column">Not a member yet?</div>
                                    <div className="column">
                                        <a href="/auth/register">Create Account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Content>
    )
}
export default Login
