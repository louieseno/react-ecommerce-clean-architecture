import React from "react"
import PropTypes from "prop-types"
import { Field, ErrorMessage } from "formik"
export function FormField({ label, type, name, placeholder }) {
    return (
        <div className="field">
            <div className="control">
                <label className="label">{label}</label>
                <Field className="input" type={type} name={name} placeholder={placeholder} />
                <ErrorMessage name={name} render={(msg) => <span className="help is-danger">{msg}</span>} />
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
