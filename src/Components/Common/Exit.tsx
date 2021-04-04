import React from "react";
import {connect} from "react-redux";
import {authLogOut} from "../../Redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/ReduxStore";

type PropsType = {
    isAuth: boolean
    authLogOut: () => void
}
const UserExit: React.FC<PropsType> = (props) => {
    const LogOutUser = () => {
        props.authLogOut()
    }
    if (props.isAuth) {
        return <div>
                Are you sure?
                <button onClick={LogOutUser}>Yes</button>
            </div>
    }
    else {
        return <Redirect to={"/login"}/>
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.Auth.isAuth,
    }
}
export default connect(mapStateToProps, {authLogOut})(UserExit)