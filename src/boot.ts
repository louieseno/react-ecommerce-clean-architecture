import "firebase/auth" // for authentication
import "firebase/storage" // for storage
import "firebase/database" // for realtime database

import firebase from "firebase/app"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

let _firebaseConfig = {}

_firebaseConfig = {
    apiKey: "AIzaSyDEdjMOGocpFDli39y05eqst-5uEzJ341U",
    authDomain: "react-ecommerce-77a38.firebaseapp.com",
    projectId: "react-ecommerce-77a38",
    storageBucket: "react-ecommerce-77a38.appspot.com",
    messagingSenderId: "655233356192",
    appId: "1:655233356192:web:e1e18288f698ce0e5314c5",
    measurementId: "G-BHWECF1JF0",
}

firebase.initializeApp(_firebaseConfig)

export const store = createStore(combineReducers({}), applyMiddleware(thunk))
