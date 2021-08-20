import React from "react";
import {useDispatch, useSelector} from "react-redux";
import LoginReduxForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/ReduxStore";
import styles from './Login.module.css'
import {PageHeader} from "antd";
import {LoginOutlined} from "@ant-design/icons";
import {ActivateLoginFlowSagasActions} from "../../Redux/Sagas/LoginFlowSagas";


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
        dispatch(ActivateLoginFlowSagasActions.ActivateLoginFlowAC(dataForm.email, dataForm.password, dataForm.rememberMe, dataForm.captcha))
    }
    if (isAuth) {
        return <Redirect to={"/"}/>
    }
    return <div className={styles.LoginPage}>
        <PageHeader title={<>Login <LoginOutlined /></>}/>
        <LoginReduxForm CaptchaImg={CaptchaImg} onSubmit={onSubmit}/>
    </div>
}


export default Login