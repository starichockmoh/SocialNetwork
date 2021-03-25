import {SpecialFormCreator} from "../Common/FormsControls/FormControl";
import {reduxForm} from "redux-form";
import {required} from "../../Utils/Validators/validators";
import styles from "./../Common/FormsControls/FormControl.module.css"
import React from "react";
import {FieldCreator} from "../Common/FormsControls/FieldCreator";
import CaptchaControl from "../Common/FormsControls/CaptchaControl";

const SpecialInput = SpecialFormCreator('input')

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {FieldCreator('email',[required], SpecialInput,'Enter your email',null)}
        {FieldCreator('password',[required], SpecialInput,'Enter your password',null)}
        {FieldCreator('rememberMe',null, SpecialInput,null,{type: 'checkbox'},'rememberMe')}
        {props.error && props.error !== 'Incorrect anti-bot symbols' && <div className={styles.someoneError}>
            <span>{props.error}</span>
        </div>}
        {props.CaptchaImg !== '' ?  <CaptchaControl CaptchaImg={props.CaptchaImg}/>:null}
        <div>
            <button>LOG IN</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm