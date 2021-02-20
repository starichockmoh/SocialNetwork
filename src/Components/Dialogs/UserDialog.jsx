import React from "react";
import Message from "./Message/Message";

const UserDialog = (props) => {
    let MessagesElements = null
    if (props.MessagesData){
        MessagesElements = props.MessagesData.map(message => <Message DeleteMessage = {props.DeleteMessage}
                                                                      userId = {props.UserId}
                                                                      isImSender = {props.CurrentUserId === message.senderId}
                                                                      body = {message.body}
                                                                      key={message.id} v
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