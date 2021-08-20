import {call, put, delay, takeEvery, take} from "redux-saga/effects";
import {WatchAuthSaga} from "./LoginFlowSagas";
import {AppActions} from "../Reducers/AppReducer";
import {NullableType} from "../../Types/Types";

export const ActivateAppSagaAC = {
    startInitApp: () => ({type: "START_INIT_APP"} as const),
    setGlobalError: (error:  NullableType<string>) => ({type: "SET_GLOBAL_ERROR", error} as const)
}


type setGlobalErrorType = ReturnType<typeof ActivateAppSagaAC.setGlobalError>
export function* initializedAppSaga() {
    yield take ("START_INIT_APP")
    yield call(WatchAuthSaga)
    yield put(AppActions.initializedSuccess())
    yield takeEvery("SET_GLOBAL_ERROR", function* (action:setGlobalErrorType){
        yield put(AppActions.showGlobalError(action.error))
        yield delay(5000)
        yield put(AppActions.showGlobalError(null))
    })
}

