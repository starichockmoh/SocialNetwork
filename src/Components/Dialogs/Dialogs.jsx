import React, {useState} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageInputReduxForm from "./DialogsForm";
import UserDialog from "./UserDialog";


const Dialogs = (props) => {
    let [isShowDialogsMenu, setIsShowDialogsMenu] = useState(true)
    let DialogsElements = null
    let UserInfo = null
    if (props.DialogsData) {
        if (props.UserId) {
            UserInfo = props.DialogsData.filter(d => d.id == props.UserId)
        }
        DialogsElements = props.DialogsData.map(dialog => <DialogItem
            UserId={props.UserId} key={dialog.id}
            photo={dialog.photos.large} name={dialog.userName}
            id={dialog.id}/>);
    }
    const addMessage = (dataForm) => {
        props.SendMessage(props.UserId, dataForm.messageInput)
    }


    return (
        <div className={isShowDialogsMenu? s.Dialogs: s.HiddenDialogs}>
            {isShowDialogsMenu? <div className={s.DialogsItem}>
                <button onClick={() => {setIsShowDialogsMenu(false)}}> Hide Dialogs</button>
                {DialogsElements}
            </div>: <button className={s.HideButton} onClick={() => {setIsShowDialogsMenu(true)}}> Show Dialogs </button>}

            <div className={s.Messages}>
                <div><UserDialog UserInfo={UserInfo && UserInfo[0]} DeleteMessage={props.DeleteMessage}
                                 UserId={props.UserId}
                                 CurrentUserId={props.CurrentUserId} MessagesData={props.MessagesData}/></div>
            </div>
            <div className={s.NewMessage}>
                <MessageInputReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}


export default Dialogs