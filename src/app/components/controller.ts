import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "app/boot"
import { fetchOrders } from "app/redux/orders/orders.actions"

export const itemCounterContext = React.createContext(0)

export function contoller() {
    const dispatch = useDispatch()
    const [totalItems, setTotalItems] = useState(0)
    const data = useSelector((state: RootState) => state.orders.data)
    const detail = useSelector((state: RootState) => state.orders.orderDetail)
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch, detail])

    useEffect(() => {
        if (data) {
            setTotalItems(data.length)
        }
    }, [data])
    return { totalItems }
}
