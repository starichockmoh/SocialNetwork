import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';

import React from "react";
import styles from "./App.module.css"
import store, {AppStateType} from "./Redux/ReduxStore";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp, setGlobalError} from "./Redux/Reducers/AppReducer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import AppPreloader from "./Components/Common/Preloader/AppPreloader";
import {withSuspense} from "./HOC/withSuspense";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import DialogsPage from "./Components/Dialogs/DialogsPage/DialogsPage";
import MessagesPage from "./Components/Dialogs/MessagesPage/MessagesPage";
import {Footer} from "antd/es/layout/layout";
import {AppMenu} from "./Components/LayOuts/Menu/Menu";


const Music = React.lazy(() => import("./Components/Music/Music"));
const UsersPage = React.lazy(() => import("./Components/Users/UsersContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const NewsPage = React.lazy(() => import("./Components/News/NewsPage"));
const UserExit = React.lazy(() => import("./Components/Common/Exit"));
const ChatPage = React.lazy(() => import("./Components/Dialogs/ChatPage/ChatPage"));
const {Header, Content} = Layout;

type MapStateToPropsType = {
    initialized: boolean
    globalError: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    initializedApp: () => void
    setGlobalError: (error: string | null) => void
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType


class App extends React.Component<AppPropsType> {
    catchAllErrors = (data: any) => {
        if (data.reason.response) {
            let httpCode = data.reason.response.status
            let errorMessage = data.reason.response.data.message ? data.reason.response.data.message : ''
            this.props.setGlobalError('Error: ' + httpCode + ' ' + errorMessage)
        }
    }

    componentDidMount() {
        this.props.initializedApp()
        window.addEventListener("unhandledrejection", this.catchAllErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <AppPreloader/>
        }
        return <LayOut globalError={this.props.globalError} isAuth={this.props.isAuth}/>

    }
}


type LayOutProps = {
    globalError: string | null
    isAuth: boolean
}
const LayOut: React.FC<LayOutProps> = (props) => {
    return <Layout>
        <Header className={styles.Header}>
            <HeaderContainer/>
        </Header>
        <Layout>
            <AppMenu isAuth={props.isAuth}/>
            <Layout style={{padding: '0 24px 24px'}}>
                <Content className={styles.site_layout_content}>
                    <SuspenseMainContent globalError={props.globalError}/>
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
            <Route path='/exit' render={() => <UserExit/>}/>
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
            <Redirect exact from="/" to="/profile"/>
            <Route path='/*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    </div>
}
const SuspenseMainContent = withSuspense(MainContent)


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.App.initialized,
    globalError: state.App.globalError,
    isAuth: state.Auth.isAuth,
})
const AppContainer: any = compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        initializedApp,
        setGlobalError
    }),
    withRouter
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


