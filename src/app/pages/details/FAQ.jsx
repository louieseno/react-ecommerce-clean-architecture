import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Content from "app/components/Content"
import Loader from "app/components/Loader"
import { fetchFAQ } from "app/redux/faq/faq.actions"
import styles from "./details.module.css"
const { infoImage, detailSubHeader, detailsWrapper, faqLinkBlock } = styles

function _categoryBlock(category, onNavigate) {
    return (
        <div key={category.key} className={`column ${faqLinkBlock}`}>
            <div className={detailsWrapper}>
                <p className={detailSubHeader}>{category?.key}</p>
                <ul>
                    {Object.keys(category.questions).map(function (key) {
                        return (
                            <li key={key} onClick={() => onNavigate(category, key)}>
                                {category.questions[key]}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

function FAQ() {
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

    return (
        <Content>
            <Fragment>
                {loading && <Loader />}{" "}
                {!loading && (
                    <div className={`columns is-centered hero-body ${infoImage}`}>
                        {data.map((faqCategory) => {
                            return _categoryBlock(faqCategory, _navigateLink)
                        })}
                    </div>
                )}
            </Fragment>
        </Content>
    )
}
export default FAQ
