import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import MainPage from "./app/pages/product-catalog/Index"
import AuthenticationPage from "./app/pages/authentication/Login"

const RouterManager = () => {
    const routes = (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route exact path="/auth/v1/login">
                    <AuthenticationPage />
                </Route>
            </Switch>
        </Router>
    )

    return routes
}

export default RouterManager
