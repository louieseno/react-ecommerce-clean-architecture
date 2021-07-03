import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    data: [],
    jacket: null,
    loading: false,
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
            state.data = action.payload
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
