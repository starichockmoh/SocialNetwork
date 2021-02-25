import s from "../Message/Message.module.css";
import React, {useState} from "react";
import {EditOutlined} from '@ant-design/icons';
import {Button} from "antd";

const Message = React.memo(props => {
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
            <img src={!props.isImSender && props.photo && props.photo}/>
            <span>
                {props.body}
                {ShowMenuMode && <Button icon={<EditOutlined/>} onClick={activateDeliteModeToggle}/>}
            </span>
            <Button onClick={onDeleteMessage} className={DeliteMode ? s.Button : s.HiddenButton}>Delete</Button>
        </div>
    </div>
})

export default Message