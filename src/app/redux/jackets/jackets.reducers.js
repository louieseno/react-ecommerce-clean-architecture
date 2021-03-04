import {
    FETCH_JACKETS_FAILURE as FETCH_FAILURE,
    FETCH_JACKETS_REQUEST as FETCH_REQUEST,
    FETCH_JACKETS_SUCCESS as FETCH_SUCCESS,
} from "./jackets.types"

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
