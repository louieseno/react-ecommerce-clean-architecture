import { RootState } from "app/boot"
import { signIn, signUp } from "app/redux/auth/auth.actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"

export function controller() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userAuth = useSelector((state: RootState) => state.auth.user)
    const loading = useSelector((state: RootState) => state.auth.loading)

    useEffect(() => {
        if (userAuth) {
            onNavigateHome()
        }
    }, [userAuth])

    function onSignIn(values: any) {
        dispatch(signIn(values))
    }
    function onSignUp(values: any) {
        dispatch(signUp(values))
    }

    function onNavigateHome() {
        navigate("/jackets")
    }
    return { loading, onSignIn, onSignUp, onNavigateHome }
}
