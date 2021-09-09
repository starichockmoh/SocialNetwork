import {ActionsType, NullableType} from "../../Types/Types";


let InitialState = {
    CurrentUserId: null as NullableType<number>,
    email: null as NullableType<string>,
    login: null as NullableType<string>,
    isAuth: false,
    CurrentUserPhoto: null as NullableType<string>,
    CaptchaImg: '',
    isLoading: false
}
export type InitialStateType = typeof InitialState

let AuthReducer = (state = InitialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }

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

type AuthActionsType = ActionsType<typeof AuthActions>
export type SetCurrentUserProfileActionType = {
    type: "SET_CURRENT_USER_PROFILE"
    CurrentUserPhoto: NullableType<string>
}

export const AuthActions = {
    SetAuthUserData: (CurrentUserId: null | number, email: null | string, login: null | string, isAuth: boolean) => ({
        type: "SET_AUTH_USER_DATA",
        data: {CurrentUserId, email, login, isAuth},
    } as const),
    SetCurrentUserProfile: (CurrentUserPhoto: null | string) => ({
        type: "SET_CURRENT_USER_PROFILE", CurrentUserPhoto
    } as const),
    SetCaptchaImg: (CaptchaImg: string) => ({type: "SET_CAPTCHA_IMG", CaptchaImg} as const),
    SetLoading: (isLoading: boolean) => ({type: "AUTH/SET_LOADING", isLoading} as const)
}


export default AuthReducer