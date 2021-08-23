import { lazy } from "react"
const InformationPage = lazy(() => import("app/pages/details/information/Information"))
const ContactPage = lazy(() => import("app/pages/details/contact/Contact"))
const FAQPage = lazy(() => import("app/pages/details/faq/FAQ"))
const FAQDetails = lazy(() => import("app/pages/details/faq/FAQDetails"))
const ReturnPolicy = lazy(() => import("app/pages/details/return_policy/ReturnPolicy"))
const LoginPage = lazy(() => import("app/pages/authentication/Login"))
const RegisterPage = lazy(() => import("app/pages/authentication/Register"))
const ProductsPage = lazy(() => import("app/pages/product-catalog/products/Products"))
const ProductDetail = lazy(() => import("app/pages/product-catalog/product_details/ProductDetail"))
const Checkout = lazy(() => import("app/pages/checkout/Checkout"))

export const pathConfig = [
    {
        key: "productPage",
        component: ProductsPage,
        path: ["/jackets", "/dresses", "/"],
    },
    {
        key: "productDetailPage",
        component: ProductDetail,
        path: ["/products/:id"],
    },
    {
        key: "faqDetailPage",
        component: FAQDetails,
        path: ["/details", "/faq/details"],
    },
    {
        key: "faqPage",
        component: FAQPage,
        path: ["/faq"],
    },
    {
        key: "loginPage",
        component: LoginPage,
        path: ["/auth/login"],
    },
    {
        key: "registerPage",
        component: RegisterPage,
        path: ["/auth/register"],
    },
    {
        key: "informationPage",
        component: InformationPage,
        path: ["/information"],
    },
    {
        key: "contactPage",
        component: ContactPage,
        path: ["/contact"],
    },
    {
        key: "returnPolicyPage",
        component: ReturnPolicy,
        path: ["/return-policy"],
    },
    {
        key: "checkoutPage",
        component: Checkout,
        path: ["/checkout"],
    },
]
