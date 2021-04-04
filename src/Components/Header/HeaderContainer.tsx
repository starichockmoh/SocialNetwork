import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authLogOut} from "../../Redux/Reducers/AuthReducer";
import {AppStateType} from "../../Redux/ReduxStore";


type MapStateToPropsType = {
    login: string | null
    userId:  number | null
    isAuth: boolean
    CurrentUserPhoto:  string | null
}
type MapDispatchToPropsType = {

    authLogOut: () => void
}
type OwnPropsType = {
}
type PropsType =  OwnPropsType & MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<PropsType>{
    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state: AppStateType):MapStateToPropsType =>{
    return{
        login: state.Auth.login,
        userId: state.Auth.CurrentUserId,
        isAuth: state.Auth.isAuth,
        CurrentUserPhoto: state.Auth.CurrentUserPhoto
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {authLogOut})(HeaderContainer)