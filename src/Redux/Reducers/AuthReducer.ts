import {AuthAPI, UserAPI} from "../../Api/Api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {ActionsType, NullableType, ResultCodesEnum} from "../../Types/Types";
import {Dispatch} from "redux";


let InitialState = {
    CurrentUserId: null as NullableType<number>,
    email: null as NullableType<string>,
    login: null as NullableType<string>,
    isAuth: false,
    CurrentUserPhoto: null as NullableType<string>,
    CaptchaImg: '',
}
export type InitialStateType = typeof InitialState

let AuthReducer = (state = InitialState, action:AuthActionsType):InitialStateType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                ...action.data,
            }
        case "SET_CURRENT_USER_PROFILE":
            return {
                ...state,
                CurrentUserPhoto: action.CurrentUserPhoto,
            }
        case "SET_CAPTCHA_IMG":
            return {
                ...state,
                CaptchaImg: action.CaptchaImg
            }
        default:
            return state

    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, AuthActionsType>
type StopSubmitType = ReturnType<typeof stopSubmit>
type AuthActionsType = ActionsType<typeof AuthActions>
export type SetCurrentUserProfileActionType = {
    type: "SET_CURRENT_USER_PROFILE"
    CurrentUserPhoto: NullableType<string>
}

export const AuthActions = {
    SetAuthUserData: (CurrentUserId: null | number, email: null | string, login: null | string, isAuth: boolean)=> ({
        type: "SET_AUTH_USER_DATA",
        data: {CurrentUserId, email, login, isAuth},
    } as const),
   SetCurrentUserProfile:(CurrentUserPhoto: null | string) => ({
        type: "SET_CURRENT_USER_PROFILE", CurrentUserPhoto} as const),
    SetCaptchaImg: (CaptchaImg:string) => ({type: "SET_CAPTCHA_IMG", CaptchaImg} as const)
}


export const authUser = () : ThunkType  =>
    async (dispatch,getState) => {
    let response = await AuthAPI.AuthUser()
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data
        dispatch(AuthActions.SetAuthUserData(id, email, login, true))
        let ProfileResponse = await UserAPI.getUserProfile(response.data.id)
        dispatch(AuthActions.SetCurrentUserProfile(ProfileResponse.photos.large))
    }
}


export const authLogin = (email: string, password: string, rememberMe: boolean,captcha: string) : ThunkAction<Promise<void>, AppStateType, any,
    AuthActionsType | StopSubmitType> =>
    async (dispatch,getState) => {
    let data = await AuthAPI.AuthLogin(email, password, rememberMe,captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(authUser())
        dispatch(AuthActions.SetCaptchaImg(''))
    }
    else {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error'
        // if (errorMessage === 'Incorrect anti-bot symbols'){
        //     dispatch(ActivateCaptcha())
        // }
        if (data.resultCode === ResultCodesEnum.CaptchaIsRequired){
            dispatch(ActivateCaptcha())
        }
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}


export const authLogOut = () : ThunkType =>
    async (dispatch,getState) => {
    let data = await AuthAPI.AuthLogOut()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(AuthActions.SetAuthUserData(null, null, null, false))
    }
}


export const ActivateCaptcha = () =>
    async (dispatch: Dispatch<AuthActionsType>) => {
    let data = await AuthAPI.Captcha()
    dispatch(AuthActions.SetCaptchaImg(data.url))
}


export default AuthReducer