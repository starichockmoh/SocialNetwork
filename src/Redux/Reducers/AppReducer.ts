import {authUser} from "./AuthReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {Dispatch} from "redux";


const INITIALIZED_SUCCESS = 'APP_INITIALIZED_SUCCESS'
const SOME_GLOBAL_ERROR = 'SOME_GLOBAL_ERROR'

type InitialStateType = {
    initialized: boolean
    globalError: null | string
}

let InitialState:InitialStateType = {
    initialized: false,
    globalError: null
}

let AppReducer = (state = InitialState, action:ActionsType): InitialStateType  => {
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>
type ActionsType = initializedSuccessActionType | showGlobalErrorActionType

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type showGlobalErrorActionType = {
    type: typeof SOME_GLOBAL_ERROR
    error: string | null
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
export const setGlobalError = (error: string | null): ThunkType  =>
    async (dispatch,getState) => {
    dispatch(showGlobalError(error))
    setTimeout(() => {dispatch(showGlobalError(null))},5000)
}


export default AppReducer