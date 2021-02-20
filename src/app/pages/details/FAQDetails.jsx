import React from "react"
import { useLocation } from "react-router-dom"
import Content from "app/components/Content"
import styles from "./details.module.css"
const { detailSubHeader, detailWrapper, infoImage, faqNavigatorBlock } = styles
function FAQDetailsContent() {
    const location = useLocation()
    const question = location.state.question
    const answer = location.state.answer
    const category = location.state.category
    return (
        <div className={`${infoImage}  hero-body`}>
            <div className={faqNavigatorBlock}>
                <a href="/faq">{`${category} > `}</a>
                <a href="">{question}</a>
            </div>
            <div className="columns is-centered">
                <div className={`column is-half has-text-centered ${detailWrapper}`}>
                    <p className={detailSubHeader}>{question}</p>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}
const FAQDetails = () => {
    var ContentDetails = Content(FAQDetailsContent, true, true)

    return <>{ContentDetails}</>
}
export default FAQDetails
