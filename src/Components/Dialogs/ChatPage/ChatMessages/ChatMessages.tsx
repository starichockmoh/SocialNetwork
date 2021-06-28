import React, {useEffect, useState} from "react";
import styles from "./ChatMessages.module.css";
import { Avatar, Comment } from "antd";
import {NavLink} from "react-router-dom";



export const ChatMessages: React.FC = () => {
    const [MessagesArray, SetMessagesArray] = useState<ChatMessageType[]>([])
    useEffect(() => {
        const WSChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        WSChannel.addEventListener('message',((ev: MessageEvent) => {
            let NewMessages = JSON.parse(ev.data)
            SetMessagesArray((prevMessages) => [...prevMessages, ...NewMessages])
        }))
    }, [])

    return <div className={styles.ChatMessages}>
        {MessagesArray.map((m, index) => <ChatMessage userId={m.userId} photo={m.photo} userName={m.userName} message={m.message} key={index}/>)}
    </div>
}

export type ChatMessageType = {
    photo: string
    userName: string
    message: string
    userId: number
}

const ChatMessage: React.FC<ChatMessageType> = ({photo, userName, message,userId}) => {
    let ProfileLink = `/profile/${userId}`
    return <div className={styles.Message}>
        <Comment
            avatar={
                <NavLink to={ProfileLink}> <Avatar src={photo}/> </NavLink>
            }
            author={<NavLink to={''}><span
                className={styles.MessagesAuthor}>{userName}</span></NavLink>}
            content={
                <p>
                    {message}
                </p>
            }
        />
        <hr/>
    </div>
}