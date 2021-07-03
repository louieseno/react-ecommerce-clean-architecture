import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const InformationPage = lazy(() => import("./app/pages/details/information/Information"))
const ContactPage = lazy(() => import("./app/pages/details/contact/Contact"))
const FAQPage = lazy(() => import("./app/pages/details/faq/FAQ"))
const FAQDetails = lazy(() => import("./app/pages/details/faq/FAQDetails"))
const ReturnPolicy = lazy(() => import("./app/pages/details/return_policy/ReturnPolicy"))
const LoginPage = lazy(() => import("./app/pages/authentication/Login"))
const RegisterPage = lazy(() => import("./app/pages/authentication/Register"))
const ProductsPage = lazy(() => import("./app/pages/product-catalog/products/Products"))
const ProductDetail = lazy(() => import("./app/pages/product-catalog/product_details/ProductDetail"))

import Loader from "./app/components/Loader"

const RouterManager = () => {
    const routes = (
        <Router>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={ProductsPage} />
                    <Route exact path="/products/:id" component={ProductDetail} />
                    <Route exact path="/details" component={FAQDetails} />
                    <Route exact path="/auth/v1/login" component={LoginPage} />
                    <Route exact path="/auth/v1/register" component={RegisterPage} />
                    <Route exact path="/information" component={InformationPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/faq" component={FAQPage} />
                    <Route exact path="/faq/details" component={FAQDetails} />
                    <Route exact path="/return-policy" component={ReturnPolicy} />
                </Switch>
            </Suspense>
        </Router>
    )

    return routes
}

export default RouterManager
