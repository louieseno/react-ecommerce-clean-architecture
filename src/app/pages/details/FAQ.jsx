import React, { useState } from "react"
import Content from "app/components/Content"
import styles from "./details.module.css"
const { infoImage } = styles

function FAQContent() {
    let dropdownStates = { order1: false, order2: false }
    const [dropdownActive, setDropdownActive] = useState(dropdownStates)

    const handleClick = (stateKey) => {
        const previous = { ...dropdownActive }
        if (!dropdownActive[stateKey]) {
            previous[stateKey] = true
        } else {
            previous[stateKey] = false
        }
        setDropdownActive(previous)
    }

    const questionDropdown = (question, answer, stateKey) => {
        return (
            <div className={`dropdown ${dropdownActive[stateKey] ? "is-active" : ""}`}>
                <div className="dropdown-trigger">
                    <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu3"
                        onClick={() => handleClick(stateKey)}
                    >
                        <span>{question}</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">
                        <p className="dropdown-item">{answer}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`columns is-centered hero-body ${infoImage}`}>
            <div className={`column`}>
                Order Status and / or Change
                {questionDropdown(
                    "How do I check the status of my order?",
                    "You can also check the status of your order by logging into your We Wear Where account and reviewing your order history section by clicking ‘Account’ > ‘View my orders’. If you do not have a We Wear Where account or you are not logged on, please log into your We Wear Where membership account.",
                    "order1",
                )}
                {questionDropdown(
                    "How can I check my order history?",
                    "You can check the order history by logging into your We Wear Where account and reviewing the order history section by clicking ‘Account’ > ‘View my orders’. If you do not see your order history in your account, please get in touch with our friendly Customer Support Team using any available channels below.",
                    "order2",
                )}
            </div>

            <div className={`column`}>
                Order Cancellation
                {questionDropdown(
                    "How do I check the status of my order?",
                    "You can also check the status of your order by logging into your We Wear Where account and reviewing your order history section by clicking ‘Account’ > ‘View my orders’. If you do not have a We Wear Where account or you are not logged on, please log into your We Wear Where membership account.",
                    "order1",
                )}
                {questionDropdown(
                    "How can I check my order history?",
                    "You can check the order history by logging into your We Wear Where account and reviewing the order history section by clicking ‘Account’ > ‘View my orders’. If you do not see your order history in your account, please get in touch with our friendly Customer Support Team using any available channels below.",
                    "order2",
                )}
            </div>

            <div className={`column is-half`}>
                Payment
                {questionDropdown(
                    "How do I check the status of my order?",
                    "You can also check the status of your order by logging into your We Wear Where account and reviewing your order history section by clicking ‘Account’ > ‘View my orders’. If you do not have a We Wear Where account or you are not logged on, please log into your We Wear Where membership account.",
                    "order1",
                )}
                {questionDropdown(
                    "How can I check my order history?",
                    "You can check the order history by logging into your We Wear Where account and reviewing the order history section by clicking ‘Account’ > ‘View my orders’. If you do not see your order history in your account, please get in touch with our friendly Customer Support Team using any available channels below.",
                    "order2",
                )}
            </div>
        </div>
    )
}
const FAQ = () => {
    var ContentDetails = Content(FAQContent, true, true)

    return <>{ContentDetails}</>
}
export default FAQ
