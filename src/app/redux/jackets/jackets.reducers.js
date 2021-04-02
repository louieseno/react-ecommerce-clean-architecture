import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    jackets: [],
    jacket: null,
    loading: true,
}

const jacketsSlice = createSlice({
    name: "jackets",
    initialState: initalState,
    reducers: {
        fetching: (state) => {
            state.loading = true
        },
        fetchingFailed: (state) => {
            state.loading = false
        },
        fetchJacketsSuccess: (state, action) => {
            state.jackets = action.payload
            state.loading = false
        },
        fetchJacketSuccess: (state, action) => {
            state.jacket = action.payload
            state.loading = false
        },
    },
})

export const { fetching, fetchingFailed, fetchJacketsSuccess, fetchJacketSuccess } = jacketsSlice.actions
export default jacketsSlice.reducer
