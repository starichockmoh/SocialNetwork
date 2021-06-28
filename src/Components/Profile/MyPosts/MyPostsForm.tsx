import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {SpecialFormCreator, TextareaField} from "../../Common/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {FieldCreator} from "../../Common/FormsControls/FieldCreator";
import 'antd/dist/antd.css';
import {Button} from 'antd';

const maxLength30 =  maxLengthCreator(20)
const SpecialTextArea = SpecialFormCreator('textarea')


const PostInputForm: React.FC<InjectedFormProps<{postInput: string}>> = (props) => {
    if (props.submitSucceeded){
        props.reset()
    }
    return <form onSubmit={props.handleSubmit}>
        <div style={{width: 800}}>
            {FieldCreator('postInput', [required,maxLength30], TextareaField, 'Write new post', null)}
        </div>

        <Button style={{marginTop: 20}} htmlType={'submit'}>Add post</Button>
    </form>

}
const PostInputReduxForm = reduxForm<{postInput: string}>({form: 'postInput'})(PostInputForm)
export default PostInputReduxForm