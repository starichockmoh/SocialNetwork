import React, {useState} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageInputReduxForm from "./DialogsForm";
import UserDialog from "./UserDialog";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import FriendBar from "./FriendBarForDialogs/FriendBar";
import {DialogsType, MessagesType, UserType} from "../../Types/Types";

type PropsType = {
    DialogsData: Array<DialogsType> | null
    UserId: string
    MessagesData: Array<MessagesType> | null
    CurrentUserId: number | null
    Friends: Array<UserType>

    DeleteMessage: (messageId:string, userID:string) => void
    ShowMessages: (id: string) => void
    AddNewDialog: (id: number) => void
    SendMessage: (userid: string,message: string) => void



}

const Dialogs: React.FC<PropsType> = (props) => {
    let [isShowDialogsMenu, setIsShowDialogsMenu] = useState(true)
    let DialogsElements = null
    let UserInfo: Array<DialogsType> | null = null
    if (props.DialogsData) {
        if (props.UserId) {
            UserInfo = props.DialogsData.filter(d => d.id == Number(props.UserId))
        }
        DialogsElements = props.DialogsData.map(dialog => <DialogItem
            UserId={props.UserId} key={dialog.id}
            photo={dialog.photos.large} name={dialog.userName}
            id={dialog.id}/>);
    }
    const addMessage = (dataForm:{messageInput:string}) => {
        props.SendMessage(props.UserId, dataForm.messageInput)
    }
    return (
        <div className={isShowDialogsMenu? s.Dialogs: s.HiddenDialogs}>
            {isShowDialogsMenu? <div className={s.DialogsItem}>
                <Button onClick={() => {setIsShowDialogsMenu(false)}}> Hide Dialogs</Button>
                {DialogsElements}
            </div>: <Button className={s.HideButton} onClick={() => {setIsShowDialogsMenu(true)}}> Show Dialogs </Button>}

            <div className={s.Messages}>
                <div><UserDialog UserInfo={UserInfo? UserInfo[0]: null} DeleteMessage={props.DeleteMessage}
                                 UserId={props.UserId}
                                 CurrentUserId={props.CurrentUserId} MessagesData={props.MessagesData}/></div>
            </div>
            <div className={s.FriendBar}>
                <FriendBar AddNewDialog = {props.AddNewDialog} FriendsArray = {props.Friends}/>
            </div>
            <div className={s.NewMessage}>
                <MessageInputReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}


export default Dialogs