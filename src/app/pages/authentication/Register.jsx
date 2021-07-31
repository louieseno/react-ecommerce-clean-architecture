import React from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { useHistory } from "react-router-dom"
import Content from "app/components/Content"
import { FormField } from "app/components/FormFields"
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
                        <Formik
                            initialValues={{
                                userName: "",
                                email: "",
                                password: "",
                            }}
                            validationSchema={Yup.object({
                                userName: Yup.string()
                                    .min(6, "Must be at least 6 characters.")
                                    .max(30, "Must be 30 characters or less.")
                                    .matches(
                                        /^[A-Za-z0-9]+(?:[ _.-][A-Za-z0-9]+)*$/,
                                        "Invalid username value. Please try again.",
                                    )
                                    .required("Username required."),
                                email: Yup.string().email("Invalid email address.").required("Email required."),
                                password: Yup.string()
                                    .min(6, "Must be at least 8 characters.")
                                    .required("Password required."),
                            })}
                            onSubmit={(values) => {
                                console.log(values)
                                // setTimeout(() => {
                                //     alert(JSON.stringify(values, null, 2))
                                //     setSubmitting(false)
                                // }, 400)
                            }}
                        >
                            <Form>
                                <FormField label="Username" type="text" name="userName" placeholder="Enter Username" />
                                <FormField label="Email" type="email" name="email" placeholder="Enter Email" />
                                <FormField
                                    label="Password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                />

                                <button className="button is-primary is-normal is-fullwidth" type="submit">
                                    Submit
                                </button>
                            </Form>
                        </Formik>
                        <div className={`${authUtilsWrapper} columns`}>
                            <div className="column">
                                Already have an account? <a href="/auth/login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    )
}
export default Register
