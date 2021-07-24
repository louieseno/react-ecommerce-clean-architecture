import React, { Fragment } from "react"
import Content from "app/components/Content"
import { controller } from "./controller"

import styles from "./checkout.module.css"
import { upperLetters } from "utils/string_cases"
import { formatMoney } from "utils/format_money"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faEllipsisH, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Quantity } from "app/utils/type_quantity"
const {
    columnWrapper,
    columnOverride,
    contentWrapper,
    imageCard,
    contentLeftWrapper,
    quantityButton,
    quantityInput,
    quantityWrapper,
    headerRightWrapper,
    contentRightWrapper,
    emptyCard,
    modalCard,
    productList,
    productMobile,
} = styles

function _quantity(order, updateQuantity) {
    return (
        <Fragment>
            <button className={quantityButton} onClick={() => updateQuantity(order, Quantity.Minus)}>
                -
            </button>
            <input
                className={quantityInput}
                type="number"
                value={order.qty}
                onChange={(event) => updateQuantity(order, Quantity.Input, event)}
            ></input>
            <button className={quantityButton} onClick={() => updateQuantity(order, Quantity.Add)}>
                +
            </button>
        </Fragment>
    )
}
function _productModal(order, updateQuantity, onShowMobileOrder) {
    return (
        <div className={`modal ${order ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className={`${modalCard} modal-card`}>
                <header className="modal-card-head">
                    <p className="modal-card-title">{upperLetters(order.name)}</p>
                </header>
                <section className="modal-card-body">
                    <p>Unit Price: {formatMoney.format(order.rate)}</p>
                    <p>Total Price: {formatMoney.format(order.price)}</p>

                    <p className="has-text-centered">
                        Quantity
                        <br />
                        {_quantity(order, updateQuantity)}
                    </p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-primary" onClick={() => onShowMobileOrder(null)}>
                        Close
                    </button>
                </footer>
            </div>
        </div>
    )
}
function _productList(order, updateQuantity, deleteOrder, productIds, onItemCheck, onShowMobileOrder) {
    return (
        <Fragment key={order.productId}>
            {/* Large Devices */}
            <div className={`level is-mobile ${productList}`}>
                {/* LEFT ITEMS */}
                <div className={`level-left ${contentLeftWrapper}`}>
                    <div className="level-item">
                        <label className="checkbox is-5">
                            <input
                                type="checkbox"
                                checked={productIds.includes(order.productId)}
                                style={{ margin: 10 }}
                                onChange={(e) => onItemCheck(e, order.productId)}
                            />
                            <img className={`image is-64x64 ${imageCard}`} src={order.imageUrl} alt={order.name} />
                            <span>{upperLetters(order.name)}</span>
                        </label>
                    </div>
                </div>
                {/* RIGHT ITEMS */}
                <div className={`level-right ${contentRightWrapper}`}>
                    <span className="level-item">{formatMoney.format(order.rate)}</span>
                    <div className={`level-item ${quantityWrapper}`}>{_quantity(order, updateQuantity)}</div>
                    <span className="level-item" style={{ color: "red" }}>
                        {formatMoney.format(order.price)}
                    </span>
                    {productIds.includes(order.productId) && (
                        <button
                            className="level-item button is-small is-danger"
                            style={{ flexGrow: 0 }}
                            onClick={() => deleteOrder(order)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>

            {/* Small Devices */}
            <div className={`level is-mobile ${productMobile}`}>
                <div className={`level-left ${contentLeftWrapper}`}>
                    <div className="level-item">
                        <label className="checkbox is-5">
                            <input
                                type="checkbox"
                                checked={productIds.includes(order.productId)}
                                style={{ margin: 10 }}
                                onChange={(e) => onItemCheck(e, order.productId)}
                            />
                            <img className={`image is-64x64 ${imageCard}`} src={order.imageUrl} alt={order.name} />
                        </label>
                    </div>
                </div>

                <div className={`level-right ${contentRightWrapper}`}>
                    <button onClick={() => onShowMobileOrder(order)}>
                        <FontAwesomeIcon icon={faEllipsisH} size={"lg"} color="#0ED6A0" />
                    </button>

                    {productIds.includes(order.productId) && (
                        <button
                            className="level-item button is-small is-danger"
                            style={{ marginLeft: 5, flexGrow: 0 }}
                            onClick={() => deleteOrder(order)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </Fragment>
    )
}
function _productTable(checkoutController) {
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
                                    <input
                                        type="checkbox"
                                        checked={checkoutController.checkedAll}
                                        style={{ margin: 10 }}
                                        onChange={() => checkoutController.onCheckAll()}
                                    />
                                    <strong>Product</strong>
                                </label>
                                {checkoutController.checkedAll && (
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        size={"lg"}
                                        style={{ marginLeft: 20 }}
                                        color="red"
                                        onClick={() => checkoutController.deleteAllOrders()}
                                    />
                                )}
                            </div>
                        </div>
                        {/* RIGHT ITEMS */}
                        <div className={`level-right ${headerRightWrapper}`}>
                            <strong className="level-item">Unit Price</strong>
                            <strong className="level-item">Quantity</strong>
                            <strong className="level-item">Total Price</strong>
                            {checkoutController.productIds.length > 0 && (
                                <strong className="level-item" style={{ flexGrow: 0 }}>
                                    Action
                                </strong>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ITEM LIST */}
            <div className={`columns ${contentWrapper}`}>
                <div className={` column box is-full`}>
                    {checkoutController.data.map((order) => {
                        return _productList(
                            order,
                            checkoutController.updateQuantity,
                            checkoutController.deleteOrder,
                            checkoutController.productIds,
                            checkoutController.onItemCheck,
                            checkoutController.onShowMobileOrder,
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}
function _emptyCart(checkoutController) {
    return (
        <div className="columns is-centered hero-body">
            <div className={`column has-text-centered ${emptyCard}`}>
                <FontAwesomeIcon icon={faCartPlus} size={"4x"} />
                <p className="is-size-6">Your shopping cart is empty.</p>
                <button className="button is-primary" onClick={() => checkoutController.goToProducts()}>
                    Go Shopping Now
                </button>
            </div>
        </div>
    )
}

export default function Checkout() {
    const checkoutController = controller()
    return (
        <Content>
            {checkoutController.data.length > 0 && (
                <Fragment>
                    {checkoutController.mobileOrder &&
                        _productModal(
                            checkoutController.mobileOrder,
                            checkoutController.updateQuantity,
                            checkoutController.onShowMobileOrder,
                        )}
                    {_productTable(checkoutController)}
                </Fragment>
            )}
            {checkoutController.data.length <= 0 && _emptyCart(checkoutController)}
        </Content>
    )
}
