import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const AuthenticationPage = lazy(() => import("./app/pages/authentication/Login"))
const MainPage = lazy(() => import("./app/pages/product-catalog/Index"))

import Loader from "./app/components/Loader"

const RouterManager = () => {
    const routes = (
        <Router>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/auth/v1/login">
                        <AuthenticationPage />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )

    return routes
}

export default RouterManager
