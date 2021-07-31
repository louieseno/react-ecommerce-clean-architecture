import { RootState } from "app/boot"
import { signUp } from "app/redux/auth/auth.actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useHistory } from "react-router-dom"

export function controller() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userAuth = useSelector((state: RootState) => state.auth.user)
    const loading = useSelector((state: RootState) => state.auth.loading)

    useEffect(() => {
        // Sign up success
        if (userAuth) {
            onNavigateHome()
        }
    }, [userAuth])

    function onSignUp(values: any) {
        dispatch(signUp(values))
    }

    function onNavigateHome() {
        history.push("/jackets")
    }
    return { loading, onSignUp, onNavigateHome }
}
