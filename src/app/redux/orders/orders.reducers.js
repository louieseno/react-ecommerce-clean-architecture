import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    data: [],
    orderDetail: null,
    loading: false,
}

const ordersSlice = createSlice({
    name: "orders",
    initialState: initalState,
    reducers: {
        fetchingOrders: (state, action) => {
            console.log(action.payload)
            state.data = action.payload
            state.loading = false
        },
        fetchingOrderDetail: (state, action) => {
            state.orderDetail = action.payload
            state.loading = false
        },
        settingOrder: (state, action) => {
            state.orderDetail = action.payload
            state.loading = false
        },
    },
})

export const { fetchingOrders, fetchingOrderDetail, settingOrder } = ordersSlice.actions
export default ordersSlice.reducer
