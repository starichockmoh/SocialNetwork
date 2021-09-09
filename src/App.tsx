import React, {useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

import {ActivateAppSagaAC} from "./Redux/Sagas/AppSagas";
import {withSuspense} from "./HOC/withSuspense";
import store, {AppStateType} from "./Redux/ReduxStore";

import styles from "./App.module.css"
import 'antd/dist/antd.css';

import {Layout} from 'antd';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import AppPreloader from "./Components/Common/Preloader/AppPreloader";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import DialogsPage from "./Components/Dialogs/DialogsPage/DialogsPage";
import MessagesPage from "./Components/Dialogs/MessagesPage/MessagesPage";
import Exit from "./Components/Common/Exit";
import {Footer} from "antd/es/layout/layout";
import {AppMenu} from "./Components/LayOuts/Menu/Menu";
import {MiniApps} from "./Components/MiniApps/MiniApps";
import {TestApp2} from "./Components/MiniApps/Apps/TestApp2/TestApp2";
import { TestApp3 } from './Components/MiniApps/Apps/TestApp3/TestApp_3';
import { TestApp } from './Components/MiniApps/Apps/TestApp/TestApp';
import {TestApp1} from "./Components/MiniApps/Apps/TestApp1/TestApp1";
import {TestApp4} from "./Components/MiniApps/Apps/TestApp4/TestApp4";
import {TestingUseState} from "./Hooks/TestingUseState";


const Music = React.lazy(() => import("./Components/Music/Music"));
const UsersPage = React.lazy(() => import("./Components/Users/UsersContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const NewsPage = React.lazy(() => import("./Components/News/NewsPage"));
const UserExit = React.lazy(() => import("./Components/Common/Exit"));
const ChatPage = React.lazy(() => import("./Components/Dialogs/ChatPage/ChatPage"));


const {Header, Content} = Layout;
const {startInitApp, setGlobalError} = ActivateAppSagaAC

const App: React.FC = () => {
    const dispatch = useDispatch()
    const initialized =useSelector((state: AppStateType) => state.App.initialized)
    const catchAllErrors = (data: any) => {
        if (data.reason.response) {
            let httpCode = data.reason.response.status
            let errorMessage = data.reason.response.data.message ? data.reason.response.data.message : ''
            dispatch(setGlobalError('Error: ' + httpCode + ' ' + errorMessage))
        }
    }
    useEffect(() => {
        dispatch(startInitApp())
        window.addEventListener("unhandledrejection",catchAllErrors)
        return () => {
            window.removeEventListener("unhandledrejection", catchAllErrors)
        }
    }, [])
    if (!initialized) {
        return <AppPreloader/>
    }
    return <LayOut/>
}


const LayOut: React.FC = () => {
    const globalError =useSelector((state: AppStateType) => state.App.globalError)
    const isAuth = useSelector((state: AppStateType) => state.Auth.isAuth)
    return <Layout>
        <Header className={styles.Header}>
            <HeaderContainer/>
        </Header>
        <Layout>
            <AppMenu isAuth={isAuth}/>
            <Layout style={{padding: '0 24px 24px'}}>
                <Content className={styles.site_layout_content}>
                    <SuspenseMainContent globalError={globalError}/>
                </Content>
            </Layout>
        </Layout>
        <Footer className={styles.Footer}>
            Social Network 2021 Created by Ilia
        </Footer>
    </Layout>
}


const MainContent: React.FC<{ globalError: string | null }> = (props) => {
    return <div className={styles.appWrapperContent}>
        {props.globalError && <div className={styles.globalError}>{props.globalError}</div>}
        <Switch>
            <Route path='/exit'><Exit/></Route>
            <Route path='/dialogs_page' render={() => <DialogsPage/>}/>
            <Route path='/dialogs/:dialogId?' render={() => <MessagesPage/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/users' render={() => <UsersPage title={'Users'}/>}/>
            <Route path='/news' render={() => <NewsPage/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/friends' render={() => <FriendsContainer title={'Friends'}/>}/>
            <Route path='/chat' render={() => <ChatPage/>}/>
            <Route path='/mini_apps' render={() => <MiniApps/>}/>
            <Route path='/test' render={() => <TestApp/>}/>
            <Route path='/test1' render={() => <TestApp1/>}/>
            <Route path='/test2' render={() => <TestApp2/>}/>
            <Route path='/test3' render={() => <TestApp3/>}/>
            <Route path='/test4' render={() => <TestApp4/>}/>
            <Redirect exact from="/FirstProject" to="/profile"/>
            <Redirect exact from="/" to="/profile"/>
            <Route path='/*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    </div>
}
const SuspenseMainContent = withSuspense(MainContent)

const AppContainer: any = compose(withRouter)(App)

export const FirstReactApp = () => {
    return <React.StrictMode>
            <Provider store={store}>
               <BrowserRouter>
                   <AppContainer/>
               </BrowserRouter>
            </Provider>
    </React.StrictMode>
}




// type MapStateToPropsType = {
//     initialized: boolean
//     globalError: string | null
//     isAuth: boolean
// }
// type MapDispatchToPropsType = {
//     startInitApp: () => ({ type: "START_INIT_APP" })
//     setGlobalError: (error: string | null) => ({ type: "SET_GLOBAL_ERROR", error: string | null })
//
// }
// type AppPropsType = MapDispatchToPropsType & MapStateToPropsType
// let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
//     initialized: state.App.initialized,
//     globalError: state.App.globalError,
//     isAuth: state.Auth.isAuth,
// })
// class App extends React.Component<AppPropsType> {
//     catchAllErrors = (data: any) => {
//         if (data.reason.response) {
//             let httpCode = data.reason.response.status
//             let errorMessage = data.reason.response.data.message ? data.reason.response.data.message : ''
//             this.props.setGlobalError('Error: ' + httpCode + ' ' + errorMessage)
//         }
//     }
//
//     componentDidMount() {
//         this.props.startInitApp()
//         window.addEventListener("unhandledrejection", this.catchAllErrors)
//     }
//
//     componentWillUnmount() {
//         window.removeEventListener("unhandledrejection", this.catchAllErrors)
//     }
//
//     render() {
//         if (!this.props.initialized) {
//             return <AppPreloader/>
//         }
//         return <LayOut/>
//
//     }
// }
