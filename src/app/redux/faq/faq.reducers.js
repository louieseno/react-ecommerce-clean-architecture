import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    data: [],
    loading: true,
}

const faqSlice = createSlice({
    name: "faq",
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

export const { fetchFailure, fetchRequest, fetchSuccess } = faqSlice.actions
export default faqSlice.reducer
