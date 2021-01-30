
import {reduxForm} from "redux-form";
import React from "react";
import {SpecialFormCreator} from "../../Common/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {FieldCreator} from "../../Common/FormsControls/FieldCreator";

const maxLength30 =  maxLengthCreator(20)
const SpecialTextArea = SpecialFormCreator('textarea')

const PostInputForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {FieldCreator('postInput', [required,maxLength30], SpecialTextArea, 'Write new post', null)}
        <button>Add new post</button>
    </form>

}
const PostInputReduxForm = reduxForm({form: 'postInput'})(PostInputForm)
export default PostInputReduxForm