import { RootState } from "app/boot"
import { fetchOrders, removeOrder } from "app/redux/orders/orders.actions"
import { Order } from "domain/entities/order"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export function controller() {
    const dispatch = useDispatch()
    const history = useHistory()
    const data = useSelector((state: RootState) => state.orders.data)
    // const productIds = []
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    function deleteOrder(product: Order) {
        dispatch(removeOrder([product.productId]))
    }

    function goToProducts() {
        history.push("/")
    }
    return { data, deleteOrder, goToProducts }
}
