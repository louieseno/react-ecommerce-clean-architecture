import { DataJacketsRepository as DataRepository } from "data/repositories/jackets/data_jackets"
import { FetchJacketsUseCase as FetchUseCase } from "domain/usecases/jackets/fetch_jackets"
import {
    FETCH_JACKETS_FAILURE as FETCH_FAILURE,
    FETCH_JACKETS_REQUEST as FETCH_REQUEST,
    FETCH_JACKETS_SUCCESS as FETCH_SUCCESS,
} from "./jackets.types"

const _repository = new DataRepository()

export function fetchJackets() {
    return async function (dispatch) {
        dispatch({ type: FETCH_REQUEST })
        try {
            const usecase = new FetchUseCase(_repository)
            const data = await usecase.execute()
            dispatch({ type: FETCH_SUCCESS, payload: data })
        } catch (err) {
            dispatch({ type: FETCH_FAILURE })
        }
    }
}
