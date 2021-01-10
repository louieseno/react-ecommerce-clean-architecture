import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import { store } from "./boot"
const App = () => (
    <Provider store={store}>
        <p>React ecommerce</p>
    </Provider>
)

export default App
