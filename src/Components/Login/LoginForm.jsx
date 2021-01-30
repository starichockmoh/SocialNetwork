import {SpecialFormCreator} from "../Common/FormsControls/FormControl";
import {reduxForm} from "redux-form";
import {required} from "../../Utils/Validators/validators";
import s from "./../Common/FormsControls/FormControl.module.css"
import React from "react";
import {FieldCreator} from "../Common/FormsControls/FieldCreator";

const SpecialInput = SpecialFormCreator('input')

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {FieldCreator('email',[required], SpecialInput,'Enter your email',null)}
        {FieldCreator('password',[required], SpecialInput,'Enter your password',null)}
        {FieldCreator('rememberMe',null, SpecialInput,null,{type: 'checkbox'},'rememberMe')}
        {props.error && <div className={s.someoneError}>
            <span>{props.error}</span>
        </div>}
        <div>
            <button>LOG IN</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm