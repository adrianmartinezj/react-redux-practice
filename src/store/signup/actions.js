
export const CONFIRMATION_REQUEST = 'CONFIRMATION_REQUEST'
export const CONFIRMATION_SUCCESS = 'CONFIRMATION_SUCCESS'
export const CONFIRMATION_FAILURE = 'CONFIRMATION_FAILURE'

export const SET_USER_REQUEST = 'SET_USER_REQUEST'
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
export const SET_USER_FAILURE = 'SET_USER_FAILURE'


export const setUser = (user) => {
    return ({
        type: SET_USER_SUCCESS,
        payload: user,
    })

    // dispatchEvent({type: SET_USER_REQUEST})

    // Do some verification
    // dispatchEvent({
    //     type: SET_USER_SUCCESS,
    //     payload: user,
    // })
    
    // Something bad happened...

    // dispatchEvent({
    //     type: SET_USER_FAILURE,
    //     payload: user,
    // })
}