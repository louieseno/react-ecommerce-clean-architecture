import { DataJacketsRepository as DataRepository } from "data/repositories/jackets/data_jackets"
import { FetchJacketsUseCase as FetchUseCase } from "domain/usecases/jackets/fetch_jackets"
import { fetchRequest, fetchSuccess, fetchFailure } from "./jackets.reducers"

const _repository = new DataRepository()

export function fetchJackets() {
    return async function (dispatch) {
        dispatch(fetchRequest())
        try {
            const usecase = new FetchUseCase(_repository)
            const data = await usecase.execute()
            dispatch(fetchSuccess(data))
        } catch (err) {
            dispatch(fetchFailure())
        }
    }
}
