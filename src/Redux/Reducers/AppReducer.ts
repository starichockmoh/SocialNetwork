import {authUser} from "./AuthReducer";

const INITIALIZED_SUCCESS = 'APP_INITIALIZED_SUCCESS'
const SOME_GLOBAL_ERROR = 'SOME_GLOBAL_ERROR'

type InitialStateType = {
    initialized: boolean
    globalError: null | string
}
type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type showGlobalErrorActionType = {
    type: typeof SOME_GLOBAL_ERROR
    error: string | null
}


let InitialState:InitialStateType = {
    initialized: false,
    globalError: null
}

let AppReducer = (state = InitialState, action:any): InitialStateType  => {
    switch (action.type) {
        case SOME_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error,
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


const initializedSuccess = ():initializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

const showGlobalError = (error: string | null): showGlobalErrorActionType => ({type: SOME_GLOBAL_ERROR, error})

export const initializedApp = () => {
    return (dispatch: Function) => {
        let promise = dispatch(authUser())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}
export const setGlobalError = (error: string | null) => async (dispatch: Function) => {
    dispatch(showGlobalError(error))
    setTimeout(() => {dispatch(showGlobalError(null))},5000)
}


export default AppReducer