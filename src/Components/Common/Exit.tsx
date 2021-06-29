import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {authLogOut} from "../../Redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/ReduxStore";
import {Button, PageHeader} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";

const UserExit: React.FC = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.Auth.isAuth)
    const LogOutUser = () => {
        dispatch(authLogOut())
    }
    if (isAuth) {
        return <div style={{marginLeft:10}}>
            <PageHeader title={<>Exit <PoweroffOutlined/></>}/>
            <div>
                Are you sure?
            </div>
            <Button onClick={LogOutUser}>Yes</Button>
        </div>
    } else {
        return <Redirect to={"/login"}/>
    }

}
export default UserExit