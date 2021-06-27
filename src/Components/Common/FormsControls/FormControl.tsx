import React from "react";
import styles from './FormControl.module.css'

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


