import s from "../Message/Message.module.css";
import React, {useState} from "react";
import {EditOutlined} from '@ant-design/icons';
import {Button} from "antd";
import {DialogsType, MessagesType} from "../../../Types/Types";

type PropsType = {
    photo: string | null
    addedAt: string
    id: string
    viewed: boolean
    body: string
    isImSender: boolean
    userId: string

    DeleteMessage: (messageId:string, userID:string) => void
}

const Message: React.FC<PropsType> = React.memo(props => {
    let [ShowMenuMode, setShowMenuMode] = useState(false)
    let [DeliteMode, setDeliteMode] = useState(false)
    let activateDeliteModeToggle = () => {
        setDeliteMode(!DeliteMode)
    }
    const onDeleteMessage = () => {
        props.DeleteMessage(props.id, props.userId)
    }
    return <div className={props.isImSender ? s.MessageIm : s.MessageFriend}
                onMouseMove={() => {
                    setShowMenuMode(true)
                }}
                onMouseLeave={() => {
                    setShowMenuMode(false)
                }}>
        <div className={props.viewed ? s.MessageText : s.MessageTextNotViewed}>
            {!props.isImSender && props.photo && <img className={s.MessageUserPhoto} src={props.photo} alt={''}/>}
            <span>
                {props.body}
                {ShowMenuMode && <Button icon={<EditOutlined/>} onClick={activateDeliteModeToggle}/>}
            </span>
            <Button onClick={onDeleteMessage} className={DeliteMode ? s.Button : s.HiddenButton}>Delete</Button>
        </div>
    </div>
})

export default Message