import { DataReturnPolicyRepository as DataRepository } from "data/repositories/return-policy/data_return_policy"
import { FetchReturnPolicyUseCase as FetchUseCase } from "domain/usecases/return-policy/fetch_retun_policy"
import { fetchRequest, fetchSuccess, fetchFailure } from "./policies.reducers"

const _repository = new DataRepository()

export function fetchReturnPolicy() {
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
