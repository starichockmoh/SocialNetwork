import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {authLogOut} from "../../Redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/ReduxStore";

const UserExit: React.FC = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.Auth.isAuth)
    const LogOutUser = () => {
        dispatch(authLogOut())
    }
    if (isAuth) {
        return <div>
            <div>
                Are you sure?
            </div>
            <button onClick={LogOutUser}>Yes</button>
        </div>
    } else {
        return <Redirect to={"/login"}/>
    }

}
export default UserExit