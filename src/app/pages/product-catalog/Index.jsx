import React from "react"
import Content from "app/components/Content"

function ItemGrids() {
    return (
        <div>
            <div className="container">
                <div className="columns">
                    <div className="column">1</div>
                    <div className="column">2</div>
                    <div className="column">3</div>
                    <div className="column">4</div>
                </div>
            </div>
        </div>
    )
}
const ProductCatalog = () => {
    var ContentDetails = Content(ItemGrids, true, true)

    return <>{ContentDetails}</>
}
export default ProductCatalog
