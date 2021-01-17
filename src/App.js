import React from "react"
import { Provider } from "react-redux"
import "./styles/App.sass"
import Button from "react-bulma-components/lib/components/button"
import { store } from "./boot"
const App = () => (
    <Provider store={store}>
        <p>React ecommerce</p>
        <Button color="primary">My Bulma button</Button>
    </Provider>
)

export default App
