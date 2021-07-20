import { RootState } from "app/boot"
import { fetchOrders } from "app/redux/orders/orders.actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export function controller() {
    const dispatch = useDispatch()
    const data = useSelector((state: RootState) => state.orders.data)

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    return { data }
}
