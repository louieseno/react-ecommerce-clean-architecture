import { DataFaqRepository as DataRepository } from "data/repositories/faq/data_faq_repository"
import { FetchFaqUseCase as FetchUseCase } from "domain/usecases/faq/fetch_faq"
import {
    FETCH_FAQ_FAILURE as FETCH_FAILURE,
    FETCH_FAQ_REQUEST as FETCH_REQUEST,
    FETCH_FAQ_SUCCESS as FETCH_SUCCESS,
} from "./faq.types"

const _repository = new DataRepository()

export function fetchFAQ() {
    return async function (dispatch) {
        dispatch({ type: FETCH_REQUEST })
        try {
            const usecase = new FetchUseCase(_repository)
            const data = await usecase.execute()
            dispatch({ type: FETCH_SUCCESS, payload: data })
        } catch (err) {
            //console.error(err)
            dispatch({ type: FETCH_FAILURE })
        }
    }
}
