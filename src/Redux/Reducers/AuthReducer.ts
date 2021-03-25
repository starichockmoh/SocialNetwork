import {AuthAPI, Captcha, UserAPI} from "../../Api/Api";
import {stopSubmit} from "redux-form";

const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_CAPTCHA_IMG = 'SET_CAPTCHA_IMG'

export type InitialStateType = {
    CurrentUserId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    CurrentUserPhoto: null
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

let AuthReducer = (state = InitialState, action:any):InitialStateType => {
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
const SetAuthUserData = (CurrentUserId: null | number, email: null | string, login: null | string, isAuth: boolean):SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    data: {CurrentUserId, email, login, isAuth},
})

type SetCurrentUserProfileActionType = {
    type: typeof SET_CURRENT_USER_PROFILE
    CurrentUserPhoto: null | string
}
export const SetCurrentUserProfile = (CurrentUserPhoto: null | string):SetCurrentUserProfileActionType => ({
    type: SET_CURRENT_USER_PROFILE, CurrentUserPhoto})

type SetCaptchaImgActionType = {
    type: typeof SET_CAPTCHA_IMG
    CaptchaImg: string
}
const SetCaptchaImg = (CaptchaImg:string):SetCaptchaImgActionType => ({type: SET_CAPTCHA_IMG, CaptchaImg})



export const authUser = () => async (dispatch: Function) => {
    let response = await AuthAPI.AuthUser()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(SetAuthUserData(id, email, login, true))
        let ProfileResponse = await UserAPI.getUserProfile(response.data.id)
        dispatch(SetCurrentUserProfile(ProfileResponse.photos.large))
    }
}

export const authLogin = (email: string, password: string, rememberMe: boolean,captcha: string | null) => async (dispatch: Function) => {
    let response = await AuthAPI.AuthLogin(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(authUser())
        dispatch(SetCaptchaImg(''))
    }
    else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        if (errorMessage === 'Incorrect anti-bot symbols'){
            dispatch(ActivateCaptcha())
        }
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const authLogOut = () => async (dispatch: Function) => {
    let response = await AuthAPI.AuthLogOut()
    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false))
    }
}
export const ActivateCaptcha = () => async (dispatch: Function) => {
    let response = await Captcha()
    dispatch(SetCaptchaImg(response.data.url))
}


export default AuthReducer