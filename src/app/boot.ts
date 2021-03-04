import "firebase/auth" // for authentication
import "firebase/storage" // for storage
import "firebase/database" // for realtime database

import firebase from "firebase/app"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import faq from "app/redux/faq/faq.reducers"
import policy from "app/redux/return-policy/policy.reducers"
import jackets from "app/redux/jackets/jackets.reducers"
let firebaseConfig = {}
if (process.env.NODE_ENV === "production") {
    firebaseConfig = require("app/config/production")
} else {
    firebaseConfig = require("app/config/development")
}
firebase.initializeApp(firebaseConfig)

export const store = createStore(combineReducers({ faq, policy, jackets }), applyMiddleware(thunk))
