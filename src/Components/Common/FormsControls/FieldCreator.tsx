import {Field} from "redux-form";
import React from "react";
import { ValidatorsType } from "../../../Utils/Validators/validators";
import {SpecialFormType} from "./FormControl";

export const FieldCreator = (name:string, validate: ValidatorsType, component: SpecialFormType | string, placeholder:string, props:any, text = '') => {
    return <div>
        {text}
        <Field name={name} validate={validate} component={component} placeholder={placeholder} {...props}/>
    </div>
}
