import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageInputReduxForm from "./DialogsForm";

const Dialogs = (props) => {
    let DialogsElements = props.DialogsState.DialogsData.map(d => <DialogItem key = {d.id} Img={d.Img} Name={d.Name} id={d.id} OnOf={d.OnOf}/>);
    let MyMessagesElements = props.DialogsState.MessagesData.MyMessages.map(m => <Message key = {m.id} message={m.message} id={m.id}/>);

    let addMessage = (dataForm) => {
        props.AddMessage(dataForm.messageInput)
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                <div>{MyMessagesElements}</div>
                <div align="right">
                </div>
                <div align="right" className={s.NewMessage}>
                    <MessageInputReduxForm onSubmit = {addMessage}/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs