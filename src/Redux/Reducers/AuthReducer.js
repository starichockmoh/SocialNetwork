import {AuthApi, Captcha, UserAPI} from "../../Api/Api";
import {stopSubmit} from "redux-form";


const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_CAPTCHA_IMG = 'SET_CAPTCHA_IMG'

let InitialState = {
    CurrentUserId: null,
    email: null,
    login: null,
    isAuth: false,
    CurrentUserPhoto: null,
    CaptchaImg: ''
}

let AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_CURRENT_USER_PROFILE:
            return {
                ...state,
                CurrentUserPhoto: action.CurrentUserPhoto
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

const SetAuthUserData = (CurrentUserId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {CurrentUserId, email, login, isAuth}
})
export const SetCurrentUserProfile = (CurrentUserPhoto) => ({type: SET_CURRENT_USER_PROFILE, CurrentUserPhoto})
const SetCaptchaImg = (CaptchaImg) => ({type: SET_CAPTCHA_IMG, CaptchaImg})



export const authUser = () => async (dispatch) => {
    let response = await AuthApi.AuthUser()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(SetAuthUserData(id, email, login, true))
        let ProfileResponse = await UserAPI.getUserProfile(response.data.id)
        dispatch(SetCurrentUserProfile(ProfileResponse.photos.large))
    }
}

export const authLogin = (email, password, rememberMe,captcha) => async (dispatch) => {
    let response = await AuthApi.AuthLogin(email, password, rememberMe,captcha)
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

export const authLogOut = () => async (dispatch) => {
    let response = await AuthApi.AuthLogOut()
    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false))
    }
}
export const ActivateCaptcha = () => async (dispatch) => {
    let response = await Captcha()
    dispatch(SetCaptchaImg(response.data.url))
}


export default AuthReducer