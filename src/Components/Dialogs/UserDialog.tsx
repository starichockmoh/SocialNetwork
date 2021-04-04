import React from "react";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../Types/Types";

type PropsType = {
    UserInfo: DialogsType | null
    MessagesData: Array<MessagesType> | null
    CurrentUserId: number | null
    UserId: string

    DeleteMessage: (messageId:string, userID:string) => void
}

const UserDialog: React.FC<PropsType> = (props) => {
    let MessagesElements = null
    if (props.MessagesData){
        MessagesElements = props.MessagesData.map(message => <Message DeleteMessage = {props.DeleteMessage}
                                                                      userId = {props.UserId}
                                                                      isImSender = {props.CurrentUserId === message.senderId}
                                                                      body = {message.body}
                                                                      key={message.id}
                                                                      viewed = {message.viewed}
                                                                      id = {message.id}
                                                                      addedAt = {message.addedAt}
                                                                      photo = {props.UserInfo && props.UserInfo.photos.large}

        />)
    }
    return <div>
        {MessagesElements}
    </div>
}



export default UserDialog