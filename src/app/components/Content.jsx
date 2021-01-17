import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./components.modules.css"

var Content = function (WrappedComponent) {
    return (
        <div className="mainContent">
            <Header></Header>
            <WrappedComponent></WrappedComponent>
            <Footer></Footer>
        </div>
    )
}

export default Content
