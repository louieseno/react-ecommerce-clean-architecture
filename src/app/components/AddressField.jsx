import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { ErrorMessage } from "formik"
import { connect, Field } from "formik"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"

const dropdownStyle = {
    border: "1px solid #DBDBDB",
    borderRadius: 4,
    color: "#363636",
    padding: 10,
    marginBottom: 10,
    width: "100%",
}
const AddressField = (props) => {
    return (
        <div className="field">
            <div className="control">
                <label className="label">Address</label>
                <Fragment>
                    <CountryDropdown
                        style={dropdownStyle}
                        value={props.formik.values.country}
                        onChange={(val) => props.formik.setFieldValue("country", val)}
                    />
                    <ErrorMessage name={"country"} render={(msg) => <span className="help is-danger">{msg}</span>} />
                    <RegionDropdown
                        style={dropdownStyle}
                        country={props.formik.values.country}
                        value={props.formik.values.region}
                        onChange={(val) => props.formik.setFieldValue("region", val)}
                    />
                    <ErrorMessage name={"region"} render={(msg) => <span className="help is-danger">{msg}</span>} />
                    <Field
                        className="textarea is-small"
                        component={"textarea"}
                        name={"address"}
                        placeholder={"Street Name, Building, House Number, City"}
                    />
                    <ErrorMessage name={"address"} render={(msg) => <span className="help is-danger">{msg}</span>} />
                </Fragment>
            </div>
        </div>
    )
}

AddressField.propTypes = {
    formik: PropTypes.any,
}

export default connect(AddressField)
