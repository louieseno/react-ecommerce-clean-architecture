import { RootState } from "app/boot"
import { fetchOrders, removeOrder } from "app/redux/orders/orders.actions"
import { Order } from "domain/entities/order"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export function controller() {
    const dispatch = useDispatch()

    const history = useHistory()
    const data = useSelector((state: RootState) => state.orders.data)
    const [checkedAll, setCheckAll] = useState(false)
    const [productIds, setProductIds] = useState([] as string[])
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    function deleteOrder(product: Order) {
        dispatch(removeOrder([product.productId]))
    }

    function deleteAllOrders() {
        dispatch(removeOrder(productIds))
    }

    function goToProducts() {
        history.push("/")
    }

    function onCheckAll() {
        setCheckAll(!checkedAll)
        const tempIds = [...productIds]
        if (!checkedAll === true) {
            data.forEach((product: Order) => {
                tempIds.push(product.productId)
            })
            setProductIds(tempIds)
        } else {
            setProductIds([])
        }
    }

    function onItemCheck(e: any, productId: string) {
        if (data.length === 1) {
            onCheckAll()
        } else {
            const tempIds = [...productIds]
            if (e.target.checked) {
                tempIds.push(productId)
                setProductIds(tempIds)
            } else {
                const index = tempIds.findIndex((id: string) => id === productId)
                if (index !== -1) {
                    tempIds.splice(index, 1)
                }
                setProductIds(tempIds)
            }
            // Update head checkbox
            if (tempIds.length === data.length) {
                setCheckAll(true)
            } else {
                setCheckAll(false)
            }
        }
    }
    return { data, productIds, checkedAll, onCheckAll, onItemCheck, deleteOrder, deleteAllOrders, goToProducts }
}
