import {authUser} from "./AuthReducer";


const INITIALIZED_SUCCESS = 'APP_INITIALIZED_SUCCESS'
const SOME_GLOBAL_ERROR = 'SOME_GLOBAL_ERROR'

let InitialState = {
    initialized: false,
    globalError: null
}

let AppReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SOME_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error
            }
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
const showGlobalError = (error) => ({type: SOME_GLOBAL_ERROR, error})

export const initializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(authUser())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}
export const setGlobalError = (error) => async (dispatch) => {
    dispatch(showGlobalError(error))
    setTimeout(() => {dispatch(showGlobalError(null))},5000)
}


export default AppReducer