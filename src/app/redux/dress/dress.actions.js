import { DataDressRepository as DataRepository } from "data/repositories/dress/data_dress"
import { FetchDressesUseCase as FetchDresses } from "domain/usecases/dress/fetch_dresses"
import { FetchDressUseCase as FetchDress } from "domain/usecases/dress/fetch_dress"
import { fetching, fetchDressesSuccess, fetchDressSuccess, fetchingFailed } from "./dress.reducers"

const _repository = new DataRepository()

export function fetchDresses() {
    return async function (dispatch) {
        dispatch(fetching())
        try {
            const usecase = new FetchDresses(_repository)
            const data = await usecase.execute()
            dispatch(fetchDressesSuccess(data))
        } catch (err) {
            dispatch(fetchingFailed())
        }
    }
}

export function fetchDress(productId) {
    return async function (dispatch) {
        dispatch(fetching())
        try {
            const usecase = new FetchDress(_repository)
            const data = await usecase.execute(productId)
            dispatch(fetchDressSuccess(data))
        } catch (err) {
            dispatch(fetchingFailed())
        }
    }
}
