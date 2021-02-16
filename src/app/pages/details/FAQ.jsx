import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Content from "app/components/Content"
import { fetchFAQ } from "app/redux/faq/faq.actions"
import styles from "./details.module.css"
const { infoImage, detailSubHeader, detailWrapper, faqLinkBlock } = styles

import Loader from "app/components/Loader"
function FAQContent() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFAQ())
    }, [dispatch])

    const data = useSelector((state) => state.faq.data)
    const loading = useSelector((state) => state.faq.loading)

    const categoryBlock = (category) => {
        return (
            <div key={category.key} className={`column ${detailWrapper} ${faqLinkBlock}`}>
                <p className={detailSubHeader}>{category?.key}</p>
                <ul>
                    {Object.keys(category.questions).map(function (key) {
                        return (
                            <li key={key}>
                                <a href="">{category.questions[key]}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    return (
        <Fragment>
            {loading && <Loader />}{" "}
            {!loading && (
                <div className={`columns is-multiline  hero-body ${infoImage}`}>
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
