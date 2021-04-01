import React from "react"
import Content from "app/components/Content"

import styles from "./details.module.css"
const { infoText, infoImage, detailHeader, detailWrapper } = styles

function _information(title, paragraph) {
    return (
        <div className="column has-text-centered">
            <div className={`${detailWrapper}`}>
                <p className={detailHeader}>{title}</p>
                <p className={infoText}>{paragraph}</p>
            </div>
        </div>
    )
}

const Information = () => {
    return (
        <Content>
            <div className={`columns is-centered hero-body ${infoImage}`}>
                <div className={`column has-text-centered ${detailWrapper}`}>
                    {_information(
                        "About Us",
                        `We Wear Where is an online CDO-based thrift shop for trendy windbreakers and dress. It is also
one of the most affordable CDO online thrift stores in its category. All products are
meticulously selected and is ready to use.`,
                    )}
                    {_information("Store Location", `Zone 8 Bulu 9000 Cagayan de Oro City, Philippines.`)}
                </div>
            </div>
        </Content>
    )
}
export default Information
