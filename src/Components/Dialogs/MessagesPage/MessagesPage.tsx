import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {SendMessage, ShowMessages} from "../../../Redux/Reducers/DialogsReducer";
import {AppStateType} from "../../../Redux/ReduxStore";
import styles from "./MessagesPage.module.css"
import MyMessage from "./MyMessage";
import Message from "./Message";
import {getProfile} from "../../../Redux/Reducers/ProfileReducer";
import {Button, Form} from "antd";
import TextArea from "antd/es/input/TextArea";


type ParamsType = {
    dialogId: string
}

const MessagesPage: React.FC = () => {
    const dispatch = useDispatch()
    const {dialogId} = useParams() as ParamsType
    useEffect(() => {
        dispatch(ShowMessages(dialogId))
        dispatch(getProfile(dialogId))
    }, [dialogId, dispatch])
    const FriendAvatar = useSelector((state: AppStateType) => state.ProfilePage.ProfileInfo?.photos.large)
    const FriendId = useSelector((state: AppStateType) => state.ProfilePage.ProfileInfo?.userId)
    const CurrentUserId = useSelector((state: AppStateType) => state.Auth.CurrentUserId)
    const MessagesData = useSelector((state: AppStateType) => state.DialogsPage.MessagesData)
    const MessagesComponentsArray = MessagesData?.map(m => {
        if (CurrentUserId === m.senderId){
            return <MyMessage Message={m} key={m.id}/>
        }
        else {
            return <Message Message={m} FriendAvatar={FriendAvatar? FriendAvatar : ''}/>
        }

    })
    const onFinish = (values: {send_message_textarea: string}) => {
        dispatch(SendMessage(String(FriendId), values.send_message_textarea))
    }
    return <div>
        {MessagesComponentsArray}
        <Form name = "send_message_form" onFinish={onFinish}>
            <Form.Item name = "send_message_textarea">
                <TextArea/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Send</Button>
            </Form.Item>
            <Form.Item>
                <Button htmlType="reset">Reset</Button>
            </Form.Item>
        </Form>
    </div>
}

export default MessagesPage



