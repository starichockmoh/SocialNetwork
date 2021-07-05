import React, {useState} from "react";
import styles from "./MessagesPage.module.css";
import {Button, Comment, Tooltip} from "antd";
import moment from "moment";
import {MessagesType} from "../../../Types/Types";
import {EditOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {ActivateSagasActions} from "../../../Redux/Sagas/DialogsSagas";



type PropsType = {
    Message: MessagesType
}

const MyMessage: React.FC<PropsType> = ({Message}) => {
    let [DeleteMode, setDeleteMode] = useState(false)
    const dispatch = useDispatch()
    const DeleteMessageF = () => {
        dispatch( ActivateSagasActions.DeleteMessageAC(Message.id, String(Message.recipientId), '1'))
    }
    return <div className={ Message.viewed? styles.MyMessage:styles.NotViewed}>
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span className = {styles.MyMessageDate}>{Message.addedAt.substring(0, 10)}</span>
        </Tooltip>
        <Comment
            content={
                <p className={styles.MessagesBody} onMouseMove={() => setDeleteMode(true)}
                   onMouseLeave={() => setDeleteMode(false)}>
                    {Message.body}
                    {DeleteMode && <Button className = {styles.DeleteButton}
                                           icon={<EditOutlined/>} onClick={DeleteMessageF}>Delete</Button>}
                </p>
            }
        />

    </div>
}

export default MyMessage