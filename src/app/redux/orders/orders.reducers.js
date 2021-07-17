import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    orders: [],
    orderDetail: null,
    loading: false,
}

const ordersSlice = createSlice({
    name: "jackets",
    initialState: initalState,
    reducers: {
        request: (state) => {
            state.loading = true
        },
        requestFailed: (state) => {
            state.loading = false
        },
        fetchingOrders: (state, action) => {
            state.order = action.payload
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

export const { request, requestFailed, fetchingOrders } = ordersSlice
export default ordersSlice.reducer
