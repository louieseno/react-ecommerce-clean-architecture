import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import style from "./components.module.css"
const { contentWrapper, mainContent } = style
var Content = function (WrappedComponent, includeHeader, includeFooter) {
    return (
        <div className={`${contentWrapper}`}>
            {includeHeader && <Header></Header>}
            <WrappedComponent className={`${mainContent}`}></WrappedComponent>
            {includeFooter && <Footer></Footer>}
        </div>
    )
}
export default Content
