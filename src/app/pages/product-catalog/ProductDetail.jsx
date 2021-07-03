// Package
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useLocation } from "react-router-dom"
import { fetchJacket } from "app/redux/jackets/jackets.actions"
import { fetchDress } from "app/redux/dress/dress.actions"
// Components
import Loader from "app/components/Loader"
import Content from "app/components/Content"
// Style
import styles from "./product.module.css"
const {
    imageDetailCard,
    productDescription,
    productSize,
    productPrice,
    detailContent,
    quantity,
    quantityComponent,
} = styles
// Utils
import { formatMoney } from "utils/format_money"
import { upperLetters } from "utils/string_cases"
import { sizeMapper } from "utils/size_mapper"
export default function ProductDetail() {
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()
    // Selector
    const jacket = useSelector((state) => state.jackets.jacket)
    const dress = useSelector((state) => state.dresses.dress)
    const loadingJacket = useSelector((state) => state.jackets.loading)
    // States
    const [product, setProduct] = useState(null)
    const [category, setCategory] = useState(null)

    useEffect(() => {
        const _category = location.state.category
        setCategory(_category)
        if (_category === "dresses") {
            dispatch(fetchDress(id))
        } else {
            dispatch(fetchJacket(id))
        }
    }, [location])

    useEffect(() => {
        switch (category) {
            case "dresses":
                if (dress) {
                    setProduct(dress)
                }
                break
            case "jackets":
                if (jacket) {
                    setProduct(jacket)
                }
                break
            default:
                break
        }
    }, [jacket, dress, category])

    return (
        <Content>
            {loadingJacket && <Loader />}
            {!loadingJacket && product != null && (
                <div className="columns is-centered">
                    <div key={product.key} className="column is-4">
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
                                <button className={quantityComponent}>-</button>
                                <input className={quantityComponent} type="number"></input>
                                <button className={quantityComponent}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Content>
    )
}
