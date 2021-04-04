import {SpecialFormCreator} from "../Common/FormsControls/FormControl";
import {reduxForm,  InjectedFormProps} from "redux-form";
import {required} from "../../Utils/Validators/validators";
import styles from "./../Common/FormsControls/FormControl.module.css"
import React from "react";
import {FieldCreator} from "../Common/FormsControls/FieldCreator";
import CaptchaControl from "../Common/FormsControls/CaptchaControl";
import {LoginFormDataType} from "./Login";

const SpecialInput = SpecialFormCreator('input')


type PropsType = {
    CaptchaImg: string // the custom prop

}



const LoginForm: React.FC<PropsType & InjectedFormProps<LoginFormDataType, PropsType>> = ({handleSubmit,CaptchaImg,error }) => {
    return <form onSubmit={handleSubmit}>
        {FieldCreator('email',[required], SpecialInput,'Enter your email',null)}
        {FieldCreator('password',[required], SpecialInput,'Enter your password',null)}
        {FieldCreator('rememberMe',null, SpecialInput,'',{type: 'checkbox'},'rememberMe')}
        {error && error !== 'Incorrect anti-bot symbols' && <div className={styles.someoneError}>
            <span>{error}</span>
        </div>}
        {CaptchaImg !== '' ?  <CaptchaControl CaptchaImg={CaptchaImg}/>:null}
        <div>
            <button>LOG IN</button>
        </div>
    </form>
}


const LoginReduxForm = reduxForm<LoginFormDataType, PropsType>({form: 'login'})(LoginForm)

export default LoginReduxForm