import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./components.module.css"
const { iconButton, iconBadge } = style

const IconButton = ({ iconData, iconName, itemTotal, sizeData, callBack }) => {
    return (
        <Fragment>
            <span className={`icon ${iconButton}`} onClick={() => callBack()}>
                <FontAwesomeIcon icon={iconData} size={sizeData} />
                {iconName === "cart" && <span className={`${iconBadge}`}>{itemTotal}</span>}
            </span>
        </Fragment>
    )
}

IconButton.propTypes = {
    iconData: PropTypes.any,
    iconName: PropTypes.string,
    itemTotal: PropTypes.number,
    sizeData: PropTypes.string,
    callBack: PropTypes.func,
}

IconButton.defaultProps = {
    iconData: null,
    iconName: "",
    itemTotal: 0,
    sizeData: "",
    callBack: null,
}

export default IconButton
