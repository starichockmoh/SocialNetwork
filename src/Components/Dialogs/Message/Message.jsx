import s from "../Message/Message.module.css";
import React, {useState} from "react";
import {DeleteMessage} from "../../../Redux/Reducers/DialogsReducer";

const Message = React.memo(props => {
    let [DeliteMode, setDeliteMode] = useState(false)
    let activateDeliteModeToggle = () => {
        setDeliteMode(!DeliteMode)
    }
    const onDeleteMessage = () => {
        props.DeleteMessage(props.id, props.userId)
    }
    return <div className={props.isImSender ? s.MessageIm : s.MessageFriend}>
             <div className={props.viewed?s.MessageText:s.MessageTextNotViewed}>
                 <img src={!props.isImSender && props.photo && props.photo}/>
                 <span>{props.body} <button onClick={activateDeliteModeToggle}>...</button></span>
                 <button onClick={onDeleteMessage} className={DeliteMode?s.Button:s.HiddenButton}>Delete</button>
        </div>
        <hr className={s.line}/>
    </div>
})

export default Message