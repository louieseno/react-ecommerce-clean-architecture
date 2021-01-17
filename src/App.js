import React from "react"
import { Provider } from "react-redux"
import "./styles/App.sass"
import "./styles/App.css"
import { store } from "./boot"
import RouterManager from "../src/RouteManager"

const App = () => (
    <Provider store={store}>
        <RouterManager />
    </Provider>
)

export default App
