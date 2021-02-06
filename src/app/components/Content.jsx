import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import style from "./components.module.css"
const { mainContent } = style
var Content = function (WrappedComponent, includeHeader, includeFooter) {
    return (
        <div className={mainContent}>
            {includeHeader && <Header></Header>}
            <WrappedComponent></WrappedComponent>
            {includeFooter && <Footer></Footer>}
        </div>
    )
}

export default Content
