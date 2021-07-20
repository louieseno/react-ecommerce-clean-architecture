import { RootState } from "app/boot"
import { fetchOrders, removeOrder } from "app/redux/orders/orders.actions"
import { Order } from "domain/entities/order"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export function controller() {
    const dispatch = useDispatch()
    const data = useSelector((state: RootState) => state.orders.data)
    // const productIds = []
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    function deleteOrder(product: Order) {
        dispatch(removeOrder([product.productId]))
    }
    return { data, deleteOrder }
}
