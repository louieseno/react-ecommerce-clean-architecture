import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    data: [],
    dress: null,
    loading: false,
}

const dressSlice = createSlice({
    name: "dressSlice",
    initialState: initalState,
    reducers: {
        fetching: (state) => {
            state.loading = true
        },
        fetchingFailed: (state) => {
            state.loading = false
        },
        fetchDressesSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        fetchDressSuccess: (state, action) => {
            state.dress = action.payload
            state.loading = false
        },
    },
})

export const { fetching, fetchingFailed, fetchDressesSuccess, fetchDressSuccess } = dressSlice.actions
export default dressSlice.reducer
