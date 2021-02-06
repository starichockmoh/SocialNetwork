import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ActivateCaptcha, authLogin} from "../../Redux/Reducers/AuthReducer";
import LoginReduxForm from "./LoginForm";
import s from './Login.module.css'
import {Redirect} from "react-router-dom";



class Login extends React.Component {
    componentDidMount() {
        this.props.ActivateCaptcha()
    }
    render() {
        const onSubmit = (dataForm) => {
            this.props.authLogin(dataForm.email, dataForm.password, dataForm.rememberMe)
        }
        if (this.props.isAuth) {
            return <Redirect to={"/"}/>
        }
        return <div>
            <h1>LOGIN</h1>
            <img className={s.CaptchaImg} src={this.props.CaptchaImg}/>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    CaptchaImg: state.Auth.CaptchaImg

})
export default connect( mapStateToProps, {authLogin, ActivateCaptcha})(Login)