import React from "react";
import './App.css';
import store from "./Redux/ReduxStore";
import {HashRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/Reducers/AppReducer";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import AppPreloader from "./Components/Common/Preloader/AppPreloader";
import {withSuspense} from "./HOC/withSuspense";

const Music = React.lazy(() => import("./Components/Music/Music"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const Friends = React.lazy(() => import("./Components/Friends/Friends"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const NewsContainer = React.lazy(() => import("./Components/News/NewsContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <AppPreloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <SuspenseMainContent/>
            </div>
        )
    }
}
const MainContent = () => {
    return <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/news' render={() => <NewsContainer/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
        <Route exact path='/' render={() => <ProfileContainer/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/login' render={() => <Login/>}/>
        <Route exact path='/friends' render={() => <Friends/>}/>
    </div>
}
const SuspenseMainContent = withSuspense(MainContent)



let mapStateToProps = (state) => ({
    initialized: state.App.initialized
})
const AppContainer = compose(
    connect(mapStateToProps, {initializedApp}),
    withRouter,
)(App)

const FirstReactApp = () => {
    return <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default FirstReactApp


