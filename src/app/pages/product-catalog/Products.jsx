import React, { useEffect } from "react"
import Content from "app/components/Content"
import { useDispatch, useSelector } from "react-redux"
import { fetchJackets } from "app/redux/jackets/jackets.actions"
import Loader from "app/components/Loader"
function ItemGrids() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchJackets())
    }, [dispatch])

    const data = useSelector((state) => state.jackets.data)
    const loadingJacket = useSelector((state) => state.jackets.loading)
    const _productCard = (jacket) => {
        return (
            <div className="card column">
                <div className="card-image">
                    <figure className="image">
                        <img src={jacket.imageUrl} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">{jacket.name}</div>
                </div>
            </div>
        )
    }
    return (
        <section className="main-content columns is-fullheight">
            <aside className="column is-2 is-narrow-mobile is-fullheight section">
                <p className="menu-label is-hidden-touch">Navigation</p>
                <ul className="menu-list">
                    <li>
                        <a href="#" className="">
                            Women Dress
                        </a>
                    </li>

                    <li>
                        <a href="#" className="">
                            Men Jacket
                        </a>
                    </li>
                </ul>
            </aside>

            <div className="container column is-10">
                <div className="section">
                    {loadingJacket && <Loader />}
                    {!loadingJacket && (
                        <div className="columns">
                            {data.map((jacket) => {
                                return _productCard(jacket)
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
const ProductCatalog = () => {
    var ContentDetails = Content(ItemGrids, true, true)

    return <>{ContentDetails}</>
}
export default ProductCatalog
