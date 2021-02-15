import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Content from "app/components/Content"
import { fetchFAQ } from "app/redux/faq/faq.actions"
import styles from "./details.module.css"
const { infoImage, detailSubHeader, detailWrapper, faqLinkBlock } = styles

function FAQContent() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFAQ())
    }, [dispatch])

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
        </div>
    )
}
const FAQ = () => {
    var ContentDetails = Content(FAQContent, true, true)

    return <>{ContentDetails}</>
}
export default FAQ
