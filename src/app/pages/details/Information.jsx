import React from "react"
import Content from "app/components/Content"
import styles from "./details.module.css"
const { infoWrapper, infoBg } = styles
function InformationContent() {
    return (
        <div className={`is-centered ${infoBg}`}>
            <div>
                <div className="has-text-centered">
                    <p className={infoWrapper}>
                        {`We Wear Where is an online CDO-based thrift shop for trendy windbreakers and dress. It is also
                        one of the most affordable CDO online thrift stores in its category. All products are
                        meticulously selected and is ready to use!`}
                    </p>
                </div>
            </div>
        </div>
    )
}
const Information = () => {
    var ContentDetails = Content(InformationContent, true, true)

    return <>{ContentDetails}</>
}
export default Information
