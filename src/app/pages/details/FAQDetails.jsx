import React from "react"
import { useLocation } from "react-router-dom"
import Content from "app/components/Content"
import styles from "./details.module.css"
const { detailHeader, detailWrapper, infoImage } = styles
function FAQDetailsContent() {
    const location = useLocation()
    const question = location.state.question
    const answer = location.state.answer
    return (
        <div className={`columns is-centered ${infoImage}`}>
            <div className="column is-half is-flex hero-body">
                <div className={`has-text-centered ${detailWrapper}`}>
                    <p className={detailHeader}>{question}</p>
                    <p style={{ color: "white" }}>{answer}</p>
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
