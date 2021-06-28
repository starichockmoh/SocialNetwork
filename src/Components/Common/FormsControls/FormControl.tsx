import React from "react";
import styles from './FormControl.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {Input} from "antd";
import TextArea from "antd/es/input/TextArea";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <span>
                {children}
            </span>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const InputField: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><Input {...input} {...restProps}/></FormControl>
}
export const TextareaField: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><TextArea {...input} {...restProps} allowClear/></FormControl>
}







export const SpecialFormCreator = (Component: string) => ({input, meta, ...props}:any) => {
    const hasError = meta.error && meta.touched
    return <div className={styles.formControl + ' ' + (hasError?styles.error:'')}>
        <div>
            <Component {...input} {...props}/>
        </div>
        { hasError && <span>{meta.error}</span>}
    </div>
}

export type SpecialFormType = ReturnType<typeof SpecialFormCreator>


