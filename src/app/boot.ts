import "firebase/auth" // for authentication
import "firebase/storage" // for storage
import "firebase/database" // for realtime database

import firebase from "firebase/app"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import faq from "app/redux/faq/faq.reducers"
import firebaseConfig from "app/FirebaseConfig"

firebase.initializeApp(firebaseConfig)

export const store = createStore(combineReducers({ faq }), applyMiddleware(thunk))
