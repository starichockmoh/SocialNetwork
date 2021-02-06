import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {SpecialFormCreator} from "../Common/FormsControls/FormControl";
import {reduxForm} from "redux-form";
import React from "react";
import {FieldCreator} from "../Common/FormsControls/FieldCreator";

let maxLength20 = maxLengthCreator(20)
const SpecialTextArea = SpecialFormCreator('textarea')

const MessageInputForm = (props) => {
    if (props.submitSucceeded){
        props.reset()
    }
    return <form onSubmit={props.handleSubmit}>
        {FieldCreator('messageInput', [required,maxLength20], SpecialTextArea, 'Write message', null)}
        <button>add</button>
    </form>
}

const MessageInputReduxForm = reduxForm({form: 'messageInputer'})(MessageInputForm)

export default MessageInputReduxForm