import React, { Suspense } from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Loader from "../app/components/Loader"
import StripeWrapper from "./StripeWrapper"
import { pathConfig } from "./path_config"

const RouterManager = () => {
    const routes = (
        <Router>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return <Redirect to="/jackets" />
                        }}
                    />
                    {pathConfig.map((entry) => {
                        return (
                            <Route
                                key={entry.key}
                                path={entry.path}
                                exact
                                render={() => {
                                    return (
                                        <StripeWrapper>
                                            <entry.component />
                                        </StripeWrapper>
                                    )
                                }}
                            />
                        )
                    })}
                </Switch>
            </Suspense>
        </Router>
    )

    return routes
}

export default RouterManager
