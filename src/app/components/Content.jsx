import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import style from "./components.module.css"
import PropTypes from "prop-types"
import { contoller, itemCounterContext } from "./controller"

const { contentWrapper, mainContent } = style

function Content({ children, includeHeader = true, includeFooter = true }) {
    const { totalItems } = contoller()
    return (
        <itemCounterContext.Provider value={totalItems}>
            <div className={`${contentWrapper}`}>
                {includeHeader && <Header></Header>}
                <div className={mainContent}>{children}</div>
                {includeFooter && <Footer></Footer>}
            </div>
        </itemCounterContext.Provider>
    )
}

Content.propTypes = {
    children: PropTypes.any,
    includeHeader: PropTypes.bool,
    includeFooter: PropTypes.bool,
}
export default Content
