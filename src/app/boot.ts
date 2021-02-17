import "firebase/auth" // for authentication
import "firebase/storage" // for storage
import "firebase/database" // for realtime database

import firebase from "firebase/app"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import faq from "app/redux/faq/faq.reducers"
import { config } from "./config"
const _checkEnvironment = () => {
    return process.env.NODE_ENV === "production"
}
const firebaseConfig = {
    apiKey: _checkEnvironment() ? process.env.apiKey : config.apiKey,
    authDomain: _checkEnvironment() ? process.env.authDomain : config.authDomain,
    projectId: _checkEnvironment() ? process.env.projectId : config.projectId,
    storageBucket: _checkEnvironment() ? process.env.storageBucket : config.storageBucket,
    messagingSenderId: _checkEnvironment() ? process.env.messagingSenderId : config.messagingSenderId,
    appId: _checkEnvironment() ? process.env.appId : config.appId,
    measurementId: _checkEnvironment() ? process.env.measurementIdq : config.measurementId,
}

firebase.initializeApp(firebaseConfig)

export const store = createStore(combineReducers({ faq }), applyMiddleware(thunk))
