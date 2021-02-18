import "firebase/auth" // for authentication
import "firebase/storage" // for storage
import "firebase/database" // for realtime database

import firebase from "firebase/app"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import faq from "app/redux/faq/faq.reducers"
let firebaseConfig = {}
if (process.env.NODE_ENV === "production") {
    console.log("production")
    firebaseConfig = require("app/config/production")
} else {
    firebaseConfig = require("app/config/development")
}
console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig)

export const store = createStore(combineReducers({ faq }), applyMiddleware(thunk))
