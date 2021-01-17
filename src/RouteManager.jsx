import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import MainPage from "./app/pages/main-page/Index"

const RouterManager = () => {
    const routes = (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    )

    return routes
}

export default RouterManager
