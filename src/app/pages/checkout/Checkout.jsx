import React from "react"
import Content from "app/components/Content"
import { controller } from "./controller"

import styles from "./checkout.module.css"
import { upperLetters } from "utils/string_cases"
import { formatMoney } from "utils/format_money"
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
} = styles

function _productList(order, onDelete) {
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
                    onClick={() => onDelete(order)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
export default function Checkout() {
    const { data, deleteOrder } = controller()
    return (
        <Content>
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
        </Content>
    )
}
