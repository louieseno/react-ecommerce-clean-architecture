import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    data: [],
    loading: true,
}

const jacketsSlice = createSlice({
    name: "jackets",
    initialState: initalState,
    reducers: {
        fetchRequest: (state) => {
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        fetchFailure: (state) => {
            state.loading = false
        },
    },
})

export const { fetchRequest, fetchSuccess, fetchFailure } = jacketsSlice.actions
export default jacketsSlice.reducer
