import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {SpecialFormCreator} from "../../Common/FormsControls/FormControl";
import {FieldCreator} from "../../Common/FormsControls/FieldCreator";
import {reduxForm} from "redux-form";
import React from "react";

let maxLength20 = maxLengthCreator(20)
const SpecialTextArea = SpecialFormCreator('textarea')
const SpecialInput = SpecialFormCreator('input')

const ProfileInfoInputForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {FieldCreator('ProfileNameInput', [required,maxLength20], SpecialInput, 'Write your name', {})}
        {FieldCreator('ProfileAboutMeInput', [required,maxLength20], SpecialTextArea, 'About you', null)}
        {FieldCreator('ProfileLookingForAJobInput',null, SpecialInput,null,{type: 'checkbox'},'Looking for a job:')}
        {FieldCreator('ProfileLookingForAJobDescriptionInput', [required,maxLength20], SpecialTextArea, 'Descriptions for looking', null)}
        Your contacts:
        <hr></hr>
        {FieldCreator('ProfileContactsFacebookInput', [maxLength20], SpecialInput, 'Facebook', null)}
        {FieldCreator('ProfileContactsVkInput', [maxLength20], SpecialInput, 'Vk', null)}
        {FieldCreator('ProfileContactsGithubInput', [maxLength20], SpecialInput, 'Git', null)}
        {FieldCreator('ProfileContactsInstagramInput', [maxLength20], SpecialInput, 'Instagram', null)}
        {FieldCreator('ProfileContactsTwitterInput', [maxLength20], SpecialInput, 'Twitter', null)}
        {FieldCreator('ProfileContactsWebsiteInput', [maxLength20], SpecialInput, 'Website', null)}
        {FieldCreator('ProfileContactsYoutubeInput', [maxLength20], SpecialInput, 'Youtube', null)}
        {FieldCreator('ProfileContactsMainInput', [maxLength20], SpecialInput, 'Main', null)}
        <button>add</button>
    </form>

}

const ProfileInfoInputReduxForm = reduxForm({form: 'messageInput'})(ProfileInfoInputForm)

export default ProfileInfoInputReduxForm