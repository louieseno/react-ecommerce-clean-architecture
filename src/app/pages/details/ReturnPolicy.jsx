import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReturnPolicy } from "app/redux/return-policy/policy.actions"
import Content from "app/components/Content"
import Loader from "app/components/Loader"
import styles from "./details.module.css"
const { detailHeader, detailWrapper, infoImage, policyLinkBlock } = styles

function ReturnPolicyContent() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchReturnPolicy())
    }, [dispatch])

    const data = useSelector((state) => state.policy.data)
    const loading = useSelector((state) => state.policy.loading)
    const policyBlock = (policy) => {
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
    return (
        <Fragment>
            {loading && <Loader />}{" "}
            {!loading && (
                <div className={`columns is-centered hero-body ${infoImage}`}>
                    <div className={`column is-two-fifths ${detailWrapper}`}>
                        {data.map((policy) => {
                            return policyBlock(policy)
                        })}
                    </div>
                </div>
            )}
        </Fragment>
    )
}
const ReturnPolicy = () => {
    var ContentDetails = Content(ReturnPolicyContent, true, true)

    return <>{ContentDetails}</>
}
export default ReturnPolicy
