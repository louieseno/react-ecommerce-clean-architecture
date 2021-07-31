import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "app/boot"
import { fetchOrders } from "app/redux/orders/orders.actions"
import { getAuthUser, signOut } from "app/redux/auth/auth.actions"

export const itemCounterContext = React.createContext({})

export function contoller() {
    const dispatch = useDispatch()
    const [totalItems, setTotalItems] = useState(0)
    const [user, setUser] = useState(null)
    const [userDropDown, setUserDropDown] = useState(false)
    const orders = useSelector((state: RootState) => state.orders.data)
    const userAuth = useSelector((state: RootState) => state.auth.user)
    useEffect(() => {
        dispatch(fetchOrders())
        dispatch(getAuthUser())
    }, [dispatch])

    useEffect(() => {
        if (orders) {
            setTotalItems(orders.length)
        }
        if (userAuth) {
            setUser(userAuth)
        }
    }, [orders, userAuth])

    function onUserDropDown() {
        setUserDropDown(!userDropDown)
    }

    function onSignOut() {
        dispatch(signOut())
    }
    return { totalItems, user, userDropDown, onUserDropDown, onSignOut }
}
