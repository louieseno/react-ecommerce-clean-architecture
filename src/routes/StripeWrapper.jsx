import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PropTypes from "prop-types"
const stripe = require("app/config/stripe")
const stripePromise = loadStripe(stripe.pk)

// To best leverage Stripe’s advanced fraud functionality,
// include this script on every page, not just the checkout page.
// This allows Stripe to detect anomalous behavior that may be indicative
// of fraud as customers browse your website.
function StripeWrapper({ children }) {
    return <Elements stripe={stripePromise}>{children}</Elements>
}
StripeWrapper.propTypes = {
    children: PropTypes.node,
}
export default StripeWrapper
