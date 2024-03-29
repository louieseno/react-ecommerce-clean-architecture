// Package
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
// Components
import Loader from "app/components/Loader"
import Content from "app/components/Content"
// Style
import styles from "../product.module.css"
const {
    imageDetailCard,
    productDescription,
    productSize,
    productPrice,
    detailContent,
    quantity,
    quantityComponent,
    breadCrumbWrapper,
} = styles
// Utils
import { formatMoney } from "utils/format_money"
import { upperLetters } from "utils/string_cases"
import { sizeMapper } from "utils/size_mapper"
import { controller } from "./controller"
import { Quantity } from "app/utils/type_quantity"

export default function ProductDetail() {
    const { product, qty, category, loadingState, updateQuantity, addToCart } = controller()
    return (
        <Content>
            {loadingState() && <Loader />}
            {!loadingState() && product != null && (
                <div className="columns is-centered">
                    <div key={product.key} className="column is-4">
                        <nav className={`breadcrumb ${breadCrumbWrapper}`} aria-label="breadcrumbs">
                            <ul>
                                <li>
                                    <a href={`/${category}`}>{upperLetters(category)}</a>
                                </li>
                                <li>
                                    <a href="">{upperLetters(product.name)}</a>
                                </li>
                            </ul>
                        </nav>
                        <figure className="image is-inline-block">
                            <img src={product.imageUrl} alt={product.name} className={`${imageDetailCard}`} />
                        </figure>
                    </div>
                    <div key={product.name} className={`column ${detailContent}`}>
                        <div>
                            {upperLetters(product.name)}
                            <p className={productSize}>{`Size: ${sizeMapper[product.size]}`}</p>
                            <p className={productDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent elementum
                                facilisis leo. Erat pellentesque adipiscing commodo elit at imperdiet. Amet mauris
                                commodo quis imperdiet massa tincidunt. Nulla at volutpat diam ut venenatis tellus in
                                metus. Varius quam quisque id diam. Pellentesque nec nam aliquam sem et tortor
                                consequat.
                            </p>
                            <p className={productPrice}>{formatMoney.format(product.price)}</p>
                            <div className={quantity}>
                                <p> Quantity</p>
                                <button className={quantityComponent} onClick={() => updateQuantity(Quantity.Minus)}>
                                    -
                                </button>
                                <input
                                    className={quantityComponent}
                                    type="number"
                                    value={qty}
                                    onChange={(event) => updateQuantity(Quantity.Input, event)}
                                ></input>
                                <button className={quantityComponent} onClick={() => updateQuantity(Quantity.Add)}>
                                    +
                                </button>
                            </div>
                            <button className="button is-primary" style={{ marginTop: 10 }} onClick={() => addToCart()}>
                                <span>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </span>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Content>
    )
}
