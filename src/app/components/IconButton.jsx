import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./components.modules.css"

const IconButton = ({ iconData, sizeData, callBack }) => {
    return (
        <span className="icon icon-button" onClick={() => callBack()}>
            <FontAwesomeIcon icon={iconData} size={sizeData} />
        </span>
    )
}

IconButton.propTypes = {
    iconData: PropTypes.any,
    sizeData: PropTypes.string,
    callBack: PropTypes.func,
}

IconButton.defaultProps = {
    iconData: null,
    sizeData: "",
    callBack: null,
}

export default IconButton
