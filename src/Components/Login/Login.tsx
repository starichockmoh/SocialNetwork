import React from "react";
import {connect} from "react-redux";
import {authLogin} from "../../Redux/Reducers/AuthReducer";
import LoginReduxForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/ReduxStore";
import {FormSubmitHandler} from "redux-form";


type MapStateToPropsType = {
    isAuth: boolean
    CaptchaImg: string
}
type MapDispatchToPropsType = {
    authLogin: (email: string, password: string, rememberMe: boolean,captcha: string) => void
}
type OwnProps = {

}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (dataForm: LoginFormDataType) => {
        props.authLogin(dataForm.email, dataForm.password, dataForm.rememberMe, dataForm.captcha='')
    }
    if (props.isAuth) {
        return <Redirect to={"/"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm CaptchaImg={props.CaptchaImg} onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    isAuth: state.Auth.isAuth,
    CaptchaImg: state.Auth.CaptchaImg

})
export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>( mapStateToProps, {authLogin})(Login)