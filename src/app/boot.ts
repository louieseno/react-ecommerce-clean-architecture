import "firebase/auth" // for authentication
import "firebase/storage" // for storage
import "firebase/database" // for realtime database

import firebase from "firebase/app"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import faq from "app/redux/faq/faq.reducers"
import policies from "app/redux/return-policies/policies.reducers"
import jackets from "app/redux/jackets/jackets.reducers"
import dresses from "app/redux/dress/dress.reducers"
import orders from "app/redux/orders/orders.reducers"

let firebaseConfig = {}
if (process.env.NODE_ENV === "production") {
    firebaseConfig = require("app/config/production")
} else {
    firebaseConfig = require("app/config/development")
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const store = configureStore({
    reducer: {
        faq,
        jackets,
        dresses,
        policies,
        orders,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
