import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    dresses: [],
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
            state.dresses = action.payload
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
