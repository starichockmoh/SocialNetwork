import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {SpecialFormCreator} from "../../Common/FormsControls/FormControl";
import {FieldCreator} from "../../Common/FormsControls/FieldCreator";
import {reduxForm} from "redux-form";
import React from "react";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import s from "../../Common/FormsControls/FormControl.module.css";


let maxLength100 = maxLengthCreator(100)
const SpecialTextArea = SpecialFormCreator('textarea')
const SpecialInput = SpecialFormCreator('input')


type PropsType = {
    handleSubmit: any
    error: string
    initialValues: any

}
const ProfileInfoInputForm: React.FC<PropsType> = ({handleSubmit,error, initialValues }) => {
    return <form onSubmit={handleSubmit}>
        {FieldCreator('fullName', [required,maxLength100], SpecialInput, 'Write your name', {})}
        {FieldCreator('aboutMe', [required], SpecialTextArea, 'About you', null)}
        {FieldCreator('lookingForAJob',null, SpecialInput,'',{type: 'checkbox'},'Looking for a job:')}
        {FieldCreator('lookingForAJobDescription', [required], SpecialTextArea, 'Descriptions for looking', null)}
        Your contacts:

        {Object.keys(initialValues.contacts).map(key => <ContactsProfileField key = {key} name= {key}/>)}
        <Button htmlType = {"submit" }> Save </Button>

        {error && <div className={s.someoneError}>
            <span>{error}</span>
        </div>}
    </form>
}

type ContactsProfileFieldPropsType = {
    name: string
}
const ContactsProfileField: React.FC<ContactsProfileFieldPropsType> = ({name}) => {
    return <div>
        {FieldCreator('contacts.' + name, [maxLength100],SpecialInput,name, null)}
    </div>
}


const ProfileInfoInputReduxForm = reduxForm({form: 'ProfileInfoInput'})(ProfileInfoInputForm)

export default ProfileInfoInputReduxForm