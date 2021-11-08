import React, { Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Loader from "../app/components/Loader"
import StripeWrapper from "./StripeWrapper"
import { pathConfig } from "./path_config"

const RouterManager = () => {
    const routes = (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route exact path="/" element={<Navigate replace to="/jackets" />} />
                    {pathConfig.map((entry) => {
                        return (
                            <Route
                                key={entry.key}
                                path={entry.path}
                                element={
                                    <StripeWrapper>
                                        <entry.component />
                                    </StripeWrapper>
                                }
                            />
                        )
                    })}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )

    return routes
}

export default RouterManager
