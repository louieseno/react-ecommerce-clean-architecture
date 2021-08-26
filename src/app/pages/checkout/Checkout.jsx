import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import { FormField } from "app/components/FormFields"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import Content from "app/components/Content"

const iframeStyles = {
    base: {
        fontSize: "16px",
        "::placeholder": {
            color: "#87bbfd",
        },
    },
    invalid: {
        iconColor: "red",
        color: "red",
    },
    complete: {
        iconColor: "#cbf4c9",
    },
}

const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
}

export default function Checkout() {
    return (
        <Content>
            <div className="hero-body columns is-centered">
                <div className="column is-half has-text-centered">
                    <h1 style={{ color: "#0ed6a0", fontSize: 25, fontWeight: "bold" }}>Billing Details and Payment</h1>
                    <div className="card" style={{ padding: 10 }}>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                address: "",
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().required("Name required."),
                                email: Yup.string().email("Invalid email address.").required("Email required."),
                                address: Yup.string().required("Address required."),
                            })}
                            onSubmit={(values) => console.log(values)}
                        >
                            <Form>
                                <FormField label="Name" type="text" name="name" placeholder="Enter Name" />
                                <FormField label="Email" type="email" name="email" placeholder="Enter Email" />
                                <FormField label="Address" type="text" name="address" placeholder="Enter Address" />
                                <div
                                    style={{
                                        border: "1px solid #DBDBDB",
                                        borderRadius: 4,
                                        color: "#363636",
                                        padding: 10,
                                        marginBottom: 10,
                                    }}
                                >
                                    <CardElement options={cardElementOpts} />
                                </div>
                                <button className="button is-primary is-normal is-fullwidth" type="submit">
                                    Pay
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </Content>
    )
}
