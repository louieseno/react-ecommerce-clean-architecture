import { useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElement, StripeElements } from "@stripe/stripe-js"

export function controller() {
    const stripe = useStripe()
    const element = useElements() as StripeElements
    async function onSubmit(values: any) {
        const billingDetails = {
            name: values.name,
            email: values.email,
            phone: `+${values.phone}`,
        }
        // console.log(billingDetails)
        const cardElement: StripeCardElement = element.getElement("card") as StripeCardElement
        const paymentMethodReq = await stripe?.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: billingDetails,
        })
        if (paymentMethodReq?.error) {
            console.log(paymentMethodReq.error)
        }
    }

    return {
        onSubmit,
    }
}
