import React, {useEffect, useRef, useState} from "react";
import styles from "./ChatMessages.module.css";
import {Avatar, Checkbox, Comment} from "antd";
import {NavLink} from "react-router-dom";
import {ChatMessageType} from "../../../../Types/Types";
import {ChatMessageTypeWithId} from "../../../../Redux/Reducers/ChatReducer";


export const ChatMessages: React.FC<{ MessagesArray: Array<ChatMessageTypeWithId> }> = ({MessagesArray}) => {
    const [IsAutoScroll, SetAutoScroll] = useState(true)
    const MessagesAnchor = useRef<HTMLDivElement>(null)
    const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const elem = e.currentTarget
        if (Math.abs((elem.scrollHeight - elem.scrollTop) - elem.clientHeight) <= 20) {
            !IsAutoScroll && SetAutoScroll(true)
        } else IsAutoScroll && SetAutoScroll(false)
    }
    useEffect(() => {
        if (IsAutoScroll) MessagesAnchor.current?.scrollIntoView({behavior: 'smooth'})
    }, [MessagesArray, IsAutoScroll])
    debugger

    return <div>
        <div className={styles.ChatMessages} onScroll={onScroll}>
            {MessagesArray.map((m) => <ChatMessage userId={m.userId}
                                                   photo={m.photo} userName={m.userName} message={m.message}
                                                   key={m.id}/>)}
            <div ref={MessagesAnchor}/>
        </div>
    </div>
}


const ChatMessage: React.FC<ChatMessageType> = React.memo(({photo, userName, message, userId}) => {
    let ProfileLink = `/profile/${userId}`
    return <div className={styles.ChatMessage}>
        <Comment
            avatar={<NavLink to={ProfileLink}> <Avatar src={photo}/> </NavLink>}
            author={<NavLink to={''}><span>{userName}</span></NavLink>}
            content={<p>{message}</p>}
        />
    </div>
})