import React, { Fragment } from "react"

import Content from "app/components/Content"
import Loader from "app/components/Loader"
import styles from "../details.module.css"
import { contoller } from "./controller"
const { detailHeader, detailWrapper, infoImage, policyLinkBlock } = styles

function _policyBlock(policy) {
    const policyObject = policy?.policy
    return (
        <div key={policy.key} className={policyLinkBlock}>
            <p className={detailHeader}>{policy.key}</p>
            <ul>
                {policyObject.map((obj) => {
                    return <li key={obj?.key}>{obj?.policy}</li>
                })}
            </ul>
        </div>
    )
}
const ReturnPolicy = () => {
    const { data, loading } = contoller()
    return (
        <Content>
            <Fragment>
                {loading && <Loader />}{" "}
                {!loading && (
                    <div className={`columns is-centered hero-body ${infoImage}`}>
                        <div className={`column is-two-fifths ${detailWrapper}`}>
                            {data.map((policy) => {
                                return _policyBlock(policy)
                            })}
                        </div>
                    </div>
                )}
            </Fragment>
        </Content>
    )
}
export default ReturnPolicy
