import React from "react";
import s from "./FormControl.module.css";
import {FieldCreator} from "./FieldCreator";
import {SpecialFormCreator} from "./FormControl";


const CaptchaControl = (props) => {
    const SpecialInput = SpecialFormCreator('input')
    return <div className={s.CaptchaControl}>
        <span className={s.CaptchaSpan}>Write captcha</span>
        <img className={s.CaptchaImg} src={props.CaptchaImg} alt={''}/>
        {FieldCreator('captcha',[], SpecialInput,'Enter captcha',{className: s.CaptchaInput})}
    </div>
}

export default CaptchaControl