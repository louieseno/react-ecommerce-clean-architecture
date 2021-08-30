import React from "react"
import PropTypes from "prop-types"
import { ErrorMessage } from "formik"
export function ErrorFieldMessage({ name }) {
    return <ErrorMessage name={name} render={(msg) => <span className="help is-danger">{msg}</span>} />
}

ErrorFieldMessage.propTypes = {
    name: PropTypes.string,
}
