import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {InputField, TextareaField} from "../../Common/FormsControls/FormControl";
import {FieldCreator} from "../../Common/FormsControls/FieldCreator";
import {reduxForm} from "redux-form";
import React from "react";
import 'antd/dist/antd.css';
import {Button, PageHeader} from 'antd';
import s from './ProfileInfo.module.css'
import {CheckOutlined} from "@ant-design/icons";


let maxLength100 = maxLengthCreator(100)
type PropsType = {
    handleSubmit: any
    error: string
    initialValues: any

}
const ProfileInfoInputForm: React.FC<PropsType> = ({handleSubmit, error, initialValues}) => {
    return <div className={s.AdInfo}>
    <form onSubmit={handleSubmit}>
        <div className={s.ProfileForm}>
            <div>
                <PageHeader title={'Your contacts'}/>
                {Object.keys(initialValues.contacts).map(key => <ContactsProfileField key={key} name={key}/>)}
            </div>
            <div>
                <PageHeader title={'Personal Info'}/>
                <h1>User Name</h1>
                {FieldCreator('fullName', [required, maxLength100], InputField, 'Write your name', {})}
                <h1>Some About Me</h1>
                {FieldCreator('aboutMe', [required], TextareaField, 'About you', null)}
                <h1>Are you looking job?</h1>
                {FieldCreator('lookingForAJob', null, 'input', '', {type: 'checkbox'})}
                <h1>Your skills</h1>
                {FieldCreator('lookingForAJobDescription', [required], TextareaField, 'Descriptions for looking', null)}
                <Button icon={<CheckOutlined />} style={{marginTop: 20}} htmlType={"submit"}> Save </Button>
                {error &&
                <div className={s.someoneError}>
                    <span>{error}</span>
                </div>}
            </div>
        </div>
    </form>
    </div>

}

type ContactsProfileFieldPropsType = {
    name: string
}
const ContactsProfileField: React.FC<ContactsProfileFieldPropsType> = ({name}) => {
    return <div>
        <h1>{name}</h1>
        {FieldCreator('contacts.' + name, [maxLength100], InputField, name, null)}
    </div>
}


const ProfileInfoInputReduxForm = reduxForm({form: 'ProfileInfoInput'})(ProfileInfoInputForm)

export default ProfileInfoInputReduxForm