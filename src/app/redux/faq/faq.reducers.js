import {
    FETCH_FAQ_FAILURE as FETCH_FAILURE,
    FETCH_FAQ_REQUEST as FETCH_REQUEST,
    FETCH_FAQ_SUCCESS as FETCH_SUCCESS,
} from "./faq.types"

const initalState = {
    faq: [],
    loading: false,
}

export default function (state = initalState, action = null) {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case FETCH_SUCCESS: {
            return { ...state, loading: false, faq: action.payload }
        }
        case FETCH_FAILURE: {
            return { ...state, loading: false }
        }
        default: {
            return state
        }
    }
}
