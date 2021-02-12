import React from "react"
import Content from "app/components/Content"
import styles from "./details.module.css"
const { detailHeader, detailWrapper, infoImage } = styles
function ContactContent() {
    return (
        <div className={`columns is-centered hero-body ${infoImage}`}>
            <div className={`column is-two-fifths has-text-centered  ${detailWrapper}`}>
                <p className={detailHeader}>{"Contact Us By Email"}</p>

                <div className="field">
                    <p className="control">
                        <input className="input is-primary is-normal" type="email" placeholder="Email" />
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <input className="input is-primary is-normal" type="text" placeholder="Phone Number" />
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <textarea className="textarea is-primary" placeholder="Dear We Wear Where..."></textarea>
                    </p>
                    <p>
                        {
                            "*Please kindly understand that it could take time to respond to your inquiry depending on the contents."
                        }
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-primary is-normal is-fullwidth">Submit</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
const Contact = () => {
    var ContentDetails = Content(ContactContent, true, true)

    return <>{ContentDetails}</>
}
export default Contact
