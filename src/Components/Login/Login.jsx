import React from "react";
import {connect} from "react-redux";
import {authLogin} from "../../Redux/Reducers/AuthReducer";
import LoginReduxForm from "./LoginForm";
import {Redirect} from "react-router-dom";



const Login = (props) => {
    const onSubmit = (dataForm) => {
        props.authLogin(dataForm.email, dataForm.password, dataForm.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})
export default connect( mapStateToProps, {authLogin})(Login)