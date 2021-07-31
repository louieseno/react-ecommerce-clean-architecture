import { DataAuthRepository } from "data/repositories/auth/data_auth"
import { GetAuthUserUseCase as GetUser } from "domain/usecases/auth/get_auth_user"
import { SignInUseCase as SignIn } from "domain/usecases/auth/sign_in"
import { SignOutUseCase as SignOut } from "domain/usecases/auth/sign_out"
import { SignUpUseCase as SignUp } from "domain/usecases/auth/sign_up"
import { failedAuthUser, getAuthSuccess, loadingAuth, signOutUser } from "./auth.reducers"

const _repository = new DataAuthRepository()

export function signOut() {
    return async function (dispatch) {
        dispatch(loadingAuth())
        try {
            const usecase = new SignOut(_repository)
            await usecase.execute()
            dispatch(signOutUser())
            window.location.reload()
        } catch (err) {
            dispatch(signOutUser())
        }
    }
}
export function signIn(values) {
    return async function (dispatch) {
        dispatch(loadingAuth())
        const usecase = new SignIn(_repository)
        await usecase.execute(values)
        dispatch(getAuthUser())
    }
}

export function signUp(values) {
    return async function (dispatch) {
        dispatch(loadingAuth())
        const usecase = new SignUp(_repository)
        await usecase.execute(values)
        dispatch(getAuthUser())
    }
}

export function getAuthUser() {
    return function (dispatch) {
        try {
            const usecase = new GetUser(_repository)
            const data = usecase.execute()
            dispatch(getAuthSuccess(data))
        } catch (err) {
            dispatch(failedAuthUser())
        }
    }
}
