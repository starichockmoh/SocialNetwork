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

const ProfileInfoInputForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {FieldCreator('fullName', [required,maxLength100], SpecialInput, 'Write your name', {})}
        {FieldCreator('aboutMe', [required], SpecialTextArea, 'About you', null)}
        {FieldCreator('lookingForAJob',null, SpecialInput,null,{type: 'checkbox'},'Looking for a job:')}
        {FieldCreator('lookingForAJobDescription', [required], SpecialTextArea, 'Descriptions for looking', null)}
        Your contacts:
        <hr></hr>
        {Object.keys(props.initialValues.contacts).map(key => <ContactsProfileField key = {key} name= {key}/>)}
        <button> Save </button>
        <Button type={'button'} onClick={props.deactivateMode}> Escape </Button>
        {props.error && <div className={s.someoneError}>
            <span>{props.error}</span>
        </div>}
    </form>
}

const ContactsProfileField = ({name}) => {
    return <div>
        {FieldCreator('contacts.' + name, [maxLength100],SpecialInput,name, null)}
    </div>
}


const ProfileInfoInputReduxForm = reduxForm({form: 'ProfileInfoInput'})(ProfileInfoInputForm)

export default ProfileInfoInputReduxForm