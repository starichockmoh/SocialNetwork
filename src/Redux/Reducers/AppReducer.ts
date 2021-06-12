import {authUser} from "./AuthReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {ActionsType, NullableType} from "../../Types/Types";


let InitialState= {
    initialized: false,
    globalError: null as NullableType<string>
}

type InitialStateType = typeof InitialState

let AppReducer = (state = InitialState, action:AppActionsType): InitialStateType  => {
    switch (action.type) {
        case "SOME_GLOBAL_ERROR":
            return {
                ...state,
                globalError: action.error,
            }
        case "APP_INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, AppActionsType>
type AppActionsType = ActionsType<typeof AppActions>

export const AppActions = {
    initializedSuccess:() => ({type: 'APP_INITIALIZED_SUCCESS'} as const),
    showGlobalError:(error: string | null) => ({type: 'SOME_GLOBAL_ERROR', error} as const)
}

export const initializedApp = () => {
    return (dispatch: Function) => {
        let promise = dispatch(authUser())
        promise.then(() => {
            dispatch(AppActions.initializedSuccess())
        })
    }
}
export const setGlobalError = (error: NullableType<string>): ThunkType  =>
    async (dispatch,getState) => {
    dispatch(AppActions.showGlobalError(error))
    setTimeout(() => {dispatch(AppActions.showGlobalError(null))},5000)
}


export default AppReducer