import {
    FETCH_POLICY_FAILURE as FETCH_FAILURE,
    FETCH_POLICY_REQUEST as FETCH_REQUEST,
    FETCH_POLICY_SUCCESS as FETCH_SUCCESS,
} from "./policy.types"

const initalState = {
    data: [],
    loading: true,
}

export default function (state = initalState, action = null) {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload }
        }
        case FETCH_FAILURE: {
            return { ...state, loading: false }
        }
        default: {
            return state
        }
    }
}
