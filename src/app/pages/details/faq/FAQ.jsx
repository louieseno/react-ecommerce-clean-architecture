import React, { Fragment } from "react"
import Content from "app/components/Content"
import Loader from "app/components/Loader"

import styles from "../details.module.css"
import { controller } from "./controller"
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
    const { data, loading, navigateLink } = controller()
    return (
        <Content>
            <Fragment>
                {loading && <Loader />}{" "}
                {!loading && (
                    <div className={`columns is-centered hero-body ${infoImage}`}>
                        {data.map((faqCategory) => {
                            return _categoryBlock(faqCategory, navigateLink)
                        })}
                    </div>
                )}
            </Fragment>
        </Content>
    )
}
export default FAQ
