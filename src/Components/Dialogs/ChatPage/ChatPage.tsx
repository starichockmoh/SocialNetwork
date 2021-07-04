import React, {useEffect, useState} from "react";
import {ChatMessages} from "./ChatMessages/ChatMessages";
import {PageHeader} from "antd";
import {CommentOutlined} from "@ant-design/icons";
import { ChatInput } from "./ChatInput/ChatInput";
import Preloader from "../../Common/Preloader/Preloader";
import {ChatMessageType, NullableType} from "../../../Types/Types";
import {cleanup} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";
import {
    SendChatMessage,
    StartMessagesListening,
    StartToControlStatus,
    StopMessagesListening, StopToControlStatus
} from "../../../Redux/Reducers/ChatReducer";
import {AppStateType} from "../../../Redux/ReduxStore";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";



const ChatPage: React.FC = () => {
    return <>
        <PageHeader title={<>Common chat with WebSocket!! <CommentOutlined/></>}/>
        <Chat/>
    </>
}


const Chat = () => {
    const dispatch = useDispatch()
    const MessagesArray = useSelector(((state: AppStateType) => state.Chat.ChatMessages))
    const WSStatus = useSelector(((state: AppStateType) => state.Chat.WSStatus))
    useEffect(() => {
        dispatch(StartMessagesListening())
        dispatch(StartToControlStatus())
        return () => {
            dispatch(StopMessagesListening())
            dispatch(StopToControlStatus())
        }
    }, [dispatch])

    switch (WSStatus){
        case 'CLOSED':
            return <div style={{color: "red"}}>
                <Preloader/>
                <b>Try to connect</b>
            </div>
        case 'OPENED':
            return <>
                <ChatMessages MessagesArray={MessagesArray}/>
                <ChatInput WSStatus={WSStatus}/>
            </>
        case 'ERROR':
            return <div style={{color: "red"}}>
                SOME ERROR
                <p>Please refresh the page</p>
            </div>
        case 'PENDING':
            return <Preloader/>
    }
}

export default withAuthRedirect(ChatPage)