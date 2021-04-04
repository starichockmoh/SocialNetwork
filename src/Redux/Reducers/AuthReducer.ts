import {AuthAPI, UserAPI} from "../../Api/Api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {ResultCodesEnum} from "../../Types/Types";
import {Dispatch} from "redux";

const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_CAPTCHA_IMG = 'SET_CAPTCHA_IMG'

export type InitialStateType = {
    CurrentUserId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    CurrentUserPhoto: null | string
    CaptchaImg: string
}

let InitialState: InitialStateType = {
    CurrentUserId: null,
    email: null,
    login: null,
    isAuth: false,
    CurrentUserPhoto: null,
    CaptchaImg: '',
}

let AuthReducer = (state = InitialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_CURRENT_USER_PROFILE:
            return {
                ...state,
                CurrentUserPhoto: action.CurrentUserPhoto,
            }
        case SET_CAPTCHA_IMG:
            return {
                ...state,
                CaptchaImg: action.CaptchaImg
            }
        default:
            return state

    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>
type ActionsType = SetAuthUserDataActionType | SetCurrentUserProfileActionType | SetCaptchaImgActionType

type StopSubmitType = ReturnType<typeof stopSubmit>
type DataType = {
    CurrentUserId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    data: DataType
}
export type SetCurrentUserProfileActionType = {
    type: typeof SET_CURRENT_USER_PROFILE
    CurrentUserPhoto: null | string
}
type SetCaptchaImgActionType = {
    type: typeof SET_CAPTCHA_IMG
    CaptchaImg: string
}

const SetAuthUserData = (CurrentUserId: null | number, email: null | string, login: null | string, isAuth: boolean):SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    data: {CurrentUserId, email, login, isAuth},
})
export const SetCurrentUserProfile = (CurrentUserPhoto: null | string):SetCurrentUserProfileActionType => ({
    type: SET_CURRENT_USER_PROFILE, CurrentUserPhoto})
const SetCaptchaImg = (CaptchaImg:string):SetCaptchaImgActionType => ({type: SET_CAPTCHA_IMG, CaptchaImg})

export const authUser = () : ThunkType  =>
    async (dispatch,getState) => {
    let response = await AuthAPI.AuthUser()
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data
        dispatch(SetAuthUserData(id, email, login, true))
        let ProfileResponse = await UserAPI.getUserProfile(response.data.id)
        dispatch(SetCurrentUserProfile(ProfileResponse.photos.large))
    }
}

export const authLogin = (email: string, password: string, rememberMe: boolean,captcha: string) : ThunkAction<Promise<void>, AppStateType, any,
    ActionsType | StopSubmitType> =>
    async (dispatch,getState) => {
    let data = await AuthAPI.AuthLogin(email, password, rememberMe,captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(authUser())
        dispatch(SetCaptchaImg(''))
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
        dispatch(SetAuthUserData(null, null, null, false))
    }
}
export const ActivateCaptcha = () => async (dispatch: Dispatch<ActionsType>) => {
    let data = await AuthAPI.Captcha()
    dispatch(SetCaptchaImg(data.url))
}


export default AuthReducer