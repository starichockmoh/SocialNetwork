import {Field} from "redux-form";
import React from "react";

export const FieldCreator = (name, validate, component, placeholder, props, text = '') => {
    return <div>
        <Field name={name} validate={validate} component={component} placeholder={placeholder} {...props}/>{text}
    </div>
}
