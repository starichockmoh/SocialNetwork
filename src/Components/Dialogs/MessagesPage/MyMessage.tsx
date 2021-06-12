import React from "react";
import styles from "./MessagesPage.module.css";
import {Comment, Tooltip} from "antd";
import moment from "moment";
import {MessagesType} from "../../../Types/Types";


type PropsType = {
    Message: MessagesType
}

const MyMessage: React.FC<PropsType> = ({Message}) => {
    return <div className={styles.MyMessage}>
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span className = {styles.MyMessageDate}>{Message.addedAt}</span>
        </Tooltip>
        <Comment
            content={
                <p className={styles.MessagesBody}>
                    {Message.body}
                </p>
            }
        />

    </div>
}

export default MyMessage