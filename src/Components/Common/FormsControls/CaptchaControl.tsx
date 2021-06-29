import React from "react";
import s from "./FormControl.module.css";
import {FieldCreator} from "./FieldCreator";
import {InputField, SpecialFormCreator} from "./FormControl";


const CaptchaControl: React.FC<{CaptchaImg:string}> = (props) => {
    return <div className={s.CaptchaControl}>
        <span className={s.CaptchaSpan}>Write captcha</span>
        <img className={s.CaptchaImg} src={props.CaptchaImg} alt={''}/>
        {FieldCreator('captcha',[], InputField,'Enter captcha',{className: s.CaptchaInput})}
    </div>
}

export default CaptchaControl