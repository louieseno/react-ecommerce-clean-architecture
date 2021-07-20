import React from "react"
import Content from "app/components/Content"
import { controller } from "./controller"

import styles from "./checkout.module.css"
import { upperLetters } from "utils/string_cases"
const { columnWrapper, columnOverride, checkBoxWrapper, levelRightWrapper, imageCard } = styles

function _productList(order) {
    return (
        <div key={order.productId} className="level">
            {/* LEFT ITEMS */}
            <div className="level-left">
                <div className="level-item">
                    <label className="checkbox is-5">
                        <input type="checkbox" className={`${checkBoxWrapper}`} />
                        <img className={`image is-64x64 ${imageCard}`} src={order.imageUrl} alt={order.name} />
                        <span> {upperLetters(order.name)}</span>
                    </label>
                </div>
            </div>
            {/* RIGHT ITEMS */}
            <div className="level-right">
                <div className={`columns  ${levelRightWrapper}`}>
                    <p className="column">{order.rate}</p>
                    <p className="column">{order.qty}</p>
                    <p className="column">{order.price}</p>
                    <p className="column">Action</p>
                </div>
            </div>
        </div>
    )
}
export default function Checkout() {
    const { data } = controller()
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
                        <div className="level-right">
                            <div className={`columns ${levelRightWrapper}`}>
                                <p className="column">Unit Price</p>
                                <p className="column">Quantity</p>
                                <p className="column">Total Price</p>
                                <p className="column">Action</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ITEM LIST */}
            <div className={`columns ${columnWrapper}`}>
                <div className={`${columnOverride} column box is-full`}>
                    {data.map((order) => {
                        return _productList(order)
                    })}
                </div>
            </div>
        </Content>
    )
}
