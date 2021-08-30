import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import { FormField } from "app/components/Form/FormFields"
import Content from "app/components/Content"

import { controller } from "./controller"
import PhoneInputField from "app/components/Form/PhoneInputField"
import AddressField from "app/components/Form/AddressField"
import CardInputField from "app/components/Form/CardInputField"

export default function Checkout() {
    const { onSubmit } = controller()
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
                                phone: "",
                                country: "",
                                region: "",
                                address: "",
                                card: "",
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().required("Name required."),
                                email: Yup.string().email("Invalid email address.").required("Email required."),
                                country: Yup.string().required("Country required."),
                                region: Yup.string().required("Region required."),
                                address: Yup.string().required("Address required."),
                                phone: Yup.string().required("Phone required."),
                                card: Yup.string().required("Card required."),
                            })}
                            onSubmit={(values) => {
                                onSubmit(values)
                            }}
                        >
                            <Form>
                                <FormField label="Name" type="text" name="name" placeholder="Enter Name" />
                                <FormField label="Email" type="email" name="email" placeholder="Enter Email" />
                                <AddressField />
                                <PhoneInputField />
                                <CardInputField />
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
