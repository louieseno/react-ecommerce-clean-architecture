import React, { useEffect } from "react"
import Content from "app/components/Content"
import { useDispatch, useSelector } from "react-redux"
import { fetchJackets } from "app/redux/jackets/jackets.actions"
import Loader from "app/components/Loader"
import styles from "./product.module.css"
const { product, imageCard } = styles

import { formatMoney } from "utils/format_money"
import { upperFirstLetter, upperLetters } from "utils/string_cases"
import { sizeMapper } from "utils/size_mapper"

function _productCard(jacket) {
    return (
        <div className={`${product} card column is-one-third`}>
            <div className="card-image">
                <figure className="image">
                    <img src={jacket.imageUrl} alt="jacket.name" className={imageCard} />
                </figure>
            </div>
            <div className="card-content">
                <p>
                    {upperFirstLetter(jacket.type)}: {sizeMapper[upperLetters(jacket.size)]}
                </p>

                <div style={{ fontWeight: "bold", fontSize: "18" }} className="content">
                    {upperLetters(jacket.name)}
                </div>
                <div style={{ fontWeight: "bold", color: "red" }}>{formatMoney.format(jacket.price)}</div>
            </div>
        </div>
    )
}

function ProductCatalog() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchJackets())
    }, [dispatch])

    const data = useSelector((state) => state.jackets.data)
    const loadingJacket = useSelector((state) => state.jackets.loading)

    return (
        <Content>
            <section className="main-content columns is-fullheight">
                <aside className="column is-2 is-narrow-mobile is-fullheight section">
                    <p className="menu-label is-hidden-touch">Categories</p>
                    <ul className="menu-list">
                        <li>
                            <a href="#" className="">
                                Jackets
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                Dress
                            </a>
                        </li>
                    </ul>
                </aside>

                <div className="container column is-10">
                    <div className="section">
                        {loadingJacket && <Loader />}
                        {!loadingJacket && (
                            <div className="columns is-8 is-multiline">
                                {data.map((jacket) => {
                                    return _productCard(jacket)
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
