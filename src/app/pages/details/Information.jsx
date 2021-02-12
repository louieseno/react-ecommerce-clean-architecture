import React from "react"
import Content from "app/components/Content"

import styles from "./details.module.css"
const { infoText, infoImage, detailHeader, detailWrapper } = styles

const information = (title, paragraph) => {
    return (
        <div className="column is-half is-flex hero-body">
            <div className={`has-text-centered ${detailWrapper}`}>
                <p className={detailHeader}>{title}</p>
                <p className={infoText}>{paragraph}</p>
            </div>
        </div>
    )
}
function InformationContent() {
    return (
        <div className={`columns is-centered ${infoImage}`}>
            {information(
                "About Us",
                `We Wear Where is an online CDO-based thrift shop for trendy windbreakers and dress. It is also
         one of the most affordable CDO online thrift stores in its category. All products are
         meticulously selected and is ready to use.`,
            )}

            {information("Store Location", `Zone 8 Bulu 9000 Cagayan de Oro City, Philippines.`)}
        </div>
    )
}
const Information = () => {
    var ContentDetails = Content(InformationContent, true, true)

    return <>{ContentDetails}</>
}
export default Information
