import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import DialogReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import NavbarReducer from "./Reducers/NavbarReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import AppReducer from "./Reducers/AppReducer";
import NewsReducer from "./Reducers/NewsReducer";
import ChatReducer from "./Reducers/ChatReducer";


let MainReducer = combineReducers({
    DialogsPage : DialogReducer,
    ProfilePage: ProfileReducer,
    NewsPage: NewsReducer,
    NavbarPage: NavbarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer,
    App: AppReducer,
    Chat: ChatReducer
})

type MainReducerType = typeof MainReducer
export type AppStateType = ReturnType<MainReducerType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(MainReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store

// @ts-ignore
window.__store__ = store