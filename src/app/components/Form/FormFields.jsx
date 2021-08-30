import React from "react"
import PropTypes from "prop-types"
import { Field } from "formik"
import { ErrorFieldMessage } from "./ErrorFieldMessage"
export function FormField({ label, type, name, placeholder }) {
    return (
        <div className="field">
            <div className="control">
                <label className="label">{label}</label>
                <Field className="input" id={name} type={type} name={name} placeholder={placeholder} />
                <ErrorFieldMessage name={name} />
            </div>
        </div>
    )
}

FormField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
}
