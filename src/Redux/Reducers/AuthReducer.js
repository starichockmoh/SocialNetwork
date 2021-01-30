import {AuthApi, UserAPI} from "../../Api/Api";
import {stopSubmit} from "redux-form";


const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let InitialState = {
    CurrentUserId: null,
    email: null,
    login: null,
    isAuth: false,
    CurrentUserPhoto: null
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
        default:
            return state

    }
}

const SetAuthUserData = (CurrentUserId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {CurrentUserId, email, login, isAuth}
})
const SetCurrentUserProfile = (CurrentUserPhoto) => ({type: SET_CURRENT_USER_PROFILE, CurrentUserPhoto})


export const authUser = () => async (dispatch) => {
    let response = await AuthApi.AuthUser()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(SetAuthUserData(id, email, login, true))
        let ProfileResponse = await UserAPI.getUserProfile(response.data.id)
        dispatch(SetCurrentUserProfile(ProfileResponse.photos.small))
    }
}

export const authLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthApi.AuthLogin(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authUser())
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }

}

export const authLogOut = () => async (dispatch) => {
    let response = await AuthApi.AuthLogOut()
    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false))
    }
}


export default AuthReducer