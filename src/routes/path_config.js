import { lazy } from "react"
const InformationPage = lazy(() => import("app/pages/details/information/Information"))
const ContactPage = lazy(() => import("app/pages/details/contact/Contact"))
const FAQPage = lazy(() => import("app/pages/details/faq/FAQ"))
const FAQDetailsPage = lazy(() => import("app/pages/details/faq/FAQDetails"))
const ReturnPolicyPage = lazy(() => import("app/pages/details/return_policy/ReturnPolicy"))
const LoginPage = lazy(() => import("app/pages/authentication/Login"))
const RegisterPage = lazy(() => import("app/pages/authentication/Register"))
const ProductsPage = lazy(() => import("app/pages/product-catalog/products/Products"))
const ProductDetailPage = lazy(() => import("app/pages/product-catalog/product_details/ProductDetail"))
const CartPage = lazy(() => import("app/pages/cart/Cart"))
const Checkout = lazy(() => import("app/pages/checkout/Checkout"))

export const pathConfig = [
    {
        key: "homePageJacket",
        component: ProductsPage,
        path: "/jackets",
    },
    {
        key: "homePageDress",
        component: ProductsPage,
        path: "/dresses",
    },
    {
        key: "productDetailPage",
        component: ProductDetailPage,
        path: "/products/:id",
    },
    {
        key: "faqDetailsPage",
        component: FAQDetailsPage,
        path: "/faq/details",
    },
    {
        key: "faqPage",
        component: FAQPage,
        path: "/faq",
    },
    {
        key: "loginPage",
        component: LoginPage,
        path: "/auth/login",
    },
    {
        key: "registerPage",
        component: RegisterPage,
        path: "/auth/register",
    },
    {
        key: "informationPage",
        component: InformationPage,
        path: "/information",
    },
    {
        key: "contactPage",
        component: ContactPage,
        path: "/contact",
    },
    {
        key: "returnPolicyPage",
        component: ReturnPolicyPage,
        path: "/return-policy",
    },
    {
        key: "cartPage",
        component: CartPage,
        path: "/cart",
    },
    {
        key: "checkoutPage",
        component: Checkout,
        path: "/checkout",
    },
]
