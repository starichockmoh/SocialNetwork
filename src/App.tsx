import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

import React from "react";
import './App.css';
import store, {AppStateType} from "./Redux/ReduxStore";
import {BrowserRouter, HashRouter, Route, withRouter, Switch, Redirect, NavLink} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp, setGlobalError} from "./Redux/Reducers/AppReducer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import AppPreloader from "./Components/Common/Preloader/AppPreloader";
import {withSuspense} from "./HOC/withSuspense";
import s from "./Components/Navbar/Navbar.module.css";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import DialogsPage from "./Components/Dialogs/DialogsPage/DialogsPage";
import MessagesPage from "./Components/Dialogs/MessagesPage/MessagesPage";




const Music = React.lazy(() => import("./Components/Music/Music"));
const UsersPage = React.lazy(() => import("./Components/Users/UsersContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const NewsPage = React.lazy(() => import("./Components/News/NewsPage"));
const UserExit = React.lazy(() => import("./Components/Common/Exit"));
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

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
        return (<div>
                <LayOut globalError={this.props.globalError} isAuth={this.props.isAuth}/>
            </div>
        )
    }
}

type LayOutProps = {
    globalError: string | null
    isAuth: boolean
}
const LayOut: React.FC<LayOutProps> = (props) => {
    return <Layout>
        <Header className="header">
            <HeaderContainer/>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="Profile">
                        <Menu.Item key="1"><NavLink activeClassName={s.active} exact
                                                    to='/profile'>Profile</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink activeClassName={s.active}
                                                    to='/friends'>Friends</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink activeClassName={s.active} to='/music'>Music</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink activeClassName={s.active}
                                                    to='/dialogs_page'>Messages</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Social">
                        <Menu.Item key="5"><NavLink activeClassName={s.active} to='/users'>Find
                            Users</NavLink></Menu.Item>
                        <Menu.Item key="6"><NavLink activeClassName={s.active} to='/news'>News</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Other">
                        <Menu.Item key="9"><NavLink activeClassName={s.active}
                                                    to='/settings'> Settings</NavLink></Menu.Item>
                        {props.isAuth &&
                        <Menu.Item key="10"><NavLink activeClassName={s.active} to='/exit'> Exit</NavLink></Menu.Item>}
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item><NavLink to='/profile'>Home</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item><NavLink to='/dialogs_page'>Dialogs</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <SuspenseMainContent globalError={props.globalError}/>
                </Content>
            </Layout>
        </Layout>
    </Layout>
}


const MainContent: React.FC<{ globalError: string | null }> = (props) => {

    return <div className='app-wrapper-content'>
        {props.globalError && <div className='globalError'>{props.globalError}</div>}
        <Switch>
            <Route path='/exit' render={() => <UserExit/>}/>
            <Route path='/dialogs_page' render={() => <DialogsPage/>}/>
            <Route path ='/dialogs/:dialogId?' render = {() => <MessagesPage/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/users' render={() => <UsersPage title={'Пользователи'}/>}/>
            <Route path='/news' render={() => <NewsPage/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/friends' render={() => <FriendsContainer title={'Друзья'}/>}/>
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


