import React, { Fragment } from "react"
import Content from "app/components/Content"
import { controller } from "./controller"

import styles from "./checkout.module.css"
import { upperLetters } from "utils/string_cases"
import { formatMoney } from "utils/format_money"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
const {
    columnWrapper,
    columnOverride,
    checkBoxWrapper,
    contentWrapper,
    imageCard,
    contentLeftWrapper,
    quantityButton,
    quantityInput,
    quantityWrapper,
    headerRightWrapper,
    contentRightWrapper,
    emptyCard,
} = styles

function _productList(order, deleteOrder) {
    return (
        <div className="level is-mobile">
            {/* LEFT ITEMS */}
            <div className={`level-left ${contentLeftWrapper}`}>
                <div className="level-item">
                    <label className="checkbox is-5">
                        <input type="checkbox" style={{ margin: 10 }} />
                        <img className={`image is-64x64 ${imageCard}`} src={order.imageUrl} alt={order.name} />
                        <span>{upperLetters(order.name)}</span>
                    </label>
                </div>
            </div>
            {/* RIGHT ITEMS */}
            <div className={`level-right ${contentRightWrapper}`}>
                <span className="level-item">{formatMoney.format(order.rate)}</span>
                <div className={`level-item ${quantityWrapper}`}>
                    <button className={quantityButton}>-</button>
                    <input className={quantityInput} type="number" value={order.qty}></input>
                    <button className={quantityButton}>+</button>
                </div>
                <span className="level-item" style={{ color: "red" }}>
                    {formatMoney.format(order.price)}
                </span>
                <button
                    className="level-item button is-small is-danger"
                    style={{ flexGrow: 0.3 }}
                    onClick={() => deleteOrder(order)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

function _productTable(data, deleteOrder) {
    return (
        <Fragment>
            {/* HEADER */}
            <div className={`columns ${columnWrapper}`}>
                <div className={`column box is-full ${columnOverride}`}>
                    <div className="level is-mobile">
                        {/* LEFT ITEMS */}
                        <div className="level-left">
                            <div className="level-item">
                                <label className="checkbox is-5">
                                    <input type="checkbox" className={`${checkBoxWrapper}`} />
                                    <strong>Product</strong>
                                </label>
                            </div>
                        </div>
                        {/* RIGHT ITEMS */}
                        <div className={`level-right ${headerRightWrapper}`}>
                            <strong className="level-item">Unit Price</strong>
                            <strong className="level-item">Quantity</strong>
                            <strong className="level-item">Total Price</strong>
                            <strong className="level-item">Action</strong>
                        </div>
                    </div>
                </div>
            </div>
            {/* ITEM LIST */}
            <div className={`columns ${contentWrapper}`}>
                <div className={` column box is-full`}>
                    {data.map((order) => {
                        return _productList(order, deleteOrder)
                    })}
                </div>
            </div>
        </Fragment>
    )
}

function _emptyCart(goToProducts) {
    return (
        <div className="columns is-centered hero-body">
            <div className={`column has-text-centered ${emptyCard}`}>
                <FontAwesomeIcon icon={faCartPlus} size={"4x"} />
                <p className="is-size-6">Your shopping cart is empty.</p>
                <button className="button is-primary" onClick={() => goToProducts()}>
                    Go Shopping Now
                </button>
            </div>
        </div>
    )
}

export default function Checkout() {
    const { data, deleteOrder, goToProducts } = controller()
    return (
        <Content>
            {data.length > 0 && _productTable(data, deleteOrder)}
            {data.length <= 0 && _emptyCart(goToProducts)}
        </Content>
    )
}
