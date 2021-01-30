import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import DialogReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import NewsReducer from "./Reducers/NewsReducer";
import NavbarReducer from "./Reducers/NavbarReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import AppReducer from "./Reducers/AppReducer";


let Reducers = combineReducers({
    DialogsPage : DialogReducer,
    ProfilePage: ProfileReducer,
    NewsPage: NewsReducer,
    NavbarPage: NavbarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer,
    App: AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store

window.__store__ = store