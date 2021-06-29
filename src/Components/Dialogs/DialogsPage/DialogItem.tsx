import React from "react";
import {NavLink} from "react-router-dom";
import {Avatar, Badge, Comment, Tooltip} from "antd";
import styles from "./DialogsPage.module.css"
import moment from "moment";
import {DialogsType} from "../../../Types/Types";
import {MessageOutlined} from "@ant-design/icons";

type PropsType = {
    Dialog: DialogsType
}

const DialogItem: React.FC<PropsType> = ({Dialog}) => {
    const UserDialogUrl: string = '/dialogs/' + Dialog.id
    const ProfileUrl: string = '/profile/' + Dialog.id
    return <div className={styles.DialogItem}>
        <Comment
            author={<NavLink to={ProfileUrl}>{Dialog.userName}</NavLink>}
            avatar={
                <NavLink to={ProfileUrl}>
                    <Avatar
                        src={Dialog.photos.large}
                    />
                </NavLink>
            }
            content={
                <NavLink to={UserDialogUrl}>
                <div className={styles.Content}>
                    <p className = {styles.DialogBody}>
                        <Badge  style={{ backgroundColor: Dialog.newMessagesCount === 0? 'blue': 'red'}} showZero count={Dialog.newMessagesCount}><MessageOutlined/> &nbsp;</Badge>

                    </p>
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span className={styles.Date}>{Dialog.lastDialogActivityDate.substring(0, 10)}</span>
                    </Tooltip>
                </div>
               </NavLink>
            }
        />
    </div>
}

export default DialogItem