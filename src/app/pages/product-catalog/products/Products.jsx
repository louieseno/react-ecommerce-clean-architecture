// Package
import React from "react"

// Components
import Content from "app/components/Content"
import Loader from "app/components/Loader"
// Style
import styles from "../product.module.css"
const { productCard, imageCard, customActive } = styles
// Utils
import { formatMoney } from "utils/format_money"
import { upperFirstLetter, upperLetters } from "utils/string_cases"
import { sizeMapper } from "utils/size_mapper"
import { controller } from "./controller"

function _productCard(product, onNavigate) {
    return (
        <div
            key={product.key}
            className={`${productCard} card column is-one-third`}
            onClick={() => onNavigate(product)}
        >
            <div className="card-image">
                <figure className="image">
                    <img src={product.imageUrl} alt={product.name} className={imageCard} />
                </figure>
            </div>
            <div className="card-content">
                <p>
                    {upperFirstLetter(product.type)}: {sizeMapper[product.size]}
                </p>
                <div style={{ fontWeight: "bold", fontSize: "18" }} className="content">
                    {upperLetters(product.name)}
                </div>
                <div style={{ fontWeight: "bold", color: "red" }}>{formatMoney.format(product.price)}</div>
            </div>
        </div>
    )
}

function ProductCatalog() {
    const { category, products, onChangeCategory, onNavigate, loadingState } = controller()

    return (
        <Content>
            <section className="main-content columns is-fullheight">
                <aside className="column is-2 is-narrow-mobile is-fullheight section">
                    <p className="menu-label is-hidden-touch">Categories</p>
                    <ul className="menu-list">
                        <li>
                            <a
                                href="#jackets"
                                className={`${category === "jackets" ? `${customActive}` : ""}`}
                                onClick={() => onChangeCategory("jackets")}
                            >
                                Jackets
                            </a>
                        </li>
                        <li>
                            <a
                                href="#dress"
                                className={`${category === "dresses" ? `${customActive}` : ""}`}
                                onClick={() => onChangeCategory("dresses")}
                            >
                                Dress
                            </a>
                        </li>
                    </ul>
                </aside>

                <div className="container column is-10">
                    <div className="section">
                        {loadingState() && <Loader />}
                        {!loadingState() && (
                            <div className="columns is-8 is-multiline">
                                {products.map((product) => {
                                    return _productCard(product, onNavigate)
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Content>
    )
}
export default ProductCatalog
