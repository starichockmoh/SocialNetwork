import {call, put, SagaReturnType, take, fork} from "redux-saga/effects";
import {AuthAPI, UserAPI} from "../../Api/Api";
import {ResultCodesEnum} from "../../Types/Types";
import {UserActions} from "../Reducers/UsersReducer";
import {AuthActions} from "../Reducers/AuthReducer";
import {stopSubmit} from "redux-form";


export const ActivateLoginFlowSagasActions = {
    ActivateLoginFlowAC: (email: string, password: string, rememberMe: boolean,captcha: string) => ({
        type: "LOGIN", email, password, rememberMe, captcha
    }),
    LogOutAC: () => ({type: "LOGOUT"})
}

type LoginData = SagaReturnType<typeof AuthAPI.AuthLogin>
export function* WatchLoginSaga() {
    while (true){
        const {email, password, rememberMe, captcha} = yield take("LOGIN")
        const data: LoginData = yield call(AuthAPI.AuthLogin, email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodesEnum.Success){
            yield fork(WatchAuthSaga)
            yield put(AuthActions.SetCaptchaImg(''))

        }
        else {
            let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error'
            if (data.resultCode === ResultCodesEnum.CaptchaIsRequired){
                yield call(ActivateCaptchaSaga)
            }
            yield put(stopSubmit('login', {_error: errorMessage}))
        }
    }
}


type AuthData = SagaReturnType<typeof AuthAPI.AuthUser >
type ProfileData = SagaReturnType<typeof UserAPI.getUserProfile>
type GetFriendsData = SagaReturnType<typeof UserAPI.getUsers>
export function* WatchAuthSaga() {
    const data: AuthData = yield call(AuthAPI.AuthUser)
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data
        yield put(AuthActions.SetAuthUserData(id, email, login, true))
        const ProfileResponse: ProfileData = yield call(UserAPI.getUserProfile, data.data.id)
        yield put(AuthActions.SetCurrentUserProfile(ProfileResponse.photos.large))
        const FiendsData: GetFriendsData = yield call(UserAPI.getUsers, 1,10,true,'')
        yield put(UserActions.setTotalUsersCount(FiendsData.totalCount, true))
        yield put(UserActions.setFilter(false, ''))
    }
}


type LogOutData = SagaReturnType<typeof AuthAPI.AuthLogOut>
export function* WatchLogOutSaga() {
    while (true){
        yield take("LOGOUT")
        const data: LogOutData = yield call(AuthAPI.AuthLogOut)
        if (data.resultCode === ResultCodesEnum.Success) {
            yield put(AuthActions.SetAuthUserData(null, null, null, false))
        }
    }
}

type CaptchaDataType = SagaReturnType<typeof AuthAPI.Captcha>


function* ActivateCaptchaSaga() {
    const data: CaptchaDataType = yield call(AuthAPI.Captcha)
    yield put(AuthActions.SetCaptchaImg(data.url))
}



