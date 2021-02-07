import React from "react"
import Content from "app/components/Content"

function ItemGrids() {
    return (
        <section className="main-content columns is-fullheight">
            <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <p className="menu-label is-hidden-touch">Navigation</p>
                <ul className="menu-list">
                    <li>
                        <a href="#" className="">
                            <span className="icon">
                                <i className="fa fa-home"></i>
                            </span>{" "}
                            Women Dress
                        </a>
                    </li>

                    <li>
                        <a href="#" className="">
                            <span className="icon">
                                <i className="fa fa-info"></i>
                            </span>{" "}
                            Men Jacket
                        </a>
                    </li>
                </ul>
            </aside>

            <div className="container column is-10">
                <div className="section">
                    <div className="card">
                        <div className="card-header">
                            <p className="card-header-title">Header</p>
                        </div>
                        <div className="card-content">
                            <div className="content">Content</div>
                        </div>
                    </div>
                    <br />

                    <div className="card is-hidden1">
                        <div className="card-header">
                            <p className="card-header-title">Header</p>
                        </div>
                        <div className="card-content">
                            <div className="content">Content</div>
                        </div>
                    </div>
                    <br />

                    <div className="card is-hidden1">
                        <div className="card-header">
                            <p className="card-header-title">Header</p>
                        </div>
                        <div className="card-content">
                            <div className="content">Content</div>
                        </div>
                    </div>
                    <br />
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
