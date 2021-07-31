import { DataFaqRepository as DataRepository } from "data/repositories/faq/data_faq"
import { FetchFaqUseCase as FetchUseCase } from "domain/usecases/faq/fetch_faq"
import { fetchFailure, fetchRequest, fetchSuccess } from "./faq.reducers"

const _repository = new DataRepository()

export function fetchFAQ() {
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
