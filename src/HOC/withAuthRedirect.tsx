import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";

let mapStateToPropsForRedirect = (state:AppStateType) => {
    return {
        isAuth: state.Auth.isAuth
    }
}
export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<{isAuth:boolean}> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"}/>
            }
            return <Component {...this.props}/>
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}