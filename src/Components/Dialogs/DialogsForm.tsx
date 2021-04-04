import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {SpecialFormCreator} from "../Common/FormsControls/FormControl";
import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {FieldCreator} from "../Common/FormsControls/FieldCreator";
import 'antd/dist/antd.css';
import {Button} from 'antd';


let maxLength200 = maxLengthCreator(200)
const SpecialTextArea = SpecialFormCreator('textarea')


const MessageInputForm: React.FC<InjectedFormProps<{messageInput:string}>> = (props) => {
    if (props.submitSucceeded){
        props.reset()
    }
    return <form onSubmit={props.handleSubmit}>
        {FieldCreator('messageInput', [required,maxLength200], SpecialTextArea, 'Write message', null)}
        <Button htmlType={"submit"}> Send </Button>
    </form>
}

const MessageInputReduxForm = reduxForm<{messageInput:string}>({form: 'messageInputer'})(MessageInputForm)

export default MessageInputReduxForm