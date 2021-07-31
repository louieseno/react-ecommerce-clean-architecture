import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    user: null,
    loading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initalState,
    reducers: {
        loadingAuth: (state) => {
            state.loading = true
        },
        signOutUser: (state) => {
            state.user = null
            state.loading = false
        },
        // signInUser: (state, action) => {
        //     state.user = action.payload
        //     state.loading = false
        // },
        // signInUser: (state) => {
        //     state.user = null
        //     state.loading = false
        // },
        // signUpSuccess: (state, action) => {
        //     state.user = action.payload
        //     state.loading = false
        // },
        // signUpFailed: (state) => {
        //     state.user = null
        //     state.loading = false
        // },
        getAuthSuccess(state, action) {
            state.user = action.payload
            state.loading = false
        },
        failedAuthUser(state) {
            state.user = null
            state.loading = false
        },
    },
})

export const { loadingAuth, getAuthSuccess, failedAuthUser, signOutUser } = authSlice.actions
export default authSlice.reducer
