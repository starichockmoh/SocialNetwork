import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {authLogin} from "../../Redux/Reducers/AuthReducer";
import LoginReduxForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/ReduxStore";


export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC= (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.Auth.isAuth)
    const CaptchaImg = useSelector((state: AppStateType) => state.Auth.CaptchaImg)
    const onSubmit = (dataForm: LoginFormDataType) => {
        dispatch(authLogin(dataForm.email, dataForm.password, dataForm.rememberMe, dataForm.captcha=''))
    }
    if (isAuth) {
        return <Redirect to={"/"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm CaptchaImg={CaptchaImg} onSubmit={onSubmit}/>
    </div>
}


export default Login