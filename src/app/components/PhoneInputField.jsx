import React from "react"
import PropTypes from "prop-types"
import { ErrorMessage } from "formik"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { connect } from "formik"
const PhoneInputField = (props) => {
    return (
        <div className="field">
            <div className="control">
                <label className="label">Phone</label>
                <PhoneInput
                    name="phone"
                    className="input"
                    country={"ph"}
                    enableSearch={true}
                    placeholder={"Enter Phone"}
                    onChange={(value) => props.formik.setFieldValue("phone", value)}
                    inputStyle={{ width: "100%" }}
                />
                <ErrorMessage name={"phone"} render={(msg) => <span className="help is-danger">{msg}</span>} />
            </div>
        </div>
    )
}

PhoneInputField.propTypes = {
    formik: PropTypes.any,
}

export default connect(PhoneInputField)
