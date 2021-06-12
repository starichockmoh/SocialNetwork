import React from "react";
import {NavLink} from "react-router-dom";
import {Comment, Tooltip, Avatar} from "antd";
import 'antd/dist/antd.css';
import moment from "moment";
import styles from "./MessagesPage.module.css";
import {MessagesType} from "../../../Types/Types";

type PropsType = {
    Message: MessagesType
    FriendAvatar: string
}

const Message: React.FC<PropsType> = ({Message,FriendAvatar}) => {
    const ProfileUrl: string = '/profile/' + Message.senderId
    return <div className={styles.Message}>
        <Comment
            avatar={
                <Avatar src={FriendAvatar}/>
            }
            author={<NavLink to={ProfileUrl}><span className={styles.MessagesAuthor}>{Message.senderName}</span></NavLink>}
            content={
                <p className={styles.MessagesBody}>
                    {Message.body}
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{Message.addedAt}</span>
                </Tooltip>
            }
        />
    </div>
}

export default Message