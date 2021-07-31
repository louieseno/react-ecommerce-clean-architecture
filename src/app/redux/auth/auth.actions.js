import { DataAuthRepository } from "data/repositories/auth/data_auth"
import { GetAuthUserUseCase as GetUser } from "domain/usecases/auth/get_auth_user"
import { SignOutUseCase as SignOut } from "domain/usecases/auth/sign_out"
import { SignUpUseCase as SignUp } from "domain/usecases/auth/sign_up"
import { getAuthFailed, getAuthSuccess, loadingAuth, signOutUser, signUpFailed, signUpSuccess } from "./auth.reducers"

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

export function signUp(values) {
    return async function (dispatch) {
        dispatch(loadingAuth())
        try {
            const usecase = new SignUp(_repository)
            const data = await usecase.execute(values)
            dispatch(signUpSuccess(data))
        } catch (err) {
            dispatch(signUpFailed())
        }
    }
}

export function getAuthUser() {
    return function (dispatch) {
        try {
            const usecase = new GetUser(_repository)
            const data = usecase.execute()
            dispatch(getAuthSuccess(data))
        } catch (err) {
            dispatch(getAuthFailed())
        }
    }
}
