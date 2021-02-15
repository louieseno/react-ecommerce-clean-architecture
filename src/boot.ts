import "firebase/auth" // for authentication
import "firebase/storage" // for storage
import "firebase/database" // for realtime database

import firebase from "firebase/app"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

let _firebaseConfig = {}

_firebaseConfig = {
    apiKey: "AIzaSyDdjV7xYh_-U3rssXg1bYjyn3yB5viMmkU",
    authDomain: "we-wear-where.firebaseapp.com",
    projectId: "we-wear-where",
    storageBucket: "we-wear-where.appspot.com",
    messagingSenderId: "640068816961",
    appId: "1:640068816961:web:6310dcc7bb8b808f9c76c0",
    measurementId: "G-YWZMB3966X",
}

firebase.initializeApp(_firebaseConfig)

export const store = createStore(combineReducers({}), applyMiddleware(thunk))
