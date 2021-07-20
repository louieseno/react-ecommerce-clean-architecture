import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    data: [],
    orderDetail: null,
}

const ordersSlice = createSlice({
    name: "orders",
    initialState: initalState,
    reducers: {
        fetchingOrders: (state, action) => {
            state.data = action.payload
        },
        fetchingOrderDetail: (state, action) => {
            state.orderDetail = action.payload
        },
    },
})

export const { fetchingOrders, fetchingOrderDetail } = ordersSlice.actions
export default ordersSlice.reducer
