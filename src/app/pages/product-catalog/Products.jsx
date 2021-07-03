// Package
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { fetchJackets } from "app/redux/jackets/jackets.actions"
import { fetchDresses } from "app/redux/dress/dress.actions"
// Components
import Content from "app/components/Content"
import Loader from "app/components/Loader"
// Style
import styles from "./product.module.css"
const { productCard, imageCard, customActive } = styles
// Utils
import { formatMoney } from "utils/format_money"
import { upperFirstLetter, upperLetters } from "utils/string_cases"
import { sizeMapper } from "utils/size_mapper"

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
    const dispatch = useDispatch()
    const history = useHistory()
    const [category, setCategory] = useState("jackets")
    const [products, setProducts] = useState([])

    const jackets = useSelector((state) => state.jackets.jackets)
    const dresses = useSelector((state) => state.dresses.dresses)
    const loadingJacket = useSelector((state) => state.jackets.loading)
    const loadingDress = useSelector((state) => state.dresses.loading)

    useEffect(() => {
        dispatch(fetchJackets())
    }, [dispatch])

    useEffect(() => {
        if (category === "jackets") {
            setProducts(jackets)
        } else {
            setProducts(dresses)
        }
    }, [jackets, dresses])

    function onNavigate(product) {
        history.push({
            pathname: `products/${product.key}`,
            state: { caegory: category },
        })
    }
    function onChangeCategory(category) {
        setCategory(category)
        if (category === "jackets") {
            dispatch(fetchJackets())
        } else {
            dispatch(fetchDresses())
        }
    }
    function notLoading() {
        return !loadingDress && !loadingJacket
    }
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
                                className={`${category === "dress" ? `${customActive}` : ""}`}
                                onClick={() => onChangeCategory("dress")}
                            >
                                Dress
                            </a>
                        </li>
                    </ul>
                </aside>

                <div className="container column is-10">
                    <div className="section">
                        {(loadingJacket || loadingDress) && <Loader />}
                        {notLoading() && (
                            <div className="columns is-8 is-multiline">
                                {products.map((jacket) => {
                                    return _productCard(jacket, onNavigate)
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
