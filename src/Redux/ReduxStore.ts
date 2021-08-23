import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import DialogReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import NavbarReducer from "./Reducers/NavbarReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import {reducer as formReducer} from "redux-form";
import AppReducer from "./Reducers/AppReducer";
import NewsReducer from "./Reducers/NewsReducer";
import ChatReducer from "./Reducers/ChatReducer";
import {watchMessages} from "./Sagas/DialogsSagas";
import {all} from "redux-saga/effects";
import {StopWSSagaWatcher, WSSagaWatcher} from "./Sagas/ChatSagas";
import {WatchLoginSaga, WatchLogOutSaga} from "./Sagas/LoginFlowSagas";
import {initializedAppSaga} from "./Sagas/AppSagas";
import {AimGameReducer} from "./Reducers/AimGameReducer";


const MainReducer = combineReducers({
    DialogsPage : DialogReducer,
    ProfilePage: ProfileReducer,
    NewsPage: NewsReducer,
    NavbarPage: NavbarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer,
    App: AppReducer,
    Chat: ChatReducer,
    Aim: AimGameReducer
})


export type AppStateType = ReturnType<typeof MainReducer>
const sagaMiddleware = createSagaMiddleware()
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(MainReducer, composeEnhancers(applyMiddleware(
    thunkMiddleware,
    sagaMiddleware
    )));

function* rootSaga() {
    yield all([
        watchMessages(),
        WSSagaWatcher(),
        StopWSSagaWatcher(),
        WatchLoginSaga(),
        initializedAppSaga(),
        WatchLogOutSaga()
    ])
}
sagaMiddleware.run(rootSaga)

export default store

// @ts-ignore
window.__store__ = store