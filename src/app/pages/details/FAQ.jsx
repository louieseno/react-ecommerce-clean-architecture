import React from "react"
import Content from "app/components/Content"

import styles from "./details.module.css"
const { infoImage, detailSubHeader, detailWrapper, faqLinkBlock } = styles

function FAQContent() {
    return (
        <div className={`columns is-multiline  hero-body ${infoImage}`}>
            <div className={`column ${detailWrapper} ${faqLinkBlock}`}>
                <p className={detailSubHeader}> Order Status and / or Change</p>
                <ul>
                    <li>
                        <a href="">{"How do I check the status of my order?"}</a>
                    </li>
                    <li>
                        <a href="">{"How can I check my order history?"}</a>
                    </li>
                    <li>
                        <a href="">{"Can I change my payment method once I placed my order?"}</a>
                    </li>
                    <li>
                        <a href="">
                            {
                                "What happens if I notice that my personal details are incorrect after I have placed my order?"
                            }
                        </a>
                    </li>
                    <li>
                        <a href="">{"Can I still change my order once it has been confirmed?"}</a>
                    </li>
                </ul>
            </div>

            <div className={`column`}>Order Cancellation</div>

            <div className={`column is-half`}>Payment</div>
        </div>
    )
}
const FAQ = () => {
    var ContentDetails = Content(FAQContent, true, true)

    return <>{ContentDetails}</>
}
export default FAQ
