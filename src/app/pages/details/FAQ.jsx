import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Content from "app/components/Content"
import { fetchFAQ } from "app/redux/faq/faq.actions"
import styles from "./details.module.css"
const { infoImage, detailSubHeader, detailsWrapper, faqLinkBlock } = styles

import Loader from "app/components/Loader"
function FAQContent() {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(fetchFAQ())
    }, [dispatch])

    const data = useSelector((state) => state.faq.data)
    const loading = useSelector((state) => state.faq.loading)
    function _navigateLink(category, key) {
        history.push("/faq/details", {
            category: category.key,
            answer: category.answers[key],
            question: category.questions[key],
        })
    }
    const categoryBlock = (category) => {
        return (
            <div key={category.key} className={`column ${faqLinkBlock}`}>
                <div className={detailsWrapper}>
                    <p className={detailSubHeader}>{category?.key}</p>
                    <ul>
                        {Object.keys(category.questions).map(function (key) {
                            return (
                                <li key={key} onClick={() => _navigateLink(category, key)}>
                                    {category.questions[key]}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <Fragment>
            {loading && <Loader />}{" "}
            {!loading && (
                <div className={`columns is-centered hero-body ${infoImage}`}>
                    {data.map((faqCategory) => {
                        return categoryBlock(faqCategory)
                    })}
                </div>
            )}
        </Fragment>
    )
}
const FAQ = () => {
    var ContentDetails = Content(FAQContent, true, true)

    return <>{ContentDetails}</>
}
export default FAQ
