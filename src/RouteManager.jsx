import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const LoginPage = lazy(() => import("./app/pages/authentication/Login"))
const RegisterPage = lazy(() => import("./app/pages/authentication/Register"))
const MainPage = lazy(() => import("./app/pages/product-catalog/Index"))

import Loader from "./app/components/Loader"

const RouterManager = () => {
    const routes = (
        <Router>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/auth/v1/login" component={LoginPage} />
                    <Route exact path="/auth/v1/register" component={RegisterPage} />
                </Switch>
            </Suspense>
        </Router>
    )

    return routes
}

export default RouterManager
