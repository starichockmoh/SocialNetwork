import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authLogOut} from "../../Redux/Reducers/AuthReducer";


class HeaderContainer extends React.Component{
    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) =>{
    return{
        login: state.Auth.login,
        userId: state.Auth.CurrentUserId,
        isAuth: state.Auth.isAuth,
        CurrentUserPhoto: state.Auth.CurrentUserPhoto
    }
}

export default connect(mapStateToProps,
    {authLogOut})(HeaderContainer)