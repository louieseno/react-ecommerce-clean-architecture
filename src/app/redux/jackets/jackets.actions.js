import { DataJacketRepository as DataRepository } from "data/repositories/jacket/data_jacket"
import { FetchJacketsUseCase as FetchJackets } from "domain/usecases/jacket/fetch_jackets"
import { FetchJacketUseCase as FetchJacket } from "domain/usecases/jacket/fetch_jacket"
import { fetching, fetchJacketsSuccess, fetchJacketSuccess, fetchingFailed } from "./jackets.reducers"

const _repository = new DataRepository()

export function fetchJackets() {
    return async function (dispatch) {
        dispatch(fetching())
        try {
            const usecase = new FetchJackets(_repository)
            const data = await usecase.execute()
            dispatch(fetchJacketsSuccess(data))
        } catch (err) {
            dispatch(fetchingFailed())
        }
    }
}

export function fetchJacket(productId) {
    return async function (dispatch) {
        dispatch(fetching())
        try {
            const usecase = new FetchJacket(_repository)
            const data = await usecase.execute(productId)
            dispatch(fetchJacketSuccess(data))
        } catch (err) {
            dispatch(fetchingFailed())
        }
    }
}
