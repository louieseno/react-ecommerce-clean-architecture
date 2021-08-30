import React from "react"
import PropTypes from "prop-types"
import { connect } from "formik"
import { ErrorFieldMessage } from "./ErrorFieldMessage"
import { CardElement } from "@stripe/react-stripe-js"
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

const CardInputField = (props) => {
    return (
        <div className="field">
            <div className="control">
                <label className="label">Card Payment</label>
                <div
                    style={{
                        border: "1px solid #DBDBDB",
                        borderRadius: 4,
                        color: "#363636",
                        padding: 10,
                        marginBottom: 10,
                    }}
                >
                    <CardElement
                        options={cardElementOpts}
                        onChange={(event) => {
                            if (event?.error) {
                                props.formik.setFieldError("card", event?.error.message)
                            } else {
                                props.formik.setFieldValue("card", "valid")
                            }
                        }}
                    />
                </div>
                <ErrorFieldMessage name={"card"} />
            </div>
        </div>
    )
}

CardInputField.propTypes = {
    formik: PropTypes.any,
}

export default connect(CardInputField)
