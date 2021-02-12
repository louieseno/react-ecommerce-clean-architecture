import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"
import style from "./components.module.css"
const { mainContent } = style
var Content = function (WrappedComponent, includeHeader, includeFooter) {
    return (
        <Fragment className={mainContent}>
            {includeHeader && <Header></Header>}
            <WrappedComponent></WrappedComponent>
            {includeFooter && <Footer></Footer>}
        </Fragment>
    )
}
export default Content
