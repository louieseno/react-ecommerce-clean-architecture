import React from "react"
import PropTypes from "prop-types"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { connect } from "formik"
import { ErrorFieldMessage } from "./ErrorFieldMessage"
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
                <ErrorFieldMessage name={"phone"} />
            </div>
        </div>
    )
}

PhoneInputField.propTypes = {
    formik: PropTypes.any,
}

export default connect(PhoneInputField)
