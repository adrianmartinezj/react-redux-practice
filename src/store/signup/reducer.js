import {
    CONFIRMATION_REQUEST,
    CONFIRMATION_SUCCESS,
    CONFIRMATION_FAILURE,

    SET_USER_REQUEST,
    SET_USER_SUCCESS,
    SET_USER_FAILURE,
} from './actions'

const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    error: false,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case CONFIRMATION_REQUEST:
            return { ...state, }
        case CONFIRMATION_SUCCESS:
            return { ...state, error: false}
        case CONFIRMATION_FAILURE:
            return { ...state, error: true}
        case SET_USER_REQUEST:
            return { ...state, }
        case SET_USER_SUCCESS:
            return { 
                ...state, 
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
            }
        case SET_USER_FAILURE:
            return { ...state, }
        default:
            return { ...state, }
    }
}

export default reducer