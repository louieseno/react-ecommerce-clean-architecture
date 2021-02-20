import { DataReturnPolicyRepository as DataRepository } from "data/repositories/return-policy/data_return_policy"
import { FetchReturnPolicyUseCase as FetchUseCase } from "domain/usecases/return-policy/fetch_retun_policy"
import {
    FETCH_POLICY_FAILURE as FETCH_FAILURE,
    FETCH_POLICY_REQUEST as FETCH_REQUEST,
    FETCH_POLICY_SUCCESS as FETCH_SUCCESS,
} from "./policy.types"

const _repository = new DataRepository()

export function fetchReturnPolicy() {
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
